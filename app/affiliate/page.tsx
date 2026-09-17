import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const HANDS='https://femi9.in/uploads/Product/1734093124_3LqO07PSLz.webp';
const FOUNDER='https://cdn.hollywoodreporterindia.com/editor-images/2025-02-17T10%3A23%3A04.304Z-Nayanthara.jpg';

export default function Affiliate(){return <>
  <section className="page-hero affiliate-hero">
    <span className="micro">FEMI9 / OPPORTUNITIES</span>
    <div className="affiliate-hero-grid">
      <div className="affiliate-hero-copy">
        <h1 className="display">TURN A<br/><i>RECOMMENDATION</i><br/>INTO REWARD.</h1>
        <p className="lead">Share a period-care product you already believe in. Femi9's published referral programme lets qualifying purchases earn a wallet reward.</p>
        <Link href="/contact" className="dark-button">BECOME AN AFFILIATE <ArrowUpRight/></Link>
      </div>
      <div className="affiliate-visual"><img src={HANDS} alt="Femi9 packaging held in hand"/></div>
    </div>
  </section>

  <section className="section">
    <div className="affiliate-hero-copy"><span className="micro">HOW IT WORKS</span><h2 className="display-sm">SIMPLE TO<br/><i>SHARE.</i></h2></div>
    <div className="affiliate-steps">
      <article className="affiliate-step"><span>01 / YOUR CODE</span><strong>GET YOUR LINK.</strong><p>Find your unique referral code in your Femi9 profile and turn it into a shareable recommendation.</p></article>
      <article className="affiliate-step"><span>02 / YOUR PEOPLE</span><strong>SHARE IT.</strong><p>Send it to friends and family who are looking for period-care products that fit their needs.</p></article>
      <article className="affiliate-step"><span>03 / YOUR REWARD</span><strong>EARN 5%.</strong><p>Femi9's current published FAQ states that qualifying referred purchases can add 5% of purchase value to your wallet.</p></article>
    </div>
  </section>

  <section className="section dark">
    <div className="affiliate-reward">
      <div className="affiliate-reward-visual"><img src={FOUNDER} alt="Nayanthara with Femi9 products"/></div>
      <div>
        <span className="micro">SHARE WHAT MATTERS</span>
        <h2 className="display">A BETTER<br/><i>RECOMMENDATION.</i></h2>
        <p className="lead">The referral experience should feel like a recommendation, not a sales pitch. Give people a clear way to explore the range, choose their format and come back to your link when they're ready.</p>
        <Link href="/shop" className="light-button">EXPLORE THE RANGE <ArrowUpRight/></Link>
      </div>
    </div>
  </section>

  <section className="section">
    <div className="grid-2">
      <div><span className="micro">NEED HELP?</span><h2 className="display-sm">READY TO<br/><i>SHARE?</i></h2></div>
      <div><p className="lead">Contact the Femi9 team if you need help with the programme or your referral journey.</p><Link href="/contact" className="dark-button">CONTACT FEMI9 <ArrowUpRight/></Link></div>
    </div>
  </section>
</>}
