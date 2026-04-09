export default function Ticker() {
  const items = [
    'Admissions Open – Play Group to Std. 8',
    'Est. 1981 – Over 40 Years of Trusted Education',
    'Affordable Fee Structure for All Families',
    'Experienced & Dedicated Faculty',
    'Safe & Supportive Learning Environment',
    'Admissions Open – Play Group to Std. 8',
    'Est. 1981 – Over 40 Years of Trusted Education',
    'Affordable Fee Structure for All Families',
    'Experienced & Dedicated Faculty',
    'Safe & Supportive Learning Environment',
  ];
  return (
    <div className="ticker">
      <div className="ticker-inner">
        {items.map((item, i) => <span key={i}>{item}</span>)}
      </div>
    </div>
  );
}
