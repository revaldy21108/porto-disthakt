import ProjectCard from '../components/ProjectCard.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { projects } from '../data/content.js'

export default function Portfolio() {
  return (
    <>
      <section className="soft-grid border-b border-white/5 py-20 sm:py-28">
        <div className="section-wrap">
          <SectionHeading eyebrow="Portofolio & galeri" title={<>Proses belajar, menjadi <span className="text-gradient">kumpulan karya.</span></>} description="Pilihan dokumentasi dari materi kejuruan dan proyek pembelajaran yang sebelumnya dikembangkan. Pilih tautan di setiap kartu untuk membaca referensi terkait." />
          <div className="mt-7 max-w-2xl">
            <p className="leading-7 text-slate-300">Ingin menjelajahi karya dan eksperimen digital lainnya? Kunjungi Situs Google saya untuk melihat proyek serta perkembangan terbaru lainnya.</p>
            <a href="https://sites.google.com/view/revaldy21108" target="_blank" rel="noreferrer" className="focus-ring mt-5 inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 font-semibold text-black! transition hover:bg-cyan-200">Portofolio Selengkapnya <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>
      <section className="section-wrap py-16 sm:py-20">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3"><p className="text-sm text-slate-400">{projects.length} dokumentasi proyek pembelajaran</p><span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">Data ditampilkan dari array JavaScript</span></div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{projects.map((project) => <ProjectCard key={project.title} project={project} />)}</div>
      </section>
    </>
  )
}
