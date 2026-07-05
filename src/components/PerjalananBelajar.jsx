import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'

const semesters = [
  { id: 'sem1', label: 'Kelas XI — Semester 1' },
  { id: 'sem2', label: 'Kelas XI — Semester 2' },
]

export default function PerjalananBelajar() {
  const navigate = useNavigate()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="journey" className="px-[5%] py-[80px] max-w-[1200px] mx-auto" ref={ref}>
      {/* Section header */}
      <motion.div
        className="relative text-center mb-[40px]"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span
          className="absolute font-extrabold pointer-events-none select-none"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 'clamp(8rem, 20vw, 15rem)',
            color: 'var(--brand-pink)',
            opacity: 0.14,
            lineHeight: 1,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            zIndex: 0,
          }}
        >
          03
        </span>
        <div className="flex items-center justify-center gap-3 mb-2 relative z-10">
          <div className="w-8 h-[2px]" style={{ backgroundColor: 'var(--brand-pink)' }} />
          <span className="text-[0.9rem] font-bold uppercase tracking-widest text-[var(--brand-pink)]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Rekam Jejak Akademik
          </span>
          <div className="w-8 h-[2px]" style={{ backgroundColor: 'var(--brand-pink)' }} />
        </div>
        <h2
          className="relative z-10 font-extrabold"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 'clamp(2.2rem, 5vw, 4rem)',
            color: 'var(--text-dark)',
          }}
        >
          Perjalanan Belajar
        </h2>
        <div className="title-underline" />
      </motion.div>

      {/* Description */}
      <p className="text-center text-[1rem] font-medium max-w-[500px] mx-auto mb-[40px]"
         style={{ color: 'var(--text-muted)' }}>
        Klik semester untuk melihat refleksi, capaian, dan dokumentasi
        perjalanan belajarku secara lengkap.
      </p>

      {/* Semester cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[600px] mx-auto">
        {semesters.map((sem, idx) => {
          const desc = idx === 0
            ? 'Fondasi, eksplorasi, dan proyek pertama.'
            : 'Kompetisi, AI, dan portofolio matang.'
          return (
            <div
              key={sem.id}
              className="card-brutal p-6 flex flex-col items-start gap-3"
            >
              <h3
                className="font-black text-[1.1rem]"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: 'var(--text-dark)' }}
              >
                {sem.label}
              </h3>
              <p className="text-[0.88rem] font-medium" style={{ color: 'var(--text-muted)' }}>
                {desc}
              </p>
              <button
                onClick={() => navigate(sem.id === 'sem1' ? '/semester-1' : '/semester-2')}
                className="btn-outline-brutal text-[0.9rem] mt-auto"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Lihat Detail →
              </button>
            </div>
          )
        })}
      </div>
    </section>
  )
}
