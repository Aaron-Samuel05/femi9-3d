'use client';
import { useMemo, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { ProductCard } from '@/components/experience';
import { products } from '@/lib/data';

const sortOptions=[
  ['FEATURED','SORT: FEATURED'],
  ['LOW','PRICE LOW'],
  ['HIGH','PRICE HIGH'],
] as const;

export default function Shop(){
  const [flow,setFlow]=useState('ALL');
  const [sort,setSort]=useState('FEATURED');
  const [sortOpen,setSortOpen]=useState(false);
  const shown=useMemo(()=>{
    const a=flow==='ALL'?products:products.filter(p=>p.flow.toUpperCase()===flow||p.usage.toUpperCase().includes(flow));
    return [...a].sort((x,y)=>sort==='LOW'?x.price-y.price:sort==='HIGH'?y.price-x.price:0);
  },[flow,sort]);
  const sortLabel=sortOptions.find(([value])=>value===sort)?.[1]||'SORT: FEATURED';
  return <>
    <section className="shop-intro">
      <div><span className="micro">FEMI9 / SHOP</span><h1>SHOP<br/><i>THE RANGE.</i></h1></div>
      <p>Explore Femi9 pads and period protection with clear product details, real photography and a calmer editorial browsing experience.</p>
    </section>
    <div className="filters">
      {['ALL','LIGHT FLOW','REGULAR','HEAVY','LEAK-PROOF'].map(x=><button key={x} className={`filter-chip ${flow===x?'active':''}`} onClick={()=>setFlow(x)}>{x}</button>)}
      <div className={`sort-control ${sortOpen?'open':''}`}>
        <button className="sort-trigger" onClick={()=>setSortOpen(v=>!v)} aria-expanded={sortOpen}>{sortLabel}<ChevronDown size={13}/></button>
        {sortOpen&&<div className="sort-menu">{sortOptions.map(([value,label])=><button key={value} className={sort===value?'active':''} onClick={()=>{setSort(value);setSortOpen(false)}}>{label}</button>)}</div>}
      </div>
    </div>
    <div className="product-grid">{shown.map(p=><ProductCard key={p.id} product={p}/>)}</div>
  </>
}
