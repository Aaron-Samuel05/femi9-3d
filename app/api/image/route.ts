import { NextRequest, NextResponse } from 'next/server';

const ALLOWED_HOSTS = new Set([
  'femi9.in',
  'raw.githubusercontent.com',
  'cdn.hollywoodreporterindia.com',
  'images.yourstory.com',
  'content.tupaki.com',
  'd1oifqlqvwd9ay.cloudfront.net',
]);

export async function GET(request: NextRequest) {
  const raw = request.nextUrl.searchParams.get('url');
  if (!raw) return new NextResponse('Missing image URL', { status: 400 });

  let url: URL;
  try {
    url = new URL(raw);
  } catch {
    return new NextResponse('Invalid image URL', { status: 400 });
  }

  if (url.protocol !== 'https:' || !ALLOWED_HOSTS.has(url.hostname)) {
    return new NextResponse('Image host not allowed', { status: 403 });
  }

  try {
    const upstream = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 Femi9/1.0' },
      next: { revalidate: 86400 },
    });

    if (!upstream.ok) {
      return new NextResponse('Upstream image unavailable', { status: 502 });
    }

    const contentType = upstream.headers.get('content-type') || 'image/webp';
    if (!contentType.startsWith('image/')) {
      return new NextResponse('Upstream resource is not an image', { status: 415 });
    }

    return new NextResponse(upstream.body, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=86400, s-maxage=604800, stale-while-revalidate=86400',
      },
    });
  } catch {
    return new NextResponse('Image fetch failed', { status: 502 });
  }
}
