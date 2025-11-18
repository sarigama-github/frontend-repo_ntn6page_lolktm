export default function Footer() {
  return (
    <footer className="relative py-10 text-center text-blue-300/70">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />
        <p>© {new Date().getFullYear()} NordWay Logistics • Montreal, QC</p>
      </div>
    </footer>
  )
}
