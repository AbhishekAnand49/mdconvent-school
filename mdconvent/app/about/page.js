'use client';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Ticker from '../../components/Ticker';
import useScrollReveal from '../../components/useScrollReveal';
import { LOGO, IMG1, IMG2 } from '../../components/images';

export default function About() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <Ticker />

      {/* PAGE HERO */}
      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-badge">Est. 1981</div>
          <h1>About <span className="accent">M.D Convent</span></h1>
          <p>A legacy of learning, trust and community in Rajendra Nagar, Patna</p>
        </div>
      </div>

      {/* ABOUT */}
      <section style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div className="about-grid">
            <div className="about-images reveal">
              <img src={IMG1} alt="School Activity" className="about-img-main" />
              <img src={IMG2} alt="School Activity 2" className="about-img-secondary" />
              <div className="about-badge">
                <div className="yr">43+</div>
                <div className="yr-lbl">Years of<br />Excellence</div>
              </div>
            </div>
            <div className="reveal" style={{ paddingTop: '1rem' }}>
              <div className="section-label">About Our School</div>
              <h2 className="section-title">A Legacy of Learning in Patna</h2>
              <p className="about-intro">
                Founded in 1981, M.D Convent School has grown to become one of the most trusted
                educational institutions in Rajendra Nagar, Patna. We provide quality, value-based
                education that prepares young learners for life, not just examinations.
              </p>
              <p className="about-intro">
                Our school serves families from all walks of life, with a strong emphasis on
                affordability, inclusiveness, and genuine care for each child&apos;s growth.
              </p>
              <div className="about-points">
                <div className="about-point"><span>🎓</span><p>Quality academics from Play Group to Standard 8</p></div>
                <div className="about-point"><span>💰</span><p>Affordable fee structure accessible to all families</p></div>
                <div className="about-point"><span>👨‍🏫</span><p>Experienced and dedicated teaching faculty</p></div>
                <div className="about-point"><span>🌱</span><p>Focus on character, discipline &amp; holistic development</p></div>
                <div className="about-point"><span>🤝</span><p>Trusted by generations of Patna families since 1981</p></div>
                <div className="about-point"><span>🏫</span><p>Safe, welcoming and supportive school environment</p></div>
              </div>
              <div className="about-info-strip">
                <div className="info-item"><span className="lbl">Principal</span><span className="val">Awadh Kishor Prasad</span></div>
                <div className="info-item"><span className="lbl">Classes</span><span className="val">Play Group – Std. 8</span></div>
                <div className="info-item"><span className="lbl">Medium</span><span className="val">Hindi &amp; English</span></div>
                <div className="info-item"><span className="lbl">Est.</span><span className="val">1981</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPAL */}
      <section className="principal-section" id="principal">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }} className="reveal">
            <div className="section-label" style={{ justifyContent: 'center', color: 'var(--gold-light)' }}>
              Message from the Principal
            </div>
            <h2 className="section-title" style={{ color: '#fff', margin: '0 auto' }}>A Word from Our Principal</h2>
          </div>
          <div className="principal-grid reveal">
            <div style={{ textAlign: 'center' }}>
              <div className="principal-avatar">🎓</div>
              <div className="principal-name">Awadh Kishor Prasad</div>
              <div className="principal-title-tag">Principal, M.D Convent School</div>
            </div>
            <div className="principal-message-wrap">
              <div className="quote-mark">&ldquo;</div>
              <p className="principal-message">
                At M.D Convent School, we believe every child carries within them the seeds of greatness.
                Our role as educators is to nurture those seeds with patience, care, and knowledge.
                Since 1981, our school has stood as a pillar of affordable, quality education in
                Rajendra Nagar. We are not just a school — we are a family. I warmly welcome you
                to be a part of our ever-growing journey of learning, values, and achievement.
              </p>
              <div className="principal-sign">— Awadh Kishor Prasad, Principal</div>
            </div>
          </div>
        </div>
      </section>

      {/* MILESTONES */}
      <section style={{ background: 'var(--warm-white)' }} id="milestones">
        <div className="container">
          <div className="reveal" style={{ maxWidth: '600px' }}>
            <div className="section-label">Our Journey</div>
            <h2 className="section-title">Four Decades of Milestones</h2>
            <p className="section-desc">From a modest beginning to a cherished institution — the story of M.D Convent School.</p>
          </div>
          <div className="timeline reveal">
            {[
              { year: '1981', title: 'Foundation – A School is Born', desc: 'M.D Convent School was established in Rajendra Nagar, Patna with a vision to provide accessible, quality education to neighbourhood children. Starting small but committed, the school planted deep roots in the community.' },
              { year: '1990s', title: 'Growing Community Trust', desc: 'Through consistent academic focus and a caring environment, M.D Convent earned a strong reputation. Enrolment grew steadily as parents valued the school\'s affordability and dedicated teaching.' },
              { year: '2000s', title: 'Expanding Classes & Strengthening Curriculum', desc: 'The school expanded offerings up to Standard 8. Co-curricular activities and cultural celebrations became a cornerstone of school life, shaping well-rounded students.' },
              { year: '2010s', title: 'A Second Generation of Learners', desc: 'Children of former students began enrolling — a testament to the multigenerational trust earned. Principal Awadh Kishor Prasad continued leading with dedication and purpose.' },
              { year: '2025', title: 'Continuing the Legacy', desc: 'Today, M.D Convent remains committed to quality, affordability, and care. With over 40 years of service to Rajendra Nagar, the school continues as a beacon of learning in Patna.' },
            ].map((item, i) => (
              <div className="timeline-item" key={i}>
                <div className="timeline-dot" />
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-title">{item.title}</div>
                <div className="timeline-desc">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features-section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }} className="reveal">
            <div className="section-label" style={{ justifyContent: 'center', color: 'var(--gold-light)' }}>What We Stand For</div>
            <h2 className="section-title" style={{ color: '#fff', margin: '0 auto' }}>Our Core Commitments</h2>
          </div>
          <div className="features-grid">
            {[
              { icon: '💰', title: 'Affordable Fee Structure', desc: 'We offer an affordable fee structure that makes quality education accessible to every family, regardless of financial background.' },
              { icon: '🧑‍🏫', title: 'Expert & Caring Faculty', desc: 'Our teachers are experienced professionals who genuinely care — providing personal attention and meaningful guidance to every student.' },
              { icon: '❤️', title: 'Trusted for 40+ Years', desc: 'Thousands of families have placed their trust in M.D Convent since 1981. Our continued presence reflects that faith.' },
              { icon: '📖', title: 'Strong Academic Foundation', desc: 'We focus on core skills — literacy, numeracy, reasoning and discipline — that serve students for a lifetime.' },
              { icon: '🌿', title: 'Values-Based Education', desc: 'Alongside academics, we instil values of respect, honesty and responsibility, shaping students into caring individuals.' },
              { icon: '🎉', title: 'Active School Culture', desc: 'From Independence Day to cultural programmes, our school life is vibrant and engaging, making learning a joyful experience.' },
            ].map((f, i) => (
              <div className="feature-card reveal" key={i}>
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
