import Card from '../components/Card.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { services } from '../data/content.js'

const process = [
  ['01', 'Pahami kebutuhan', 'Menentukan tujuan, audiens, dan fitur utama sebelum mulai mengerjakan.'],
  ['02', 'Rancang solusi', 'Menyusun struktur halaman, komponen, dan prioritas pekerjaan.'],
  ['03', 'Bangun & evaluasi', 'Menerapkan solusi, menguji tampilan responsif, lalu memperbaiki bagian yang diperlukan.'],
]

export default function Services() {
  return (
    <>
      <section className="soft-grid border-b border-white/5 py-20 sm:py-28">
        <div className="section-wrap"><SectionHeading eyebrow="Layanan" title={<>Solusi digital untuk ide yang <span className="text-gradient">ingin berkembang.</span></>} description="Tiga area utama yang dikembangkan melalui pembelajaran, eksplorasi, dan pengerjaan proyek." /></div>
      </section>
      <section className="section-wrap py-16 sm:py-20">
        <div className="grid gap-5 md:grid-cols-3">{services.map((service) => <Card key={service.title} {...service} />)}</div>
        <div className="mt-12 rounded-3xl border border-amber-200/20 bg-amber-100/5 p-5 text-sm leading-7 text-slate-300"><strong className="text-amber-100">Catatan:</strong> Website ini merupakan profil pembelajaran dan portofolio. Daftar layanan menjelaskan bidang minat dan kemampuan yang sedang dikembangkan, bukan klaim perusahaan besar atau layanan profesional bersertifikat.</div>
      </section>
      <section className="border-y border-white/5 bg-slate-900/50 py-20 sm:py-24">
        <div className="section-wrap"><SectionHeading eyebrow="Cara kerja" title={<>Sederhana, jelas, <span className="text-gradient">bertahap.</span></>} center /><div className="mt-10 grid gap-5 md:grid-cols-3">{process.map(([number, title, description]) => <div key={number} className="glass-card rounded-3xl p-6"><p className="text-3xl font-bold text-cyan-200/70">{number}</p><h3 className="mt-5 text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-400">{description}</p></div>)}</div></div>
      </section>
    </>
  )
}
