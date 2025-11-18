import { Header } from '../components/Header.tsx';
import { Footer } from '../components/Footer.tsx';
import { ValuesStrip } from '../components/ValuesStrip.tsx';
import { FloatingActions } from '../components/FloatingActions.tsx';
// Removed unused component imports - homepage uses custom sections instead

export function HomeClean() {
  // homepage uses custom static sections below; data arrays were removed

  return (
    <div className="app-root">
      <Header />
      <main className="home-page">
        {/* Hero: large centered headline. Background is white per your note. */}
        <section className="home-hero">
          <div className="hero-wave" aria-hidden="true">
            {/* decorative left wave */}
            <svg width="300" height="120" viewBox="0 0 300 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M0 80 C40 20, 120 20, 160 80 C200 140, 280 140, 300 80 L300 120 L0 120 Z" fill="#ffffff" opacity="1" />
            </svg>
          </div>
          <div className="container hero-center">
            <h1 className="home-hero-title">
              Transforme feedback em vantagem
              <br />
              competitiva com leveza e
              <span className="hero-accent"> Tecnologia</span>
            </h1>
          </div>
        </section>

        {/* Teal band with features and centered emoji */}
        <section className="teal-band">
          <div className="container teal-inner">
            <div className="teal-grid">
              <div className="teal-col">
                <h3 className="teal-title">Gestão centralizada e inteligente</h3>
                <p className="teal-desc">Administre todas as etapas das suas pesquisas com controle total e eficiência.</p>
              </div>
              <div className="teal-col">
                <h3 className="teal-title">Integração via API com seu sistema</h3>
                <p className="teal-desc">Conecte com sua plataforma e receba os dados das pesquisas diretamente no seu sistema.</p>
              </div>
            </div>
            <div className="teal-emoji" aria-hidden="true">
              <div className="emoji-circle">😊</div>
            </div>
          </div>
        </section>

        {/* Features section: left bullets, right phone mock */}
        <section className="features-section">
          <div className="container features-inner">
            <div className="features-left">
              <h4 className="features-subtitle">Soluções ManyFlows</h4>
              <p className="features-lead">QRcode e Aplicativo Offline para Pesquisa de Satisfação</p>
              <ul className="features-list">
                <li>Funcionamento 100% offline pelo aplicativo</li>
                <li>Integrações de Pesquisa em segundo plano</li>
                <li>Personalização do Aplicativo</li>
                <li>Mobilidade e menos custos com QRCode</li>
                <li>Design focado na experiência do usuário</li>
              </ul>
            </div>
            <div className="features-right">
              <div className="phone-mock">
                <img src="/figma/print2.png" alt="App preview" className="phone-image" />
              </div>
            </div>
          </div>
        </section>

        {/* Icon row */}
        <section className="icon-row">
          <div className="container icon-inner">
            <div className="icons-grid">
              <div className="icon-item">Opção Ótima</div>
              <div className="icon-item">Opção Muito boa</div>
              <div className="icon-item">Opção Boa</div>
              <div className="icon-item">Opção Ruim</div>
              <div className="icon-item">Opção Péssima</div>
            </div>
          </div>
        </section>

        {/* Content CTA / docs / partners */}
        <section className="docs-cta">
          <div className="container docs-inner">
            <div className="docs-left">
              <h5>Soluções ManyFlows</h5>
              <p className="docs-lead">Realize a conexão com sua plataforma e receba os dados das pesquisas diretamente no seu sistema</p>
            </div>
            <div className="docs-right">
              <a className="btn primary" href="#">Download do PDF</a>
            </div>
          </div>
        </section>

        {/* Pink band */}
        <section className="pink-band">
          <div className="container pink-inner">
            <div className="pink-left">Acompanhe as novidades da plataforma ManyFlows pelas redes sociais</div>
            <div className="pink-cta">[App preview]</div>
          </div>
        </section>
      </main>
      <ValuesStrip />
      <Footer />
      <FloatingActions />
    </div>
  );
}
