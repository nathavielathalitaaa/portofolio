export default function Footer() {
  return (
    <footer
      className="py-10 px-[5%] text-center mt-[120px] border-t-2 border-black"
      style={{ background: 'var(--brand-navy)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <div className="max-w-[1200px] mx-auto">
        <p className="text-[0.85rem] font-medium text-slate-300">
          &copy; 2026 Nathaviela Thalita Kirana. Hak cipta dilindungi undang-undang.
        </p>
        <p className="text-[0.85rem] font-bold mt-[8px] text-[var(--brand-pink-light)]">
          SMK Telkom Sidoarjo
        </p>
      </div>
    </footer>
  )
}
