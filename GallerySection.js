'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { GALLERY_IMAGES } from './placeholders';
import { IMG1, IMG2, SCL } from './images';

// Merge real photos with illustrated placeholders
const ALL_PHOTOS = [
  { src: SCL,                        caption: 'Independence Day Celebration', category: 'Events',     wide: true  },
  { src: GALLERY_IMAGES[0].src,      caption: 'Classroom Learning',          category: 'Academics',  wide: false },
  { src: IMG1,                       caption: 'Morning Assembly',            category: 'Daily Life', wide: false },
  { src: GALLERY_IMAGES[1].src,      caption: 'Group Study Session',         category: 'Learning',   wide: true  },
  { src: IMG2,                       caption: 'Cultural Activity',           category: 'Activities', wide: false },
  { src: GALLERY_IMAGES[2].src,      caption: 'Art & Craft',                 category: 'Activities', wide: false },
  { src: GALLERY_IMAGES[3].src,      caption: 'Teacher Guidance',            category: 'Faculty',    wide: true  },
  { src: GALLERY_IMAGES[4].src,      caption: 'Morning Assembly',            category: 'Events',     wide: false },
  { src: GALLERY_IMAGES[5].src,      caption: 'Storytelling Circle',         category: 'Activities', wide: false },
  { src: IMG1,                       caption: 'School Events',               category: 'Events',     wide: false },
  { src: GALLERY_IMAGES[6].src,      caption: 'Outdoor Activities',          category: 'Sports',     wide: true  },
  { src: IMG2,                       caption: 'Annual Celebration',          category: 'Events',     wide: false },
];

const CATEGORIES = ['All', 'Events', 'Academics', 'Activities', 'Daily Life', 'Faculty', 'Sports'];

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: 'easeOut' }
  })
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } }
};

export default function GallerySection({ preview = false }) {
  const [active, setActive] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = active === 'All'
    ? ALL_PHOTOS
    : ALL_PHOTOS.filter(p => p.category === active);

  const photos = preview ? ALL_PHOTOS.slice(0, 6) : filtered;

  return (
    <section style={{ background: 'var(--cream)', padding: '5rem 2rem' }}>
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '2.5rem' }}
        >
          <div className="section-label">School Life</div>
          <h2 className="section-title">Moments at M.D Convent</h2>
          <p className="section-desc">
            A glimpse into the vibrant daily life, celebrations and activities
            that make our school community special.
          </p>
        </motion.div>

        {/* Category Filter — only on full gallery page */}
        {!preview && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}
          >
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                style={{
                  padding: '7px 18px',
                  borderRadius: '50px',
                  border: '2px solid',
                  borderColor: active === cat ? 'var(--gold)' : 'var(--border)',
                  background: active === cat ? 'var(--gold)' : '#fff',
                  color: active === cat ? 'var(--navy)' : 'var(--text-mid)',
                  fontWeight: 600,
                  fontSize: '0.82rem',
                  cursor: 'pointer',
                  transition: 'all 0.25s',
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        )}

        {/* Masonry-style Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridAutoRows: '220px',
            gap: '14px',
          }}
        >
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              whileHover={{ scale: 1.02, zIndex: 2 }}
              transition={{ duration: 0.3 }}
              onClick={() => setLightbox(photo)}
              style={{
                gridColumn: photo.wide ? 'span 2' : 'span 1',
                position: 'relative',
                borderRadius: '14px',
                overflow: 'hidden',
                cursor: 'pointer',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                border: '2px solid rgba(255,255,255,0.8)',
              }}
            >
              <img
                src={photo.src}
                alt={photo.caption}
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.5s ease',
                }}
              />
              {/* Hover overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(13,37,69,0.85) 0%, rgba(13,37,69,0.2) 60%, transparent 100%)',
                  display: 'flex', flexDirection: 'column',
                  justifyContent: 'flex-end', padding: '1.2rem',
                }}
              >
                <span style={{
                  fontSize: '0.65rem', fontWeight: 700,
                  color: 'var(--gold)', textTransform: 'uppercase',
                  letterSpacing: '0.1em', marginBottom: '4px'
                }}>
                  {photo.category}
                </span>
                <span style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 600 }}>
                  {photo.caption}
                </span>
              </motion.div>

              {/* Category pill */}
              <div style={{
                position: 'absolute', top: '10px', left: '10px',
                background: 'rgba(255,255,255,0.92)',
                borderRadius: '20px', padding: '3px 10px',
                fontSize: '0.65rem', fontWeight: 700,
                color: 'var(--navy)', letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}>
                {photo.category}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View all button on preview */}
        {preview && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ textAlign: 'center', marginTop: '2.5rem' }}
          >
            <a href="/gallery" className="btn-primary" style={{ textDecoration: 'none' }}>
              View Full Gallery →
            </a>
          </motion.div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setLightbox(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(0,0,0,0.9)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '2rem', cursor: 'pointer',
          }}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            onClick={e => e.stopPropagation()}
            style={{
              position: 'relative', maxWidth: '800px', width: '100%',
              borderRadius: '16px', overflow: 'hidden',
              boxShadow: '0 30px 80px rgba(0,0,0,0.5)',
            }}
          >
            <img src={lightbox.src} alt={lightbox.caption} style={{ width: '100%', display: 'block' }} />
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              background: 'linear-gradient(transparent, rgba(13,37,69,0.9))',
              padding: '2rem 1.5rem 1.5rem',
            }}>
              <div style={{ color: 'var(--gold)', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '4px' }}>{lightbox.category}</div>
              <div style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 600 }}>{lightbox.caption}</div>
            </div>
            <button
              onClick={() => setLightbox(null)}
              style={{
                position: 'absolute', top: '12px', right: '12px',
                background: 'rgba(255,255,255,0.15)', border: 'none',
                color: '#fff', width: '36px', height: '36px',
                borderRadius: '50%', cursor: 'pointer', fontSize: '1.1rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backdropFilter: 'blur(4px)',
              }}
            >✕</button>
          </motion.div>
        </motion.div>
      )}

      <style>{`
        @media(max-width:768px) {
          .gallery-motion-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media(max-width:480px) {
          .gallery-motion-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
