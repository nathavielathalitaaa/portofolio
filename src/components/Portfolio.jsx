import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import InfiniteMenu from './InfiniteMenu'
import PROJECTS_DATA from '../data/projects'

export default function Portfolio() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [selectedProject, setSelectedProject] = useState(null)

  // Map PROJECTS_DATA to WebGL InfiniteMenu format
  const menuItems = PROJECTS_DATA.map((proj) => ({
    image: proj.image,
    link: proj.github || proj.demo || '#',
    title: proj.title,
    description: proj.subtitle || proj.description,
  }))

  return (
    <section id="portfolio" className="py-[100px] sm:py-[120px] w-full relative" ref={ref}>
      {/* Section Header */}
      <motion.div
        className="relative text-center mb-[50px] px-[5%] max-w-[1200px] mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span
          className="absolute font-extrabold pointer-events-none select-none"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 'clamp(7rem, 18vw, 14rem)',
            color: 'var(--brand-pink)',
            opacity: 0.12,
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
          <span
            className="text-[0.85rem] sm:text-[0.9rem] font-bold uppercase tracking-widest text-[var(--brand-pink)]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Karya & Proyek Terbuka
          </span>
          <div className="w-8 h-[2px]" style={{ backgroundColor: 'var(--brand-pink)' }} />
        </div>
        <h2
          className="relative z-10 font-extrabold uppercase"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 'clamp(2rem, 4.5vw, 3.8rem)',
            color: 'var(--text-dark)',
          }}
        >
          Galeri Proyek
        </h2>
        <p
          className="relative z-10 text-gray-600 font-medium text-[0.95rem] sm:text-[1.05rem] max-w-[650px] mx-auto mt-2"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          Putar galeri 3D di bawah atau jelajahi detail 5 proyek terbaru karya Nathaviela Thalita Kirana.
        </p>
        <div className="title-underline" />
      </motion.div>

      {/* 3D Infinite WebGL Menu Carousel */}
      <div className="relative w-full mb-16" style={{ height: '540px', background: 'transparent' }}>
        <InfiniteMenu items={menuItems} scale={1} />
      </div>

      {/* Project Cards Grid Showcase */}
      <div className="max-w-[1250px] mx-auto px-[5%] relative z-10">
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between border-b-2 border-black pb-4">
            <h3
              className="font-black text-[1.4rem] sm:text-[1.8rem] text-[var(--text-dark)] uppercase flex items-center gap-3"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <span className="w-3 h-8 bg-[var(--brand-pink)] inline-block border border-black shadow-[2px_2px_0px_#000]" />
              Daftar Proyek Unggulan (5 Terbaru)
            </h3>
            <span className="text-[0.85rem] font-bold px-3 py-1 bg-black text-white rounded-none uppercase shadow-[2px_2px_0px_#C73053]">
              2026 Edition
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS_DATA.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-brutal p-0 bg-white flex flex-col justify-between relative overflow-hidden group hover:-translate-y-1.5 transition-all duration-300"
              >
                {/* Header Image & Washi Tape Decor */}
                <div className="relative w-full h-[200px] overflow-hidden border-b-2 border-black bg-slate-100">
                  <div
                    className="absolute -top-3 left-6 w-24 h-7 z-20 pointer-events-none select-none opacity-90 shadow-sm"
                    style={{
                      backgroundColor: project.tapeColor || '#FEF08A',
                      border: '1px solid rgba(0,0,0,0.15)',
                      transform: index % 2 === 0 ? 'rotate(-6deg)' : 'rotate(6deg)',
                      clipPath: 'polygon(0% 15%, 5% 0%, 95% 0%, 100% 15%, 100% 85%, 95% 100%, 5% 100%, 0% 85%)',
                    }}
                  />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 z-10 px-2.5 py-1 bg-black text-white text-[0.7rem] font-bold uppercase border border-white shadow-[2px_2px_0px_#000]">
                    {project.year}
                  </div>
                </div>

                {/* Card Main Info */}
                <div className="p-5 flex flex-col gap-3 flex-1 justify-between">
                  <div>
                    {/* Category Badge */}
                    <span
                      className="inline-block text-[0.7rem] font-black uppercase tracking-wider px-2.5 py-0.5 border border-black mb-2 shadow-[1.5px_1.5px_0px_#000]"
                      style={{ backgroundColor: `${project.accentColor}20`, color: project.accentColor }}
                    >
                      {project.category}
                    </span>

                    {/* Title & Subtitle */}
                    <h4
                      className="font-black text-[1.15rem] leading-snug text-[var(--text-dark)] mb-1 group-hover:text-[var(--brand-pink)] transition-colors"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {project.title}
                    </h4>
                    <p className="text-[0.82rem] font-semibold text-gray-500 mb-3 leading-snug">
                      {project.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-[0.85rem] text-slate-700 leading-relaxed line-clamp-3 mb-4">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.slice(0, 5).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 text-[0.7rem] font-bold border border-black/20 bg-slate-50 text-slate-700"
                        >
                          #{tag}
                        </span>
                      ))}
                      {project.tags.length > 5 && (
                        <span className="px-2 py-0.5 text-[0.7rem] font-bold border border-black/20 bg-slate-100 text-slate-600">
                          +{project.tags.length - 5}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions & Role Footer */}
                  <div className="pt-3 border-t-2 border-black/10 flex flex-col gap-2.5">
                    <div className="flex items-center justify-between text-[0.75rem] font-bold text-gray-600">
                      <span>Peran: <strong className="text-black">{project.role}</strong></span>
                      <span className="text-slate-400">|</span>
                      <span>{project.owner}</span>
                    </div>

                    <div className="flex gap-2 items-center">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="btn-outline-brutal text-[0.75rem] py-1.5 px-3 flex-1 font-bold uppercase tracking-wider text-center"
                      >
                        Detail & Poin
                      </button>

                      {project.github && project.github !== '#' && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 border-2 border-black bg-black text-white hover:bg-[var(--brand-pink)] hover:text-black transition-colors shadow-[2px_2px_0px_#000]"
                          title="Buka Repository GitHub"
                        >
                          <i className="fa-brands fa-github text-[0.95rem]" />
                        </a>
                      )}

                      {project.demo && project.demo !== '#' && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 border-2 border-black bg-[var(--brand-pink)] text-white hover:bg-black transition-colors shadow-[2px_2px_0px_#000]"
                          title="Buka Live Demo"
                        >
                          <i className="fa-solid fa-arrow-up-right-from-square text-[0.9rem]" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Detail Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="card-brutal p-6 sm:p-8 bg-white max-w-[700px] w-full max-h-[85vh] overflow-y-auto relative shadow-[8px_8px_0px_#000]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-9 h-9 border-2 border-black bg-pink-100 hover:bg-[var(--brand-pink)] hover:text-white flex items-center justify-center font-bold text-[1.1rem] shadow-[2px_2px_0px_#000] transition-colors z-20"
              >
                ✕
              </button>

              {/* Modal Content */}
              <div className="flex flex-col gap-4">
                <span
                  className="self-start text-[0.72rem] font-black uppercase tracking-wider px-3 py-1 border-2 border-black shadow-[2px_2px_0px_#000]"
                  style={{ backgroundColor: `${selectedProject.accentColor}25`, color: selectedProject.accentColor }}
                >
                  {selectedProject.category} • {selectedProject.year}
                </span>

                <div>
                  <h3 className="font-black text-[1.5rem] sm:text-[1.8rem] text-[var(--text-dark)] leading-tight mb-1">
                    {selectedProject.title}
                  </h3>
                  <p className="text-[0.95rem] font-bold text-gray-500">
                    {selectedProject.subtitle}
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border-2 border-black">
                  <p className="text-[0.9rem] text-slate-800 leading-relaxed font-medium">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Detail Bullet Points */}
                {selectedProject.details && selectedProject.details.length > 0 && (
                  <div>
                    <h4 className="font-black text-[1rem] uppercase text-[var(--text-dark)] mb-2 flex items-center gap-2">
                      <i className="fa-solid fa-list-check text-[var(--brand-pink)]" />
                      Poin-Poin Detail & Fitur Utama:
                    </h4>
                    <ul className="flex flex-col gap-2 pl-2">
                      {selectedProject.details.map((point, pIdx) => (
                        <li key={pIdx} className="text-[0.88rem] text-slate-700 flex items-start gap-2.5">
                          <span className="w-2 h-2 rounded-full bg-[var(--brand-pink)] border border-black mt-1.5 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tags */}
                <div>
                  <h4 className="font-black text-[0.9rem] uppercase text-gray-500 mb-2">
                    Teknologi / Tools:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 text-[0.75rem] font-bold border-2 border-black bg-yellow-100 text-black shadow-[2px_2px_0px_#000]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Meta info & External Links */}
                <div className="mt-4 pt-4 border-t-2 border-black flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-col text-[0.82rem] font-semibold text-gray-600">
                    <span>Pemilik Karya: <strong className="text-black">{selectedProject.owner}</strong></span>
                    <span>Peran: <strong className="text-black">{selectedProject.role}</strong></span>
                  </div>

                  <div className="flex gap-3">
                    {selectedProject.github && selectedProject.github !== '#' && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-brutal text-[0.8rem] py-2 px-4 flex items-center gap-2"
                      >
                        <i className="fa-brands fa-github text-[1.1rem]" />
                        GitHub Repo
                      </a>
                    )}
                    {selectedProject.demo && selectedProject.demo !== '#' && (
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline-brutal text-[0.8rem] py-2 px-4 flex items-center gap-2 bg-[var(--brand-pink)] text-white hover:bg-black"
                      >
                        <i className="fa-solid fa-arrow-up-right-from-square" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}


