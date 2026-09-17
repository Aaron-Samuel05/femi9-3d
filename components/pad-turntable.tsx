'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

const SOURCE = 'https://raw.githubusercontent.com/Aaron-Samuel05/femi9/main/public/assets/pad-frames-cutout';
const FRAME_COUNT = 42;

export function PadTurntable({ className = '' }: { className?: string }) {
  const [frame, setFrame] = useState(0);
  const [ready, setReady] = useState(false);
  const dragStart = useRef<number | null>(null);
  const startFrame = useRef(0);

  const frames = useMemo(
    () => Array.from({ length: FRAME_COUNT }, (_, i) => `${SOURCE}/frame-${String(i + 1).padStart(3, '0')}.webp`),
    []
  );

  useEffect(() => {
    let loaded = 0;
    const images: HTMLImageElement[] = [];
    frames.forEach((src, index) => {
      const image = new Image();
      image.decoding = 'async';
      image.src = src;
      image.onload = () => {
        loaded += 1;
        if (index === 0 || loaded >= Math.min(10, FRAME_COUNT)) setReady(true);
      };
      images.push(image);
    });
    return () => images.forEach((image) => { image.onload = null; });
  }, [frames]);

  const scrub = (direction: number) => setFrame((current) => (current + direction + FRAME_COUNT) % FRAME_COUNT);

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    dragStart.current = event.clientX;
    startFrame.current = frame;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (dragStart.current === null) return;
    const delta = event.clientX - dragStart.current;
    const next = startFrame.current + Math.round(delta / 8);
    setFrame(((next % FRAME_COUNT) + FRAME_COUNT) % FRAME_COUNT);
  };

  const stopDrag = () => { dragStart.current = null; };

  return (
    <div
      className={`pad-turntable ${className}`}
      onWheel={(event) => scrub(event.deltaY > 0 ? 1 : -1)}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={stopDrag}
      onPointerCancel={stopDrag}
      onPointerLeave={stopDrag}
      role="img"
      aria-label="Interactive 360 degree view of the real Femi9 pad"
    >
      <div className="pad-turntable-glow" />
      <div className="pad-turntable-orbit orbit-one" />
      <div className="pad-turntable-orbit orbit-two" />
      {!ready && <div className="pad-loader">LOADING PRODUCT VIEW</div>}
      <img className="pad-turntable-image" src={frames[frame]} alt="Femi9 sanitary pad — 360 degree product view" draggable={false} />
      <div className="pad-turntable-caption">
        <span>REAL FEMI9 PRODUCT</span>
        <span>DRAG TO ROTATE · SCROLL TO SCRUB</span>
      </div>
      <div className="pad-turntable-progress"><span style={{ transform: `scaleX(${(frame + 1) / FRAME_COUNT})` }} /></div>
    </div>
  );
}
