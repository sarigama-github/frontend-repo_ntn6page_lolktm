import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 600], [0, -80])
  const y2 = useTransform(scrollY, [0, 600], [0, -160])

  return (
    <section className="relative min-h-[90vh] overflow-hidden flex items-center">
      {/* Moving gradient background */}
      <motion.div style={{ y: y2 }} className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.15),transparent_60%)]" />
      <div className="absolute inset-0 opacity-[0.08] bg-[url('https://images.unsplash.com/photo-1500048993953-d23a436266cf?q=80&w=2400&auto=format&fit=crop')] bg-cover bg-center" />

      {/* Parallax skyline */}
      <motion.div style={{ y: y1 }} className="absolute bottom-0 left-0 right-0 h-48 md:h-64 bg-[url('https://assets.vibecdn.dev/montreal-skyline-dark.svg')] bg-repeat-x bg-[length:1200px_100%] animate-[slideBg_40s_linear_infinite]" />

      {/* Animated road */}
      <div className="absolute bottom-0 left-0 right-0 h-24 md:h-28 bg-gradient-to-b from-transparent to-slate-950/90">
        <div className="absolute inset-x-0 bottom-6 h-1.5 bg-gradient-to-r from-cyan-400/0 via-cyan-400/60 to-cyan-400/0 blur-sm" />
      </div>

      {/* Truck animation */}
      <div className="pointer-events-none absolute bottom-8 left-[-20%] w-[120%]">
        <motion.div
          initial={{ x: '-10%' }}
          animate={{ x: '110%' }}
          transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
          className="flex items-end gap-6"
        >
          <div className="w-36 h-16 md:w-48 md:h-20 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl shadow-[0_10px_40px_-10px_rgba(56,189,248,0.5)]">
            <div className="w-full h-full bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] rounded-xl" />
          </div>
          <div className="w-24 h-14 md:w-32 md:h-16 bg-cyan-500 rounded-lg" />
          <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-900 rounded-full border-4 border-slate-700" />
          <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-900 rounded-full border-4 border-slate-700 -ml-10" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl"
        >
          Reliable Trucking & Logistics Across Montreal & North America
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-lg md:text-xl text-blue-200/90 max-w-2xl mt-5"
        >
          Modern fleet, real-time tracking, and trusted transportation solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="flex flex-wrap items-center gap-4 mt-10"
        >
          <Link
            to="/contact"
            className="px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 shadow-[0_0_30px_rgba(59,130,246,0.45)] hover:shadow-[0_0_40px_rgba(59,130,246,0.65)] transition"
          >
            Get a Quote
          </Link>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full text-white/90 border border-white/15 bg-white/5 backdrop-blur-md hover:bg-white/10 transition"
          >
            Contact Us
          </a>
        </motion.div>
      </div>

      <style>{`
      @keyframes slideBg { from { background-position: 0 0 } to { background-position: 1200px 0 } }
      `}</style>
    </section>
  )
}
