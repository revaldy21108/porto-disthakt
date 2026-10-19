import { useState } from 'react'
import SectionHeading from '../components/SectionHeading.jsx'

const initialForm = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('')

  function handleChange(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }))
    if (status) setStatus('')
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('Mohon lengkapi nama, email, dan pesan terlebih dahulu.')
      return
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(form.email)) {
      setStatus('Format email belum valid. Periksa kembali alamat emailmu.')
      return
    }
    setStatus('Validasi berhasil! Form ini masih berupa demo dan belum mengirim pesan ke server.')
    setForm(initialForm)
  }

  return (
    <>
      <section className="soft-grid border-b border-white/5 py-20 sm:py-28">
        <div className="section-wrap"><SectionHeading eyebrow="Kontak" title={<>Punya pertanyaan atau <span className="text-gradient">ide kolaborasi?</span></>} description="Gunakan formulir untuk mencoba validasi kontak, atau kunjungi tautan sosial yang tersedia." /></div>
      </section>
      <section className="section-wrap grid gap-8 py-16 sm:py-20 lg:grid-cols-[.75fr_1.25fr]">
        <aside className="space-y-4">
          <div className="glass-card rounded-3xl p-6"><p className="eyebrow">Informasi</p><h2 className="mt-3 text-xl font-semibold">Revaldy Dearly Zaliandy</h2><p className="mt-2 text-sm leading-7 text-slate-400">Mahasiswa Pendidikan Ilmu Komputer · Universitas Pendidikan Indonesia</p><div className="mt-6 space-y-4 text-sm"><div><p className="text-xs uppercase tracking-wider text-slate-500">Lokasi</p><p className="mt-1 text-slate-200">Bandung, Jawa Barat, Indonesia</p></div><div><p className="text-xs uppercase tracking-wider text-slate-500">GitHub</p><a className="focus-ring mt-1 inline-block rounded text-cyan-200 hover:text-white" href="https://github.com/revaldy21108/porto-disthakt" target="_blank" rel="noreferrer">github.com/revaldy21108 ↗</a></div><div><p className="text-xs uppercase tracking-wider text-slate-500">Website</p><a className="focus-ring mt-1 inline-block rounded text-cyan-200 hover:text-white" href="https://sites.google.com/view/revaldy21108" target="_blank" rel="noreferrer">Portofolio Google Sites ↗</a></div></div></div>
          <div className="rounded-3xl border border-white/10 p-6"><p className="font-semibold">Terhubung secara online</p><div className="mt-4 flex flex-wrap gap-3"><a href="https://github.com/revaldy21108" target="_blank" rel="noreferrer" className="focus-ring rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 hover:border-cyan-200/50 hover:text-cyan-100">GitHub ↗</a><a href="https://sites.google.com/view/revaldy21108" target="_blank" rel="noreferrer" className="focus-ring rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 hover:border-cyan-200/50 hover:text-cyan-100">Website ↗</a></div></div>
        </aside>
        <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-6 sm:p-8">
          <h2 className="text-2xl font-semibold">Kirim pesan</h2>
          <p className="mt-2 text-sm leading-6 text-slate-400">Semua kolom wajib diisi. Form ini menunjukkan validasi sisi klien untuk tugas praktikum.</p>
          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <label className="text-sm text-slate-300">Nama lengkap
              <input name="name" value={form.name} onChange={handleChange} required minLength={2} autoComplete="name" placeholder="Nama kamu" className="focus-ring mt-2 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white placeholder:text-slate-600" />
            </label>
            <label className="text-sm text-slate-300">Alamat email
              <input name="email" type="email" value={form.email} onChange={handleChange} required autoComplete="email" placeholder="nama@email.com" className="focus-ring mt-2 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white placeholder:text-slate-600" />
            </label>
            <label className="text-sm text-slate-300 sm:col-span-2">Pesan
              <textarea name="message" value={form.message} onChange={handleChange} required minLength={10} rows={5} placeholder="Ceritakan ide atau pertanyaanmu..." className="focus-ring mt-2 w-full resize-y rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white placeholder:text-slate-600" />
            </label>
          </div>
          {status && <p role="status" aria-live="polite" className={`mt-5 rounded-xl border p-4 text-sm leading-6 ${status.startsWith('Validasi berhasil') ? 'border-emerald-300/20 bg-emerald-300/5 text-emerald-200' : 'border-amber-200/20 bg-amber-100/5 text-amber-100'}`}>{status}</p>}
          <button type="submit" className="focus-ring mt-6 rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200">Validasi pesan ↗</button>
        </form>
      </section>
    </>
  )
}
