'use client';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Ticker from '../../components/Ticker';
import GallerySection from '../../components/GallerySection';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Gallery() {
  return (
    <>
      <Navbar />
      <Ticker />

      {/* PAGE HERO */}
      <div className="page-hero">
        <div className="page-hero-inner">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="page-hero-badge">School Life</div>
            <h1>Our <span className="accent">Gallery</span></h1>
            <p>Moments, memories and milestones from M.D Convent School</p>
          </motion.div>
        </div>
      </div>

      {/* FULL GALLERY with filter */}
      <GallerySection preview={false} />

      {/* CTA */}
      <section style={{ background: 'var(--navy)', padding: '4rem 2rem', textAlign: 'center' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#fff', fontSize: 'clamp(1.5rem,3vw,2rem)', marginBottom: '.8rem' }}>
              Be Part of Our Story
            </h2>
            <p style={{ color: 'rgba(255,255,255,.65)', marginBottom: '2rem', fontSize: '1rem' }}>
              Enrol your child at M.D Convent and create memories that last a lifetime.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} style={{ display: 'inline-block' }}>
              <Link href="/contact" className="btn-primary">Enquire for Admission →</Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
