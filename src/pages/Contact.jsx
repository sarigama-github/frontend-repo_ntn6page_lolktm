import { useState } from 'react'
import { motion } from 'framer-motion'
import StickyHeader from '../components/StickyHeader'
import Footer from '../components/Footer'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    // Simulate API call
    setTimeout(() => setStatus('Thanks! We will reach out shortly.'), 800)
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(2,132,199,0.15),transparent_55%)]" />
      <StickyHeader />

      <section className="pt-28 pb-12">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-6xl font-extrabold">Contact Us</motion.h1>
          <p className="text-blue-200/80 mt-3">We’re here to help with quotes, routes, and custom logistics solutions.</p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
            <form onSubmit={submit} className="space-y-4">
              {['Full Name','Email','Phone','Company'].map((label) => (
                <div key={label}>
                  <label className="block text-sm text-blue-200/80 mb-1">{label}</label>
                  <input required type="text" placeholder={label} className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500/60 text-white placeholder:text-blue-300/50" />
                </div>
              ))}
              <div>
                <label className="block text-sm text-blue-200/80 mb-1">Message</label>
                <textarea required rows="5" placeholder="Tell us about your freight" className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500/60 text-white placeholder:text-blue-300/50" />
              </div>
              <button className="w-full px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 shadow-[0_0_30px_rgba(59,130,246,0.45)] hover:shadow-[0_0_40px_rgba(59,130,246,0.65)] transition">Submit</button>
              {status && <p className="text-center text-blue-200 mt-2">{status}</p>}
            </form>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
              <div className="flex items-center gap-3 text-blue-200/90"><MapPin className="w-5 h-5 text-cyan-400" /> Montreal, QC</div>
              <div className="flex items-center gap-3 text-blue-200/90 mt-3"><Phone className="w-5 h-5 text-cyan-400" /> +1 (514) 555-0123</div>
              <div className="flex items-center gap-3 text-blue-200/90 mt-3"><Mail className="w-5 h-5 text-cyan-400" /> info@nordway.ca</div>
              <div className="flex items-center gap-3 text-blue-200/90 mt-3"><Clock className="w-5 h-5 text-cyan-400" /> Mon–Fri 7:00–19:00</div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
              <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223960.74824800253!2d-73.94186924687344!3d45.55818681980571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a53722b47c3%3A0x3525e3b8e9b56153!2sMontreal%2C%20QC!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
                width="100%"
                height="360"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
