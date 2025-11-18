import { motion } from 'framer-motion'
import { ShieldCheck, Clock, MapPinned, Users, Satellite, CheckCircle2 } from 'lucide-react'

const bullets = [
  { icon: Clock, text: '24/7 dispatch' },
  { icon: Satellite, text: 'GPS tracking' },
  { icon: Users, text: 'Professional drivers' },
  { icon: MapPinned, text: 'Fast delivery across Quebec' },
  { icon: ShieldCheck, text: 'Fully insured' },
]

export default function WhyUs() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(8,145,178,0.12),transparent_35%)]" />
      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="grid grid-cols-2 gap-4">
          {[1,2,3,4].map((i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i*0.1 }} className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1529078155058-5d716f45d604?q=80&w=1600&auto=format&fit=crop)` }} />
            </motion.div>
          ))}
        </div>

        <div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-white text-3xl md:text-5xl font-bold mb-6">Why Choose Us</motion.h2>
          <p className="text-blue-200/85 mb-6">We combine a modern fleet with a safety-first culture and real-time technology. From Montreal to major North American corridors, we deliver with precision and care.</p>
          <ul className="space-y-3">
            {bullets.map((b, i) => (
              <motion.li key={b.text} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i*0.08 }} className="flex items-center gap-3 text-white/90">
                <CheckCircle2 className="w-5 h-5 text-cyan-400" /> {b.text}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
