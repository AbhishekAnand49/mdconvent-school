'use client';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Ticker from '../../components/Ticker';
import useScrollReveal from '../../components/useScrollReveal';

export default function Contact() {
  useScrollReveal();

  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [formData, setFormData] = useState({
    parent_name: '', contact_number: '', email: '',
    student_name: '', class_sought: '', message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://formspree.io/f/mjgpzaqn', {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          _subject: 'New Admission Enquiry – M.D Convent School'
        }),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ parent_name: '', contact_number: '', email: '', student_name: '', class_sought: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <Navbar />
      <Ticker />

      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-badge">We&apos;d Love to Hear from You</div>
          <h1>Contact <span className="accent">Us</span></h1>
          <p>Reach out for admissions, fee details or any questions about M.D Convent School</p>
        </div>
      </div>

      {/* CONTACT */}
      <section style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div className="reveal" style={{ marginBottom: '2.5rem' }}>
            <div className="section-label">Get in Touch</div>
            <h2 className="section-title">Contact &amp; Admissions</h2>
            <p className="section-desc">We respond within 1–2 working days. You can also visit us at school during working hours.</p>
          </div>

          <div className="contact-grid">
            {/* INFO */}
            <div className="reveal">
              <div className="contact-info-title">School Information</div>
              {[
                { icon: '📍', label: 'Address', val: 'Rajendra Nagar, Road No. 13-A,\nPatna – 800016, Bihar' },
                { icon: '✉️', label: 'Email', val: 'mdconvent49@gmail.com' },
                { icon: '🎓', label: 'Classes Offered', val: 'Play Group to Standard 8' },
                { icon: '🕐', label: 'School Timing', val: 'Monday – Saturday | 7:30 AM – 1:30 PM' },
                { icon: '👤', label: 'Principal', val: 'Awadh Kishor Prasad' },
              ].map((d, i) => (
                <div className="contact-detail" key={i}>
                  <div className="icon-box">{d.icon}</div>
                  <div>
                    <div className="lbl">{d.label}</div>
                    <div className="val" style={{ whiteSpace: 'pre-line' }}>{d.val}</div>
                  </div>
                </div>
              ))}

              <div style={{ marginTop: '1.5rem', padding: '1.5rem', background: 'var(--navy)', borderRadius: '10px', color: 'rgba(255,255,255,.7)' }}>
                <div style={{ color: 'var(--gold)', fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: '1rem', marginBottom: '.5rem' }}>
                  💰 Affordable Admissions
                </div>
                <p style={{ fontSize: '.85rem', lineHeight: 1.65 }}>
                  We offer a transparent, affordable fee structure. Contact us to learn more
                  about the admission process and fee details for each class.
                </p>
              </div>
            </div>

            {/* FORM */}
            <div className="contact-form-box reveal">
              <h3>Admission Enquiry Form</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Parent / Guardian Name *</label>
                    <input type="text" name="parent_name" value={formData.parent_name} onChange={handleChange} placeholder="Your full name" required />
                  </div>
                  <div className="form-group">
                    <label>Contact Number *</label>
                    <input type="tel" name="contact_number" value={formData.contact_number} onChange={handleChange} placeholder="+91 XXXXX XXXXX" required />
                  </div>
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Student Name *</label>
                    <input type="text" name="student_name" value={formData.student_name} onChange={handleChange} placeholder="Child's name" required />
                  </div>
                  <div className="form-group">
                    <label>Class Seeking Admission *</label>
                    <select name="class_sought" value={formData.class_sought} onChange={handleChange} required>
                      <option value="">Select Class</option>
                      {['Play Group','Nursery','LKG','UKG','Standard I','Standard II','Standard III','Standard IV','Standard V','Standard VI','Standard VII','Standard VIII'].map(c => (
                        <option key={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label>Message / Query</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Any questions about admission, fee structure, or the school…" />
                </div>

                <button type="submit" className="form-submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending...' : status === 'success' ? 'Submitted!' : 'Submit Enquiry →'}
                </button>

                {status === 'success' && (
                  <div style={{ marginTop: '1rem', padding: '12px 16px', background: '#e6f4ea', border: '1px solid #a8d5b5', borderRadius: '8px', color: '#2d6a4f', fontSize: '.88rem', fontWeight: 600, textAlign: 'center' }}>
                    ✅ Thank you! Your enquiry has been sent. We will contact you within 1–2 working days.
                  </div>
                )}
                {status === 'error' && (
                  <div style={{ marginTop: '1rem', padding: '12px 16px', background: '#fdecea', border: '1px solid #f5c6c2', borderRadius: '8px', color: '#c0392b', fontSize: '.88rem', fontWeight: 600, textAlign: 'center' }}>
                    ❌ Something went wrong. Please email us at <strong>mdconvent49@gmail.com</strong>
                  </div>
                )}
                <p style={{ fontSize: '.75rem', color: 'var(--text-light)', marginTop: '.8rem', textAlign: 'center' }}>
                  We respond within 1–2 working days. You can also email us at <strong>mdconvent49@gmail.com</strong>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
