'use client';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Ticker from '../../components/Ticker';
import useScrollReveal from '../../components/useScrollReveal';

const classes = [
  { level: 'Play Group', label: 'Early Learning', age: 'Age 2.5 – 3 yrs', desc: 'A gentle, play-based introduction to school life, building social skills and curiosity.' },
  { level: 'Nursery', label: 'Pre-Primary', age: 'Age 3 – 4 yrs', desc: 'Foundation of early literacy and numeracy through activities, songs and stories.' },
  { level: 'LKG', label: 'Pre-Primary', age: 'Age 4 – 5 yrs', desc: 'Building language skills, basic writing, drawing and classroom confidence.' },
  { level: 'UKG', label: 'Pre-Primary', age: 'Age 5 – 6 yrs', desc: 'Preparation for Class I with reading readiness, numbers and creative expression.' },
  { level: 'Standard I', label: 'Primary', age: 'Age 6 – 7 yrs', desc: 'Core subjects: English, Hindi, Maths, Environmental Studies.' },
  { level: 'Standard II', label: 'Primary', age: 'Age 7 – 8 yrs', desc: 'Strengthening reading, writing and arithmetic skills.' },
  { level: 'Standard III', label: 'Primary', age: 'Age 8 – 9 yrs', desc: 'Expanding knowledge across subjects with structured assessments.' },
  { level: 'Standard IV', label: 'Primary', age: 'Age 9 – 10 yrs', desc: 'Deeper subject understanding with emphasis on comprehension and reasoning.' },
  { level: 'Standard V', label: 'Upper Primary', age: 'Age 10 – 11 yrs', desc: 'Introduction to Science and Social Studies as independent subjects.' },
  { level: 'Standard VI', label: 'Upper Primary', age: 'Age 11 – 12 yrs', desc: 'Structured curriculum with all core subjects and regular assessments.' },
  { level: 'Standard VII', label: 'Upper Primary', age: 'Age 12 – 13 yrs', desc: 'Advanced learning across Maths, Science, English, Hindi and Social Studies.' },
  { level: 'Standard VIII', label: 'Upper Primary', age: 'Age 13 – 14 yrs', desc: 'Completion of upper primary education with a strong academic foundation.' },
];

export default function Academics() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <Ticker />

      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-badge">Play Group to Std. 8</div>
          <h1>Our <span className="accent">Academics</span></h1>
          <p>Quality education across all levels — building strong foundations for life</p>
        </div>
      </div>

      {/* CLASSES GRID */}
      <section style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div className="reveal">
            <div className="section-label">Classes Offered</div>
            <h2 className="section-title">From Play Group to Standard 8</h2>
            <p className="section-desc">
              M.D Convent provides comprehensive schooling across all foundational years,
              ensuring each child receives the right guidance at every stage of learning.
            </p>
          </div>
          <div className="classes-grid" style={{ marginTop: '2.5rem' }}>
            {classes.map((c, i) => (
              <div className="class-card reveal" key={i}>
                <div className="class-level">{c.level}</div>
                <div className="class-label">{c.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED CARDS */}
      <section style={{ background: 'var(--warm-white)' }}>
        <div className="container">
          <div className="reveal">
            <div className="section-label">Stage by Stage</div>
            <h2 className="section-title">What Your Child Will Learn</h2>
            <p className="section-desc">Each stage is carefully designed to match a child&apos;s developmental needs.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: '1.5rem', marginTop: '2.5rem' }}>
            {classes.map((c, i) => (
              <div key={i} className="reveal" style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.5rem', borderTop: '3px solid var(--gold)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '.8rem' }}>
                  <div>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', fontWeight: 700, color: 'var(--navy)' }}>{c.level}</div>
                    <div style={{ fontSize: '.7rem', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '.07em' }}>{c.label}</div>
                  </div>
                  <span style={{ background: 'var(--cream)', color: 'var(--text-mid)', fontSize: '.72rem', fontWeight: 600, padding: '4px 10px', borderRadius: '20px', border: '1px solid var(--border)', whiteSpace: 'nowrap' }}>{c.age}</span>
                </div>
                <p style={{ fontSize: '.85rem', lineHeight: 1.65, color: 'var(--text-mid)' }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUBJECTS */}
      <section style={{ background: 'var(--navy)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }} className="reveal">
            <div className="section-label" style={{ justifyContent: 'center', color: 'var(--gold-light)' }}>Curriculum</div>
            <h2 className="section-title" style={{ color: '#fff', margin: '0 auto' }}>Core Subjects Taught</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '1rem' }}>
            {['English', 'Hindi', 'Mathematics', 'Science', 'Social Studies', 'Environmental Studies', 'Drawing & Art', 'Moral Education'].map((s, i) => (
              <div key={i} className="reveal" style={{ background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)', borderRadius: '10px', padding: '1.2rem', textAlign: 'center' }}>
                <div style={{ fontFamily: "'Playfair Display', serif", color: 'var(--gold)', fontWeight: 700, fontSize: '1rem' }}>{s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--cream)', textAlign: 'center' }}>
        <div className="container reveal">
          <div className="section-label" style={{ justifyContent: 'center' }}>Admissions Open</div>
          <h2 className="section-title" style={{ margin: '0 auto 1rem' }}>Ready to Enrol Your Child?</h2>
          <p className="section-desc" style={{ margin: '0 auto 2rem', textAlign: 'center' }}>
            Seats are limited. Contact us today to know more about our admission process and affordable fee structure.
          </p>
          <Link href="/contact" className="btn-primary">Enquire Now →</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
