interface Benefit {
  title: string;
  icon: string;
  description: string;
}

interface BenefitsProps {
  benefits: Benefit[];
}

export function Benefits({ benefits }: BenefitsProps) {
  return (
    <section className="benefits">
      <div className="container">
        <header className="section-header">
          <h2>Por que escolher o ManyFlows?</h2>
          <p className="muted">Nossa plataforma oferece recursos poderosos para ajudar você a automatizar seus processos de forma simples e eficiente.</p>
        </header>

        <div className="benefit-grid">
          {benefits.map((b) => (
            <article key={b.title} className="benefit-card">
              <img src={b.icon} alt={b.title} className="benefit-icon" />
              <h3>{b.title}</h3>
              <p className="muted">{b.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
