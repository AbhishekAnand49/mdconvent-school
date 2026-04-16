'use client';
import { motion } from 'framer-motion';

const activities = [
  { icon: '🎨', title: 'Art & Craft', desc: 'Students express creativity through drawing, painting, and handcraft activities that develop fine motor skills and imagination.', color: '#FF6B6B', bg: '#FFF0F0', border: '#FFD0D0' },
  { icon: '📖', title: 'Storytelling', desc: 'Interactive storytelling sessions build vocabulary, listening skills and a love for reading from an early age.', color: '#4ECDC4', bg: '#F0FFFE', border: '#C0F0ED' },
  { icon: '👥', title: 'Group Learning', desc: 'Collaborative activities teach children teamwork, communication and problem-solving through peer interaction.', color: '#45B7D1', bg: '#F0F9FF', border: '#C0E8F5' },
  { icon: '✏️', title: 'Classroom Activities', desc: 'Engaging in-class exercises like quizzes, worksheets and board activities make learning interactive and fun.', color: '#96CEB4', bg: '#F0FFF6', border: '#C0EDD4' },
  { icon: '🎵', title: 'Music & Rhymes', desc: 'Nursery rhymes, patriotic songs and simple musical activities develop rhythm, memory and language skills.', color: '#e8a020', bg: '#FFFEF0', border: '#FFF0A0' },
  { icon: '🏃', title: 'Outdoor Play', desc: 'Structured outdoor time with games and physical activities keeps children healthy, active and socially engaged.', color: '#A8E6CF', bg: '#F0FFF8', border: '#C0F0DA' },
];

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const cardVariants = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } };

export default function ActivitiesSection() {
  return (
    <section style={{ background: 'linear-gradient(180deg, var(--warm-white) 0%, var(--cream) 100%)', padding: '6rem 2rem', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.04, backgroundImage: 'radial-gradient(circle, #0d2545 1px, transparent 1px)', backgroundSize: '30px 30px', pointerEvents: 'none' }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Beyond Textbooks</div>
          <h2 className="section-title" style={{ margin: '0 auto', textAlign: 'center' }}>Learning Beyond Books</h2>
        </motion.div>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }} style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 3.5rem', fontSize: '1.05rem', lineHeight: 1.75, color: 'var(--text-mid)' }}>
          At M.D Convent, we believe education is more than marks. Our daily activities nurture creativity, confidence and character in every child.
        </motion.p>
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {activities.map((activity, i) => (
            <motion.div key={i} variants={cardVariants} whileHover={{ y: -8, boxShadow: '0 20px 50px rgba(0,0,0,0.12)', transition: { duration: 0.3 } }} style={{ background: activity.bg || '#fff', border: `1.5px solid ${activity.border || 'var(--border)'}`, borderRadius: '16px', padding: '2rem 1.8rem', cursor: 'default', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: activity.color, borderRadius: '16px 16px 0 0' }} />
              <motion.div whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.4 } }} style={{ width: '64px', height: '64px', borderRadius: '16px', background: `${activity.color}22`, border: `2px solid ${activity.color}44`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', marginBottom: '1.2rem' }}>
                {activity.icon}
              </motion.div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.15rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.7rem' }}>{activity.title}</h3>
              <p style={{ fontSize: '0.88rem', lineHeight: 1.7, color: 'var(--text-mid)' }}>{activity.desc}</p>
              <div style={{ position: 'absolute', bottom: '-10px', right: '-10px', width: '60px', height: '60px', borderRadius: '50%', background: `${activity.color}15`, pointerEvents: 'none' }} />
            </motion.div>
          ))}
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} style={{ marginTop: '4rem', background: 'var(--navy)', borderRadius: '20px', padding: '2.5rem 3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem', boxShadow: '0 20px 60px rgba(13,37,69,0.2)' }}>
          <div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', fontWeight: 700, color: '#fff', marginBottom: '0.4rem' }}>Every Child Deserves to Shine ✨</div>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.95rem' }}>Enrol your child and watch them grow — academically and personally.</p>
          </div>
          <motion.a href="/contact" whileHover={{ scale: 1.05, boxShadow: '0 8px 24px rgba(232,160,32,0.4)' }} whileTap={{ scale: 0.97 }} style={{ background: 'var(--gold)', color: 'var(--navy)', fontWeight: 700, fontSize: '0.95rem', padding: '14px 32px', borderRadius: '10px', textDecoration: 'none', display: 'inline-block', whiteSpace: 'nowrap' }}>
            Enquire for Admission →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
