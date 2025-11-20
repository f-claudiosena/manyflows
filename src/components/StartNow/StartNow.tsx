export function StartNow() {
  return (
    <section id="start" className="start-now">
      <div className="container start-now-inner">
        <h2 className="section-title"><span className="title-accent"/>Começar Agora</h2>

        <div className="start-grid">
          <div className="start-illustration">
            <img src="/hero-illustration.svg" alt="Ilustração" />
          </div>

          <div className="start-form">
            <form className="form">
              <div className="form-row two-cols">
                <label>
                  Email*
                  <input type="email" placeholder="seu@email.com" />
                </label>
                <label>
                  Segmento*
                  <select>
                    <option>Selecione</option>
                    <option>Varejo</option>
                    <option>Serviços</option>
                  </select>
                </label>
              </div>

              <div className="form-row two-cols">
                <label>
                  Nome*
                  <input type="text" placeholder="Seu nome" />
                </label>
                <label>
                  Cargo*
                  <select>
                    <option>Selecione</option>
                    <option>Gerente</option>
                  </select>
                </label>
              </div>

              <div className="form-row two-cols">
                <label>
                  Telefone*
                  <input type="tel" placeholder="(00) 00000-0000" />
                </label>
                <label>
                  Setores/Unidades*
                  <select>
                    <option>Selecione</option>
                  </select>
                </label>
              </div>

              <div className="form-row">
                <label>
                  Mensagem
                  <textarea placeholder="Descreva"></textarea>
                </label>
              </div>

              <div className="form-row form-actions">
                <label className="checkbox">
                  <input type="checkbox" /> Eu concordo em receber comunicações
                </label>
                <div className="submit-wrap">
                  <button className="btn primary submit-btn" type="button">Enviar</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
