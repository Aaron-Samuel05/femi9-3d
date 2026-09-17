export const ASSET = 'https://raw.githubusercontent.com/Aaron-Samuel05/femi9/main/public/assets/img';
export const LIVE_PRODUCT = 'https://femi9.in/uploads/Product';
export const FRAME_ASSET = 'https://raw.githubusercontent.com/Aaron-Samuel05/femi9/main/public/assets/pad-frames-cutout';

export type Product = {
  id: string; name: string; slug: string; price: number; pack: string; length: string;
  flow: string; usage: string; description: string; badge?: string; image: string; accent: string;
};

// Use the live Femi9 product photography so the catalogue never falls back to missing placeholders.
export const products: Product[] = [
  {id:'330-double',slug:'femi9-330mm-double-wings',name:'Femi9 330mm Extra-Large 9 Pads — Double Wings',price:225,pack:'9 pads',length:'330mm',flow:'Heavy',usage:'Night + Day',description:'Extra-length protection with double wings for overnight security.',badge:'BESTSELLER',image:`${LIVE_PRODUCT}/1773300828_jFWVIMppz1.webp`,accent:'blush'},
  {id:'330-centre',slug:'femi9-330mm-centre-wings',name:'Femi9 330mm Extra-Large 9 Pads — Centre Wings',price:225,pack:'9 pads',length:'330mm',flow:'Heavy',usage:'Night',description:'Extra-length protection with centre wings and extended back coverage.',image:`${LIVE_PRODUCT}/1773300799_8RwUly1byg.webp`,accent:'sand'},
  {id:'290-large',slug:'femi9-290mm-large',name:'Femi9 290mm Large 9 Pads',price:198,pack:'9 pads',length:'290mm',flow:'Regular',usage:'Everyday',description:'The everyday large with breathable cotton comfort for your cycle.',image:`${LIVE_PRODUCT}/1773127765_EA2vx1qoIA.webp`,accent:'cream'},
  {id:'290-starter',slug:'femi9-290mm-starter',name:'Femi9 290mm Large 3 Pads',price:72,pack:'3 pads',length:'290mm',flow:'Regular',usage:'Everyday',description:'A three-pad starter pack to experience Femi9.',badge:'TRIAL PACK',image:`${LIVE_PRODUCT}/1773132065_WZLOmMA0v1.webp`,accent:'rose'},
  {id:'330-six',slug:'femi9-330mm-6-pads',name:'Femi9 330mm Extra-Large 6 Pads',price:162,pack:'6 pads',length:'330mm',flow:'Heavy',usage:'Night + Day',description:'Extra-large 330mm protection in a six-pad pack.',image:`${LIVE_PRODUCT}/1773134388_YEdjy67KqS.webp`,accent:'blush'},
  {id:'330-three',slug:'femi9-330mm-3-pads',name:'Femi9 330mm Extra-Large 3 Pads',price:81,pack:'3 pads',length:'330mm',flow:'Heavy',usage:'Night + Day',description:'A compact three-pad pack for trying the 330mm XL range.',image:`${LIVE_PRODUCT}/1773133877_isSPEIYue4.webp`,accent:'sand'},
  {id:'290-six',slug:'femi9-290mm-6-pads',name:'Femi9 290mm Large 6 Pads',price:141,pack:'6 pads',length:'290mm',flow:'Regular',usage:'Everyday',description:'Six everyday 290mm pads for regular-flow days.',image:`${LIVE_PRODUCT}/1773132065_WZLOmMA0v1.webp`,accent:'cream'},
  {id:'180-mini',slug:'femi9-180mm-mini-pads',name:'Femi9 180mm Pads — Everyday Essentials',price:234,pack:'30 pads',length:'180mm',flow:'Light flow',usage:'Daily freshness',description:'Ultra-thin everyday protection for light flow, spotting and daily discharge.',image:`${LIVE_PRODUCT}/1744820580_NwCzXwxGOs.webp`,accent:'mist'},
];

export const blogPosts = [
  {slug:'periods-are-a-part-of-life',category:'Her Story',date:'16 Sep 2026',title:'Periods Are a Part of Life, Not the Whole of Life: A Real Story About Mood, Rain & a White Dress'},
  {slug:'buy-best-sanitary-napkins-online',category:'Period Health',date:'15 Sep 2026',title:"Buy Best Sanitary Napkins Online — Femi9's Organic Cotton Pads, Built for Real Comfort"},
  {slug:'best-biodegradable-sanitary-pads',category:'Sustainable Living',date:'11 Sep 2026',title:'Best Biodegradable Sanitary Pads: Where to Buy Affordable, Disposable Pads'},
  {slug:'rash-free-pads-for-periods',category:'Period Health',date:'10 Sep 2026',title:'Rash-Free Pads for Periods: Because Day Two Shouldn’t Hurt'},
  {slug:'puberty-to-menopause',category:'Awareness',date:'4 Sep 2026',title:'From Puberty to Menopause: Everything Your Body Wishes You Knew Sooner'},
  {slug:'who-taught-gen-z-about-periods',category:'Parenting',date:'3 Sep 2026',title:'Who Taught Gen Z About Periods — If Not Their Mothers?'},
  {slug:'cotton-sanitary-pads',category:'Period Health',date:'2 Sep 2026',title:'Are Cotton Sanitary Pads Worth Switching To?'},
  {slug:'sanitary-pads-summer-heat',category:'Women wellness',date:'29 Aug 2026',title:'Best Sanitary Pads for Summer Heat: How to Stay Rash-Free with Heavy Flow'},
];

export const faqs = [
 ['How do I create my Femi9 account?','Click Log In, choose Register and enter your details. Femi9 also supports WhatsApp and Google sign-in.'],
 ['Why should I create a Femi9 account?','The current Femi9 site lists a ₹99 welcome bonus, order tracking, wishlist functionality and offer notifications.'],
 ['Can I get free shipping?','The current site states free shipping on orders above ₹999; charges may vary below that threshold.'],
 ['How can I track my order?','Orders can be tracked from the profile/orders area, with WhatsApp updates also provided.'],
 ['What is the standard order processing time?','Orders before 4:30 PM are stated to ship the same working day; later orders are processed the next working day.'],
 ['How can I return or replace a product?','The current FAQ states damaged or incorrect deliveries can be replaced; contact support@femi9.in for assistance.'],
 ['What is the Femi9 reward programme?','The referral programme lets customers share a unique code and receive wallet credits from qualifying purchases.'],
];
