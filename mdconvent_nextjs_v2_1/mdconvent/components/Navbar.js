'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LOGO } from './images';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/academics', label: 'Academics' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <nav>
        <Link href="/" className="nav-brand">
          <img src={LOGO} alt="M.D Convent Logo" className="nav-logo" />
          <div className="nav-name">
            <span className="nav-title">M.D Convent School</span>
            <span className="nav-sub">Rajendra Nagar, Patna</span>
          </div>
        </Link>

        <ul className="nav-links">
          {links.map(l => (
            <li key={l.href}>
              <Link href={l.href} className={pathname === l.href ? 'active' : ''}>
                {l.label}
              </Link>
            </li>
          ))}
          <li><Link href="/contact" className="cta-btn">Enquire Now</Link></li>
        </ul>

        <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-nav ${open ? 'open' : ''}`}>
        {links.map(l => (
          <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</Link>
        ))}
        <Link href="/contact" onClick={() => setOpen(false)}>Enquire Now</Link>
      </div>
    </>
  );
}
