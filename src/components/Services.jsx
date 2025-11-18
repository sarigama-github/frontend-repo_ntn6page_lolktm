import { motion } from 'framer-motion'
import { Truck, Route, ThermometerSnowflake, PackageSearch } from 'lucide-react'

const services = [
  {
    icon: Truck,
    title: 'Long-Haul Transport',
    desc: 'Cross-border and interprovincial freight with modern, fuel-efficient tractors.',
  },
  {
    icon: Route,
    title: 'Local Montreal Delivery',
    desc: 'Same-day and scheduled routes across the Greater Montreal Area.',
  },
  {
    icon: ThermometerSnowflake,
    title: 'Refrigerated Trucking',
    desc: 'Temperature-controlled solutions for perishable goods and pharma.',
  },
  {
    icon: PackageSearch,
    title: 'Logistics & Warehousing',
    desc: 'Integrated storage, cross-docking, and inventory management.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(59,130,246,0.12),transparent_35%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-white text-3xl md:text-5xl font-bold mb-12"
        >
          Services
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:shadow-[0_10px_50px_-15px_rgba(59,130,246,0.5)] transition transform-gpu"
              style={{ perspective: 1000 }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white shadow-[0_0_20px_rgba(59,130,246,0.55)] group-hover:scale-110 transition">
                <s.icon className="w-6 h-6" />
              </div>
              <h3 className="text-white text-xl font-semibold mt-5">{s.title}</h3>
              <p className="text-blue-200/80 mt-2 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
