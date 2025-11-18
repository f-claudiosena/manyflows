import { useState } from 'react';
import { Header } from '../components/Header.tsx';
import { Footer } from '../components/Footer.tsx';
import { FloatingActions } from '../components/FloatingActions.tsx';

export function Contato() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  // Simple in-page confirmation (no Chakra toast)
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="app-root">
      <Header />
      <main>
        <section style={{padding: '64px 0'}}>
          <div className="container">
            <div style={{maxWidth: 720, margin: '0 auto'}}>
              <div style={{textAlign: 'center', marginBottom: 28}}>
                <h1 style={{fontSize: 36, marginBottom: 8}}>Entre em Contato</h1>
                <p className="muted">Tem dúvidas ou sugestões? Entre em contato conosco!</p>
              </div>

              {submitted && (
                <div style={{background:'#E6FFFA', padding:12, borderRadius:8, marginBottom:16}}>
                  Mensagem enviada! Obrigado pelo contato. Entraremos em contato em breve.
                </div>
              )}

              <form className="form" onSubmit={handleSubmit} style={{background:'#fff',padding:20,borderRadius:8}}>
                <div className="form-row">
                  <label style={{display:'block',marginBottom:6}}>Nome</label>
                  <input name="name" value={formData.name} onChange={handleInputChange} placeholder="Seu nome completo" style={{width:'100%',padding:10,borderRadius:6,border:'1px solid #e6e6e6'}} />
                </div>

                <div className="form-row" style={{marginTop:12}}>
                  <label style={{display:'block',marginBottom:6}}>Email</label>
                  <input name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="seu@email.com" style={{width:'100%',padding:10,borderRadius:6,border:'1px solid #e6e6e6'}} />
                </div>

                <div className="form-row" style={{marginTop:12}}>
                  <label style={{display:'block',marginBottom:6}}>Mensagem</label>
                  <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Digite sua mensagem aqui..." rows={6} style={{width:'100%',padding:10,borderRadius:6,border:'1px solid #e6e6e6'}} />
                </div>

                <div className="form-actions" style={{marginTop:16}}>
                  <button type="submit" className="btn primary submit-btn">Enviar Mensagem</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
