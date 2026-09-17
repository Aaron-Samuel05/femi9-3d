'use client';
import { useMemo, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ArrowUpRight, Check, Minus, Plus } from 'lucide-react';
import { products } from '@/lib/data';
import { Reveal, useCart } from '@/components/experience';
import { PadTurntable } from '@/components/pad-turntable';

const aliasMap:Record<string,string>={p330dw:'330-double'};
const choices=['330-double','330-centre','330-six','330-three','290-large','290-six','290-starter','180-mini'];

export default function ProductPage(){
  const {slug}=useParams<{slug:string}>();
  const router=useRouter();
  const initialId=aliasMap[slug]||slug;
  const initial=products.find(x=>x.id===initialId)||products[0];
  const [selectedId,setSelectedId]=useState(initial.id);
  const [qty,setQty]=useState(1);
  const selected=useMemo(()=>products.find(x=>x.id===selectedId)||initial,[selectedId,initial]);
  const add=useCart(s=>s.add);
  const total=selected.price*qty;
  const selectProduct=(id:string)=>{setSelectedId(id);setQty(1);};
  const buyNow=()=>{for(let i=0;i<qty;i++)add(selected.id);router.push('/checkout');};
  const variants=choices.map(id=>products.find(p=>p.id===id)).filter(Boolean) as typeof products;
  return <main className="configure-page">
    <section className="configure-hero">
      <div className="configure-visual"><PadTurntable className="product-turntable"/><div className="visual-tag">REAL FEMI9 PRODUCT · 42 FRAMES</div></div>
      <div className="configure-panel">
        <span className="micro">FEMI9 / CONFIGURE YOUR ORDER</span>
        <h1>{selected.name}</h1>
        <p className="configure-desc">{selected.description}</p>
        <div className="configure-price"><span>YOUR TOTAL</span><strong>₹{total}</strong></div>
        <div className="configure-block"><span className="configure-label">CHOOSE YOUR FORMAT</span><div className="variant-grid">{variants.map(p=><button key={p.id} className={`variant-option ${selected.id===p.id?'selected':''}`} onClick={()=>selectProduct(p.id)}><span>{p.length}</span><strong>{p.pack}</strong><small>{p.flow} · {p.usage}</small>{selected.id===p.id&&<Check size={15}/>}</button>)}</div></div>
        <div className="configure-block"><span className="configure-label">QUANTITY</span><div className="quantity-control"><button onClick={()=>setQty(q=>Math.max(1,q-1))}><Minus size={16}/></button><strong>{qty}</strong><button onClick={()=>setQty(q=>q+1)}><Plus size={16}/></button></div></div>
        <button className="configure-buy" onClick={buyNow}>BUY NOW <span>₹{total}</span><ArrowUpRight/></button>
        <p className="secure-note">PREPAID CHECKOUT · SECURE ORDER FLOW · FREE SHIPPING ABOVE ₹999</p>
      </div>
    </section>
    <section className="section dark configure-details"><div className="grid-2"><div><span className="micro">01 / INSPECT BEFORE YOU BUY</span><h2 className="display">ROTATE.<br/><i>ZOOM IN.</i><br/>CHOOSE.</h2></div><Reveal><div className="detail-spec-grid"><div><span>FLOW</span><strong>{selected.flow}</strong></div><div><span>USAGE</span><strong>{selected.usage}</strong></div><div><span>LENGTH</span><strong>{selected.length}</strong></div><div><span>PACK</span><strong>{selected.pack}</strong></div></div></Reveal></div></section>
    <section className="section configure-final"><div className="glass-panel"><span className="micro">02 / SIMPLE BY DESIGN</span><h2 className="display">SEE IT.<br/><i>SET IT.</i><br/>DONE.</h2><p className="lead">Choose the format, set your quantity and continue straight to checkout. No account maze and no unnecessary steps.</p></div></section>
  </main>;
}
