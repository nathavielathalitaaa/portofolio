import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

// Warna aksen per kategori skill
const SKILL_COLORS = [
  { bg: '#FFCCD5', border: '#C73053', text: '#7a1a30', pin: '#C73053' },   // UI/UX — pink
  { bg: '#E5F8FF', border: '#1E3A5F', text: '#1E3A5F', pin: '#1E3A5F' },  // Backend — navy
  { bg: '#fdf4ff', border: '#7c3aed', text: '#5b21b6', pin: '#7c3aed' },  // Karya Tulis — ungu
  { bg: '#f0fdfa', border: '#0f766e', text: '#0f766e', pin: '#0f766e' },  // AI — teal
  { bg: '#fff7ed', border: '#c2410c', text: '#9a3412', pin: '#c2410c' },  // Siber — oranye
]

const skillCards = [
  {
    title: 'Desainer UI/UX',
    items: ['Desain SahabatBuku', 'Desain Sistem HR'],
    rot: '-2deg',
    delay: 0,
  },
  {
    title: 'Backend',
    items: ['Back-end Sistem HR', 'Back-end DISKANESIA'],
    rot: '1.5deg',
    delay: 0.1,
  },
  {
    title: 'Karya Tulis',
    items: ['Cerpen Garuda', 'Cerpen Tragedi'],
    rot: '-1deg',
    delay: 0.2,
  },
  {
    title: 'Spesialis AI',
    items: ['Deteksi Alat', 'Personalisasi Pembelajaran', 'Rekap Cerdas Karyawan'],
    rot: '2deg',
    delay: 0.3,
  },
  {
    title: 'Keamanan Siber',
    items: ['HMFC ITS CTF Nasional'],
    rot: '-1.5deg',
    delay: 0.4,
  },
]

