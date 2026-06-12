export default function SectionShell({
  id,
  title,
  subtitle,
  children,
  className = '',
  containerClass = '',
}) {
  return (
    <section id={id} className={`page-section ${className}`}>
      <div className={`page-container relative ${containerClass}`}>
        {(title || subtitle) && (
          <header className="section-header">
            {title && <h2 className="section-title">{title}</h2>}
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
