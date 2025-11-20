import { Header } from '../components/Header/Header.tsx';
import { Footer } from '../components/Footer/Footer.tsx';
import { FloatingActions } from '../components/FloatingActions/FloatingActions.tsx';
import { ValuesStrip } from '../components/ValuesStrip/ValuesStrip.tsx';

export function Solutions() {
  return (
    <div className="app-root">
      <Header />
      <main className="solutions-page">
        <section className="hero" style={{ padding: '100px 0' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '100px', alignItems: 'center' }}>
              <div>
                <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Nossas Soluções</h1>
                <p style={{ fontSize: '16px', color: '#6B7280', lineHeight: '1.6' }}>
                  Descubra como nossas soluções inovadoras podem transformar seu negócio.
                  Oferecemos ferramentas avançadas para gestão de feedback, integração de sistemas
                  e muito mais, garantindo eficiência e satisfação para seus clientes.
                </p>
              </div>
              <div>
                <img src="/hero-illustration.svg" alt="Solutions Illustration" style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }} />
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
