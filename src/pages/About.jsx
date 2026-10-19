import SectionHeading from '../components/SectionHeading.jsx'
import { team } from '../data/content.js'

const values = [
  ['01', 'Terus belajar', 'Mencoba teknologi baru dengan rasa ingin tahu dan kemauan untuk memperbaiki hasil.'],
  ['02', 'Fungsional dahulu', 'Mementingkan pengalaman pengguna, struktur yang jelas, dan solusi yang benar-benar berguna.'],
  ['03', 'Kreatif dan terukur', 'Menggabungkan ide kreatif dengan proses kerja yang rapi dan mudah dikembangkan.'],
]

export default function About() {
  return (
    <>
      <section className="soft-grid border-b border-white/5 py-20 sm:py-28">
        <div className="section-wrap grid items-center gap-12 lg:grid-cols-[1fr_.8fr]">
          <SectionHeading eyebrow="Tentang Revaldisthakt" title={<>Ide sederhana, dibuat menjadi <span className="text-gradient">karya digital.</span></>} description="DISthakt Digital Studio adalah identitas proyek kreatif yang berangkat dari portofolio dan perjalanan belajar Revaldy. Fokusnya menggabungkan pengembangan web, pengetahuan IT, serta dokumentasi digital." />
          <div className="glass-card rounded-4xl p-3"><img src="/images/about-profile.png" alt="Gambar profil dari portofolio asli Revaldy" className="max-h-[440px] w-full rounded-3xl object-cover" /></div>
        </div>
      </section>

      <section className="section-wrap grid gap-12 py-20 sm:py-24 lg:grid-cols-2">
        <div><p className="eyebrow mb-4">Cerita Singkat</p><h2 className="section-title">Dari pembelajaran ke <span className="text-gradient">pengalaman.</span></h2></div>
        <div className="space-y-5 leading-8 text-slate-400">
          <p>Ketertarikan Revaldy pada komputer berkembang dari pembelajaran jaringan dan web saat bersekolah di jurusan TKJ. Pengalaman itu menjadi fondasi untuk terus mengeksplorasi teknologi, membuat antarmuka, dan menyimpan dokumentasi proyek.</p>
          <p>Saat ini, perjalanan tersebut dilanjutkan melalui studi Pendidikan Ilmu Komputer di Universitas Pendidikan Indonesia. Website ini menjadi ruang untuk merangkum minat, karya pembelajaran, dan layanan yang ingin terus dikembangkan.</p>
          <div className="rounded-2xl border border-cyan-200/15 bg-cyan-200/5 p-5"><p className="text-sm font-semibold text-cyan-100">Visi</p><p className="mt-2 text-sm leading-6 text-slate-300">Mengembangkan solusi digital yang mudah digunakan, berguna, dan terus bertumbuh bersama proses belajar.</p><p className="mt-4 text-sm font-semibold text-cyan-100">Misi</p><ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-300"><li>Membangun website yang responsif dan terstruktur.</li><li>Menerapkan pengetahuan IT untuk membantu pemecahan masalah.</li><li>Mendokumentasikan proses dan hasil karya secara kreatif.</li></ul></div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-slate-900/50 py-20 sm:py-24">
        <div className="section-wrap"><SectionHeading eyebrow="Nilai Kerja" title={<>Prinsip di balik setiap <span className="text-gradient">proyek.</span></>} center /><div className="mt-10 grid gap-4 md:grid-cols-3">{values.map(([number, title, description]) => <article key={number} className="glass-card rounded-3xl p-6"><p className="text-sm font-bold text-cyan-200">{number}</p><h3 className="mt-4 text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-400">{description}</p></article>)}</div></div>
      </section>

      <section className="section-wrap py-20 sm:py-24">
        <SectionHeading eyebrow="Profil Tim" title={<>Orang dan fokus <span className="text-gradient">kerja.</span></>} description="Saat ini studio berpusat pada Revaldy. Dua kartu lainnya menunjukkan area fokus layanan, bukan nama anggota tim tambahan." />
        <div className="mt-10 grid gap-5 md:grid-cols-3">{team.map((member) => <article key={member.name} className="glass-card rounded-3xl p-6"><div className="grid size-14 place-items-center rounded-2xl bg-cyan-200/10 text-lg font-bold text-cyan-200">{member.initials}</div><h3 className="mt-5 text-lg font-semibold">{member.name}</h3><p className="mt-1 text-sm text-cyan-200">{member.role}</p><p className="mt-4 text-sm leading-7 text-slate-400">{member.description}</p></article>)}</div>
      </section>
    </>
  )
}
