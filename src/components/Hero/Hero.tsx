import type { HeroProps } from './Hero';

export function Hero({ title, subtitle, ctaText, ctaHref }: HeroProps) {
  return (
    <section className="hero">
      <div className="hero-decor" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-content">
          <h1 className="hero-title">
            {title}
          </h1>
          <p className="subtitle">
            {subtitle}
          </p>

          <div className="hero-actions">
            <div className="cta-group">
              <a className="btn primary large" href={ctaHref}>{ctaText}</a>
              <a className="btn ghost" href="#demo">Ver demonstração</a>
            </div>
            <p className="muted small">Não é necessário cartão de crédito • 14 dias de teste grátis</p>
          </div>
        </div>

        <div className="hero-illustration">
          <img src="/hero-illustration.svg" alt="Ilustração" className="hero-img" />
        </div>
      </div>
    </section>
  );
}
