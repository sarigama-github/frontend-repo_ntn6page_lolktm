import StickyHeader from '../components/StickyHeader'
import Hero from '../components/Hero'
import Services from '../components/Services'
import WhyUs from '../components/WhyUs'
import Fleet from '../components/Fleet'
import MapSection from '../components/Map'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(15,23,42,0),rgba(56,189,248,0.07))]" />
      <StickyHeader />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Fleet />
        <MapSection />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
