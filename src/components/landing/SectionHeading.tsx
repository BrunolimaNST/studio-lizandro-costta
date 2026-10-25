interface SectionHeadingProps {
  id: string
  title: string
  subtitle?: string
}

/**
 * Cabeçalho reutilizável de seções (título e subtítulo) com identificador
 * de acessibilidade vinculado via aria-labelledby.
 */
export function SectionHeading({ id, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <h2 id={id} className="section-heading__title">
        {title}
      </h2>
      {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
    </div>
  )
}
