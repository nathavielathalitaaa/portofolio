import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'

const skillCards = [
  {
    side: 'left',
    accent: 'pink',
    rot: '-6deg',
    delay: '0s',
    title: 'Desainer UI/UX',
    items: ['Desain SahabatBuku', 'Desain Sistem HR'],
    posClass: 'left-[3%] top-[4%]',
  },
  {
    side: 'left',
    accent: 'pink',
    rot: '4deg',
    delay: '0.3s',
    title: 'Backend',
    items: ['Back-end Sistem HR', 'Back-end DISKANESIA'],
    posClass: 'left-[-4%] top-[40%]',
  },
  {
    side: 'left',
    accent: 'pink',
    rot: '-3deg',
    delay: '0.6s',
    title: 'Karya Tulis',
    items: ['Cerpen Garuda', 'Cerpen Tragedi'],
    posClass: 'left-[1%] top-[76%]',
  },
  {
    side: 'right',
    accent: 'blue',
    rot: '5deg',
    delay: '0.4s',
    title: 'Spesialis AI',
    items: ['Deteksi Alat', 'Personalisasi Pembelajaran Siswa', 'Rekap Cerdas Karyawan'],
    posClass: 'right-[3%] top-[7%]',
  },
  {
    side: 'right',
    accent: 'blue',
    rot: '-4deg',
    delay: '0.7s',
    title: 'Keamanan Siber',
    items: ['HMFC ITS CTF Nasional'],
    posClass: 'right-[-2%] top-[64%]',
  },
]

