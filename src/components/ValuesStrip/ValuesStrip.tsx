export function ValuesStrip() {
  const panels = [
    {
      color: '#FF5780',
      barColor: '#FFD84D',
      title: 'Empatia',
      text: 'Por trás de cada resposta há uma pessoa. Nosso sistema é pensado para captar sentimentos, expectativas e necessidades com sensibilidade.'
    },
    {
      color: '#2ED3B5',
      barColor: '#FFD84D',
      title: 'Inovação',
      text: 'Estamos sempre buscando novas formas de transformar feedback em ação, sendo o princípio para tornar experiências reais ainda melhores e marcantes.'
    },
    {
      color: '#FFAB48',
      barColor: '#FF5A92',
      title: 'Colaboração',
      text: 'Trabalhamos lado a lado com nossos clientes, entendendo seus desafios e contribuindo com soluções que realmente fazem a diferença.'
    }
  ];

  return (
    <section className="values-strip">
      <div className="container values-strip-inner">
        {panels.map((p) => (
          <div className="values-panel" key={p.title} style={{ background: p.color }}>
            <div className="values-panel-inner">
              <div className="values-panel-heading">
                {/* small vertical bar before the title to match the artboard */}
                <span className="values-title-bar" style={{ background: p.barColor || '#FFD84D' }} />
                <div className="values-panel-title">{p.title}</div>
              </div>
              <div className="values-panel-text">{p.text}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
