import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="px-[5%] py-[120px] max-w-[1200px] mx-auto" ref={ref}>
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
          05
        </span>
        <div className="flex items-center justify-center gap-3 mb-2 relative z-10">
          <div className="w-8 h-[2px]" style={{ backgroundColor: 'var(--brand-pink)' }} />
          <span className="text-[0.9rem] font-bold uppercase tracking-widest text-[var(--brand-pink)]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Mari Terhubung
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
          Hubungi Saya
        </h2>
        <div className="title-underline" />
      </motion.div>

      {/* Contact card */}
      <div className="flex justify-center w-full">
        <motion.div
          className="card-brutal max-w-[600px] w-full px-[45px] py-[45px] text-center flex flex-col items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.15 }}
        >
          {/* Avatar */}
          <div className="mb-5">
            <div
              className="w-[90px] h-[90px] rounded-full p-1 inline-flex items-center justify-center
                         bg-white border border-slate-200 shadow-sm"
            >
              <img
                src="/assets/profile.png"
                alt="Nathaviela"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          <h3 className="text-[1.6rem] font-black text-[var(--text-dark)] mb-[10px]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Nathaviela Thalita Kirana
          </h3>
          <p
            className="text-[0.95rem] max-w-[450px] mb-[30px] font-medium"
            style={{ color: 'var(--text-muted)' }}
          >
            Saya selalu terbuka untuk berdiskusi tentang desain UI/UX, arsitektur perangkat lunak,
            kolaborasi kecerdasan buatan, atau proyek menulis.
          </p>

          {/* Email */}
          <div className="flex flex-col gap-[15px] w-full mb-[25px]">
            <a
              href="mailto:nathaviela.tk@gmail.com"
              className="inline-flex items-center justify-center gap-[10px] no-underline font-bold
                         bg-white border-2 border-black px-5 py-3 rounded-none shadow-[3px_3px_0px_#000000]
                         hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_#000000] transition-all"
              style={{ color: 'var(--text-dark)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <span style={{ color: 'var(--brand-pink)', fontSize: '1.1rem' }}>
                <i className="fa-solid fa-envelope" />
              </span>
              <span>nathaviela.tk@gmail.com</span>
            </a>
          </div>

          {/* GitHub button */}
          <div className="flex justify-center w-full">
            <a
              href="https://github.com/nathaviela"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-pink inline-flex items-center gap-[10px] no-underline text-[1rem]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <i className="fa-brands fa-github" />
              <span>Ikuti di GitHub</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
