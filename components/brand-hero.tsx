'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const SOURCE = 'https://content.tupaki.com/tupaki/feeds/2026/02/17/1108057-snapinstato44967138016415203666947006884317195019485418n.webp';
const HERO_IMAGE = `/api/image?url=${encodeURIComponent(SOURCE)}`;

export function BrandHero() {
  const ref = React.useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -35]);

  return <section ref={ref} className="brand-hero">
    <motion.div className="brand-hero-media" style={{ y: imageY }}>
      <img src={HERO_IMAGE} alt="Femi9 products in an everyday lifestyle setting" />
    </motion.div>
    <div className="brand-hero-shade" />
    <div className="brand-hero-top">
      <span>FEMI9 / PERIOD CARE</span>
      <span>REAL LIFE · REAL CARE</span>
    </div>
    <motion.div className="brand-hero-copy" style={{ y: contentY }}>
      <span className="brand-hero-kicker">PERIOD CARE, CONSIDERED</span>
      <h1>CARE THAT<br /><i>FITS REAL LIFE.</i></h1>
      <p>Thoughtful period care for the days that are actually lived — at home, outside, dressed up, moving.</p>
      <Link href="/product/p330dw" className="brand-hero-buy">SHOP FEMI9 <ArrowUpRight /></Link>
    </motion.div>
    <div className="brand-hero-spec">
      <span>330 MM</span>
      <strong>EXTRA-LARGE</strong>
      <small>DOUBLE WINGS · NIGHT + DAY</small>
    </div>
    <div className="brand-hero-bottom"><span>SCROLL TO EXPLORE</span><span className="brand-hero-line" /></div>
    <style jsx global>{`
      .brand-hero{height:min(900px,calc(100vh - 70px));min-height:700px;position:relative;overflow:hidden;background:#c9a53d;color:#fffdf2;isolation:isolate}
      .brand-hero-media{position:absolute;inset:-7% 0 -7%;z-index:0}
      .brand-hero-media img{width:100%;height:100%;display:block;object-fit:cover;object-position:center 42%;filter:saturate(.92) contrast(1.02)}
      .brand-hero-shade{position:absolute;inset:0;z-index:1;background:linear-gradient(90deg,rgba(25,21,12,.72) 0%,rgba(25,21,12,.43) 24%,rgba(25,21,12,.08) 50%,rgba(25,21,12,.02) 100%),linear-gradient(0deg,rgba(15,13,8,.58),transparent 28%)}
      .brand-hero-top{position:absolute;z-index:4;top:27px;left:4vw;right:4vw;display:flex;justify-content:space-between;font-size:9px;font-weight:700;letter-spacing:.19em;text-transform:uppercase}
      .brand-hero-copy{position:absolute;z-index:4;left:7.5vw;top:20%;width:min(430px,38vw)}
      .brand-hero-kicker{font-size:9px;font-weight:700;letter-spacing:.2em;display:block;margin-bottom:22px}
      .brand-hero-copy h1{font-size:clamp(48px,6vw,92px);line-height:.89;letter-spacing:-.045em;font-weight:600;margin:0;text-wrap:balance;text-shadow:0 8px 35px rgba(0,0,0,.16)}
      .brand-hero-copy h1 i{font-family:'Playfair Display',serif;font-weight:500;letter-spacing:-.025em}
      .brand-hero-copy p{font-size:13px;line-height:1.75;max-width:360px;margin:27px 0 26px;color:rgba(255,253,242,.88)}
      .brand-hero-buy{width:max-content;display:flex;align-items:center;gap:32px;padding:16px 22px 16px 24px;border-radius:999px;background:#292515;color:#fff7cf;font-size:10px;font-weight:800;letter-spacing:.16em;box-shadow:0 18px 45px rgba(30,22,4,.22);transition:transform .3s,box-shadow .3s}
      .brand-hero-buy:hover{transform:translateY(-3px);box-shadow:0 24px 55px rgba(30,22,4,.3)}
      .brand-hero-buy svg{width:15px;height:15px}
      .brand-hero-spec{position:absolute;z-index:4;right:6vw;top:22%;display:flex;flex-direction:column;align-items:flex-end;text-align:right;color:rgba(255,253,242,.9)}
      .brand-hero-spec span{font-family:'Playfair Display',serif;font-size:46px;line-height:1}
      .brand-hero-spec strong{font-size:9px;letter-spacing:.2em;margin-top:7px}
      .brand-hero-spec small{font-size:8px;letter-spacing:.12em;margin-top:10px;opacity:.72}
      .brand-hero-bottom{position:absolute;z-index:4;left:4vw;right:4vw;bottom:25px;display:flex;align-items:center;gap:16px;font-size:8px;font-weight:700;letter-spacing:.17em}
      .brand-hero-line{width:80px;height:1px;background:rgba(255,253,242,.65)}
      @media(max-width:900px){
        .brand-hero{height:calc(100svh - 62px);min-height:650px}
        .brand-hero-media{inset:0}
        .brand-hero-media img{object-position:54% center}
        .brand-hero-shade{background:linear-gradient(180deg,rgba(25,21,12,.42),rgba(25,21,12,.06) 35%,rgba(15,13,8,.74) 100%)}
        .brand-hero-top{top:18px;font-size:8px}
        .brand-hero-top span:last-child{display:none}
        .brand-hero-copy{left:7vw;right:7vw;top:auto;bottom:12%;width:auto}
        .brand-hero-kicker{margin-bottom:15px}
        .brand-hero-copy h1{font-size:clamp(45px,14vw,70px);max-width:390px}
        .brand-hero-copy p{font-size:12px;line-height:1.6;max-width:330px;margin:19px 0}
        .brand-hero-spec{right:7vw;top:13%;font-size:8px}
        .brand-hero-spec span{font-size:32px}
        .brand-hero-spec small{font-size:7px}
        .brand-hero-bottom{bottom:17px}
      }
    `}</style>
  </section>;
}

import React from 'react';
