'use client';

import { useState } from 'react';

const DEFAULT_IMAGE = 'https://femi9.in/uploads/Product/1773300828_jFWVIMppz1.webp';

export function PadTurntable({ className = '', image = DEFAULT_IMAGE, alt = 'Femi9 sanitary pad packaging' }: { className?: string; image?: string; alt?: string }) {
  const [src, setSrc] = useState(image);

  return (
    <div className={`pad-turntable package-view ${className}`} role="img" aria-label={alt}>
      <div className="pad-turntable-glow" />
      <div className="pad-turntable-orbit orbit-one" />
      <div className="pad-turntable-orbit orbit-two" />
      <div className="package-image-wrap">
        <img
          className="pad-turntable-image package-image"
          src={src}
          alt={alt}
          draggable={false}
          onError={() => setSrc(DEFAULT_IMAGE)}
        />
      </div>
      <div className="pad-turntable-caption">
        <span>OFFICIAL FEMI9 PACKAGING</span>
        <span>PRODUCT PHOTOGRAPHY</span>
      </div>
    </div>
  );
}
