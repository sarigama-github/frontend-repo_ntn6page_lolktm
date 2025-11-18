import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const items = [
  {
    name: 'Sophie Tremblay',
    role: 'Operations Manager, Quebec Foods',
    text: 'NordWay has been a reliable partner for our refrigerated shipments. The tracking and communication are top-notch.',
    avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&h=400&fit=crop&auto=format',
  },
  {
    name: 'Mark Chen',
    role: 'Logistics Lead, MapleTech',
    text: 'Professional drivers and on-time deliveries across Montreal. Highly recommended.',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&h=400&fit=crop&auto=format',
  },
  {
    name: 'Amélie Gagnon',
    role: 'Supply Chain, PharmaQC',
    text: 'Their temperature-controlled fleet has been crucial for our operations. Excellent service.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&h=400&fit=crop&auto=format',
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const next = () => setIndex((i) => (i + 1) % items.length)
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length)

  return (
    <section className="relative py-20 md:py-28">
      <div className="relative max-w-5xl mx-auto px-6">
        <h2 className="text-white text-3xl md:text-5xl font-bold mb-8 text-center">What Clients Say</h2>
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur px-6 py-10">
          <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-2xl">‹</button>
          <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-2xl">›</button>

          <div className="h-56 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-center max-w-2xl mx-auto"
              >
                <img src={items[index].avatar} alt={items[index].name} className="w-20 h-20 rounded-full mx-auto mb-4 object-cover" />
                <p className="text-blue-100/90 text-lg">“{items[index].text}”</p>
                <p className="text-white font-semibold mt-4">{items[index].name}</p>
                <p className="text-blue-300/70 text-sm">{items[index].role}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
