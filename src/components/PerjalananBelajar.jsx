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
    <section id="journey" className="px-[5%] py-[120px] max-w-[1200px] mx-auto" ref={ref}>
      {/* Section header */}
      <motion.div
        className="relative text-center mb-[60px]"
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

      {/* Navigation buttons */}
      <div className="flex justify-center gap-6 flex-wrap">
        {semesters.map(sem => {
          return (
            <button
              key={sem.id}
              onClick={() => navigate(sem.id === 'sem1' ? '/semester-1' : '/semester-2')}
              className="btn-outline-brutal inline-flex items-center gap-[10px] text-[1.05rem]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {sem.label}
              <i className="fa-solid fa-arrow-right text-[0.85rem]" />
            </button>
          )
        })}
      </div>
    </section>
  )
}
