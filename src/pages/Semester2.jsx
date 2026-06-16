import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import Navbar from '../components/Navbar'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts'
import { cn } from '@/lib/utils'
import { AspectRatio } from '@/components/ui/aspect-ratio'

import {
  DATA_COVER,
  DATA_REFLEKSI_UMUM,
  DATA_CAPAIAN_KARAKTER,
  PERBANDINGAN_KARAKTER,
  DATA_TANTANGAN_PEMBELAJARAN,
  DATA_PORTOFOLIO_LOMBA,
  DATA_PARTISIPASI,
  DATA_KESAN_PESAN_OTU
} from '../data/semester2Data'

// =========================================================================
// HELPER COMPONENTS & RENDER LOGIC
// =========================================================================

function RenderField({ value }) {
  if (!value || (typeof value === 'string' && value.trim() === '') || (Array.isArray(value) && value.length === 0)) {
    return <span className="italic font-medium" style={{ color: 'var(--text-muted)' }}>&mdash; belum diisi &mdash;</span>
  }
  return <span>{value}</span>
}

function RenderPhoto({ path, label }) {
  if (!path) {
    return (
      <div className="w-full h-[200px] border-2 border-dashed border-slate-300 flex flex-col items-center justify-center bg-slate-50 text-[var(--text-muted)] text-[0.85rem] p-4 text-center">
        <i className="fa-regular fa-image text-[2rem] mb-2 opacity-60" />
        <span className="italic">&mdash; Foto {label} belum diisi &mdash;</span>
      </div>
    )
  }
  return (
    <img
      src={path}
      alt={label}
      className="w-full h-auto max-h-[300px] object-cover object-top border-2 border-black shadow-[4px_4px_0px_#000000] rounded-none"
    />
  )
}

function DtpGalleryItem({ item, ratio }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  return (
    <div
      ref={ref}
      className="relative overflow-hidden bg-slate-900 rounded-2xl w-full"
    >
      <AspectRatio ratio={ratio}>
        {hasError ? (
          <div className="w-full h-full flex flex-col items-center justify-center bg-slate-800 text-white/50 text-[0.8rem] font-bold p-3 text-center">
            <i className="fa-solid fa-clock-rotate-left text-[1.5rem] mb-2 opacity-50" />
            <span>{item.label} Belum Tersedia</span>
          </div>
        ) : item.type === 'image' ? (
          <img
            src={item.src}
            alt={item.label}
            className={cn(
              "w-full h-full object-cover transition-opacity duration-700 ease-in-out opacity-0",
              {
                "opacity-100": isInView && !isLoading && !hasError,
              }
            )}
            onLoad={() => setIsLoading(false)}
            onError={() => setHasError(true)}
            loading="lazy"
          />
        ) : (
          <video
            src={item.src}
            className={cn(
              "w-full h-full object-cover transition-opacity duration-700 ease-in-out opacity-0",
              {
                "opacity-100": isInView && !hasError,
              }
            )}
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            preload="metadata"
            onLoadedData={() => setIsLoading(false)}
            onError={() => setHasError(true)}
          />
        )}
      </AspectRatio>

      {/* Premium Minimalist Label Badge */}
      <div className="absolute bottom-3 left-3 bg-black/60 text-white backdrop-blur-sm px-2.5 py-1 text-[0.7rem] font-mono font-bold tracking-wider uppercase rounded-md z-10 pointer-events-none">
        {item.label}
      </div>
    </div>
  )
}

