export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-columns">
          <div className="footer-col">
            <img src="/logo.svg" alt="ManyFlows" style={{height:36, marginBottom:12}} />
            <p className="muted">Transformando processos em fluxos eficientes.</p>
          </div>

          <div className="footer-col">
            <h4>Links do site</h4>
            <ul>
              <li><a href="#">Inicial</a></li>
              <li><a href="#">Sobre Nós</a></li>
              <li><a href="/contato">Contato</a></li>
              <li><a href="#">Soluções</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contatos</h4>
            <ul className="contacts">
              <li><span className="icon phone" aria-hidden></span><span className="contact-text">(85) 3212-0237</span></li>
              <li><span className="icon mail" aria-hidden></span><span className="contact-text">contato@manyflows.com.br</span></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Institucional</h4>
            <ul>
              <li>Termos de uso</li>
              <li>Política de privacidade</li>
              <li>Política de cookies</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bar">
        <div className="container footer-bar-inner">
          <div className="copyright">ManyFlows © 2025 | Developed by Emolus</div>
        </div>
      </div>
    </footer>
  );
}
