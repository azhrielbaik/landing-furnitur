import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  ArrowDown,
  Video,
  Image as ImageIcon,
  Play,
  Pause,
} from 'lucide-react'
import { HERO_SLIDES } from '../data/landingData'

type BgMode = 'video' | 'slideshow'

export function Hero() {
  const [bgMode, setBgMode] = useState<BgMode>('video')
  const [isPlaying, setIsPlaying] = useState(true)
  const [activeBgSlide, setActiveBgSlide] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Slideshow auto-advance timer
  useEffect(() => {
    if (bgMode !== 'slideshow' || !isPlaying) return

    const interval = setInterval(() => {
      setActiveBgSlide((prev) => (prev + 1) % HERO_SLIDES.length)
    }, 5200)

    return () => clearInterval(interval)
  }, [bgMode, isPlaying])

  // Auto-play video whenever bgMode is 'video' and isPlaying is true
  useEffect(() => {
    if (bgMode === 'video' && videoRef.current && isPlaying) {
      videoRef.current.play().catch(() => {})
    }
  }, [bgMode, isPlaying])

  // Handle Play/Pause
  const togglePlay = () => {
    setIsPlaying((prev) => {
      const next = !prev
      if (videoRef.current) {
        if (next) {
          videoRef.current.play().catch(() => {})
        } else {
          videoRef.current.pause()
        }
      }
      return next
    })
  }

  const prevSlide = () => {
    setActiveBgSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setActiveBgSlide((prev) => (prev + 1) % HERO_SLIDES.length)
  }

  return (
    <section
      id="hero"
      className="relative pt-40 pb-20 sm:pt-48 sm:pb-28 lg:pt-52 lg:pb-32 overflow-hidden min-h-[92vh] flex flex-col justify-between"
      aria-label="Pengenalan Atelier Furnitur KONTRAST"
    >
      {/* ─── DYNAMIC HERO BACKGROUND (VIDEO / SLIDESHOW) ────────────────────── */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Mode A: Video Atelier Background — Bright & Vivid Woodworking */}
        {bgMode === 'video' && (
          <div className="absolute inset-0 w-full h-full">
            <video
              ref={videoRef}
              src="https://cdn.coverr.co/videos/coverr-carpenter-measuring-wood-5345/1080p.mp4"
              poster={HERO_SLIDES[0]?.image}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.02] saturate-[1.12] scale-105 transition-opacity duration-1000"
            />
          </div>
        )}

        {/* Mode B: Full-Bleed Product Slideshow Background — Bright & Crisp WebP */}
        {bgMode === 'slideshow' && (
          <div className="absolute inset-0 w-full h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeBgSlide}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={HERO_SLIDES[activeBgSlide]?.image}
                  alt={HERO_SLIDES[activeBgSlide]?.title}
                  decoding="async"
                  className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.04] saturate-[1.08]"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        )}

        {/* Lightweight atmospheric overlays — ensures the woodworking video and furniture slides remain bright, vibrant, and clear */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/50 via-black/25 to-[#0a0a0a]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(10,10,10,0.45)_100%)]" />
        <div className="absolute inset-0 bg-grain opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-between">
        {/* Top Bar with Badge + Background Mode Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 sm:mb-12">
          {/* Top Editorial Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center gap-3"
          >
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-xs font-mono tracking-widest uppercase text-zinc-200 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c8ff3d] shadow-[0_0_8px_#c8ff3d]" />
              <span>(00) ATELIER FURNITUR &amp; ARSITEKTUR KAYU SOLID</span>
            </div>

            <span className="text-zinc-600 hidden sm:inline">•</span>

            <div className="font-mono text-xs text-[#c8ff3d] font-semibold tracking-widest uppercase">
              0% RISIKO DP — SAMPEL KAYU &amp; RENDER 3D DI AWAL
            </div>
          </motion.div>

          {/* Interactive Background Toggle (Video / Slideshow) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="self-start sm:self-auto inline-flex items-center p-1 rounded-full bg-black/70 backdrop-blur-lg border border-white/15 shadow-xl font-mono text-[11px]"
          >
            <button
              type="button"
              onClick={() => setBgMode('video')}
              className={`flex items-center space-x-1.5 px-3 py-1 rounded-full transition-all duration-200 ${
                bgMode === 'video'
                  ? 'bg-[#c8ff3d] text-[#0a0a0a] font-bold shadow-[0_0_12px_rgba(200,255,61,0.4)]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Video className="w-3.5 h-3.5" />
              <span>Video Kriya</span>
            </button>

            <button
              type="button"
              onClick={() => setBgMode('slideshow')}
              className={`flex items-center space-x-1.5 px-3 py-1 rounded-full transition-all duration-200 ${
                bgMode === 'slideshow'
                  ? 'bg-[#c8ff3d] text-[#0a0a0a] font-bold shadow-[0_0_12px_rgba(200,255,61,0.4)]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Slide Produk</span>
            </button>

            <button
              type="button"
              onClick={togglePlay}
              className="p-1 px-2 rounded-full text-zinc-400 hover:text-white transition-colors"
              title={isPlaying ? 'Jeda Rotasi Otomatis' : 'Jalankan Rotasi Otomatis'}
              aria-label={isPlaying ? 'Jeda Rotasi' : 'Jalankan Rotasi'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-[#c8ff3d]" />}
            </button>
          </motion.div>
        </div>

        {/* Giant Editorial Headline & Body */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-5xl my-auto py-4"
        >
          <h1 className="text-[clamp(2.75rem,6.8vw,6.25rem)] font-light leading-[0.98] tracking-[-0.03em] text-[#f5f5f3] mb-6 sm:mb-8 drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)]">
            Furnitur Massal Cepat Rusak.{' '}
            <span className="font-serif italic font-normal text-[#c8ff3d] block sm:inline drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
              Kami Merancang Mahakarya
            </span>{' '}
            Kayu Solid Warisan Keluarga.
          </h1>

          <p className="max-w-2xl text-base sm:text-lg lg:text-xl text-zinc-100 font-normal leading-relaxed mb-8 sm:mb-10 drop-shadow-[0_2px_14px_rgba(0,0,0,0.98)]">
            Tinggalkan partikel board rapuh dan cetakan pabrik yang pasaran. KONTRAST merancang furnitur kayu solid
            berstandar arsitektural dari jati tua dan walnut pilihan — review render 3D fotorealistik &amp; sampel kayu asli
            di tangan Anda sebelum proses produksi dimulai.
          </p>

          {/* 2 CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 mb-6">
            <a
              href="#kontak"
              className="group inline-flex items-center justify-center space-x-3 bg-[#c8ff3d] text-[#0a0a0a] px-8 py-4 rounded-full font-mono text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:bg-[#b5ea32] hover:shadow-[0_0_30px_rgba(200,255,61,0.5)] active:scale-95"
            >
              <span>Minta Sampel &amp; Render (0 DP)</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            <a
              href="#kurasi"
              className="group inline-flex items-center justify-center space-x-2.5 px-7 py-4 rounded-full bg-black/50 hover:bg-white/[0.12] border border-white/20 hover:border-white/40 text-zinc-200 hover:text-white font-mono text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 backdrop-blur-md"
            >
              <span>Eksplorasi Kurasi Karya</span>
              <span className="text-[#c8ff3d] font-mono text-xs">(Fig. 01)</span>
            </a>
          </div>

          {/* Sleek Floating Slide Indicator (Active when in Slideshow Mode) */}
          {bgMode === 'slideshow' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex flex-wrap items-center gap-3 bg-black/75 backdrop-blur-md border border-white/15 px-4 py-2 rounded-xl text-xs font-mono shadow-lg mt-2"
            >
              <div className="flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-[#c8ff3d]" />
                <span className="text-[#c8ff3d] font-bold">
                  0{activeBgSlide + 1} / 0{HERO_SLIDES.length}
                </span>
              </div>
              <span className="text-zinc-600 hidden sm:inline">•</span>
              <span className="text-white font-medium">
                {HERO_SLIDES[activeBgSlide]?.title}
              </span>
              <span className="text-zinc-400 hidden sm:inline text-[11px]">
                ({HERO_SLIDES[activeBgSlide]?.metric})
              </span>
              <div className="flex items-center space-x-1 ml-auto">
                <button
                  type="button"
                  onClick={prevSlide}
                  className="p-1 rounded bg-white/10 hover:bg-[#c8ff3d] hover:text-[#0a0a0a] text-white transition-colors"
                  aria-label="Slide Produk Sebelumnya"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  className="p-1 rounded bg-white/10 hover:bg-[#c8ff3d] hover:text-[#0a0a0a] text-white transition-colors"
                  aria-label="Slide Produk Selanjutnya"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Bottom Editorial Atelier Highlights & Scroll Indicator */}
        <div className="pt-8 sm:pt-12 border-t border-white/10 mt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-10">
            <div>
              <div className="font-mono text-[11px] text-[#c8ff3d] uppercase tracking-widest mb-1.5">
                (01) MATERIAL SOLID
              </div>
              <div className="font-serif text-lg sm:text-xl text-white font-normal">
                100% Jati Tua &amp; Walnut
              </div>
              <div className="text-xs text-zinc-400 font-light mt-0.5">
                Zero partikel board / MDF
              </div>
            </div>

            <div>
              <div className="font-mono text-[11px] text-[#c8ff3d] uppercase tracking-widest mb-1.5">
                (02) GARANSI STRUKTUR
              </div>
              <div className="font-serif text-lg sm:text-xl text-white font-normal">
                25 Tahun Garansi
              </div>
              <div className="text-xs text-zinc-400 font-light mt-0.5">
                Sambungan purus mortise &amp; tenon
              </div>
            </div>

            <div>
              <div className="font-mono text-[11px] text-[#c8ff3d] uppercase tracking-widest mb-1.5">
                (03) SEBELUM BAYAR DP
              </div>
              <div className="font-serif text-lg sm:text-xl text-white font-normal">
                Sampel Kayu &amp; Render 3D
              </div>
              <div className="text-xs text-zinc-400 font-light mt-0.5">
                100% Bebas risiko di awal
              </div>
            </div>

            <div>
              <div className="font-mono text-[11px] text-[#c8ff3d] uppercase tracking-widest mb-1.5">
                (04) TOLERANSI KRIYA
              </div>
              <div className="font-serif text-lg sm:text-xl text-white font-normal">
                Presisi Arsitektural ±0.5mm
              </div>
              <div className="text-xs text-zinc-400 font-light mt-0.5">
                Finishing natural bio-oil ramah anak
              </div>
            </div>
          </div>

          {/* Minimalist Scroll Down */}
          <div className="flex justify-center">
            <a
              href="#metode"
              className="group flex flex-col items-center space-y-2 text-zinc-400 hover:text-[#c8ff3d] transition-colors"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.25em]">
                Scroll Menjelajahi Filosofi Atelier (01)
              </span>
              <div className="w-5 h-8 rounded-full border border-white/20 group-hover:border-[#c8ff3d] flex items-start justify-center p-1 transition-colors">
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <ArrowDown className="w-2.5 h-2.5 text-[#c8ff3d]" />
                </motion.div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
