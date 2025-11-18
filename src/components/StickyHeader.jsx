import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, Phone, Mail } from 'lucide-react'

export default function StickyHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    // close mobile menu on route change
    setOpen(false)
  }, [location.pathname])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-xl bg-slate-900/70 border-b border-white/10 py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-[0_0_30px_rgba(56,189,248,0.35)] flex items-center justify-center">
            <div className="w-3.5 h-3.5 rounded-full bg-white/90 group-hover:scale-110 transition" />
          </div>
          <span className="text-white font-semibold tracking-wide text-lg">NordWay Logistics</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link to="/" className="text-blue-100 hover:text-white transition">Home</Link>
          <a href="#services" className="text-blue-100 hover:text-white transition">Services</a>
          <a href="#fleet" className="text-blue-100 hover:text-white transition">Fleet</a>
          <a href="#map" className="text-blue-100 hover:text-white transition">Coverage</a>
          <Link to="/contact" className="text-white/90 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full px-5 py-2 font-medium shadow-[0_0_25px_rgba(59,130,246,0.35)] hover:shadow-[0_0_35px_rgba(59,130,246,0.55)] transition">Contact</Link>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white/90 p-2 rounded-lg border border-white/10">
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pt-3 pb-6 space-y-3">
          <Link to="/" className="block text-blue-100">Home</Link>
          <a href="#services" className="block text-blue-100">Services</a>
          <a href="#fleet" className="block text-blue-100">Fleet</a>
          <a href="#map" className="block text-blue-100">Coverage</a>
          <Link to="/contact" className="inline-flex items-center gap-2 text-white/90 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full px-5 py-2 font-medium">
            <Phone className="w-4 h-4" /> Contact
          </Link>
          <div className="flex items-center gap-4 pt-2 text-blue-200/80">
            <a href="tel:+1-514-555-0123" className="flex items-center gap-2 hover:text-white transition"><Phone className="w-4 h-4" /> +1 (514) 555-0123</a>
            <a href="mailto:info@nordway.ca" className="flex items-center gap-2 hover:text-white transition"><Mail className="w-4 h-4" /> info@nordway.ca</a>
          </div>
        </div>
      )}
    </header>
  )
}
