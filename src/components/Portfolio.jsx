import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import InfiniteMenu from './InfiniteMenu'

const menuItems = [
  {
    image: 'https://picsum.photos/seed/sahabat/400/400',
    link: '#',
    title: 'SahabatBuku',
    description: 'Platform e-learning Laravel 12 dengan AI quiz generator'
  },
  {
    image: 'https://picsum.photos/seed/bqis/400/400',
    link: '#',
    title: 'BQIS',
    description: 'Sistem deteksi kualitas makanan dengan XGBoost + YOLOv8'
  },
  {
    image: 'https://picsum.photos/seed/volta/400/400',
    link: '#',
    title: 'VOLTA',
    description: 'AI pemandu bakat voli berbasis pose estimation'
  },
  {
    image: 'https://picsum.photos/seed/hris/400/400',
    link: '#',
    title: 'HRIS Sinergi',
    description: 'Sistem HR berbasis peran untuk hotel'
  },
  {
    image: 'https://picsum.photos/seed/ctf/400/400',
    link: '#',
    title: 'CTF Writeup',
    description: 'Analisis keamanan VulnHub Fawkes Harry Potter series'
  }
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: 'easeOut' },
  }),
}

export default function Portfolio() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="portfolio" className="px-[5%] py-[120px] max-w-[1200px] mx-auto" ref={ref}>
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
          04
        </span>
        <div className="flex items-center justify-center gap-3 mb-2 relative z-10">
          <div className="w-8 h-[2px]" style={{ backgroundColor: 'var(--brand-pink)' }} />
          <span className="text-[0.9rem] font-bold uppercase tracking-widest text-[var(--brand-pink)]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Karya Kreatif Saya
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
          Galeri Proyek
        </h2>
        <div className="title-underline" />
      </motion.div>

      {/* Grid replaced with InfiniteMenu */}
      <div style={{ height: '600px', position: 'relative', background: 'transparent', width: '100%' }}>
        <InfiniteMenu items={menuItems} scale={1} />
      </div>
    </section>
  )
}
