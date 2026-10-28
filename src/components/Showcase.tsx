import { useState, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react'
import { ArrowUpRight, Sparkles, X, CheckCircle2 } from 'lucide-react'
import { SHOWCASE_PROJECTS } from '../data/landingData'
import type { ShowcaseProject } from '../types'

// ─── Parallax Card Sub-Component ────────────────────────────────────────────
function ParallaxCard({
  project,
  isEven,
  onSelect,
}: {
  project: ShowcaseProject
  isEven: boolean
  onSelect: (p: ShowcaseProject) => void
}) {
  const cardRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  })

  // Image slides up as you scroll past — pixel-based GPU translation for zero-jank 60/120fps
  const imageY = useTransform(scrollYProgress, [0, 1], [-28, 28])

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
        isEven ? 'lg:grid-flow-dense' : ''
      }`}
    >
      {/* ── Visual Media Column (7 Cols) ── */}
      <div className={`lg:col-span-7 relative ${isEven ? 'lg:col-start-6' : ''}`}>
        <div className="relative group overflow-hidden rounded-2xl bg-[#141414] border border-white/10 aspect-[4/3] sm:aspect-[16/10]">
          {/* Parallax image — oversized with hardware-accelerated transform */}
          <motion.div
            className="absolute inset-0 w-full will-change-transform"
            style={{ y: imageY, height: '116%', top: '-8%' }}
          >
            <img
              src={project.image}
              alt={`Tampilan furnitur ${project.name}`}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.05] transition-transform duration-300 ease-out group-hover:scale-[1.03]"
            />
          </motion.div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

          {/* Fig Caption Badge */}
          <div className="absolute top-4 left-4 z-10">
            <span className="font-mono text-[10px] uppercase tracking-widest bg-black/75 backdrop-blur-md text-zinc-300 px-3 py-1 rounded border border-white/10">
              {project.figNumber} — Atelier Edition
            </span>
          </div>

          {/* Quick Metric Pill */}
          <div className="absolute bottom-4 right-4 z-10">
            <div className="bg-black/85 backdrop-blur-md border border-white/15 px-3.5 py-1.5 rounded-lg flex items-center space-x-2">
              <Sparkles className="w-3.5 h-3.5 text-[#c8ff3d]" />
              <span className="font-mono text-xs font-bold text-[#c8ff3d]">{project.metric}</span>
              <span className="text-[11px] text-zinc-400 font-mono hidden sm:inline">Craft</span>
            </div>
          </div>
        </div>

        {/* Editorial Sub-caption */}
        <div className="flex items-center justify-between mt-3 text-xs font-mono text-zinc-500 px-1">
          <span>{project.figNumber} / {project.name}</span>
          <div className="flex items-center space-x-2">
            <span className="text-[10px] text-zinc-600">Palet:</span>
            <div className="flex items-center space-x-1.5">
              {project.palette.map((color, i) => (
                <span
                  key={i}
                  className="w-3 h-3 rounded-full border border-white/20 inline-block"
                  style={{ backgroundColor: color }}
                  title={`Warna ${color}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Narrative Details Column (5 Cols) ── */}
      <div
        className={`lg:col-span-5 space-y-6 ${
          isEven ? 'lg:col-start-1 lg:row-start-1' : ''
        }`}
      >
        <div className="space-y-2">
          <div className="flex items-center space-x-3 text-xs font-mono text-zinc-400 uppercase tracking-widest">
            <span className="text-[#c8ff3d]">({project.number})</span>
            <span>•</span>
            <span>{project.category}</span>
          </div>

          <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal tracking-tight">
            {project.name}
          </h3>
        </div>

        <p className="text-sm font-mono text-[#c8ff3d] leading-relaxed">
          "{project.headline}"
        </p>

        <p className="text-sm text-zinc-400 leading-relaxed font-light">
          {project.description}
        </p>

        {/* Impact detail box */}
        <div className="bg-[#121212] border-l-2 border-[#c8ff3d] p-4 rounded-r-lg">
          <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
            Detail Keunggulan Kriya:
          </div>
          <div className="text-sm font-medium text-zinc-200 mt-1">
            {project.metricDetail}
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-1">
          {project.tags.map((t) => (
            <span
              key={t}
              className="font-mono text-[11px] text-zinc-400 bg-white/[0.04] border border-white/10 px-2.5 py-1 rounded"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action Link button */}
        <div className="pt-2">
          <button
            type="button"
            onClick={() => onSelect(project)}
            className="group inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-zinc-200 hover:text-[#c8ff3d] transition-colors"
          >
            <span className="border-b border-zinc-700 group-hover:border-[#c8ff3d] pb-0.5 transition-colors">
              Lihat Detail Spesifikasi
            </span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 text-[#c8ff3d]" />
          </button>
        </div>
      </div>
    </motion.article>
  )
}

// ─── Main Showcase Section ───────────────────────────────────────────────────
export function Showcase() {
  const [selectedProject, setSelectedProject] = useState<ShowcaseProject | null>(null)

  return (
    <section
      id="kurasi"
      className="py-24 sm:py-32 border-t border-white/10 relative bg-[#0a0a0a]"
      aria-label="Kurasi Mahakarya Furnitur KONTRAST"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 mb-20 gap-6">
          <div className="space-y-3">
            <div className="flex items-center space-x-2 font-mono text-xs uppercase tracking-[0.25em] text-[#c8ff3d]">
              <span>(02)</span>
              <span>/</span>
              <span>KURASI MAHAKARYA FURNITUR</span>
            </div>
            <h2 className="text-[clamp(2.25rem,4.5vw,4rem)] font-light leading-[1] tracking-tight text-white">
              Enam Mahakarya Kayu Solid,{' '}
              <span className="font-serif italic text-[#c8ff3d] font-normal block sm:inline">
                Satu Standar Kemewahan.
              </span>
            </h2>
          </div>

          <div className="max-w-sm text-sm text-zinc-400 font-light leading-relaxed font-mono">
            Setiap furnitur dirancang presisi menyelaraskan urat kayu alami dengan proporsi arsitektur ruangan Anda.
          </div>
        </div>

        {/* 6 Showcase Cards */}
        <div className="space-y-24 sm:space-y-32">
          {SHOWCASE_PROJECTS.map((project, idx) => (
            <ParallaxCard
              key={project.id}
              project={project}
              isEven={idx % 2 === 1}
              onSelect={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {/* ── Case Study Modal ── */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-2xl bg-[#121212] border border-white/15 rounded-2xl p-6 sm:p-8 overflow-hidden shadow-2xl"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white transition-colors"
                aria-label="Tutup Detail Studi Kasus"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="font-mono text-xs uppercase tracking-widest text-[#c8ff3d]">
                    ({selectedProject.number}) / {selectedProject.industry}
                  </div>
                  <h3 className="font-serif text-3xl sm:text-4xl text-white">
                    {selectedProject.name}
                  </h3>
                </div>

                <div className="aspect-[16/9] w-full rounded-xl overflow-hidden border border-white/10">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-mono text-zinc-300 uppercase tracking-wider">
                    Filosofi Desain &amp; Material:
                  </h4>
                  <p className="text-sm text-zinc-400 leading-relaxed font-light">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 bg-black/40 p-4 rounded-xl border border-white/5 font-mono">
                  <div>
                    <div className="text-[11px] text-zinc-500 uppercase">Spesifikasi Kunci</div>
                    <div className="text-xl font-bold text-[#c8ff3d] mt-0.5">
                      {selectedProject.metric}
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] text-zinc-500 uppercase">Status Produksi</div>
                    <div className="text-sm text-zinc-200 mt-1 flex items-center space-x-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#c8ff3d]" />
                      <span>Ready Bespoke Order</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
                  <span className="font-mono text-xs text-zinc-500">
                    Ingin karya kriya serupa untuk hunian Anda?
                  </span>
                  <a
                    href="#kontak"
                    onClick={() => setSelectedProject(null)}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#c8ff3d] text-[#0a0a0a] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#b5ea32] transition-colors text-center"
                  >
                    Minta Sampel &amp; Render 3D (0 DP)
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
