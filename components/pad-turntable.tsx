'use client';

import { useState } from 'react';

const DEFAULT_IMAGE = 'https://femi9.in/uploads/Product/1773300828_jFWVIMppz1.webp';

export function PadTurntable({ image = DEFAULT_IMAGE, alt = 'Femi9 sanitary pad packaging', className = '' }: { image?: string; alt?: string; className?: string }) {
  const [src, setSrc] = useState(image);

  return (
    <div className={`pad-turntable package-view ${className}`} role="img" aria-label={alt}>
      <div className="pad-turntable-glow" />
      <div className="pad-turntable-orbit orbit-one" />
      <div className="pad-turntable-orbit orbit-two" />
      <div className="package-image-wrap">
        <img className="pad-turntable-image package-image" src={src} alt={alt} draggable={false} onError={() => setSrc(DEFAULT_IMAGE)} />
      </div>
      <div className="pad-turntable-caption">
        <span>OFFICIAL FEMI9 PACKAGING</span>
        <span>PRODUCT PHOTOGRAPHY</span>
      </div>
      <style jsx global>{`
        .package-view{position:relative;display:grid;place-items:center;overflow:hidden;isolation:isolate}
        .package-view .package-image-wrap{position:relative;z-index:2;width:min(78%,560px);height:82%;display:grid;place-items:center;transition:transform .7s cubic-bezier(.2,.8,.2,1),filter .7s ease}
        .package-view:hover .package-image-wrap{transform:translateY(-7px) scale(1.015)}
        .package-view .package-image{display:block;width:100%;height:100%;object-fit:contain;object-position:center;filter:drop-shadow(0 30px 34px rgba(60,44,5,.2));user-select:none;-webkit-user-drag:none}
        .package-view .pad-turntable-glow{position:absolute;z-index:0;width:52%;height:42%;border-radius:50%;background:rgba(255,248,203,.7);filter:blur(50px);transform:translateY(12%)}
        .package-view .pad-turntable-orbit{position:absolute;z-index:0;border:1px solid rgba(69,57,17,.14);border-radius:50%;pointer-events:none}
        .package-view .orbit-one{width:72%;height:58%;transform:rotate(-18deg)}
        .package-view .orbit-two{width:54%;height:76%;transform:rotate(21deg)}
        .package-view .pad-turntable-caption{position:absolute;z-index:3;left:50%;bottom:28px;transform:translateX(-50%);width:max-content;display:flex;gap:28px;font-size:8px;letter-spacing:.16em;font-weight:700;color:rgba(42,38,25,.7)}
        .package-view .pad-turntable-caption span:last-child{opacity:.58}
        .conversion-center .pad-turntable-progress{display:none!important}
        .conversion-detail.detail-right .detail-label:last-child{display:none!important}
        .conversion-detail.detail-right:after{content:'OFFICIAL PACKAGING';display:block;font-size:8px;letter-spacing:.14em;margin-top:8px;font-weight:700}
        .conversion-bottom .bottom-hint{font-size:0}
        .conversion-bottom .bottom-hint:after{content:'PACKAGING VIEW · THEN CONTINUE';font-size:8px;letter-spacing:.18em;font-weight:700;color:rgba(39,35,22,.58)}
        @media(max-width:700px){.package-view .package-image-wrap{width:86%;height:78%}.package-view .pad-turntable-caption{bottom:16px;font-size:7px;gap:14px}}
      `}</style>
    </div>
  );
}