export default function Hero() {
  const introBrandRef = useRef(null)
  const introTaglineRef = useRef(null)
  const introContentRef = useRef(null)
  const portfolioTitleRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY
      const vh = window.innerHeight
      const screenWidth = window.innerWidth
      const isMobile = screenWidth < 640

      if (introBrandRef.current && introContentRef.current) {
        const maxScroll = 400
        const ratio = Math.min(Math.max(scrollY, 0), maxScroll) / maxScroll
        
        // hitung range font size berdasarkan lebar layar
        const startBrand = isMobile ? 1.7 : 4.0
        const endBrand = isMobile ? 1.0 : 1.2
        const currentBrand = startBrand - (startBrand - endBrand) * ratio
        introBrandRef.current.style.fontSize = `${currentBrand.toFixed(3)}rem`

        if (introTaglineRef.current) {
          const startTagline = isMobile ? 0.95 : 1.4
          const endTagline = isMobile ? 0.8 : 1.0
          const currentTagline = startTagline - (startTagline - endTagline) * ratio
          introTaglineRef.current.style.fontSize = `${currentTagline.toFixed(3)}rem`
        }
        
        introContentRef.current.style.opacity = (1 - 0.6 * ratio).toFixed(3)
        introContentRef.current.style.transform = `translateY(${-scrollY * 0.15}px)`
      }

      if (portfolioTitleRef.current) {
        const start = vh * 0.15
        const end = vh * 0.85
        const ratio = scrollY > start ? Math.min((scrollY - start) / (end - start), 1) : 0
        portfolioTitleRef.current.style.fontSize = `${(1.5 + 3.5 * ratio).toFixed(2)}rem`
        portfolioTitleRef.current.style.opacity = ratio.toFixed(3)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <>
      {/* Google Fonts Caveat */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&display=swap');`}</style>

      {/* ── HERO INTRO ─────────────────────────────────────────── */}
      <section
        id="hero-intro"
        className="h-screen flex flex-col justify-center items-center relative text-center px-5"
      >
        <div ref={introContentRef} className="flex flex-col items-center justify-center">
          <div
            ref={introBrandRef}
            className="flex flex-row flex-nowrap items-center justify-center gap-[12px] sm:gap-[15px] mb-[15px]"
            style={{ fontSize: 'clamp(1.7rem, 8vw, 4rem)' }}
          >
            <span className="font-extrabold tracking-tight" style={{ color: 'var(--text-dark)' }}>
              Part
            </span>
            <span className="font-semibold mt-[5px]" style={{ fontFamily: "'Dancing Script', cursive", color: 'var(--text-dark)' }}>
              of
            </span>
            <img src="/assets/smk_logo.svg" alt="SMK Telkom Sidoarjo" style={{ height: '1.6em', objectFit: 'contain' }} />
          </div>

          <p ref={introTaglineRef} className="italic font-medium" style={{ fontSize: 'clamp(0.95rem, 3.5vw, 1.4rem)', color: 'var(--text-muted)' }}>
            Siswa SMK yang membangun solusi teknologi nyata
          </p>

          <a
            href="#journey"
            className="mt-8 px-6 py-3 border-2 border-black bg-white text-black font-bold text-[0.95rem] shadow-[4px_4px_0px_#e5345a] hover:-translate-y-1 hover:shadow-[6px_6px_0px_#e5345a] transition-all flex items-center gap-2"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            onClick={(e) => { e.preventDefault(); document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' }) }}
          >
            Ingin lihat refleksi semester? Ke sini! <i className="fa-solid fa-arrow-down ml-1" />
          </a>
        </div>

        <div className="absolute bottom-10 flex flex-col items-center gap-2" style={{ color: 'var(--text-dark)', opacity: 0.8, animation: 'bounce-slow 2s infinite' }}>
          <span className="mouse-icon"><span className="mouse-wheel" /></span>
          <span className="text-[0.95rem]"><i className="fa-solid fa-chevron-down" /></span>
        </div>
      </section>

      {/* ── HERO CONTENT — Scrapbook Bulletin Board ────────────── */}
      <section
        id="hero"
        className="min-h-screen flex flex-col justify-center px-[5%] pt-[140px] pb-20 max-w-[1200px] mx-auto"
      >
        {/* Section heading */}
        <div className="flex flex-col items-center text-center w-full mb-[60px] lg:mb-[40px]">
          <div className="relative inline-block w-full text-center">
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
              01
            </span>
            <div className="flex items-center justify-center gap-3 mb-[20px]">
              <div className="w-8 h-[2px]" style={{ backgroundColor: 'var(--brand-pink)' }} />
              <h2
                ref={portfolioTitleRef}
                className="relative z-10 font-extrabold uppercase tracking-[6px]"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: 'var(--text-dark)',
                  fontSize: '1.5rem',
                  opacity: 0,
                  transition: 'none',
                }}
              >
                PORTOFOLIO
              </h2>
              <div className="w-8 h-[2px]" style={{ backgroundColor: 'var(--brand-pink)' }} />
            </div>
          </div>
        </div>

        {/* ── Scrapbook Bulletin Board ── */}
        <div className="w-full">
          <ScrapbookBoard />
        </div>
      </section>
    </>
  )
}

function ScrapbookBoard() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div
      ref={ref}
      className="relative w-full p-4 sm:p-6 lg:p-10"
      style={{
        background: '#FAF6EC',
        border: '2px solid #000',
        boxShadow: '6px 6px 0 #000',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E")`,
      }}
    >
      {/* Washi tape — pojok kiri atas */}
      <div style={{
        position: 'absolute', top: '-10px', left: '10%', width: '88px', height: '22px',
        transform: 'rotate(-4deg)',
        background: 'repeating-linear-gradient(90deg, #93c5fd 0px, #93c5fd 8px, #bfdbfe 8px, #bfdbfe 16px)',
        border: '1px solid rgba(0,0,0,0.08)',
        clipPath: 'polygon(0% 15%, 5% 0%, 95% 0%, 100% 15%, 100% 85%, 95% 100%, 5% 100%, 0% 85%)',
      }} />

      {/* Washi tape — pojok kanan atas */}
      <div style={{
        position: 'absolute', top: '-8px', right: '15%', width: '72px', height: '20px',
        transform: 'rotate(3deg)',
        background: 'repeating-linear-gradient(90deg, #fde68a 0px, #fde68a 8px, #fef3c7 8px, #fef3c7 16px)',
        border: '1px solid rgba(0,0,0,0.08)',
        clipPath: 'polygon(0% 15%, 5% 0%, 95% 0%, 100% 15%, 100% 85%, 95% 100%, 5% 100%, 0% 85%)',
      }} />

      {/* Doodle star dekoratif */}
      <svg width="18" height="18" viewBox="0 0 16 16" style={{ position: 'absolute', bottom: '20px', left: '28px', opacity: 0.25, pointerEvents: 'none' }}>
        <path d="M8,1 L9,7 L15,8 L9,9 L8,15 L7,9 L1,8 L7,7 Z" fill="#C73053" />
      </svg>
      <svg width="14" height="14" viewBox="0 0 16 16" style={{ position: 'absolute', top: '32px', right: '28px', opacity: 0.18, pointerEvents: 'none' }}>
        <path d="M8,1 L9,7 L15,8 L9,9 L8,15 L7,9 L1,8 L7,7 Z" fill="#1E3A5F" />
      </svg>

      {/* Two-column flex */}
      <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start">

        {/* ══ KIRI — Nama + Skill Cards ══ */}
        <div className="w-full lg:flex-[1.5] flex flex-col items-center lg:items-start text-center lg:text-left gap-5 relative z-10">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.05 }}
            style={{ display: 'inline-flex' }}
          >
            <span style={{
              background: '#FFCCD5',
              border: '2px solid #000',
              boxShadow: '2px 2px 0 #000',
              padding: '4px 14px',
              fontSize: '0.68rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.14em',
              color: '#7a1a30',
              transform: 'rotate(-1deg)',
              display: 'inline-block',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}>
              Halo, saya 👋
            </span>
          </motion.div>

          {/* Nama besar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ lineHeight: 1.1 }}
          >
            <div style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.6rem)',
              fontWeight: 900,
              color: '#000000',
              textTransform: 'uppercase',
              letterSpacing: '-1px',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}>
              Nathaviela Thalita Kirana
            </div>
          </motion.div>

          {/* Tagline handwriting */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.18 }}
          >
            <div style={{
              fontFamily: "'Caveat', cursive",
              fontSize: '1.25rem',
              fontWeight: 600,
              color: '#64748B',
              marginTop: '-4px',
            }}>
              AI Enthusiast & Web Developer ✎
            </div>
            {/* Wavy underline */}
            <svg width="220" height="8" viewBox="0 0 220 8" style={{ marginTop: '2px', display: 'inline-block' }}>
              <path
                d="M0,4 Q14,0 28,4 Q42,8 56,4 Q70,0 84,4 Q98,8 112,4 Q126,0 140,4 Q154,8 168,4 Q182,0 196,4 Q210,8 220,4"
                fill="none" stroke="#C73053" strokeWidth="1.5" strokeLinecap="round" opacity="0.45"
              />
            </svg>
          </motion.div>

          {/* Polaroid card — mobile only, positioned below tagline */}
          <div className="block lg:hidden my-6">
            <ProfileCard mobile />
          </div>

          {/* Skill Cards — wrap scattered */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap gap-4 mt-1 justify-center lg:justify-start"
          >
            {skillCards.map((card, i) => {
              const col = SKILL_COLORS[i % SKILL_COLORS.length]
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                  style={{ position: 'relative' }}
                >
                  {/* Push pin */}
                  <div style={{
                    position: 'absolute', top: '-7px', left: '50%', transform: 'translateX(-50%)',
                    width: '14px', height: '14px', borderRadius: '50%',
                    background: col.pin, border: '2px solid #000', zIndex: 10,
                    boxShadow: '1px 1px 0 #000',
                  }} />
                  <div style={{
                    background: col.bg,
                    border: '2px solid #000',
                    boxShadow: '4px 4px 0 #000',
                    padding: '12px 16px 10px',
                    transform: `rotate(${card.rot})`,
                    minWidth: '120px',
                    maxWidth: '180px',
                  }}>
                    <div style={{
                      fontSize: '0.62rem', fontWeight: 700, textTransform: 'uppercase',
                      letterSpacing: '0.12em', color: col.text, marginBottom: '5px',
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}>
                      {card.title}
                    </div>
                    {card.items.map((item, j) => (
                      <div key={j} style={{
                        fontSize: '0.78rem', color: '#475569', fontWeight: 500,
                        lineHeight: 1.5, fontFamily: "'Plus Jakarta Sans', sans-serif",
                        textAlign: 'left',
                      }}>
                        · {item}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.65 }}
            className="flex flex-wrap gap-3 mt-2 justify-center lg:justify-start"
          >
            <a
              href="#portfolio"
              onClick={(e) => { e.preventDefault(); document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' }) }}
              style={{
                background: '#C73053', color: '#fff',
                border: '2px solid #000', boxShadow: '3px 3px 0 #000',
                padding: '9px 20px', fontSize: '0.88rem', fontWeight: 700,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px',
                transition: 'transform 0.1s, box-shadow 0.1s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translate(-1px,-1px)'; e.currentTarget.style.boxShadow = '5px 5px 0 #000' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '3px 3px 0 #000' }}
            >
              Lihat Portofolio <i className="fa-solid fa-arrow-right" />
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              style={{
                background: '#fff', color: '#0F172A',
                border: '2px solid #000', boxShadow: '3px 3px 0 #000',
                padding: '9px 20px', fontSize: '0.88rem', fontWeight: 700,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px',
                transition: 'transform 0.1s, box-shadow 0.1s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translate(-1px,-1px)'; e.currentTarget.style.boxShadow = '5px 5px 0 #000' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '3px 3px 0 #000' }}
            >
              Hubungi Saya
            </a>
          </motion.div>

        </div>

        {/* ══ KANAN — Foto Polaroid + Struk ══ */}
        <div className="hidden lg:flex lg:flex-1 flex-col items-center gap-5 z-10" style={{ paddingTop: '12px' }}>
          <ProfileCard />
        </div>

      </div>
    </div>
  )
}

function ProfileCard({ mobile }) {
  const cardWidth = mobile ? '200px' : '220px'
  const slotWidth = mobile ? '210px' : '230px'
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div ref={ref} className="flex flex-col items-center">

      {/* Sticky note kutipan di atas foto — hanya desktop */}
      {!mobile && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.5 }}
          style={{
            background: '#fef9c3',
            border: '2px solid #facc15',
            boxShadow: '3px 3px 0 #fde68a',
            padding: '10px 14px',
            maxWidth: '220px',
            marginBottom: '10px',
            transform: 'rotate(1.5deg)',
            alignSelf: 'flex-end',
            marginRight: '12px',
          }}
        >
          <p style={{
            fontFamily: "'Caveat', cursive",
            fontSize: '1rem',
            fontWeight: 600,
            color: '#7a1a30',
            lineHeight: 1.4,
            margin: 0,
          }}>
            "Teknologi yang indah, berdampak nyata" ✨
          </p>
        </motion.div>
      )}

      {/* Printer Slot */}
      <div style={{
        width: slotWidth,
        height: '14px',
        background: '#000',
        border: '2px solid #000',
        borderRadius: '3px',
        boxShadow: '2px 2px 0 #000',
        position: 'relative',
        zIndex: 3,
      }} />

      {/* Masking container — animasi keluar dari printer */}
      <div style={{
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '-4px',
        paddingTop: '4px',
        paddingBottom: '20px',
        paddingLeft: '20px',
        paddingRight: '20px',
        width: `calc(${cardWidth} + 40px)`,
        zIndex: 2,
      }}>
        <motion.div
          initial={{ y: '-105%' }}
          animate={inView ? { y: 0 } : { y: '-105%' }}
          transition={{ type: 'spring', stiffness: 40, damping: 15, delay: 0.3 }}
          style={{
            width: cardWidth,
            background: '#fff',
            border: '2px solid #000',
            boxShadow: '6px 6px 0 #000',
            padding: mobile ? '14px 14px 20px 14px' : '14px',
            position: 'relative',
          }}
        >
          {/* Foto */}
          <img
            src="/assets/profile.png"
            alt="Nathaviela Thalita Kirana"
            style={{
              width: '100%',
              display: 'block',
              border: '2px solid #000',
              aspectRatio: '3/4',
              objectFit: 'cover',
              objectPosition: 'top',
            }}
          />

          {/* Struk — hanya jika bukan mobile */}
          {!mobile ? (
            <div style={{
              fontFamily: 'monospace',
              fontSize: '0.68rem',
              color: '#0F172A',
              borderTop: '2px dashed #000',
              paddingTop: '12px',
              marginTop: '12px',
              lineHeight: 1.6,
            }}>
              <div style={{ textAlign: 'center', fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.15em', marginBottom: '4px' }}>
                PORTOFOLIO STRUK
              </div>
              <div style={{ textAlign: 'center', color: '#94a3b8', fontSize: '0.6rem', marginBottom: '8px' }}>
                RECEIPT #00214 · {new Date().toLocaleDateString('id-ID')}
              </div>
              <div style={{ borderTop: '1px dashed #cbd5e1', margin: '6px 0' }} />
              {[['NAMA:', 'NATHAVIELA T. K.'], ['SEKOLAH:', 'SMK TELKOM'], ['JURUSAN:', 'XI SIJA']].map(([k, v]) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#94a3b8' }}>{k}</span>
                  <span style={{ fontWeight: 600 }}>{v}</span>
                </div>
              ))}
              <div style={{ borderTop: '1px dashed #cbd5e1', margin: '6px 0' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700 }}>
                <span>ITEMS SKILL</span><span>QTY</span>
              </div>
              {['1. BACKEND DEV', '2. UI/UX DESIGN', '3. AI SPECIALIST'].map((s, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', color: '#64748b' }}>
                  <span>{s}</span><span>1</span>
                </div>
              ))}
              <div style={{ borderTop: '1px dashed #cbd5e1', margin: '6px 0' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700 }}>
                <span>TOTAL VALUE:</span><span>PRICELESS</span>
              </div>
              <div style={{ borderTop: '2px dashed #000', margin: '6px 0' }} />
              {/* Barcode */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '8px' }}>
                <svg style={{ width: '100%', height: '28px' }} viewBox="0 0 100 20" preserveAspectRatio="none">
                  {[[5,2],[9,1],[12,3],[17,1],[19,2],[23,4],[29,1],[32,2],[36,3],[41,1],[43,4],[49,2],[53,1],[56,3],[61,2],[65,1],[68,4],[74,2],[78,1],[81,3],[86,2],[90,1],[93,2]].map(([x,w], i) => (
                    <rect key={i} x={x} y="2" width={w} height="15" fill="black" />
                  ))}
                </svg>
                <span style={{ fontSize: '0.45rem', letterSpacing: '4px', fontFamily: 'monospace', marginTop: '2px' }}>NATHAVIELA-XI-SIJA</span>
              </div>
              <div style={{ textAlign: 'center', fontSize: '0.58rem', color: '#94a3b8', marginTop: '6px', fontWeight: 700, textTransform: 'uppercase' }}>
                Terima kasih telah berkunjung!
              </div>
            </div>
          ) : (
            /* Tampilan polaroid kosong/blank untuk mobile */
            <div style={{ height: '14px' }} />
          )}
        </motion.div>
      </div>
    </div>
  )
}
