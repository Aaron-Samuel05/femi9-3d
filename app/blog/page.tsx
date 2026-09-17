import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { blogPosts } from '@/lib/data';
export default function Blog(){return <><section className="page-hero"><span className="micro">FEMI9 / JOURNAL</span><h1 className="display">PERIOD HEALTH.<br/><i>REAL TALK.</i></h1><p>Practical period-care education, stories and everyday wellbeing content from the current Femi9 journal.</p></section><section className="section"><div className="blog-grid">{blogPosts.map(p=><Link className="blog-card" href={`/blog/${p.slug}`} key={p.slug}><div><span>{p.category} · {p.date}</span><h2>{p.title}</h2><p>Explore this Femi9 journal topic.</p></div><ArrowUpRight/></Link>)}</div></section></>}
