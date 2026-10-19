export default function Card({ icon, title, description, tags = [] }) {
  return (
    <article className="glass-card group rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 sm:p-7">
      <div className="mb-6 grid size-12 place-items-center rounded-2xl border border-cyan-200/20 bg-cyan-200/10 text-xl font-semibold text-cyan-200 transition group-hover:bg-cyan-200 group-hover:text-slate-950">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 leading-7 text-slate-400">{description}</p>
      {tags.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">{tag}</span>)}
        </div>
      )}
    </article>
  )
}
