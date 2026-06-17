import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'


const infoCards = [
  {
    icon: 'fa-graduation-cap',
    title: 'Pendidikan',
    text: 'Siswa jurusan Sistem Informasi Jaringan dan Aplikasi (SIJA) di SMK Telkom Sidoarjo, mempelajari pengembangan aplikasi, pemrograman web/mobile, sistem basis data, dan rekayasa perangkat lunak terapan.',
  },
  {
    icon: 'fa-cubes',
    title: 'Keahlian Utama',
    text: 'Karya saya mencakup pembuatan desain UI/UX, rekayasa back-end full-stack, melatih model kecerdasan buatan (AI), serta analisis keamanan sistem siber.',
  },
  {
    icon: 'fa-heart',
    title: 'Fokus & Visi',
    text: 'Saya fokus memecahkan tantangan dunia nyata. Saya percaya teknologi harus dapat diakses, berkinerja tinggi, dan memberikan pengalaman yang indah.',
  },
  {
    icon: 'fa-chart-simple',
    title: 'Pencapaian',
    metrics: [
      { value: '4+', label: 'Bidang Teknologi Utama' },
      { value: '5+', label: 'Proyek Dunia Nyata Selesai' },
      { value: '100%', label: 'Berorientasi Inovasi' },
    ],
  },
]



const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' },
  }),
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="about"
      className="px-[5%] py-[120px] max-w-[1200px] mx-auto"
      ref={ref}
    >
      <div className="flex flex-col gap-[40px] w-full">

        {/* Top row: text + carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] items-center">

          {/* Text side */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="flex flex-col gap-5 items-start lg:items-start text-left"
          >
            <div className="relative w-full flex flex-col items-start justify-start">
              <span
                className="absolute font-extrabold pointer-events-none select-none"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 'clamp(8rem, 20vw, 15rem)',
                  color: 'var(--brand-pink)',
                  opacity: 0.14,
                  lineHeight: 1,
                  top: '50%',
                  left: '-20px',
                  transform: 'translateY(-50%)',
                  zIndex: 0,
                }}
              >
                02
              </span>
              <div className="flex items-center gap-3 mb-2 relative z-10">
                <div className="w-8 h-[2px]" style={{ backgroundColor: 'var(--brand-pink)' }} />
                <span className="text-[0.9rem] font-bold uppercase tracking-widest text-[var(--brand-pink)]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  TENTANG SAYA
                </span>
              </div>
              <h2
                className="relative z-10 font-extrabold uppercase tracking-wide"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 'clamp(2.2rem, 5vw, 4rem)',
                  color: 'var(--text-dark)',
                }}
              >
                TENTANG
              </h2>
            </div>

            <p className="text-[1.12rem] leading-[1.7] font-black text-[var(--text-dark)] mb-1">
              Halo, saya Nathaviela Thalita Kirana, seorang AI Enthusiast and Web Developer yang saat ini menempuh pendidikan di Program Keahlian Sistem Informasi Jaringan dan Aplikasi (SIJA), SMK Telkom Sidoarjo.
            </p>
            <p className="text-[1.02rem] leading-[1.7] font-medium" style={{ color: 'var(--text-muted)' }}>
              Saya memiliki ketertarikan dalam mengembangkan solusi digital yang menggabungkan teknologi web modern dengan kecerdasan buatan. Dengan pengalaman dalam pengembangan backend, perancangan basis data, integrasi AI, serta desain antarmuka yang berfokus pada pengalaman pengguna, saya berusaha menciptakan aplikasi yang tidak hanya berfungsi dengan baik tetapi juga memberikan dampak nyata bagi penggunanya.
            </p>
          </motion.div>

          {/* Photo with static out-of-frame layered effect */}
          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="flex justify-center items-center w-full"
          >
            <div className="relative" style={{ width: 280, height: 350, margin: '0 auto' }}>
              {/* Background Frame Box */}
              <div
                className="absolute border-2 border-black"
                style={{
                  top: '25px',
                  left: '25px',
                  width: '280px',
                  height: '320px',
                  backgroundColor: 'var(--brand-pink-light)',
                  zIndex: 0
                }}
              />

              {/* Photo Card on top */}
              <div
                className="absolute border-2 border-black bg-white overflow-hidden shadow-[6px_6px_0px_#000000]"
                style={{
                  top: '0px',
                  left: '0px',
                  width: '280px',
                  height: '320px',
                  zIndex: 10
                }}
              >
                <img
                  src="/assets/about1.jpeg"
                  alt="Nathaviela Thalita Kirana"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom 4-card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[25px]">
          {infoCards.map((card, i) => (
            <motion.div
              key={i}
              className="card-brutal p-[30px] flex flex-col gap-3"
              variants={fadeUp}
              custom={i * 0.5}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              <div
                className="w-10 h-10 rounded-none border-2 border-black flex items-center justify-center text-[1.1rem] shrink-0"
                style={{ background: 'var(--brand-pink-light)', color: 'var(--brand-pink)' }}
              >
                <i className={`fa-solid ${card.icon}`} />
              </div>
              <h3 className="text-[1.1rem] font-black text-[var(--text-dark)]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                {card.title}
              </h3>
              {card.text && (
                <p className="text-[0.88rem] leading-[1.5] font-medium" style={{ color: 'var(--text-muted)' }}>
                  {card.text}
                </p>
              )}
              {card.metrics && (
                <div className="flex flex-col gap-2">
                  {card.metrics.map((m, j) => (
                    <div key={j} className="text-[0.88rem] font-medium" style={{ color: 'var(--text-muted)' }}>
                      <strong style={{ color: 'var(--brand-pink)', fontSize: '1.1rem' }}>{m.value}</strong>{' '}
                      {m.label}
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
