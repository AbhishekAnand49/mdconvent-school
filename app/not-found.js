'use client';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div style={{
        minHeight: '80vh', display: 'flex', alignItems: 'center',
        justifyContent: 'center', background: 'var(--navy)',
        textAlign: 'center', padding: '2rem', paddingTop: '100px'
      }}>
        <div>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '8rem', fontWeight: 900, color: 'var(--gold)', lineHeight: 1 }}>404</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#fff', fontSize: '2rem', margin: '1rem 0 .5rem' }}>Page Not Found</h2>
          <p style={{ color: 'rgba(255,255,255,.6)', marginBottom: '2rem', fontSize: '1rem' }}>
            The page you are looking for doesn&apos;t exist or has been moved.
          </p>
          <Link href="/" className="btn-primary">← Back to Home</Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
