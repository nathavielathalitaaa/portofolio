export default function Footer() {
  return (
    <footer
      className="py-14 px-[5%] mt-[120px] border-t-2 border-black"
      style={{ background: 'var(--brand-navy)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1 — Identity */}
          <div className="flex flex-col gap-1">
            <span className="font-mono font-bold text-white text-[1rem]">
              NATHAVIELA T.K.
            </span>
            <span className="text-slate-400 text-[0.8rem]">
              SMK Telkom Sidoarjo · XI SIJA
            </span>
          </div>

          {/* Column 2 — Navigation */}
          <div className="flex flex-col gap-2">
            <span className="text-slate-500 text-[0.7rem] tracking-widest uppercase mb-2 font-bold">
              NAVIGASI
            </span>
            <a href="#intro" className="text-slate-300 text-[0.85rem] hover:text-[var(--brand-pink-light)] transition-colors no-underline">
              Beranda
            </a>
            <a href="#about" className="text-slate-300 text-[0.85rem] hover:text-[var(--brand-pink-light)] transition-colors no-underline">
              Tentang
            </a>
            <a href="#hero" className="text-slate-300 text-[0.85rem] hover:text-[var(--brand-pink-light)] transition-colors no-underline">
              Portofolio
            </a>
            <a href="#contact" className="text-slate-300 text-[0.85rem] hover:text-[var(--brand-pink-light)] transition-colors no-underline">
              Kontak
            </a>
          </div>

          {/* Column 3 — Social */}
          <div className="flex flex-col gap-2">
            <span className="text-slate-500 text-[0.7rem] tracking-widest uppercase mb-2 font-bold">
              TEMUKAN SAYA
            </span>
            <a
              href="https://github.com/nathaviela"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 text-[0.85rem] hover:text-[var(--brand-pink-light)] transition-colors no-underline inline-flex items-center gap-2"
            >
              <i className="fa-brands fa-github" />
              <span>GitHub</span>
            </a>
            <a
              href="https://instagram.com/nathavielatk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 text-[0.85rem] hover:text-[var(--brand-pink-light)] transition-colors no-underline inline-flex items-center gap-2"
            >
              <i className="fa-brands fa-instagram" />
              <span>Instagram</span>
            </a>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="border-t border-white/10 pt-6">
          <p className="text-slate-500 text-[0.75rem] text-center">
            &copy; 2026 Nathaviela Thalita Kirana. Dibuat dengan ♥ dan banyak kopi.
          </p>
        </div>
      </div>
    </footer>
  )
}
