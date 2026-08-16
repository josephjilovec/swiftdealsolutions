import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main shell-wide">
        <div className="footer-brand-col"><BrandMark /><p>Private deal architecture for select real estate, collector automotive, and marine opportunities.</p></div>
        <div className="footer-links"><div><span>Navigate</span><Link href="/#deal-intelligence">Deal room</Link><Link href="/opportunities">Opportunities</Link><Link href="/process">Process</Link></div><div><span>Connect</span><Link href="/submit?mode=seller">Submit an asset</Link><Link href="/submit?mode=buyer">Buyer network</Link><a href={`mailto:${site.email}`}>Email directly</a></div></div>
        <div className="footer-action"><p>Distinctive assets deserve a more controlled path to the right counterparty.</p><Link className="text-link" href="/submit">Open a private inquiry <span>↗</span></Link></div>
      </div>
      <div className="footer-legal shell-wide">
        <p>Swift Deal Solutions may participate as a principal, option holder, contract assignee, or transaction coordinator, as disclosed in the applicable written agreement. Services and permissible transaction structures vary by jurisdiction. Nothing on this site is legal, tax, financial, investment, or brokerage advice, an offer of securities, or a guarantee of closing. Real estate, vehicle, vessel, escrow, title, and brokerage activities may require licensed third parties. Consult qualified local counsel and other professionals before entering a transaction.</p>
        <div><span>© {new Date().getFullYear()} Swift Deal Solutions</span><span>Private transactions · United States</span></div>
      </div>
      <div className="jj-venture-nav" style={{borderTop:'1px solid rgba(255,255,255,.10)',padding:'1rem 1.25rem 1.15rem',textAlign:'center',fontSize:'.78rem',letterSpacing:'.045em'}}><a href="https://www.josephjilovec.com/ventures" style={{color:'#E7C45A',textDecoration:'none',fontWeight:700}}>A Joseph Jilovec Venture</a><span aria-hidden="true" style={{color:'#E7C45A',margin:'0 .65rem',opacity:.7}}>•</span><a href="https://www.josephjilovec.com/ventures" style={{color:'#E7C45A',textDecoration:'none',fontWeight:800}}>Explore the Venture Studio →</a></div>
    </footer>
  );
}
