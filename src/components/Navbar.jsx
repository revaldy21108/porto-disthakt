import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Beranda', end: true },
  { to: '/about', label: 'Tentang' },
  { to: '/services', label: 'Layanan' },
  { to: '/portfolio', label: 'Portofolio' },
  { to: '/contact', label: 'Kontak' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `focus-ring rounded-full px-3 py-2 text-sm transition ${isActive ? 'bg-cyan-300/10 text-cyan-200' : 'text-slate-300 hover:text-cyan-200'}`

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
      <div className="section-wrap flex min-h-[76px] items-center justify-between gap-4">
        <NavLink to="/" onClick={() => setOpen(false)} className="focus-ring flex items-center gap-3 rounded-xl">
          <span className="grid size-10 place-items-center rounded-xl bg-cyan-300 font-bold text-slate-950">RS</span>
          <span className="leading-tight">
            <span className="block text-sm font-bold tracking-wide text-white">Revaldisthakt</span>
            <span className="block text-[10px] tracking-[.2em] text-slate-400">Studio</span>
          </span>
        </NavLink>

        <button
          type="button"
          aria-label={open ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="focus-ring grid size-11 place-items-center rounded-xl border border-white/10 text-xl text-cyan-200 md:hidden"
        >
          {open ? '×' : '☰'}
        </button>

        <nav className={`${open ? 'flex' : 'hidden'} absolute left-0 right-0 top-full flex-col gap-1 border-b border-white/10 bg-slate-950 p-4 md:static md:flex md:flex-row md:items-center md:border-0 md:bg-transparent md:p-0`}>
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.end} className={linkClass} onClick={() => setOpen(false)}>
              {link.label}
            </NavLink>
          ))}
          <NavLink to="/contact" onClick={() => setOpen(false)} className="focus-ring mt-2 rounded-full bg-cyan-300 px-5 py-2.5 text-center text-sm font-bold text-black! transition hover:bg-cyan-200 md:ml-2 md:mt-0">
            Diskusi proyek ↗
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
