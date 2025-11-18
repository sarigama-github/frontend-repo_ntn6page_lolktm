import { motion } from 'framer-motion'

export default function Fleet() {
  const trucks = [
    'https://images.unsplash.com/photo-1549921296-3b4a6b5d2801?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1567056002-aa8475e82ed9?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1557223562-6c77ef16210e?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600359741601-67df7edcc130?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1600&auto=format&fit=crop',
  ]

  return (
    <section id="fleet" className="relative py-20 md:py-28 overflow-hidden">
      <div className="relative max-w-[120rem] mx-auto">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-white text-3xl md:text-5xl font-bold mb-10 px-6 max-w-7xl mx-auto">Fleet</motion.h2>
        <div className="flex gap-6 px-6 overflow-x-auto pb-4 snap-x snap-mandatory">
          {trucks.map((src, i) => (
            <motion.div key={i} whileHover={{ y: -6 }} className="snap-start min-w-[80%] sm:min-w-[45%] lg:min-w-[30%]">
              <div className="relative h-64 sm:h-72 lg:h-80 rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur shadow-[0_10px_50px_-20px_rgba(59,130,246,0.5)]">
                <img src={src} alt="Truck" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
