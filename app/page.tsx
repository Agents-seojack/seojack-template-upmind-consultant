const ctaUrl = process.env.NEXT_PUBLIC_SEOJACK_CTA_URL || 'https://seojack.net';

const logos = ['NOVA', 'QUANTA', 'ATLAS', 'KIN + CO', 'ORBIT'];
const services = [
  ['01', 'Strategy & Operations', 'Build planning rhythms, KPI systems, and operating processes that keep teams focused on the work that matters.'],
  ['02', 'Digital Transformation', 'Modernize workflows, improve customer experience, and create scalable digital systems for every growth stage.'],
  ['03', 'Product & Innovation', 'Validate ideas, prioritize roadmaps, and ship products customers actually want before the market moves.']
];
const steps = [
  ['01', 'Diagnosis', 'Assess product, market, operations, and KPIs to understand the baseline.'],
  ['02', 'Audit', 'Find opportunities, risks, and gaps across product, growth, and go-to-market.'],
  ['03', 'Roadmap', 'Create priorities, owners, objectives, and measurable deliverables.'],
  ['04', 'Execution', 'Work alongside your team to implement growth and optimization tactics.'],
  ['05', 'Iteration', 'Measure results and refine the plan through continuous improvement cycles.']
];
const posts = [
  ['January 8, 2026', 'Turning Data into Strategy', 'How better signals can sharpen your next business decision.'],
  ['January 8, 2026', '5 Ways AI Streamlines Operations', 'Practical workflows that reduce friction across growing teams.'],
  ['January 8, 2026', 'Human + Machine Balance', 'Designing AI workflows that keep experts in control.']
];

