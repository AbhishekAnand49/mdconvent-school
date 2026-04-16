import Link from 'next/link';
import { LOGO } from './images';

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <div className="footer-logo-wrap">
            <img src={LOGO} alt="M.D Convent Logo" className="footer-logo" />
            <div>
              <div className="footer-school-name">M.D Convent School</div>
              <div className="footer-school-sub">Rajendra Nagar, Patna</div>
            </div>
          </div>
          <p className="footer-about-text">
            Founded in 1981, M.D Convent School is a trusted institution in Rajendra Nagar, Patna
            offering quality, affordable education from Play Group to Standard 8.
            Proudly serving thousands of families over four decades.
          </p>
          <div className="footer-contact-mini">
            <p>📍 <span>Rajendra Nagar, Road No. 13-A, Patna – 800016</span></p>
            <p>✉️ <span>mdconvent49@gmail.com</span></p>
            <p>👤 Principal: <span>Awadh Kishor Prasad</span></p>
          </div>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/about#principal">Principal&apos;s Message</Link></li>
            <li><Link href="/about#milestones">Our Journey</Link></li>
            <li><Link href="/academics">Classes Offered</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Classes</h4>
          <ul className="footer-links">
            <li><Link href="/academics">Play Group</Link></li>
            <li><Link href="/academics">Nursery</Link></li>
            <li><Link href="/academics">LKG &amp; UKG</Link></li>
            <li><Link href="/academics">Standard I – V</Link></li>
            <li><Link href="/academics">Standard VI – VIII</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>School Info</h4>
          <ul className="footer-links">
            <li><Link href="/about">Established: 1981</Link></li>
            <li><Link href="/about">Medium: Hindi &amp; English</Link></li>
            <li><Link href="/academics">Classes: PG to Std. 8</Link></li>
            <li><Link href="/contact">Admissions Open</Link></li>
            <li><Link href="/contact">Enquire Now</Link></li>
          </ul>
          <div style={{ marginTop:'1.5rem', padding:'1rem', background:'rgba(232,160,32,.1)', borderRadius:'8px', border:'1px solid rgba(232,160,32,.2)' }}>
            <div style={{ color:'var(--gold)', fontSize:'.78rem', fontWeight:700, textTransform:'uppercase', letterSpacing:'.06em', marginBottom:'4px' }}>Trusted Since 1981</div>
            <div style={{ fontSize:'.8rem', color:'rgba(255,255,255,.5)' }}>40+ years of quality, affordable education in Patna.</div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 <strong>M.D Convent School</strong> — Rajendra Nagar, Road No. 13-A, Patna – 800016. All rights reserved.</p>
        <p>✉️ <strong>mdconvent49@gmail.com</strong></p>
      </div>
    </footer>
  );
}
