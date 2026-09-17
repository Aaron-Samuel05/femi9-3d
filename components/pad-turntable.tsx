'use client';

import { useState } from 'react';

const DEFAULT_IMAGE = 'https://femi9.in/uploads/Product/1773300828_jFWVIMppz1.webp?v=20260917';

export function PadTurntable({ image = DEFAULT_IMAGE, alt = 'Femi9 sanitary pad packaging', className = '' }: { image?: string; alt?: string; className?: string }) {
  const [src, setSrc] = useState(image);
  return (
    <div className={`pad-turntable package-view ${className}`} role="img" aria-label={alt}>
      <div className="package-image-halo" />
      <div className="package-image-wrap">
        <img className="pad-turntable-image package-image" src={src} alt={alt} draggable={false} onError={() => setSrc(DEFAULT_IMAGE)} />
      </div>
      <div className="pad-turntable-caption">
        <span>OFFICIAL FEMI9 PACKAGING</span>
        <span>PRODUCT PHOTOGRAPHY</span>
      </div>
      <style jsx global>{`
        .package-view{position:relative;display:grid;place-items:center;overflow:hidden;isolation:isolate}
        .package-view .package-image-halo{position:absolute;z-index:0;width:54%;height:44%;border-radius:50%;background:rgba(255,248,203,.74);filter:blur(54px)}
        .package-view .package-image-wrap{position:relative;z-index:2;width:min(86%,620px);height:84%;display:grid;place-items:center;transition:transform .7s cubic-bezier(.2,.8,.2,1),filter .7s ease}
        .package-view:hover .package-image-wrap{transform:translateY(-7px) scale(1.018)}
        .package-view .package-image{display:block;width:100%;height:100%;object-fit:contain;object-position:center;filter:drop-shadow(0 32px 35px rgba(60,44,5,.2));user-select:none;-webkit-user-drag:none}
        .package-view .pad-turntable-caption{position:absolute;z-index:3;left:50%;bottom:28px;transform:translateX(-50%);width:max-content;display:flex;gap:28px;font-size:8px;letter-spacing:.16em;font-weight:700;color:rgba(42,38,25,.7)}
        .package-view .pad-turntable-caption span:last-child{opacity:.58}
        .conversion-center .pad-turntable-progress{display:none!important}
        .conversion-detail.detail-right .detail-label:last-child{display:none!important}
        .conversion-detail.detail-right:after{content:'OFFICIAL PACKAGING';display:block;font-size:8px;letter-spacing:.14em;margin-top:8px;font-weight:700}
        .conversion-bottom .bottom-hint{font-size:0}
        .conversion-bottom .bottom-hint:after{content:'PACKAGING VIEW · THEN CONTINUE';font-size:8px;letter-spacing:.18em;font-weight:700;color:rgba(39,35,22,.58)}
        @media(max-width:700px){.package-view .package-image-wrap{width:92%;height:78%}.package-view .pad-turntable-caption{bottom:16px;font-size:7px;gap:14px}}
      `}</style>
    </div>
  );
}