export default function Home() {
  return (
    <>
      <nav className="nav" aria-label="Primary navigation">
        <div className="container navInner">
          <a href="#top" className="brand" aria-label="Elevate home"><span className="mark" />Elevate</a>
          <div className="links" aria-label="Desktop navigation">
            <a href="#about">About</a><a href="#services">Services</a><a href="#process">Process</a><a href="#pricing">Pricing</a>
          </div>
          <a className="btn primary navCta" href={ctaUrl}>Make this template yours</a>
          <details className="mobileMenu">
            <summary aria-label="Toggle navigation menu">Menu</summary>
            <div className="mobileLinks">
              <a href="#about">About</a><a href="#services">Services</a><a href="#process">Process</a><a href="#pricing">Pricing</a><a href={ctaUrl}>Make this template yours</a>
            </div>
          </details>
        </div>
      </nav>
      <main id="top">
        <header className="hero">
          <div className="container heroGrid">
            <div>
              <p className="eyebrow">Consulting · Strategy · Sustainable Growth</p>
              <h1>Clear insights. Real strategy. Better decisions.</h1>
              <p className="lead">A premium consulting experience for founders and teams who need sharper strategy, cleaner operations, and measurable growth.</p>
              <div className="heroActions"><a href="#services" className="btn primary">View services</a><a href={ctaUrl} className="btn">Book a call</a></div>
              <div className="socialProof"><div className="avatars" aria-hidden="true"><span /><span /><span /></div><span>Trusted by 1,500+ founders, operators, and growth teams</span></div>
            </div>
            <aside className="dash" aria-label="Growth intelligence dashboard preview">
              <div className="dashHead"><strong>Growth intelligence</strong><span className="pill">Last 7 days · +49%</span></div>
              <div className="chart" aria-label="Rising weekly growth bar chart">{[32, 38, 58, 48, 72, 64, 88, 76].map((height, index) => <span key={index} className="bar" style={{ height: `${height}%` }} />)}</div>
              <div className="stats"><div><strong>95%</strong><span>client satisfaction</span></div><div><strong>20+</strong><span>operating audits</span></div><div><strong>$5M+</strong><span>revenue guided</span></div></div>
            </aside>
          </div>
        </header>
        <section className="logoSection" aria-label="Client logos"><div className="container logos">{logos.map((logo) => <div className="logo" key={logo}>{logo}</div>)}</div></section>
        <section className="about" id="about"><div className="container aboutGrid"><div className="metric"><p className="eyebrow">About us</p><strong>10+</strong><p>Years helping ambitious businesses turn messy choices into focused growth systems.</p></div><div><p className="eyebrow">Expertise built on insight & experience</p><h2>We help companies move with clarity instead of guesswork.</h2><p className="copy topSpace">Our advisory model blends market research, analytics, product strategy, and execution coaching so every recommendation becomes measurable progress.</p><p className="copy">Inspired by the Upmind Temlis structure, this template keeps the clean consultant feel while adding stronger conversion sections and SEOJack-ready CTAs.</p></div></div></section>
        <section id="services"><div className="container"><SectionHead label="Services" title="Strategy, operations, and transformation in one sharp system." copy="Choose a focused advisory track or combine services into a full growth engagement." /><div className="services">{services.map(([num, title, body]) => <article className="card" key={num}><div><div className="icon">{num}</div><h3>{title}</h3><p>{body}</p></div><a className="learn" href={ctaUrl}>Learn more →</a></article>)}</div></div></section>
        <section className="process" id="process"><div className="container"><SectionHead label="How we work" title="From diagnosis to measurable momentum." copy="A practical five-step process that moves quickly without skipping the strategy." /><div className="steps">{steps.map(([num, title, body]) => <div className="step" key={num}><div>{num}</div><h3>{title}</h3><p>{body}</p></div>)}</div></div></section>
        <section><div className="container testimonial"><p className="quote">“They brought clarity to complex problems, broke down barriers, and turned strategy into action.”</p><div className="author"><strong>John Doe</strong><span>CEO, Tech Innovations</span></div></div></section>
        <section id="pricing"><div className="container"><SectionHead label="Pricing" title="Flexible plans for every stage." copy="Clear pricing, no hidden fees. Pick the engagement that matches your goals." /><div className="pricing"><article className="price"><span className="pill">Starter Plan</span><h3>For small teams needing sharp guidance.</h3><div className="tag">$99<span>/mo</span></div><ul><li>Monthly strategy session</li><li>Process review</li><li>Actionable recommendations</li></ul><a className="btn" href={ctaUrl}>Start now</a></article><article className="price featured"><span className="pill blue">Growth Plan</span><h3>For teams improving operations or scaling up.</h3><div className="tag">$499<span>/mo</span></div><ul><li>Full strategy development</li><li>Workflow optimization</li><li>Monthly progress reviews</li></ul><a className="btn primary" href={ctaUrl}>Choose growth</a></article></div></div></section>
        <section className="blog"><div className="container"><SectionHead label="Insights" title="Latest thinking for modern operators." copy="Whether optimizing today or building for tomorrow, move faster with confidence." /><div className="posts">{posts.map(([date, title, body], index) => <article className="post" key={title}><div className={`postImg gradient${index + 1}`} role="img" aria-label={`${title} abstract gradient illustration`} /><div><span>{date}</span><h3>{title}</h3><p>{body}</p></div></article>)}</div></div></section>
        <section className="cta"><div className="container"><h2>Ready to elevate your business?</h2><p>Partner with us to validate your direction, improve operations, and scale with a strategy your team can execute.</p><a href={ctaUrl} className="btn">Make this template yours</a></div></section>
      </main>
      <footer><div className="container footer"><a href="#top" className="brand"><span className="mark" />Elevate</a><p>Make this template yours · <a href={ctaUrl}>https://seojack.net</a></p></div></footer>
    </>
  );
}

function SectionHead({ label, title, copy }: { label: string; title: string; copy: string }) {
  return <div className="sectionHead"><div><p className="eyebrow">{label}</p><h2>{title}</h2></div><p className="copy">{copy}</p></div>;
}
