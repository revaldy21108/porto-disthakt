export default function SectionHeading({ eyebrow, title, description, center = false }) {
  return (
    <div className={`${center ? 'mx-auto text-center' : ''} max-w-2xl`}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h1 className="section-title text-white">{title}</h1>
      {description && <p className="mt-5 leading-7 text-slate-400">{description}</p>}
    </div>
  )
}
