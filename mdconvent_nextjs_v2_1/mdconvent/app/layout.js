import Script from 'next/script';
import '../styles/globals.css';

export const metadata = {
  title: 'M.D Convent School – Rajendra Nagar, Patna',
  description: 'M.D Convent School, Rajendra Nagar, Patna. Trusted quality education from Play Group to Standard 8 since 1981. Affordable fee structure, experienced faculty.',
  keywords: 'MD Convent School, Rajendra Nagar Patna, school admission Patna, affordable school Patna',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon — school logo */}
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=DM+Sans:wght@300;400;500;600&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&display=swap"
          rel="stylesheet"
        />

        {/* Google Analytics GA4 — G-R0M486SJX8
            strategy="afterInteractive" loads after page is interactive
            ensuring it never blocks rendering                          */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-R0M486SJX8"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-R0M486SJX8', {
              send_page_view: true,
              cookie_flags: 'SameSite=None;Secure'
            });
          `}
        </Script>

        {/* Microsoft Clarity — w8kcjjf9t6
            strategy="afterInteractive" ensures session recording
            starts reliably after the page is loaded               */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window,document,"clarity","script","w8kcjjf9t6");
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
