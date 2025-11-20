export function FloatingActions() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="floating-actions">
      <img
        src="/up-site.svg"
        alt="Voltar ao topo"
        className="up-button"
        onClick={scrollToTop}
      />
      <img
        src="/emoji.svg"
        alt="Emoji"
        className="emoji-icon"
      />
    </div>
  );
}
