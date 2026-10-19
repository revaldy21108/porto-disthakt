export default function ProjectCard({ project }) {
  return (
    <article className="glass-card group overflow-hidden rounded-3xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40">
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-800">
        <img src={project.image} alt={project.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-slate-950/75 px-3 py-1 text-xs text-cyan-100 backdrop-blur">{project.category}</span>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        <p className="mt-3 min-h-[5rem] text-sm leading-6 text-slate-400">{project.description}</p>
        <a href={project.link} target="_blank" rel="noreferrer" className="focus-ring mt-4 inline-flex rounded text-sm font-semibold text-cyan-200 hover:text-white">
          Pelajari topik ↗
        </a>
      </div>
    </article>
  )
}
