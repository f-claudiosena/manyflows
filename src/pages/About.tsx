import { Header } from '../components/Header/Header.tsx';
import { Footer } from '../components/Footer/Footer.tsx';
import { FloatingActions } from '../components/FloatingActions/FloatingActions.tsx';
import { ValuesStrip } from '../components/ValuesStrip/ValuesStrip.tsx';

export function About() {
  return (
    <div className="app-root">
      <Header />
      <main className="about-page">
        <section className="hero" style={{ padding: '100px 0' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '100px', alignItems: 'center' }}>
              <div>
                <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Sobre Nós</h1>
                <p style={{ fontSize: '16px', color: '#6B7280', lineHeight: '1.6' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
              <div>
                <img src="/brazil-map.svg" alt="Brazil Map" style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }} />
              </div>
            </div>
          </div>
        </section>

        <ValuesStrip />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
