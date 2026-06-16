import Navbar from '../components/Navbar'

export default function Semester1() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* Navigation Navbar floating on top */}
      <Navbar />

      {/* Embedded Iframe filling the entire screen */}
      <iframe
        src="https://refleksi-siswa-zc2zpz1.gamma.site/nathaviela"
        title="Refleksi Nathaviela - Semester 1"
        className="w-full h-full border-none absolute inset-0 z-10"
        allowFullScreen
      />
    </div>
  )
}
