'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Ticker from '../components/Ticker';
import GallerySection from '../components/GallerySection';
import ActivitiesSection from '../components/ActivitiesSection';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' }
});

export default function Home() {
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
            <motion.div {...fadeUp(0)} className="hero-badge">Admissions Open 2025–26</motion.div>
            <motion.h1 {...fadeUp(0.1)} className="hero-title">
              M.D <span className="accent">Convent</span><br />School
            </motion.h1>
            <motion.p {...fadeUp(0.2)} className="hero-subtitle">
              Nurturing Minds, Building Futures Since 1981
            </motion.p>
            <motion.p {...fadeUp(0.3)} className="hero-desc">
              A trusted neighbourhood school in Rajendra Nagar, Patna — providing quality,
              affordable education from Play Group to Standard 8 for over four decades.
            </motion.p>
            <motion.div {...fadeUp(0.4)} className="hero-stats">
              <div className="hero-stat"><div className="num">1981</div><div className="lbl">Established</div></div>
              <div className="hero-stat"><div className="num">40+</div><div className="lbl">Years of Trust</div></div>
              <div className="hero-stat"><div className="num">PG–8</div><div className="lbl">Classes Offered</div></div>
            </motion.div>
            <motion.div {...fadeUp(0.5)} className="hero-btns">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link href="/contact" className="btn-primary">📋 Enquire for Admission</Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link href="/about" className="btn-outline">Know More</Link>
              </motion.div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="hero-img-wrap"
          >
            <div className="hero-img-frame">
              <img src={require('../components/images').SCL} alt="M.D Convent School Students" />
              <div className="hero-img-overlay">
                <span className="hero-img-tag">Independence Day Celebration</span>
              </div>
            </div>
            <img src={require('../components/images').LOGO} alt="School Logo" className="hero-logo-float" />
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section style={{ background: 'var(--warm-white)', padding: '6rem 2rem' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Why Choose Us</div>
            <h2 className="section-title" style={{ margin: '0 auto' }}>Reasons Parents Trust M.D Convent</h2>
            <p className="section-desc" style={{ margin: '.8rem auto 0', textAlign: 'center' }}>
              For over four decades, families in Rajendra Nagar have chosen M.D Convent for its sincerity, affordability, and commitment to every child.
            </p>
          </motion.div>
          <div className="why-grid">
            {[
              { icon: '🏛️', title: 'Over 40 Years of Trusted Education', desc: 'Since 1981, we have built an unshakeable reputation as a reliable neighbourhood school, earning the trust of thousands of families.' },
              { icon: '👩‍🏫', title: 'Experienced & Dedicated Faculty', desc: 'Our teachers bring years of classroom experience and genuine dedication to nurturing each student\'s potential.' },
              { icon: '💸', title: 'Affordable & Inclusive Education', desc: 'Quality education within reach for every family. Our fee structure is thoughtfully kept affordable so no child is left behind.' },
              { icon: '📚', title: 'Strong Academic Foundation', desc: 'Our curriculum builds a solid base of knowledge, critical thinking and discipline — setting students up for lifelong success.' },
              { icon: '🛡️', title: 'Safe & Supportive Environment', desc: 'We ensure a caring, respectful and secure atmosphere where every student is valued, heard and encouraged to grow.' },
              { icon: '🌟', title: 'Holistic Development', desc: 'Beyond textbooks, we encourage activities and celebrations that build confidence, teamwork and a love for learning.' },
            ].map((card, i) => (
              <motion.div
                key={i}
                className="why-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -8, boxShadow: '0 20px 50px rgba(0,0,0,0.12)' }}
              >
                <div className="why-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ACTIVITIES SECTION */}
      <ActivitiesSection />

      {/* GALLERY PREVIEW */}
      <GallerySection preview={true} />

      {/* CTA STRIP */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ background: 'var(--navy)', padding: '4rem 2rem' }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#fff', fontSize: 'clamp(1.5rem,3vw,2.2rem)', marginBottom: '.5rem' }}>Ready to Enrol Your Child?</h2>
            <p style={{ color: 'rgba(255,255,255,.65)', fontSize: '1rem' }}>Admissions open for Play Group to Standard 8. Contact us today.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link href="/contact" className="btn-primary">Enquire Now →</Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link href="/about" className="btn-outline">Learn More</Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </>
  );
}
