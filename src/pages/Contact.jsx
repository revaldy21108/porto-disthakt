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
          <div className="glass-card rounded-3xl p-6"><p className="eyebrow">Informasi</p><h2 className="mt-3 text-xl font-semibold">Revaldy Dearly Zaliandy</h2><p className="mt-2 text-sm leading-7 text-slate-400">Mahasiswa Pendidikan Ilmu Komputer · Universitas Pendidikan Indonesia</p><div className="mt-6 space-y-4 text-sm"><div><p className="text-xs uppercase tracking-wider text-slate-500">Lokasi</p><p className="mt-1 text-slate-200">Bandung, Jawa Barat, Indonesia</p></div><div><p className="text-xs uppercase tracking-wider text-slate-500">GitHub</p><a className="focus-ring mt-1 inline-block rounded text-cyan-200 hover:text-white" href="https://github.com/revaldy21108/porto-disthakt" target="_blank" rel="noreferrer">github.com/revaldy21108 ↗</a></div><div><p className="text-xs uppercase tracking-wider text-slate-500">Website</p><a className="focus-ring mt-1 inline-block rounded text-cyan-200 hover:text-white" href="https://sites.google.com/view/revaldy21108" target="_blank" rel="noreferrer">Portofolio Google Sites ↗</a></div>
            <div className="pt-2">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Social Media</p>
              <div className="mt-3 flex flex-wrap gap-3" aria-label="Tautan media sosial">
                <a href="https://web.facebook.com/revaldi.d.zaliandy" target="_blank" rel="noreferrer" aria-label="Facebook" title="Facebook" className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-slate-950/50 text-slate-300 transition hover:border-cyan-200/50 hover:bg-cyan-200/10 hover:text-cyan-100">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true"><path d="M13.4 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.5 1.6-1.5h1.7V3.1c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5v2.1H7v3.2h2.7V21h3.7Z"/></svg>
                </a>
                <a href="https://www.instagram.com/revaldy_dearly_21108/" target="_blank" rel="noreferrer" aria-label="Instagram" title="Instagram" className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-slate-950/50 text-slate-300 transition hover:border-cyan-200/50 hover:bg-cyan-200/10 hover:text-cyan-100">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.6" cy="6.7" r=".9" fill="currentColor" stroke="none"/></svg>
                </a>
                <a href="https://wa.me/6285282205660" target="_blank" rel="noreferrer" aria-label="WhatsApp" title="WhatsApp" className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-slate-950/50 text-slate-300 transition hover:border-cyan-200/50 hover:bg-cyan-200/10 hover:text-cyan-100">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 11.7a8 8 0 0 1-11.8 7L4 20l1.3-4A8 8 0 1 1 20 11.7Z"/><path d="M9 8.5c.3-.6.6-.6.9-.6h.4c.2 0 .4.1.5.4l.7 1.6c.1.2.1.4-.1.6l-.6.7c-.2.2-.2.4 0 .7.5.9 1.2 1.5 2.1 2 .3.2.5.1.7-.1l.8-.9c.2-.2.4-.2.6-.1l1.5.7c.3.1.4.3.4.5 0 .4-.2 1-.6 1.3-.5.5-1.3.7-2.1.5-1.1-.3-2.5-1-3.8-2.3-1.1-1.1-1.8-2.4-2-3.3-.2-.8.1-1.4.6-1.7Z"/></svg>
                </a>
                <a href="https://github.com/revaldy21108" target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub" className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-slate-950/50 text-slate-300 transition hover:border-cyan-200/50 hover:bg-cyan-200/10 hover:text-cyan-100">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true"><path d="M12 .9a11.1 11.1 0 0 0-3.5 21.6c.6.1.8-.2.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.5-1.3-1.3-1.6-1.3-1.6-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.4-5.5-6.1 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.7-2.8 5.8-5.5 6.1.4.4.8 1 .8 2v3c0 .4.2.7.8.6A11.1 11.1 0 0 0 12 .9Z"/></svg>
                </a>
                <a href="https://discord.com/users/435037984241352704" target="_blank" rel="noreferrer" aria-label="Discord" title="Discord" className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-slate-950/50 text-slate-300 transition hover:border-cyan-200/50 hover:bg-cyan-200/10 hover:text-cyan-100">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true"><path d="M19.7 5.1a18 18 0 0 0-4.4-1.4l-.5 1a16.6 16.6 0 0 0-5.6 0l-.5-1a18 18 0 0 0-4.4 1.4C1.5 9.2.8 13.2 1.2 17.1a18 18 0 0 0 5.4 2.7l1.2-2a11.5 11.5 0 0 1-1.9-.9l.5-.4a12.8 12.8 0 0 0 11.2 0l.5.4a11.5 11.5 0 0 1-1.9.9l1.2 2a18 18 0 0 0 5.4-2.7c.5-4.5-.8-8.5-3.1-12Zm-11 9.7c-1.1 0-2-1-2-2.2s.9-2.2 2-2.2 2 1 2 2.2-.9 2.2-2 2.2Zm6.6 0c-1.1 0-2-1-2-2.2s.9-2.2 2-2.2 2 1 2 2.2-.9 2.2-2 2.2Z"/></svg>
                </a>
                <a href="https://www.youtube.com/@revaldy21108" target="_blank" rel="noreferrer" aria-label="YouTube" title="YouTube" className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-slate-950/50 text-slate-300 transition hover:border-cyan-200/50 hover:bg-cyan-200/10 hover:text-cyan-100">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.7V8.3l6.3 3.7-6.3 3.7Z"/></svg>
                </a>
              </div>
            </div>
          </div></div>
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
              <textarea name="message" value={form.message} onChange={handleChange} required minLength={10} rows={8} placeholder="Ceritakan ide atau pertanyaanmu..." className="focus-ring mt-2 w-full resize-y rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white placeholder:text-slate-600" />
            </label>
          </div>
          {status && <p role="status" aria-live="polite" className={`mt-5 rounded-xl border p-4 text-sm leading-6 ${status.startsWith('Validasi berhasil') ? 'border-emerald-300/20 bg-emerald-300/5 text-emerald-200' : 'border-amber-200/20 bg-amber-100/5 text-amber-100'}`}>{status}</p>}
          <button type="submit" className="focus-ring mt-6 rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200">Validasi pesan ↗</button>
        </form>
      </section>
    </>
  )
}
