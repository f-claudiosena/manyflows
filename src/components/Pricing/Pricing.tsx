import type { PricingProps } from './Pricing';

export function Pricing({ plans }: PricingProps) {
  return (
    <section className="pricing">
      <div className="container">
        <header className="section-header">
          <h2>Planos para cada necessidade</h2>
          <p className="muted">Escolha o plano ideal para o seu negócio e comece a automatizar seus processos hoje mesmo.</p>
        </header>

        <div className="plans">
          {plans.map((p) => (
            <div key={p.name} className={`plan-card ${p.popular ? 'popular' : ''}`}>
              {p.popular && <div className="ribbon">Mais Popular</div>}
              <h3>{p.name}</h3>
              <div className="price">{p.price} {p.price !== 'Grátis' && <span className="per">/mês</span>}</div>
              <p className="muted">{p.description}</p>
              <ul className="plan-features">
                {p.features.map((f) => (
                  <li key={f} className="plan-feature">{f}</li>
                ))}
              </ul>
              <a className={`btn ${p.popular ? 'primary' : 'ghost'}`} href="#start">Começar agora</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
