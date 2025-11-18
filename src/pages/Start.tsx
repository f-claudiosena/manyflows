import { Header } from '../components/Header.tsx';
import { Footer } from '../components/Footer.tsx';
import { FloatingActions } from '../components/FloatingActions.tsx';
import { useState } from 'react';

export function Start() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="app-root">
      <Header />
      <main className="start-page">
        <section className="start-form-section">
          <div className="container start-form-container">
            <div className="start-form-wrapper">
              <div className="start-illustration">
                <img src="/hero-illustration.svg" alt="Ilustração" />
              </div>

              <div className="start-form">
                <h2>Começar Agora</h2>
                {submitted ? (
                  <div className="form-success">
                    <div className="success-icon">✓</div>
                    <h3>Obrigado!</h3>
                    <p>Você receberá um email com as instruções para começar.</p>
                  </div>
                ) : (
                  <form className="form" onSubmit={handleSubmit}>
                    <div className="form-row two-cols">
                      <label>
                        Email*
                        <input type="text" placeholder="FRANCISCO HIDNEY FERREIRA DA SILVA" required />
                      </label>
                      <label>
                        Segmento*
                        <select required>
                          <option value="">SELECIONE</option>
                          <option value="varejo">Varejo</option>
                          <option value="servicos">Serviços</option>
                          <option value="manufactura">Manufatura</option>
                          <option value="outro">Outro</option>
                        </select>
                      </label>
                    </div>

                    <div className="form-row two-cols">
                      <label>
                        Nome*
                        <input type="text" placeholder="FRANCISCO HIDNEY FERREIRA DA SILVA" required />
                      </label>
                      <label>
                        Cargo*
                        <select required>
                          <option value="">SELECIONE</option>
                          <option value="gerente">Gerente</option>
                          <option value="diretor">Diretor</option>
                          <option value="analista">Analista</option>
                          <option value="outro">Outro</option>
                        </select>
                      </label>
                    </div>

                    <div className="form-row two-cols">
                      <label>
                        Telefone*
                        <input type="tel" placeholder="FRANCISCO HIDNEY FERREIRA DA SILVA" required />
                      </label>
                      <label>
                        Setor/Unidade ou Serviços/Comunidades*
                        <select required>
                          <option value="">SELECIONE</option>
                          <option value="vendas">Vendas</option>
                          <option value="marketing">Marketing</option>
                          <option value="operacoes">Operações</option>
                          <option value="outro">Outro</option>
                        </select>
                      </label>
                    </div>

                    <div className="form-row">
                      <label>
                        Mensagem*
                        <textarea placeholder="Descreva"></textarea>
                      </label>
                    </div>

                    <div className="form-row form-actions">
                      <label className="checkbox">
                        <input type="checkbox" required /> Eu concordo em receber comunicações
                      </label>
                      <div className="submit-wrap">
                        <button className="btn primary submit-btn" type="submit">Enviar</button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
