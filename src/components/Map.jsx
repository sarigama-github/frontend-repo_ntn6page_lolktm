import { motion } from 'framer-motion'

export default function MapSection() {
  return (
    <section id="map" className="relative py-20 md:py-28">
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-white text-3xl md:text-5xl font-bold mb-8">Serving Montreal & All Major Quebec Routes</motion.h2>
        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
          <iframe
            title="Montreal Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223960.74824800253!2d-73.94186924687344!3d45.55818681980571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a53722b47c3%3A0x3525e3b8e9b56153!2sMontreal%2C%20QC!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="absolute inset-0 pointer-events-none">
            {[1,2,3,4].map((m, i) => (
              <div key={i} className={`absolute w-4 h-4 rounded-full bg-cyan-400/90 shadow-[0_0_20px_rgba(34,211,238,0.7)] animate-ping`} style={{ top: `${20 + i*15}%`, left: `${30 + i*10}%` }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
