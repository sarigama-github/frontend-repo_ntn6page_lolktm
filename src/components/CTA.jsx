import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function CTA() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.25),transparent_55%)]" />
      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-white text-3xl md:text-5xl font-bold">Need Reliable Transport? We’re Ready.</motion.h3>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="mt-8">
          <Link to="/contact" className="inline-block px-8 py-4 rounded-full text-white font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 shadow-[0_0_40px_rgba(59,130,246,0.6)] hover:shadow-[0_0_55px_rgba(59,130,246,0.8)] transition">Request a Quote</Link>
        </motion.div>
      </div>
    </section>
  )
}
