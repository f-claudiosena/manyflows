interface Feature {
  title: string;
  image: string;
  description: string;
}

interface FeaturesProps {
  features: Feature[];
}

export function Features({ features }: FeaturesProps) {
  return (
    <section className="features">
      <div className="container">
        <header className="section-header">
          <h2>Recursos que impulsionam sua produtividade</h2>
          <p className="muted">Descubra todas as ferramentas que o ManyFlows oferece para automatizar seus processos e aumentar a eficiência do seu trabalho.</p>
        </header>

        <div className="features-grid">
          {features.map((f, i) => (
            <div key={f.title} className={`feature-row ${i % 2 === 0 ? 'normal' : 'reverse'}`} >
              <div className="feature-image">
                <img src={f.image} alt={f.title} />
              </div>
              <div className="feature-body">
                <h3>{f.title}</h3>
                <p className="muted">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
