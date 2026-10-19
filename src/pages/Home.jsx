import { Link } from 'react-router-dom'
import Card from '../components/Card.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { projects, services } from '../data/content.js'

export default function Home() {
  return (
    <>
      <section className="soft-grid relative isolate overflow-hidden">
        <div className="pointer-events-none absolute -right-40 -top-32 -z-10 size-[34rem] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="section-wrap grid min-h-[calc(100svh-76px)] items-center gap-12 py-16 lg:grid-cols-[1.1fr_.9fr] lg:py-20">
          <div className="max-w-2xl">
            <p className="eyebrow mb-6">Web · IT Support · Creative</p>
            <p className="mb-3 text-lg text-slate-300">Halo, selamat datang di</p>
            <h1 className="text-5xl font-bold leading-[1.05] tracking-[-.055em] text-white sm:text-6xl lg:text-7xl">
              Revaldisthakt <span className="text-gradient">Studio.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
              Ruang untuk mengembangkan ide digital melalui website yang responsif, dukungan teknologi informasi, dan dokumentasi kreatif. Dibangun dari perjalanan belajar Revaldy di bidang komputer.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/portfolio" className="focus-ring rounded-full bg-cyan-300 px-6 py-3 font-semibold !text-black transition hover:bg-cyan-200">Lihat Portofolio ↗</Link>
              <Link to="/about" className="focus-ring rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-cyan-200/60 hover:text-cyan-100">Kenali Kami</Link>
            </div>
            <div className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-white/10 pt-6">
              <div><p className="text-2xl font-bold text-white">03</p><p className="mt-1 text-xs text-slate-500 sm:text-sm">Area layanan</p></div>
              <div><p className="text-2xl font-bold text-white">06</p><p className="mt-1 text-xs text-slate-500 sm:text-sm">Proyek belajar</p></div>
              <div><p className="text-2xl font-bold text-white">01</p><p className="mt-1 text-xs text-slate-500 sm:text-sm">Semangat berkarya</p></div>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute inset-8 rounded-[3rem] bg-cyan-300/15 blur-3xl" />
            <div className="glass-card float-slow relative mx-auto max-w-sm overflow-hidden rounded-4xl p-3 sm:p-4">
              <img src="/src/img/home-profile.png" alt="Ilustrasi profil dari portofolio asli Revaldy" className="aspect-4/5 w-full rounded-3xl object-cover object-center" />
              <div className="absolute inset-x-7 bottom-7 rounded-2xl border border-white/15 bg-slate-950/80 p-4 backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[.2em] text-cyan-200">Digital Maker</p>
                <p className="mt-1 text-lg font-semibold text-white">Revaldy Dearly Z.</p>
                <p className="mt-1 text-sm text-slate-400">Pendidikan Ilmu Komputer · UPI</p>
              </div>
            </div>
            <div className="glass-card absolute -left-2 top-10 rounded-2xl px-4 py-3 sm:-left-8"><p className="text-xs text-slate-400">Currently learning</p><p className="mt-1 font-semibold text-cyan-200">React + Tailwind</p></div>
            <div className="glass-card absolute -right-2 bottom-20 rounded-2xl px-4 py-3 sm:-right-8"><p className="text-xs text-slate-400">Main interest</p><p className="mt-1 font-semibold text-white">Technology & Creativity</p></div>
          </div>
        </div>
      </section>

      <section className="section-wrap py-20 sm:py-28">
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div><p className="eyebrow mb-3">Apa yang kami kerjakan</p><h2 className="section-title">Teknologi yang <span className="text-gradient">bermanfaat.</span></h2></div>
          <Link to="/services" className="focus-ring w-fit rounded text-sm font-semibold text-cyan-200 hover:text-white">Semua layanan ↗</Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">{services.map((service) => <Card key={service.title} {...service} />)}</div>
      </section>

      <section className="border-y border-white/5 bg-slate-900/50 py-20 sm:py-24">
        <div className="section-wrap">
          <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div><p className="eyebrow mb-3">Pilihan karya</p><h2 className="section-title">Belajar sambil <span className="text-gradient">membangun.</span></h2></div>
            <Link to="/portfolio" className="focus-ring w-fit rounded text-sm font-semibold text-cyan-200 hover:text-white">Lihat semua proyek ↗</Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{projects.slice(0, 3).map((project) => <ProjectCard key={project.title} project={project} />)}</div>
        </div>
      </section>

      <section className="section-wrap py-20 sm:py-24">
        <div className="glass-card flex flex-col items-start justify-between gap-7 rounded-4xl p-7 sm:p-10 lg:flex-row lg:items-center">
          <div className="max-w-2xl"><p className="eyebrow mb-3">Punya ide?</p><h2 className="section-title">Mari wujudkan <span className="text-gradient">proyek berikutnya.</span></h2><p className="mt-4 leading-7 text-slate-400">Ceritakan kebutuhan atau ide yang ingin kamu kembangkan.</p></div>
          <Link to="/contact" className="focus-ring shrink-0 rounded-full bg-cyan-300 px-6 py-3 font-semibold text-black! hover:bg-cyan-200">Hubungi Kami ↗</Link>
        </div>
      </section>
    </>
  )
}
