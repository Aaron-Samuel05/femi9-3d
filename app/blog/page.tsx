import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { blogPosts } from '@/lib/data';

const images=[
  'https://femi9.in/uploads/Product/1773127765_EA2vx1qoIA.webp',
  'https://femi9.in/uploads/Product/1773300828_jFWVIMppz1.webp',
  'https://femi9.in/uploads/Product/1744820580_NwCzXwxGOs.webp',
  'https://femi9.in/uploads/Product/1773300799_8RwUly1byg.webp',
];

export default function Blog(){return <>
<section className="page-hero journal-hero"><span className="micro">FEMI9 / JOURNAL</span><div className="journal-hero-grid"><div><h1 className="display">PERIOD HEALTH.<br/><i>REAL TALK.</i></h1><p>Practical period-care education, stories and everyday wellbeing content from the current Femi9 journal.</p></div><img src={images[0]} alt="Femi9 sanitary pad product"/></div></section>
<section className="section"><div className="blog-grid blog-grid-image">{blogPosts.map((p,i)=><Link className="blog-card blog-card-image" href={`/blog/${p.slug}`} key={p.slug}><div className="blog-thumb"><img src={images[i%images.length]} alt="Femi9 period care"/></div><div className="blog-copy"><span>{p.category} · {p.date}</span><h2>{p.title}</h2><p>Explore this Femi9 journal topic.</p></div><ArrowUpRight/></Link>)}</div></section>
<style jsx global>{`
.journal-hero{min-height:78vh}.journal-hero-grid{display:grid;grid-template-columns:1fr .55fr;gap:7vw;align-items:end;margin-top:35px}.journal-hero-grid>img{width:100%;height:500px;object-fit:cover;border-radius:32px;box-shadow:0 30px 90px rgba(70,50,6,.18)}.blog-grid-image{grid-template-columns:repeat(2,1fr);gap:18px;background:transparent}.blog-card-image{padding:0;min-height:0;background:#fffdf3;border:1px solid rgba(39,35,22,.1);border-radius:28px;overflow:hidden;transform:none}.blog-card-image:hover{transform:translateY(-6px)}.blog-thumb{height:310px;overflow:hidden;background:#ead37b}.blog-thumb img{width:100%;height:100%;object-fit:cover;transition:transform .7s}.blog-card-image:hover .blog-thumb img{transform:scale(1.04)}.blog-copy{padding:28px 30px 10px}.blog-copy h2{margin-top:14px}.blog-card-image>svg{margin:0 30px 25px auto}
@media(max-width:900px){.journal-hero-grid{grid-template-columns:1fr}.journal-hero-grid>img{height:430px}.blog-grid-image{grid-template-columns:1fr}}
`}</style>
</>}