function SlideSection({ index, judul, children, maxWidthClass = 'max-w-[1000px]' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      ref={ref}
      className={`min-h-screen py-[100px] px-[5%] ${maxWidthClass} mx-auto w-full flex flex-col justify-center items-start border-b border-black/10 last:border-0 relative z-10`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        {/* Removed Slide Index Label */}
        <div className="w-full flex flex-col gap-6">
          {children}
        </div>
      </motion.div>
    </section>
  )
}

function InteractiveLetter({ text }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full max-w-[650px] mx-auto mt-6 mb-4" style={{ height: '400px' }}>
      
      {/* Call Notification State */}
      <div 
        className={`absolute top-1/2 left-0 right-0 -translate-y-1/2 bg-white border-2 border-black rounded-full shadow-[4px_4px_0px_#000] p-3 pr-6 flex items-center justify-between transition-all duration-500 ${isOpen ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100 cursor-pointer hover:bg-slate-50'}`} 
        onClick={() => setIsOpen(true)}
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-green-500 border-2 border-black flex items-center justify-center shadow-inner">
            <i className="fa-solid fa-phone text-white text-xl animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-bold text-gray-900 text-[1.1rem] leading-tight">Panggilan Masuk...</span>
            <span className="text-gray-500 text-[0.85rem]">Ketuk untuk menjawab</span>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="w-10 h-10 rounded-full bg-red-500 border-2 border-black flex items-center justify-center shadow-sm">
            <i className="fa-solid fa-phone-slash text-white" />
          </div>
          <div className="w-10 h-10 rounded-full bg-green-500 border-2 border-black flex items-center justify-center shadow-sm">
            <i className="fa-solid fa-phone text-white" />
          </div>
        </div>
      </div>

      {/* Chat Message State */}
      <div className={`absolute inset-0 bg-[#f8fafc] border-2 border-black rounded-[1.5rem] shadow-[4px_4px_0px_#000] flex flex-col transition-all duration-500 overflow-hidden ${isOpen ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-95 pointer-events-none z-0'}`}>
        {/* Header */}
        <div className="flex items-center gap-3 border-b border-black/10 bg-white p-4">
          <div className="w-10 h-10 rounded-full bg-[var(--brand-pink)] border border-black flex items-center justify-center text-white overflow-hidden relative">
            <i className="fa-solid fa-user absolute z-0 text-white/50" />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-bold text-gray-900 leading-tight">Nathaviela</span>
            <span className="text-green-500 text-[0.7rem] font-bold">Online</span>
          </div>
          <button className="ml-auto text-gray-400 hover:text-black w-8 h-8 rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center" onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}>
            <i className="fa-solid fa-xmark text-xl" />
          </button>
        </div>

        {/* Chat Body */}
        <div className="flex-1 flex flex-col justify-center p-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
          {/* Chat bubble sliding in from left */}
          <div className={`flex w-full transition-all duration-700 ease-out ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`} style={{ transitionDelay: '300ms' }}>
            <div className="bg-white border-2 border-black rounded-2xl rounded-tl-sm p-6 text-[1.25rem] text-gray-800 leading-[1.7] shadow-[2px_2px_0px_rgba(0,0,0,0.15)] w-full text-left relative">
              {text}
              <div className="text-[0.65rem] text-gray-400 text-right mt-2 font-mono">12:30 PM</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// =========================================================================
// MAIN PAGE COMPONENT
// =========================================================================

export default function Semester2() {
  return (
    <div className="min-h-screen bg-[var(--surface-page)]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", '--brand-pink': '#e5345a', '--brand-pink-light': '#ffe6eb' }}>
      {/* Navigation Navbar */}
      <Navbar />

      {/* Floating Back Link */}


      {/* Presentation Container */}
      <div className="w-full flex flex-col relative pt-[80px]">


        {/* SLIDE 1 — COVER */}
        <SlideSection index={1} judul="COVER">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full pt-4">
            <div className="flex flex-col gap-4 text-left">
              <h1 className="text-[2.2rem] sm:text-[3rem] font-black text-[var(--text-dark)] leading-[1.2] uppercase">
                <RenderField value={DATA_COVER.judulKreatif} />
              </h1>
              <div className="h-[4px] w-20 bg-[var(--brand-pink)] rounded-none" />
              <div className="flex flex-col gap-2 font-semibold text-[1rem] sm:text-[1.05rem] text-[var(--text-dark)] mt-4">
                <div>Nama: <RenderField value={DATA_COVER.namaSiswa} /></div>
                <div>NIS: <RenderField value={DATA_COVER.nis} /></div>
                <div>Kelas: <RenderField value={DATA_COVER.kelas} /></div>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="w-[260px] h-[320px] relative">
                <div className="absolute inset-0 bg-[var(--brand-pink-light)] border-2 border-black translate-x-3 translate-y-3" />
                <div className="absolute inset-0 bg-white border-2 border-black p-4 flex flex-col justify-between shadow-sm">
                  <div className="w-full h-[230px] overflow-hidden border border-black bg-slate-100">
                    {DATA_COVER.fotoDiriPath ? (
                      <img src={DATA_COVER.fotoDiriPath} alt="Foto Diri" className="w-full h-full object-cover object-top" />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center text-[var(--text-muted)] italic text-[0.8rem] text-center p-2">
                        <i className="fa-regular fa-user text-[2rem] mb-2 opacity-50" />
                        &mdash; Foto Diri belum diisi &mdash;
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SlideSection>

        {/* Google Font Caveat untuk handwriting */}
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&display=swap');`}</style>

        {/* SLIDE 2 — REFLEKSI UMUM */}
        <SlideSection index={2} judul="REFLEKSI UMUM" maxWidthClass="max-w-[1150px]">
          <div className="relative w-full pt-4">

            {/* Washi tape decorators */}
            <div className="absolute -top-6 -left-4 w-20 h-7 -rotate-12 select-none pointer-events-none z-30"
              style={{ background: 'repeating-linear-gradient(90deg, #f9a8d4 0px, #f9a8d4 8px, #fbcfe8 8px, #fbcfe8 16px)', border: '1px solid rgba(0,0,0,0.08)', clipPath: 'polygon(0% 15%, 5% 0%, 95% 0%, 100% 15%, 100% 85%, 95% 100%, 5% 100%, 0% 85%)' }} />
            <div className="absolute -bottom-4 -right-2 w-20 h-7 rotate-6 select-none pointer-events-none z-30"
              style={{ background: 'repeating-linear-gradient(90deg, #fde68a 0px, #fde68a 8px, #fef3c7 8px, #fef3c7 16px)', border: '1px solid rgba(0,0,0,0.08)', clipPath: 'polygon(0% 15%, 5% 0%, 95% 0%, 100% 15%, 100% 85%, 95% 100%, 5% 100%, 0% 85%)' }} />
            <div className="absolute top-12 right-[30%] w-14 h-6 rotate-2 select-none pointer-events-none z-30"
              style={{ background: 'repeating-linear-gradient(90deg, #c4b5fd 0px, #c4b5fd 7px, #ddd6fe 7px, #ddd6fe 14px)', border: '1px solid rgba(0,0,0,0.06)', clipPath: 'polygon(0% 15%, 5% 0%, 95% 0%, 100% 15%, 100% 85%, 95% 100%, 5% 100%, 0% 85%)' }} />

            {/* Scrapbook Spread Base — paper texture via SVG filter */}
            <div className="card-brutal w-full min-h-[600px] flex flex-col md:flex-row gap-0 relative overflow-hidden"
              style={{
                background: '#FAF6EC',
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23noise)' opacity='0.06'/%3E%3C/svg%3E")`,
                border: '2px solid #000'
              }}>

              {/* Lined paper rules — left page */}
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-[50%] pointer-events-none z-0 overflow-hidden">
                {[...Array(22)].map((_, i) => (
                  <div key={i} className="absolute w-full border-b border-blue-100/60" style={{ top: `${36 + i * 24}px` }} />
                ))}
                {/* Red margin line */}
                <div className="absolute top-0 bottom-0 left-[56px] border-l-2 border-red-200/50" />
              </div>

              {/* Lined paper rules — right page */}
              <div className="hidden md:block absolute right-0 top-0 bottom-0 w-[50%] pointer-events-none z-0 overflow-hidden">
                {[...Array(22)].map((_, i) => (
                  <div key={i} className="absolute w-full border-b border-blue-100/60" style={{ top: `${36 + i * 24}px` }} />
                ))}
                <div className="absolute top-0 bottom-0 left-[56px] border-l-2 border-red-200/50" />
              </div>

              {/* Binder Spine Rings */}
              <div className="hidden md:flex flex-col justify-between absolute top-8 bottom-8 left-1/2 -translate-x-1/2 w-8 z-20 pointer-events-none">
                {[...Array(7)].map((_, i) => (
                  <div key={i} className="flex gap-1 justify-center items-center">
                    <div className="w-1.5 h-1.5 bg-slate-600 rounded-full border border-black" />
                    <div className="w-8 h-3 bg-gradient-to-r from-slate-300 to-slate-100 border border-black rounded-full" />
                    <div className="w-1.5 h-1.5 bg-slate-600 rounded-full border border-black" />
                  </div>
                ))}
              </div>

              {/* Central Spine */}
              <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-black/10 z-10" />

              {/* ===== LEFT PAGE ===== */}
              <div className="flex-1 flex flex-col gap-5 p-6 sm:p-10 md:pr-8 z-10 pb-10 relative">

                {/* Title with handwriting font */}
                <div className="relative mb-4">
                  <div className="absolute -left-6 -top-8 text-pink-200 opacity-40 text-[5rem] pointer-events-none select-none -rotate-12">
                    <i className="fa-solid fa-heart" />
                  </div>

                  {/* Doodle: wavy underline SVG under title */}
                  <h2 className="relative z-10 text-[2rem] md:text-[2.4rem] font-bold text-[#C73053] leading-tight"
                    style={{ fontFamily: "'Caveat', cursive" }}>
                    "Refleksi & Harapan..."
                  </h2>
                  <svg width="220" height="10" viewBox="0 0 220 10" className="mt-0.5 mb-1" style={{ display: 'block' }}>
                    <path d="M0,5 Q10,0 20,5 Q30,10 40,5 Q50,0 60,5 Q70,10 80,5 Q90,0 100,5 Q110,10 120,5 Q130,0 140,5 Q150,10 160,5 Q170,0 180,5 Q190,10 200,5 Q210,0 220,5"
                      fill="none" stroke="#C73053" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
                  </svg>

                  <div className="text-[1.15rem] font-bold text-black flex items-center gap-1.5"
                    style={{ fontFamily: "'Caveat', cursive" }}>
                    <span>— Nathaviela Thalita Kirana</span>
                    <i className="fa-solid fa-heart text-[#C73053] text-[0.75rem]" />
                  </div>
                </div>

                {/* Section 1: Pemahaman Diri */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2 pb-1">
                    {/* Highlighter effect on label */}
                    <span className="font-bold text-[0.9rem] uppercase tracking-wider text-[#7a1a30] px-1.5 py-0.5 relative"
                      style={{
                        fontFamily: "'Caveat', cursive",
                        fontSize: '1rem',
                        background: 'linear-gradient(to bottom, transparent 20%, #fda4af80 20%, #fda4af80 85%, transparent 85%)',
                        letterSpacing: '0.05em'
                      }}>
                      ♡ Pemahaman Diri Sebelum SMK
                    </span>
                  </div>
                  {/* Doodle: sketch arrow */}
                  <svg width="24" height="18" viewBox="0 0 24 18" className="ml-1 -mt-1 mb-0.5">
                    <path d="M2,9 Q8,4 14,9 Q18,13 20,9" fill="none" stroke="#C73053" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
                    <path d="M17,6 L20,9 L17,12" fill="none" stroke="#C73053" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
                  </svg>
                  <p className="text-black pl-1"
                    style={{ fontFamily: "'Caveat', cursive", fontSize: '1.25rem', fontWeight: 600 }}>
                    "{DATA_REFLEKSI_UMUM.pemahamanDiriSebelumSMK}"
                  </p>
                </div>

                {/* Section 2: Target & Harapan */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2 pb-1">
                    <span className="font-bold text-[0.9rem] uppercase tracking-wider text-[#7a1a30] px-1.5 py-0.5"
                      style={{
                        fontFamily: "'Caveat', cursive",
                        fontSize: '1rem',
                        background: 'linear-gradient(to bottom, transparent 20%, #fda4af80 20%, #fda4af80 85%, transparent 85%)',
                      }}>
                      ♡ Target & Harapan Awal
                    </span>
                  </div>
                  <p className="text-black pl-1"
                    style={{ fontFamily: "'Caveat', cursive", fontSize: '1.25rem', fontWeight: 600 }}>
                    "{DATA_REFLEKSI_UMUM.targetHarapanAwalKelasX}"
                  </p>
                </div>

                {/* Polaroid - left */}
                <div className="flex justify-center mt-4">
                  <div className="relative rotate-[-3deg]">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 z-10"
                      style={{ background: 'repeating-linear-gradient(90deg, #f9a8d4 0px, #f9a8d4 6px, #fbcfe8 6px, #fbcfe8 12px)', clipPath: 'polygon(0% 10%, 4% 0%, 96% 0%, 100% 10%, 98% 30%, 100% 50%, 97% 70%, 100% 90%, 96% 100%, 4% 100%, 0% 90%, 2% 70%, 0% 50%, 3% 30%)', border: '1px solid rgba(0,0,0,0.08)' }} />
                    <div className="border-2 border-black p-2.5 pb-8 bg-white shadow-[4px_4px_0px_#000000] w-[180px]">
                      <div className="border border-red-500/20 p-1 bg-slate-50 relative overflow-hidden">
                        <img
                          src={DATA_COVER.fotoDiriPath || "/assets/IDENTITAS_SEMESTER2.png"}
                          alt="Foto Nathaviela"
                          className="w-full h-[140px] object-cover"
                        />
                      </div>
                      <div className="mt-2.5 text-center text-slate-500"
                        style={{ fontFamily: "'Caveat', cursive", fontSize: '0.95rem', fontWeight: 600 }}>
                        Nathaviela T. K. ✨
                      </div>
                    </div>
                  </div>
                </div>

                {/* Doodle: 4-pointed star */}
                <svg width="32" height="32" viewBox="0 0 32 32" className="absolute bottom-16 left-4 opacity-30 pointer-events-none">
                  <path d="M16,2 L18,14 L30,16 L18,18 L16,30 L14,18 L2,16 L14,14 Z" fill="#C73053" />
                </svg>

                {/* Page number */}
                <div className="absolute bottom-2 left-2 w-7 h-7 rounded-full border-2 border-black bg-pink-100 flex items-center justify-center font-bold shadow-sm select-none z-20"
                  style={{ fontFamily: "'Caveat', cursive", fontSize: '0.9rem' }}>
                  20
                </div>
              </div>

              {/* ===== RIGHT PAGE ===== */}
              <div className="flex-1 flex flex-col gap-5 p-6 sm:p-10 md:pl-8 z-10 pb-10 relative justify-between">

                {/* Quote sticker */}
                <div className="flex justify-center my-2">
                  <div className="relative rotate-2 bg-pink-50 border-2 border-pink-200 px-4 py-3 text-center max-w-[280px]"
                    style={{ boxShadow: '3px 3px 0 #f9a8d4' }}>
                    {/* Doodle: corner stars */}
                    <svg width="16" height="16" viewBox="0 0 16 16" className="absolute -top-2 -left-2 opacity-60">
                      <path d="M8,1 L9,7 L15,8 L9,9 L8,15 L7,9 L1,8 L7,7 Z" fill="#C73053" />
                    </svg>
                    <svg width="12" height="12" viewBox="0 0 16 16" className="absolute -bottom-1 -right-1 opacity-40">
                      <path d="M8,1 L9,7 L15,8 L9,9 L8,15 L7,9 L1,8 L7,7 Z" fill="#C73053" />
                    </svg>
                    <p className="text-[#C73053] font-bold"
                      style={{ fontFamily: "'Caveat', cursive", fontSize: '1.05rem' }}>
                      "Menyambut teknologi digital dengan keyakinan & aksi nyata"
                    </p>
                  </div>
                </div>

                {/* Section 3: Nilai Terbesar */}
                <div className="flex flex-col gap-1.5 relative mt-2">
                  {/* Sticker stamp */}
                  <div className="absolute -top-5 right-0 bg-yellow-100 text-[#C73053] border-2 border-black px-2 py-0.5 rotate-3 shadow-[2px_2px_0_#000]"
                    style={{ fontFamily: "'Caveat', cursive", fontSize: '0.85rem', fontWeight: 700 }}>
                    ★ Prestasi Utama! ★
                  </div>

                  <div className="flex items-center gap-2 pb-1 mt-3">
                    <span className="font-bold uppercase text-[#7a1a30] px-1.5 py-0.5"
                      style={{
                        fontFamily: "'Caveat', cursive",
                        fontSize: '1rem',
                        background: 'linear-gradient(to bottom, transparent 20%, #fde04780 20%, #fde04780 85%, transparent 85%)',
                      }}>
                      ♡ Nilai Terbesar 1 Semester
                    </span>
                  </div>
                  {/* Doodle wavy underline yellow */}
                  <svg width="180" height="8" viewBox="0 0 180 8" className="ml-1 -mt-1 mb-0.5">
                    <path d="M0,4 Q15,0 30,4 Q45,8 60,4 Q75,0 90,4 Q105,8 120,4 Q135,0 150,4 Q165,8 180,4"
                      fill="none" stroke="#ca8a04" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
                  </svg>
                  <p className="text-black pl-1"
                    style={{ fontFamily: "'Caveat', cursive", fontSize: '1.25rem', fontWeight: 600 }}>
                    "{DATA_REFLEKSI_UMUM.nilaiTerbesarSatuSemester}"
                  </p>
                </div>

                {/* Section 4: Fokus Perbaikan */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2 pb-1">
                    <span className="font-bold uppercase text-[#7a1a30] px-1.5 py-0.5"
                      style={{
                        fontFamily: "'Caveat', cursive",
                        fontSize: '1rem',
                        background: 'linear-gradient(to bottom, transparent 20%, #fda4af80 20%, #fda4af80 85%, transparent 85%)',
                      }}>
                      ♡ Fokus Perbaikan
                    </span>
                  </div>
                  <p className="text-black pl-1"
                    style={{ fontFamily: "'Caveat', cursive", fontSize: '1.25rem', fontWeight: 600 }}>
                    "{DATA_REFLEKSI_UMUM.fokusPerbaikanSemesterBerikutnya}"
                  </p>
                  {/* Doodle: bracket/underline accent */}
                  <svg width="140" height="14" viewBox="0 0 140 14" className="ml-1 mt-0.5">
                    <path d="M2,2 L2,12 L10,12" fill="none" stroke="#C73053" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
                    <path d="M138,2 L138,12 L130,12" fill="none" stroke="#C73053" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
                  </svg>
                </div>

                {/* Polaroid pair */}
                <div className="grid grid-cols-2 gap-4 items-end mt-2">
                  <div className="flex justify-center">
                    <div className="relative rotate-[3deg]">
                      <div className="absolute -top-3 left-6 w-12 h-5 z-10"
                        style={{ background: 'repeating-linear-gradient(90deg, #6ee7b7 0px, #6ee7b7 5px, #a7f3d0 5px, #a7f3d0 10px)', clipPath: 'polygon(0% 10%, 4% 0%, 96% 0%, 100% 10%, 98% 30%, 100% 50%, 97% 70%, 100% 90%, 96% 100%, 4% 100%, 0% 90%, 2% 70%, 0% 50%, 3% 30%)', border: '1px solid rgba(0,0,0,0.08)' }} />
                      <div className="border-2 border-black p-2 pb-6 bg-white shadow-[3px_3px_0px_#000000] w-[130px]">
                        <div className="border border-black/10 p-0.5 bg-slate-50">
                          <img src="/assets/about3.jpeg" alt="Praktikum Jaringan"
                            className="w-full h-[90px] object-cover" />
                        </div>
                        <div className="mt-1.5 text-center text-slate-500"
                          style={{ fontFamily: "'Caveat', cursive", fontSize: '0.8rem', fontWeight: 600 }}>
                          Praktikum Jaringan
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="relative rotate-[-3deg]">
                      <div className="absolute -top-3 right-6 w-12 h-5 z-10"
                        style={{ background: 'repeating-linear-gradient(90deg, #a5b4fc 0px, #a5b4fc 5px, #c7d2fe 5px, #c7d2fe 10px)', clipPath: 'polygon(0% 10%, 4% 0%, 96% 0%, 100% 10%, 98% 30%, 100% 50%, 97% 70%, 100% 90%, 96% 100%, 4% 100%, 0% 90%, 2% 70%, 0% 50%, 3% 30%)', border: '1px solid rgba(0,0,0,0.08)' }} />
                      <div className="border-2 border-black p-2 pb-6 bg-white shadow-[3px_3px_0px_#000000] w-[130px]">
                        <div className="border border-black/10 p-0.5 bg-slate-50">
                          <img src="/assets/about5.jpeg" alt="SMK Telkom"
                            className="w-full h-[90px] object-cover" />
                        </div>
                        <div className="mt-1.5 text-center text-slate-500"
                          style={{ fontFamily: "'Caveat', cursive", fontSize: '0.8rem', fontWeight: 600 }}>
                          SMK Telkom 🏫
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Doodle: scribble circle accent */}
                <svg width="48" height="48" viewBox="0 0 48 48" className="absolute bottom-16 right-4 opacity-20 pointer-events-none">
                  <path d="M24,6 Q42,6 42,24 Q42,42 24,42 Q6,42 6,24 Q6,8 22,6 Q38,5 40,22"
                    fill="none" stroke="#C73053" strokeWidth="2" strokeLinecap="round" />
                </svg>

                {/* Page number */}
                <div className="absolute bottom-2 right-2 w-7 h-7 rounded-full border-2 border-black bg-pink-100 flex items-center justify-center font-bold shadow-sm select-none z-20"
                  style={{ fontFamily: "'Caveat', cursive", fontSize: '0.9rem' }}>
                  21
                </div>
              </div>

              {/* Scattered bg accents */}
              <div className="absolute top-1/3 left-[44%] text-pink-300/30 pointer-events-none select-none z-20 rotate-12 text-[0.8rem]">♡</div>
              <div className="absolute bottom-1/4 right-[44%] text-pink-300/30 pointer-events-none select-none z-20 -rotate-12 text-[0.7rem]">♡</div>

            </div>
          </div>
        </SlideSection>

        {/* SLIDE 3 — CAPAIAN KARAKTER */}
        <SlideSection index={3} judul="CAPAIAN KARAKTER" maxWidthClass="max-w-[1200px]">
          <div className="flex flex-col gap-8 w-full text-left">
            {/* Combined Chart & Detail Card */}
            <div className="card-brutal p-5 bg-white flex flex-col gap-6">
              {/* Chart */}
              <div>
                <h3 className="font-bold mb-3 text-[1.1rem]" style={{ color: 'var(--text-dark)' }}>
                  Perbandingan Nilai Semester 1 vs Semester 2
                </h3>
                <ResponsiveContainer width="100%" height={340}>
                  <LineChart data={PERBANDINGAN_KARAKTER} margin={{ top: 20, right: 20, left: -10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                    <XAxis dataKey="aspek" tick={{ fontSize: 11, fill: 'var(--text-muted)' }} interval={0} angle={-15} textAnchor="end" height={60} />
                    <YAxis domain={[60, 110]} tick={{ fontSize: 12, fill: 'var(--text-muted)' }} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="semester1" name="Semester 1" stroke="var(--brand-navy)" strokeWidth={3} activeDot={{ r: 8 }}>
                      <LabelList dataKey="semester1" position="top" style={{ fontSize: 10, fill: 'var(--brand-navy)', fontWeight: 'bold' }} />
                    </Line>
                    <Line type="monotone" dataKey="semester2" name="Semester 2" stroke="var(--brand-pink)" strokeWidth={3} activeDot={{ r: 8 }}>
                      <LabelList dataKey="semester2" position="top" style={{ fontSize: 11, fill: 'var(--text-dark)', fontWeight: 'bold' }} />
                    </Line>
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Detailed Scores Grid */}
              <div className="border-t border-black/10 pt-5">
                <h4 className="font-bold mb-4 text-[0.95rem] text-[var(--brand-pink)]">
                  DETAIL NILAI KARAKTER SEMESTER 2
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
                  {PERBANDINGAN_KARAKTER.map((item, idx) => (
                    <div key={idx} className="border border-black p-3 bg-slate-50 text-center flex flex-col justify-between">
                      <div className="text-[0.65rem] uppercase text-gray-500 font-bold mb-2 leading-tight min-h-[24px] flex items-center justify-center">{item.aspek}</div>
                      <div className="text-[1.35rem] font-black text-[var(--brand-pink)]">{item.semester2}</div>
                    </div>
                  ))}
                  {/* Lari Ritmik */}
                  <div className="border border-black p-3 bg-slate-50 text-center flex flex-col justify-between">
                    <div className="text-[0.65rem] uppercase text-gray-500 font-bold mb-2 leading-tight min-h-[24px] flex items-center justify-center">Lari Ritmik</div>
                    <div className="text-[1.1rem] font-black text-[var(--brand-pink)]">MAHIR</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SlideSection>

        {/* SLIDE 4 — TANTANGAN DAN PEMBELAJARAN (Bulletin Board style with light blue grid background) */}
        <div className="w-full" style={{
          backgroundColor: 'var(--surface-page)',
          backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}>
          <SlideSection index={4} judul="TANTANGAN DAN PEMBELAJARAN" maxWidthClass="max-w-[1150px]">
            <div className="w-full flex flex-col gap-6 text-left relative z-10">

              {/* Row 1: Top Banner (Ringkasan Pembelajaran) */}
              <div className="w-full mb-4">
                <div className="card-brutal p-6 bg-white relative rotate-[-0.5deg]">
                  {/* Thumbtack pins on left and right for banner */}
                  <div className="absolute -top-3 left-[15%] z-20 pointer-events-none select-none">
                    <i className="fa-solid fa-thumbtack text-[#e5345a] text-[1.4rem] -rotate-45 drop-shadow-[1px_2px_1px_rgba(0,0,0,0.35)]" />
                  </div>
                  <div className="absolute -top-3 right-[15%] z-20 pointer-events-none select-none">
                    <i className="fa-solid fa-thumbtack text-[#e5345a] text-[1.4rem] rotate-45 drop-shadow-[1px_2px_1px_rgba(0,0,0,0.35)]" />
                  </div>

                  <h3 className="font-black text-[1.3rem] text-[#e5345a] mb-2 text-center" style={{ fontFamily: "'Caveat', cursive", fontSize: '1.8rem' }}>
                    ★ Ringkasan Pembelajaran Setahun ★
                  </h3>
                  <p className="text-[0.95rem] leading-[1.6] text-gray-800 text-center max-w-[900px] mx-auto font-medium">
                    "{DATA_TANTANGAN_PEMBELAJARAN.ringkasanPembelajaranSetahun}"
                  </p>
                </div>
              </div>

              {/* Row 2: Columns */}
              <div className="flex flex-col gap-12 w-full items-start">

                {/* Tantangan & Solusi (Detective Board) */}
                <div className="flex flex-col gap-4 w-full">
                  <h3 className="font-black text-[1.25rem] text-[var(--text-dark)] flex items-center gap-2">
                    <i className="fa-solid fa-triangle-exclamation text-[#e5345a]" />
                    Daftar Tantangan & Solusi
                  </h3>

                  <div className="w-full relative flex items-center py-8">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-6 items-stretch relative w-full">
                      {DATA_TANTANGAN_PEMBELAJARAN.tantanganList.map((item, idx) => {
                        const bgColors = ["bg-[#fff0f3]", "bg-[#fefce8]", "bg-[#ecfeff]", "bg-white"];
                        const cardRotation = idx === 0 ? 'rotate-[-2deg]' : idx === 1 ? 'rotate-[3deg]' : idx === 2 ? 'rotate-[-3deg]' : 'rotate-[2deg]';
                        const pinRotation = idx === 0 ? '-rotate-12' : idx === 1 ? 'rotate-12' : idx === 2 ? '-rotate-45' : 'rotate-45';
                        const translateY = idx % 2 === 0 ? 'lg:-translate-y-6' : 'lg:translate-y-6';

                        return (
                          <div key={idx} className={`flex-1 w-full card-brutal p-4 flex flex-col gap-2 min-h-[180px] justify-between relative ${bgColors[idx]} ${cardRotation} ${translateY}`}>
                            
                            {/* Desktop Thread to next card */}
                            {idx < DATA_TANTANGAN_PEMBELAJARAN.tantanganList.length - 1 && (
                              <svg className="hidden lg:block absolute top-0 left-1/2 w-[calc(100%+1.5rem)] h-[0px] pointer-events-none z-[1]" style={{ overflow: 'visible' }}>
                                <line x1="0" y1="-12" x2="100%" y2={idx % 2 === 0 ? "36" : "-60"} stroke="#e5345a" strokeWidth="3" className="drop-shadow-[1px_2px_1px_rgba(0,0,0,0.3)]" />
                              </svg>
                            )}

                            {/* Mobile Thread to next card */}
                            {idx < DATA_TANTANGAN_PEMBELAJARAN.tantanganList.length - 1 && (
                              <svg className="block lg:hidden absolute top-[-12px] left-1/2 w-[0px] h-[calc(100%+2rem)] pointer-events-none z-[1]" style={{ overflow: 'visible' }}>
                                <line x1="0" y1="0" x2="0" y2="100%" stroke="#e5345a" strokeWidth="3" strokeDasharray="6,6" className="drop-shadow-[1px_2px_1px_rgba(0,0,0,0.3)]" />
                              </svg>
                            )}

                            {/* Pin */}
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 pointer-events-none select-none">
                              <i className={`fa-solid fa-thumbtack text-[#e5345a] text-[1.2rem] ${pinRotation} drop-shadow-[1px_2px_1px_rgba(0,0,0,0.35)]`} />
                            </div>

                            <div className="flex flex-col text-left mt-2 z-10 bg-inherit relative h-full">
                              <strong className="text-[var(--text-dark)] text-[0.95rem] font-black">{item.tantangan}</strong>
                              <span className="text-slate-900 font-bold text-[0.8rem] mt-1 leading-relaxed">{item.deskripsi}</span>
                            </div>

                            <div className="mt-4 px-2.5 py-1.5 bg-white border border-black/10 text-[0.76rem] text-slate-800 font-medium z-10 relative">
                              <span className="font-bold text-[#e5345a]">Solusi:</span> {item.solusi}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Right Column - Keahlian (Grid of 4 cards) */}
                <div className="flex flex-col gap-4 w-full mt-4">
                  <h3 className="font-black text-[1.25rem] text-[var(--text-dark)] flex items-center gap-2">
                    <i className="fa-solid fa-graduation-cap text-[#e5345a]" />
                    Keahlian yang Dipelajari
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                    {DATA_TANTANGAN_PEMBELAJARAN.skillsDipelajari.map((s, idx) => {
                      const cardRotation = idx === 0 ? 'rotate-[-1deg]' : idx === 1 ? 'rotate-[1.5deg]' : idx === 2 ? 'rotate-[-1.5deg]' : 'rotate-[1deg]';
                      const pinRotation = idx === 0 ? '-rotate-45' : idx === 1 ? 'rotate-45' : idx === 2 ? '-rotate-12' : 'rotate-12';

                      return (
                        <div key={idx} className={`card-brutal p-4 bg-white flex flex-col justify-between gap-2.5 min-h-[170px] relative ${cardRotation}`}>
                          {/* Pin */}
                          <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 pointer-events-none select-none">
                            <i className={`fa-solid fa-thumbtack text-[#e5345a] text-[1.2rem] ${pinRotation} drop-shadow-[1px_2px_1px_rgba(0,0,0,0.35)]`} />
                          </div>

                          <div className="flex flex-col gap-1 text-left">
                            <div className="font-black text-[0.98rem] text-[var(--text-dark)] leading-tight">
                              {s.namaSkill}
                            </div>
                            <div className="text-[0.78rem] text-gray-500 font-medium leading-snug">
                              {s.deskripsi}
                            </div>
                          </div>

                          {/* Progress Bar & Project */}
                          <div className="flex flex-col gap-1.5 mt-auto pt-2 border-t border-black/5">
                            <div className="flex justify-between items-start text-[0.74rem] font-bold gap-2">
                              <span className="text-[#e5345a] font-bold leading-tight text-[0.76rem]">
                                {s.project}
                              </span>

                              <div className="flex-shrink-0">
                                <span className="font-mono text-slate-800">{s.persentase}%</span>
                              </div>
                            </div>

                            <div className="w-full h-3 bg-slate-100 border border-black rounded-none overflow-hidden relative">
                              <div
                                className="h-full bg-[#e5345a] border-r border-black transition-all duration-500"
                                style={{ width: `${s.persentase}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>
            </div>
          </SlideSection>
        </div>

        {/* SLIDE 5 — PORTOFOLIO DAN LOMBA (Bulletin Board style) */}
        <div className="w-full" style={{
          backgroundColor: 'var(--surface-page)',
          backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}>
          <SlideSection index={5} judul="PORTOFOLIO DAN LOMBA" maxWidthClass="max-w-[1150px]">
            <div className="w-full flex flex-col gap-6 text-left relative z-10">

              {/* Header Banner */}
              <div className="w-full mb-2">
                <div className="card-brutal p-5 bg-white relative">
                  <div className="absolute -top-3 left-[15%] z-20 pointer-events-none select-none">
                    <i className="fa-solid fa-thumbtack text-[#e5345a] text-[1.4rem] -rotate-45 drop-shadow-[1px_2px_1px_rgba(0,0,0,0.35)]" />
                  </div>
                  <div className="absolute -top-3 right-[15%] z-20 pointer-events-none select-none">
                    <i className="fa-solid fa-thumbtack text-[#e5345a] text-[1.4rem] rotate-45 drop-shadow-[1px_2px_1px_rgba(0,0,0,0.35)]" />
                  </div>
                  <h3 className="font-black text-[1.3rem] text-gray-800 mb-1 text-center" style={{ fontFamily: "'Caveat', cursive", fontSize: '1.8rem' }}>
                    Kompetisi yang Diikuti
                  </h3>
                  <p className="text-[0.9rem] text-gray-600 text-center font-medium">
                    Daftar lomba dan kompetisi yang diikuti sepanjang tahun ajaran 2025/2026
                  </p>
                </div>
              </div>

              {/* Category Legend */}
              <div className="flex flex-wrap gap-3 justify-center">
                {[
                  { label: 'Karya Tulis', color: '#475569', icon: 'fa-solid fa-pen-nib' },
                  { label: 'Kecerdasan Buatan', color: '#475569', icon: 'fa-solid fa-robot' },
                  { label: 'Bisnis & Inovasi', color: '#475569', icon: 'fa-solid fa-lightbulb' },
                  { label: 'Competitive Programming', color: '#475569', icon: 'fa-solid fa-code' }
                ].map((cat, i) => (
                  <div key={i} className="flex items-center gap-1.5 px-3 py-1 border border-black bg-white text-[0.75rem] font-bold shadow-[2px_2px_0px_#000]">
                    <i className={cat.icon} style={{ color: cat.color, fontSize: '0.7rem' }} />
                    <span style={{ color: cat.color }}>{cat.label}</span>
                  </div>
                ))}
              </div>

              {/* Competition Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
                {DATA_PORTOFOLIO_LOMBA.lombaList.map((l, idx) => {
                  const pinRotations = ['-rotate-12', 'rotate-12', '-rotate-45', 'rotate-45', '-rotate-12', 'rotate-12', '-rotate-45'];

                  return (
                    <div key={idx} className={`card-brutal p-0 flex flex-col relative bg-slate-50 overflow-hidden`}>
                      {/* Pin */}
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 pointer-events-none select-none">
                        <i className={`fa-solid fa-thumbtack text-[1.2rem] text-gray-700 ${pinRotations[idx]} drop-shadow-[1px_2px_1px_rgba(0,0,0,0.35)]`} />
                      </div>

                      {/* Competition Image */}
                      <div className="w-full h-[140px] overflow-hidden border-b-2 border-black bg-white">
                        <img
                          src={l.gambarPath}
                          alt={l.namaLomba}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>

                      <div className="p-4 flex flex-col gap-3 flex-1 justify-between">
                        {/* Icon + Name */}
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 flex-shrink-0 border-2 border-black flex items-center justify-center text-white text-[1rem] shadow-[2px_2px_0px_#000]"
                            style={{ backgroundColor: '#475569' }}>
                            <i className={l.icon} />
                          </div>
                          <div className="flex flex-col gap-1 flex-1 min-w-0">
                            <span className="font-black text-[0.92rem] text-[var(--text-dark)] leading-tight">
                              {l.namaLomba}
                            </span>
                          </div>
                        </div>

                        {/* Category Badge */}
                        <div className="mt-auto pt-2 border-t border-black/5">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[0.72rem] font-bold border border-black/15 bg-white"
                            style={{ color: '#475569' }}>
                            <i className={`${l.icon} text-[0.6rem]`} />
                            {l.kategori}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Footer Summary Card */}
              <div className="w-full mt-2">
                <div className="card-brutal p-4 bg-white relative flex flex-wrap items-center justify-center gap-6">
                  <div className="absolute -top-3 left-8 z-20 pointer-events-none select-none">
                    <i className="fa-solid fa-thumbtack text-[#f59e0b] text-[1.1rem] -rotate-12 drop-shadow-[1px_2px_1px_rgba(0,0,0,0.35)]" />
                  </div>
                  {[
                    { count: DATA_PORTOFOLIO_LOMBA.lombaList.length, label: 'Total Kompetisi', color: '#475569', icon: 'fa-solid fa-trophy' },
                    { count: DATA_PORTOFOLIO_LOMBA.lombaList.filter(l => l.kategori === 'Karya Tulis').length, label: 'Karya Tulis', color: '#475569', icon: 'fa-solid fa-pen-nib' },
                    { count: DATA_PORTOFOLIO_LOMBA.lombaList.filter(l => l.kategori === 'Kecerdasan Buatan').length, label: 'AI', color: '#475569', icon: 'fa-solid fa-robot' },
                    { count: DATA_PORTOFOLIO_LOMBA.lombaList.filter(l => l.kategori === 'Bisnis & Inovasi').length, label: 'Bisnis', color: '#475569', icon: 'fa-solid fa-lightbulb' },
                    { count: DATA_PORTOFOLIO_LOMBA.lombaList.filter(l => l.kategori === 'Competitive Programming').length, label: 'Programming', color: '#475569', icon: 'fa-solid fa-code' }
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-9 h-9 border-2 border-black flex items-center justify-center text-white text-[0.85rem] shadow-[2px_2px_0px_#000]"
                        style={{ backgroundColor: stat.color }}>
                        <i className={stat.icon} />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-black text-[1.3rem] leading-none" style={{ color: stat.color }}>{stat.count}</span>
                        <span className="text-[0.68rem] font-bold text-gray-500 uppercase tracking-wide">{stat.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </SlideSection>
        </div>

        {/* SLIDE 6 — PARTISIPASI */}
        <SlideSection index={6} judul="PARTISIPASI" maxWidthClass="max-w-[1300px]">
          <div className="grid grid-cols-1 gap-6 w-full text-left">
            <div className="flex flex-col gap-4 w-full">
              <h3 className="font-black text-[1.2rem] flex items-center gap-2 justify-center mb-2">
                <i className="fa-solid fa-certificate text-[var(--brand-pink)]" />
                Kegiatan Akademik (Seminar & Sertifikasi)
              </h3>
              {(!DATA_PARTISIPASI.kegiatanAkademikList || DATA_PARTISIPASI.kegiatanAkademikList.length === 0) ? (
                <div className="text-center italic py-10" style={{ color: 'var(--text-muted)' }}>&mdash; belum diisi &mdash;</div>
              ) : (
                <div className="flex flex-col gap-4">
                  {DATA_PARTISIPASI.kegiatanAkademikList.map((k, idx) => (
                    <div key={idx} className="bg-white border border-gray-200 rounded-md overflow-hidden max-w-[450px] mx-auto w-full font-sans shadow-sm my-4">
                      {/* Repost Indicator */}
                      <div className="px-3 py-2 flex items-center gap-2 text-gray-500 text-[0.75rem] font-semibold border-b border-gray-100 bg-gray-50/50">
                        <i className="fa-solid fa-retweet"></i>
                        <span>Anda memposting ulang</span>
                      </div>
                      {/* Instagram Header */}
                      <div className="flex items-center justify-between p-3 border-b border-gray-100">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 p-[2px]">
                            <div className="w-full h-full bg-white rounded-full p-[2px]">
                              <img src={k.gambarPath || "https://ui-avatars.com/api/?name=A&background=random"} alt="Profile" className="w-full h-full rounded-full object-cover" />
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <span className="font-semibold text-[0.85rem] leading-none text-gray-900">
                              {k.namaKegiatan.split(':')[0] || "kegiatan"}
                            </span>
                            <span className="text-[0.7rem] text-gray-500 mt-0.5">Sponsored</span>
                          </div>
                        </div>
                        <i className="fa-solid fa-ellipsis text-gray-600"></i>
                      </div>

                      {/* Instagram Image */}
                      {k.gambarPath && (
                        <div className="w-full aspect-square bg-gray-50 overflow-hidden relative">
                          <img src={k.gambarPath} alt={k.namaKegiatan} className="w-full h-full object-cover" />
                        </div>
                      )}

                      {/* Instagram Actions & Caption */}
                      <div className="p-3">
                        <div className="flex justify-between items-center mb-3">
                          <div className="flex gap-4 text-[1.4rem] text-gray-800">
                            <i className="fa-solid fa-heart text-red-500 cursor-pointer transition-colors scale-110"></i>
                            <i className="fa-regular fa-comment hover:text-gray-500 cursor-pointer transition-colors"></i>
                            <i className="fa-regular fa-paper-plane hover:text-gray-500 cursor-pointer transition-colors"></i>
                          </div>
                          <i className="fa-regular fa-bookmark text-[1.4rem] text-gray-800 hover:text-gray-500 cursor-pointer transition-colors"></i>
                        </div>

                        <div className="font-semibold text-[0.85rem] mb-1.5 text-gray-900">
                          Disukai oleh <span className="font-bold">dosen_pembimbing</span> dan <span className="font-bold">ratusan lainnya</span>
                        </div>

                        <div className="text-[0.85rem] text-gray-800 leading-snug">
                          <span className="font-bold mr-1.5 text-gray-900">{k.namaKegiatan.split(':')[0] || "kegiatan"}</span>
                          {k.namaKegiatan.includes(':') ? k.namaKegiatan.split(':')[1].trim() + " - " : ""}
                          {k.deskripsi}
                        </div>

                        <div className="mt-2 text-[0.85rem] text-gray-800 leading-snug">
                          <span className="font-bold mr-1.5 text-gray-900">nathaviela</span>
                          aku semangat mengikuti
                        </div>

                        <div className="text-[0.65rem] text-gray-500 uppercase mt-3 tracking-wide font-medium">
                          STATUS: {k.status}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* DTP Gallery */}
          <div className="w-full mt-6">
            <div className="card-brutal p-6 bg-white flex flex-col gap-5">
              <h3 className="font-black text-[1.2rem] flex items-center gap-2">
                <i className="fa-solid fa-images text-[var(--brand-pink)]" />
                Galeri Proyek Desain Teknologi (DTP)
              </h3>

              <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 w-full [column-fill:_balance]">
                {[
                  { src: '/assets/DTP1.jpeg', label: 'DTP 1', ratio: 4 / 3 },
                  { src: '/assets/DTP2.jpeg', label: 'DTP 2', ratio: 3 / 4 },
                  { src: '/assets/DTP3.jpeg', label: 'DTP 3', ratio: 16 / 9 },
                  { src: '/assets/DTP4.jpeg', label: 'DTP 4', ratio: 1 / 1 },
                  { src: '/assets/dtp5.jpeg', label: 'DTP 5', ratio: 3 / 4 },
                  { src: '/assets/DTP6.mp4', label: 'DTP 6', ratio: 9 / 16 },
                  { src: '/assets/DTP7.mp4', label: 'DTP 7', ratio: 16 / 9 },
                  { src: '/assets/DTP8.mp4', label: 'DTP 8', ratio: 9 / 16 },
                  { src: '/assets/DTP9.mp4', label: 'DTP 9', ratio: 16 / 9 },
                  { src: '/assets/DTP10.jpeg', label: 'DTP 10', ratio: 4 / 3 },
                  { src: '/assets/DTP11.jpeg', label: 'DTP 11', ratio: 3 / 4 },
                ].map((item, idx) => {
                  const type = item.src.toLowerCase().endsWith('.mp4') ? 'video' : 'image';
                  return (
                    <div key={idx} className="break-inside-avoid mb-6">
                      <DtpGalleryItem item={{ ...item, type }} ratio={item.ratio} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </SlideSection>

        {/* SLIDE 7 — KESAN DAN PESAN UNTUK ORANG TUA */}
        <SlideSection index={7} judul="KESAN DAN PESAN UNTUK ORANG TUA">
          <div className="flex flex-col items-center justify-center text-center w-full max-w-[800px] mx-auto">
            <h3 className="font-black text-[1.4rem] mb-2 uppercase tracking-wide text-gray-800">Kesan & Pesan</h3>
            <InteractiveLetter text="Terima kasih yang tulus untuk Mama dan Papa atas doa dan dukungan yang tak pernah putus. Juga untuk Bapak Galih, wali kelas saya, atas perhatian dan bimbingan yang tak pernah luntur sepanjang semester ini" />
          </div>
        </SlideSection>
      </div>
    </div>
  )
}
