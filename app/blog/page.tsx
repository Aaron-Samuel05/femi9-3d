'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { blogPosts } from '@/lib/data';

const images=[
  'https://content.tupaki.com/tupaki/feeds/2026/02/17/1108057-snapinstato44967138016415203666947006884317195019485418n.webp',
  'https://femi9.in/uploads/Product/1734093124_3LqO07PSLz.webp',
  'https://images.yourstory.com/cs/18/f4/e080f008d911e9bb473d9d98ed1e05/5-1709882750938.jpg',
  'https://cdn.hollywoodreporterindia.com/editor-images/2025-02-17T10%3A23%3A04.304Z-Nayanthara.jpg',
];

export default function Blog(){return <>
<section className="page-hero journal-hero"><span className="micro">FEMI9 / JOURNAL</span><div className="journal-hero-grid"><div><h1 className="display">PERIOD HEALTH.<br/><i>REAL TALK.</i></h1><p>Practical period-care education, stories and everyday wellbeing content from the current Femi9 journal.</p></div><img src={images[0]} alt="Femi9 packaging in an everyday lifestyle setting"/></div></section>
<section className="section"><div className="blog-grid blog-grid-image">{blogPosts.map((p,i)=><Link className="blog-card blog-card-image" href={`/blog/${p.slug}`} key={p.slug}><div className="blog-thumb"><img src={images[i%images.length]} alt="Femi9 editorial photography"/></div><div className="blog-copy"><span>{p.category} · {p.date}</span><h2>{p.title}</h2><p>Explore this Femi9 journal topic.</p></div><ArrowUpRight/></Link>)}</div></section>
<style jsx global>{`
.journal-hero{min-height:78vh}.journal-hero-grid{display:grid;grid-template-columns:1fr .55fr;gap:7vw;align-items:end;margin-top:35px}.journal-hero-grid>img{width:100%;height:500px;object-fit:cover;border-radius:32px;box-shadow:0 30px 90px rgba(70,50,6,.18)}.blog-grid-image{grid-template-columns:repeat(2,1fr);gap:18px;background:transparent}.blog-card-image{padding:0;min-height:0;background:#fffdf3;border:1px solid rgba(39,35,22,.1);border-radius:28px;overflow:hidden;transform:none}.blog-card-image:hover{transform:translateY(-6px)}.blog-thumb{height:310px;overflow:hidden;background:#ead37b}.blog-thumb img{width:100%;height:100%;object-fit:cover;transition:transform .7s}.blog-card-image:hover .blog-thumb img{transform:scale(1.04)}.blog-copy{padding:28px 30px 10px}.blog-copy h2{margin-top:14px;font-size:30px;line-height:1.02}.blog-card-image>svg{margin:0 30px 25px auto}
@media(max-width:900px){.journal-hero-grid{grid-template-columns:1fr}.journal-hero-grid>img{height:430px}.blog-grid-image{grid-template-columns:1fr}}
`}</style>
</>}