export default function Hero() {
  const introBrandRef = useRef(null)
  const introTaglineRef = useRef(null)
  const introContentRef = useRef(null)
  const portfolioTitleRef = useRef(null)
  const containerRef = useRef(null)

  // Vanilla scroll animation for hero intro (mirrors original script.js)
  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY
      const vh = window.innerHeight

      // Intro shrink / fade
      if (introBrandRef.current && introContentRef.current) {
        const maxScroll = 400
        const ratio = Math.min(Math.max(scrollY, 0), maxScroll) / maxScroll
        introBrandRef.current.style.fontSize = `${(4 - 3 * ratio).toFixed(3)}rem`
        if (introTaglineRef.current)
          introTaglineRef.current.style.fontSize = `${(1.4 - 0.4 * ratio).toFixed(3)}rem`
        introContentRef.current.style.opacity = (1 - 0.6 * ratio).toFixed(3)
        introContentRef.current.style.transform = `translateY(${-scrollY * 0.15}px)`
      }

      // Portfolio title grow / fade-in
      if (portfolioTitleRef.current) {
        const start = vh * 0.15
        const end = vh * 0.85
        const ratio = scrollY > start ? Math.min((scrollY - start) / (end - start), 1) : 0
        portfolioTitleRef.current.style.fontSize = `${(1.5 + 3.5 * ratio).toFixed(2)}rem`
        portfolioTitleRef.current.style.opacity = ratio.toFixed(3)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* ── HERO INTRO (Full-Screen) ───────────────────────────── */}
      <section
        id="hero-intro"
        className="h-screen flex flex-col justify-center items-center relative text-center px-5"
      >
        <div ref={introContentRef} className="flex flex-col items-center justify-center">
          {/* Brand */}
          <div
            ref={introBrandRef}
            className="flex items-center justify-center gap-[15px] mb-[15px]"
            style={{ fontSize: '4rem' }}
          >
            <span className="font-extrabold tracking-tight" style={{ color: 'var(--text-dark)' }}>
              Part
            </span>
            <span
              className="font-semibold mt-[5px]"
              style={{
                fontFamily: "'Dancing Script', cursive",
                color: 'var(--text-dark)',
              }}
            >
              of
            </span>
            <img
              src="/assets/smk_logo.svg"
              alt="SMK Telkom Sidoarjo"
              style={{ height: '1.6em', objectFit: 'contain' }}
            />
          </div>

          {/* Tagline */}
          <p
            ref={introTaglineRef}
            className="italic font-medium"
            style={{ fontSize: '1.4rem', color: 'var(--text-muted)' }}
          >
            Siswa SMK yang membangun solusi teknologi nyata
          </p>

          {/* CTA Refleksi Semester */}
          <a
            href="#journey"
            className="mt-8 px-6 py-3 border-2 border-black bg-white text-black font-bold text-[0.95rem] shadow-[4px_4px_0px_#e5345a] hover:-translate-y-1 hover:shadow-[6px_6px_0px_#e5345a] transition-all flex items-center gap-2"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Ingin lihat refleksi semester? Ke sini! <i className="fa-solid fa-arrow-down ml-1"></i>
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-10 flex flex-col items-center gap-2"
          style={{ color: 'var(--text-dark)', opacity: 0.8, animation: 'bounce-slow 2s infinite' }}
        >
          <span className="mouse-icon">
            <span className="mouse-wheel" />
          </span>
          <span className="text-[0.95rem]">
            <i className="fa-solid fa-chevron-down" />
          </span>
        </div>
      </section>

      {/* ── HERO CONTENT ──────────────────────────────────────── */}
      <section
        id="hero"
        className="min-h-screen flex flex-col justify-center px-[5%] pt-[140px] pb-20 max-w-[1200px] mx-auto"
      >
        {/* Section heading */}
        <div className="flex flex-col items-center text-center w-full mb-[80px] lg:mb-[50px]">
          <div className="relative inline-block w-full text-center">
            <span
              className="absolute font-[Plus_Jakarta_Sans,sans-serif] font-extrabold pointer-events-none select-none"
              style={{
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

        {/* Scattered layout — desktop */}
        <div className="relative w-full hidden lg:block" style={{ height: 720 }}>
          {/* Skill cards */}
          {skillCards.map((card, i) => (
            <div
              key={i}
              className={`card-brutal bob-float absolute w-[245px] z-[3]
                flex items-start gap-[15px] px-[18px] py-[14px]
                ${card.posClass}`}
              style={{
                '--rot': card.rot,
                animationDelay: card.delay,
              }}
            >
              <div
                className="w-[46px] h-[46px] rounded-none flex items-center justify-center text-[1.15rem] shrink-0
                           border-2 border-black"
                style={{
                  background: card.accent === 'pink' ? 'var(--brand-pink-light)' : '#E5F8FF',
                  color: card.accent === 'pink' ? 'var(--brand-pink)' : 'var(--brand-navy)',
                }}
              >
                <i className="fa-solid fa-user" />
              </div>
              <div>
                <h3 className="text-[1.05rem] font-black text-[var(--text-dark)] mb-[5px]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {card.title}
                </h3>
                {card.items.map((item, j) => (
                  <p key={j} className="text-[0.85rem] leading-[1.35] font-medium" style={{ color: 'var(--text-muted)' }}>
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}

          {/* Center profile */}
          <div className="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 z-[2] flex justify-center items-center">
            <ProfileCard />
          </div>
        </div>

        {/* Mobile stacked layout */}
        <div className="flex lg:hidden flex-col items-center gap-9">
          <ProfileCard mobile />
          {skillCards.map((card, i) => (
            <div
              key={i}
              className="card-brutal w-full max-w-[280px] flex items-start gap-[15px] px-[18px] py-[14px]"
              style={{
                animation: 'bob-float 5s ease-in-out infinite alternate',
              }}
            >
              <div
                className="w-[46px] h-[46px] rounded-none flex items-center justify-center text-[1.15rem] shrink-0 border-2 border-black"
                style={{
                  background: card.accent === 'pink' ? 'var(--brand-pink-light)' : '#E5F8FF',
                  color: card.accent === 'pink' ? 'var(--brand-pink)' : 'var(--brand-navy)',
                }}
              >
                <i className="fa-solid fa-user" />
              </div>
              <div>
                <h3 className="text-[1.05rem] font-black text-[var(--text-dark)] mb-[5px]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {card.title}
                </h3>
                {card.items.map((item, j) => (
                  <p key={j} className="text-[0.85rem] leading-[1.35] font-medium" style={{ color: 'var(--text-muted)' }}>
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

function ProfileCard({ mobile }) {
  const cardWidth = mobile ? '280px' : '320px'
  const slotWidth = mobile ? '290px' : '330px'
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div ref={ref} className="flex flex-col items-center justify-start">
      {/* Printer Slot */}
      <div
        className="bg-black relative z-30"
        style={{
          width: slotWidth,
          height: '14px',
          borderRadius: '3px',
          border: '2px solid #000',
          boxShadow: '2px 2px 0px #000',
        }}
      />
      {/* Masking container for print-out animation */}
      <div
        className="relative overflow-hidden flex justify-center z-20"
        style={{
          marginTop: '-4px',
          paddingTop: '4px',
          paddingBottom: '20px',
          paddingLeft: '20px',
          paddingRight: '20px',
          width: `calc(${cardWidth} + 40px)`,
        }}
      >
        {/* Polaroid Card */}
        <motion.div
          initial={{ y: '-105%' }}
          animate={inView ? { y: 0 } : { y: '-105%' }}
          transition={{
            type: 'spring',
            stiffness: 40,
            damping: 15,
            delay: 0.3,
          }}
          className="card-brutal flex flex-col items-center justify-start p-4 relative z-10"
          style={{
            width: cardWidth,
          }}
        >
          <img
            src="/assets/profile.png"
            alt="Nathaviela Thalita Kirana"
            className="w-full block border-2 border-black rounded-none object-cover"
            style={{ aspectRatio: '3/4' }}
          />
          <div className="w-full font-mono text-left text-[0.7rem] sm:text-[0.78rem] border-t-2 border-dashed border-black pt-4 mt-3 text-black">
            <div className="text-center font-bold tracking-wider text-[0.9rem] mb-1">
               PORTOFOLIO STRUK 
            </div>
            <div className="text-center text-[0.6rem] text-gray-500 mb-2">
              RECEIPT #00214 · {new Date().toLocaleDateString('id-ID')}
            </div>
            <div className="border-t border-dashed border-gray-400 my-2" />
            
            <div className="flex justify-between font-bold my-1">
              <span>NAMA:</span>
              <span className="text-right">NATHAVIELA T. K.</span>
            </div>
            <div className="flex justify-between my-1">
              <span>SEKOLAH:</span>
              <span className="text-right">SMK TELKOM SIDOARJO</span>
            </div>
            <div className="flex justify-between my-1">
              <span>JURUSAN:</span>
              <span className="text-right">XI SIJA</span>
            </div>
            
            <div className="border-t border-dashed border-gray-400 my-2" />
            
            <div className="flex justify-between font-bold my-1">
              <span>ITEMS SKILL</span>
              <span>QTY</span>
            </div>
            <div className="flex justify-between my-1 text-gray-700">
              <span>1. BACKEND DEVELOPER</span>
              <span>1</span>
            </div>
            <div className="flex justify-between my-1 text-gray-700">
              <span>2. UI/UX DESIGNER</span>
              <span>1</span>
            </div>
            <div className="flex justify-between my-1 text-gray-700">
              <span>3. AI ENTHUSIAST</span>
              <span>1</span>
            </div>
            
            <div className="border-t border-dashed border-gray-400 my-2" />
            
            <div className="flex justify-between font-bold text-[0.85rem] my-1">
              <span>TOTAL VALUE:</span>
              <span>PRICELESS</span>
            </div>
            
            <div className="border-t border-dashed border-black my-2" />
            
            {/* Barcode */}
            <div className="flex flex-col items-center mt-3">
              <svg className="w-full h-8" viewBox="0 0 100 20" preserveAspectRatio="none">
                <rect x="5" y="2" width="2" height="15" fill="black" />
                <rect x="9" y="2" width="1" height="15" fill="black" />
                <rect x="12" y="2" width="3" height="15" fill="black" />
                <rect x="17" y="2" width="1" height="15" fill="black" />
                <rect x="19" y="2" width="2" height="15" fill="black" />
                <rect x="23" y="2" width="4" height="15" fill="black" />
                <rect x="29" y="2" width="1" height="15" fill="black" />
                <rect x="32" y="2" width="2" height="15" fill="black" />
                <rect x="36" y="2" width="3" height="15" fill="black" />
                <rect x="41" y="2" width="1" height="15" fill="black" />
                <rect x="43" y="2" width="4" height="15" fill="black" />
                <rect x="49" y="2" width="2" height="15" fill="black" />
                <rect x="53" y="2" width="1" height="15" fill="black" />
                <rect x="56" y="2" width="3" height="15" fill="black" />
                <rect x="61" y="2" width="2" height="15" fill="black" />
                <rect x="65" y="2" width="1" height="15" fill="black" />
                <rect x="68" y="2" width="4" height="15" fill="black" />
                <rect x="74" y="2" width="2" height="15" fill="black" />
                <rect x="78" y="2" width="1" height="15" fill="black" />
                <rect x="81" y="2" width="3" height="15" fill="black" />
                <rect x="86" y="2" width="2" height="15" fill="black" />
                <rect x="90" y="2" width="1" height="15" fill="black" />
                <rect x="93" y="2" width="2" height="15" fill="black" />
              </svg>
              <span className="text-[0.5rem] tracking-[4px] font-mono mt-1 text-black">NATHAVIELA-XI-SIJA</span>
            </div>
            <div className="text-center text-[0.6rem] text-gray-500 mt-2 font-bold uppercase">
              TERIMA KASIH TELAH BERKUNJUNG!
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
