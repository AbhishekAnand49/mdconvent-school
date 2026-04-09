'use client';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Ticker from '../components/Ticker';
import useScrollReveal from '../components/useScrollReveal';
import { LOGO, IMG1, IMG2, SCL } from '../components/images';

export default function Home() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <Ticker />

      {/* HERO */}
      <section className="hero-section">
        <div className="hero-bg" />
        <div className="hero-grid-lines" />
        <div className="hero-inner">
          <div>
            <div className="hero-badge">Admissions Open 2025–26</div>
            <h1 className="hero-title">M.D <span className="accent">Convent</span><br />School</h1>
            <p className="hero-subtitle">Nurturing Minds, Building Futures Since 1981</p>
            <p className="hero-desc">
              A trusted neighbourhood school in Rajendra Nagar, Patna — providing quality,
              affordable education from Play Group to Standard 8 for over four decades.
            </p>
            <div className="hero-stats">
              <div className="hero-stat"><div className="num">1981</div><div className="lbl">Established</div></div>
              <div className="hero-stat"><div className="num">40+</div><div className="lbl">Years of Trust</div></div>
              <div className="hero-stat"><div className="num">PG–8</div><div className="lbl">Classes Offered</div></div>
            </div>
            <div className="hero-btns">
              <Link href="/contact" className="btn-primary">📋 Enquire for Admission</Link>
              <Link href="/about" className="btn-outline">Know More</Link>
            </div>
          </div>
          <div className="hero-img-wrap">
            <div className="hero-img-frame">
              <img src={SCL} alt="M.D Convent School Students" />
              <div className="hero-img-overlay">
                <span className="hero-img-tag">Independence Day Celebration</span>
              </div>
            </div>
            <img src={LOGO} alt="School Logo" className="hero-logo-float" />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section style={{ background: 'var(--warm-white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '.5rem' }} className="reveal">
            <div className="section-label" style={{ justifyContent: 'center' }}>Why Choose Us</div>
            <h2 className="section-title" style={{ margin: '0 auto' }}>Reasons Parents Trust M.D Convent</h2>
            <p className="section-desc" style={{ margin: '.8rem auto 0', textAlign: 'center' }}>
              For over four decades, families in Rajendra Nagar have chosen M.D Convent for its
              sincerity, affordability, and commitment to every child.
            </p>
          </div>
          <div className="why-grid">
            {[
              { icon: '🏛️', title: 'Over 40 Years of Trusted Education', desc: 'Since 1981, we have built an unshakeable reputation as a reliable neighbourhood school, earning the trust of thousands of families.' },
              { icon: '👩‍🏫', title: 'Experienced & Dedicated Faculty', desc: 'Our teachers bring years of classroom experience and genuine dedication to nurturing each student\'s potential.' },
              { icon: '💸', title: 'Affordable & Inclusive Education', desc: 'Quality education within reach for every family. Our fee structure is thoughtfully kept affordable so no child is left behind.' },
              { icon: '📚', title: 'Strong Academic Foundation', desc: 'Our curriculum builds a solid base of knowledge, critical thinking and discipline — setting students up for lifelong success.' },
              { icon: '🛡️', title: 'Safe & Supportive Environment', desc: 'We ensure a caring, respectful and secure atmosphere where every student is valued, heard and encouraged to grow.' },
              { icon: '🌟', title: 'Holistic Development', desc: 'Beyond textbooks, we encourage activities and celebrations that build confidence, teamwork and a love for learning.' },
            ].map((card, i) => (
              <div className="why-card reveal" key={i}>
                <div className="why-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div className="section-label">School Life</div>
              <h2 className="section-title" style={{ marginBottom: 0 }}>Moments at M.D Convent</h2>
            </div>
            <Link href="/gallery" className="btn-navy">View All Photos →</Link>
          </div>
          <div className="gallery-grid reveal">
            <div className="gallery-item"><img src={IMG2} alt="Cultural Activity" /><div className="gallery-overlay"><span>Cultural Activity</span></div></div>
            <div className="gallery-item"><img src={SCL} alt="Independence Day" /><div className="gallery-overlay"><span>Independence Day</span></div></div>
            <div className="gallery-item"><img src={IMG1} alt="Morning Assembly" /><div className="gallery-overlay"><span>Morning Assembly</span></div></div>
            <div className="gallery-item"><img src={IMG1} alt="School Events" /><div className="gallery-overlay"><span>School Events</span></div></div>
            <div className="gallery-item"><img src={IMG2} alt="Annual Celebration" /><div className="gallery-overlay"><span>Annual Celebration</span></div></div>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section style={{ background: 'var(--navy)', padding: '3.5rem 2rem' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#fff', fontSize: 'clamp(1.5rem,3vw,2.2rem)', marginBottom: '.5rem' }}>
              Ready to Enrol Your Child?
            </h2>
            <p style={{ color: 'rgba(255,255,255,.65)', fontSize: '1rem' }}>
              Admissions open for Play Group to Standard 8. Contact us today.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Enquire Now →</Link>
            <Link href="/about" className="btn-outline">Learn More</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
