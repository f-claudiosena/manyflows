type Alignment = 'left' | 'center' | 'right';
type Variant = 'h1' | 'h2' | 'h3';

interface HeroTitleProps {
  title: string;
  alignment?: Alignment;
  variant?: Variant;
}

export function HeroTitle({ title, alignment = 'center', variant = 'h1' }: HeroTitleProps) {
  const alignmentStyles = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
  };

  const lines = title.split('\n');

  if (variant === 'h1') {
    return (
      <h1 className="hero-title" style={{ justifyContent: alignmentStyles[alignment] }}>
        {lines.map((line: string, index: number) => (
          <span key={index} className="hero-title-line">
            {line}
            {index < lines.length - 1 && <br />}
          </span>
        ))}
      </h1>
    );
  }

  if (variant === 'h2') {
    return (
      <h2 className="hero-title" style={{ justifyContent: alignmentStyles[alignment] }}>
        {lines.map((line: string, index: number) => (
          <span key={index} className="hero-title-line">
            {line}
            {index < lines.length - 1 && <br />}
          </span>
        ))}
      </h2>
    );
  }

  if (variant === 'h3') {
    return (
      <h3 className="hero-title" style={{ justifyContent: alignmentStyles[alignment] }}>
        {lines.map((line: string, index: number) => (
          <span key={index} className="hero-title-line">
            {line}
            {index < lines.length - 1 && <br />}
          </span>
        ))}
      </h3>
    );
  }

  return (
    <h1 className="hero-title" style={{ justifyContent: alignmentStyles[alignment] }}>
      {lines.map((line: string, index: number) => (
        <span key={index} className="hero-title-line">
          {line}
          {index < lines.length - 1 && <br />}
        </span>
      ))}
    </h1>
  );
}
