'use client';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Ticker from '../../components/Ticker';
import useScrollReveal from '../../components/useScrollReveal';
import { IMG1, IMG2, SCL } from '../../components/images';

const photos = [
  { src: SCL,  caption: 'Independence Day Celebration',  category: 'Events' },
  { src: IMG1, caption: 'Morning Assembly',               category: 'Daily Life' },
  { src: IMG2, caption: 'Cultural Activity & Dance',      category: 'Activities' },
  { src: IMG1, caption: 'Students at Assembly',           category: 'Daily Life' },
  { src: IMG2, caption: 'Annual Day Celebration',         category: 'Events' },
  { src: SCL,  caption: 'Patriotic Celebration',          category: 'Events' },
  { src: IMG1, caption: 'School Grounds',                 category: 'Campus' },
  { src: IMG2, caption: 'Group Activity',                 category: 'Activities' },
  { src: SCL,  caption: 'Republic Day Programme',         category: 'Events' },
];

export default function Gallery() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <Ticker />

      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-badge">School Life</div>
          <h1>Our <span className="accent">Gallery</span></h1>
          <p>Moments, memories and milestones from M.D Convent School</p>
        </div>
      </div>

      {/* MAIN GALLERY */}
      <section style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div className="reveal">
            <div className="section-label">Photos</div>
            <h2 className="section-title">Moments at M.D Convent</h2>
            <p className="section-desc">
              A glimpse into the vibrant daily life, celebrations and activities
              that make our school community special.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px', marginTop: '2.5rem' }}>
            {photos.map((photo, i) => (
              <div key={i} className="gallery-item reveal" style={{ height: '240px', borderRadius: '12px', overflow: 'hidden', border: '2px solid var(--border)' }}>
                <img src={photo.src} alt={photo.caption} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .5s' }} />
                <div className="gallery-overlay" style={{ background: 'linear-gradient(transparent 40%, rgba(13,37,69,.85))' }}>
                  <div>
                    <div style={{ fontSize: '.65rem', color: 'var(--gold)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '3px' }}>{photo.category}</div>
                    <span style={{ color: '#fff', fontSize: '.82rem', fontWeight: 600 }}>{photo.caption}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section style={{ background: 'var(--navy)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }} className="reveal">
            <div className="section-label" style={{ justifyContent: 'center', color: 'var(--gold-light)' }}>Featured</div>
            <h2 className="section-title" style={{ color: '#fff', margin: '0 auto' }}>Highlights</h2>
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

      {/* CTA */}
      <section style={{ background: 'var(--cream)', textAlign: 'center' }}>
        <div className="container reveal">
          <h2 className="section-title" style={{ margin: '0 auto 1rem' }}>Be Part of Our Story</h2>
          <p className="section-desc" style={{ margin: '0 auto 2rem', textAlign: 'center' }}>
            Enrol your child at M.D Convent and create memories that last a lifetime.
          </p>
          <Link href="/contact" className="btn-primary">Enquire for Admission →</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
