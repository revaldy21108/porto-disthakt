import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="section-wrap flex flex-col gap-5 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link to="/" className="focus-ring rounded font-semibold text-white">Revaldisthakt<span className="text-cyan-300">.</span></Link>
          <p className="mt-1 text-xs text-slate-500">Web · IT Support · Dokumentasi Kreatif</p>
        </div>
        <p className="text-xs text-slate-500">© {new Date().getFullYear()} Revaldy Dearly Zaliandy. Dibuat dengan React & Tailwind CSS.</p>
        <Link to="/contact" className="focus-ring rounded text-sm text-cyan-200 hover:text-white">Hubungi kami ↑</Link>
      </div>
    </footer>
  )
}
