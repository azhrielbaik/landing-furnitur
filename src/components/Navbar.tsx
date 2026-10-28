import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { NAV_ITEMS } from '../data/landingData'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let lastScrolled = false
    const handleScroll = () => {
      const isScrolled = window.scrollY > 40
      if (isScrolled !== lastScrolled) {
        lastScrolled = isScrolled
        setScrolled(isScrolled)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleNavClick = () => {
    setIsOpen(false)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/15 py-4 shadow-2xl shadow-black/80'
            : 'bg-[#0a0a0a]/80 backdrop-blur-md py-5 sm:py-6 border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Brand */}
            <a
              href="#"
              className="text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c8ff3d] rounded"
              aria-label="KONTRAST. Home"
            >
              <span className="font-serif text-2xl sm:text-3xl tracking-tight font-medium text-white">
                KONTRAST<span className="text-[#c8ff3d]">.</span>
              </span>
            </a>

            {/* Desktop Navigation Links — Clean, spacious, and uncluttered */}
            <nav className="hidden md:flex items-center space-x-10" aria-label="Navigasi Utama">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.number}
                  href={item.href}
                  className="group relative text-sm tracking-wide text-zinc-300 hover:text-white font-medium transition-colors duration-200 py-1"
                >
                  <span>{item.label}</span>
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#c8ff3d] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Concise CTA Button */}
            <div className="hidden md:flex items-center">
              <a
                href="#kontak"
                className="group relative inline-flex items-center space-x-2 bg-[#c8ff3d] text-[#0a0a0a] px-6 py-2.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:bg-[#b5ea32] hover:shadow-[0_0_24px_rgba(200,255,61,0.45)] active:scale-95"
              >
                <span>Konsultasi</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Mobile Menu Button — Clean single button without extra cluttered pills */}
            <div className="flex items-center md:hidden">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2.5 rounded-lg border border-white/20 bg-white/5 text-white hover:border-[#c8ff3d] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c8ff3d]"
                aria-expanded={isOpen}
                aria-label={isOpen ? 'Tutup Menu' : 'Buka Menu'}
              >
                {isOpen ? <X className="w-5 h-5 text-[#c8ff3d]" /> : <Menu className="w-5 h-5 text-zinc-100" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Curtain Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-[#0a0a0a]/98 backdrop-blur-2xl flex flex-col justify-between pt-24 pb-8 px-6 md:hidden"
          >
            {/* Top metadata in mobile */}
            <div className="border-b border-white/15 pb-4">
              <div className="flex items-center justify-between text-xs font-mono font-medium text-zinc-300 uppercase tracking-widest">
                <span>(00) Index Navigasi</span>
                <span className="text-[#c8ff3d] font-semibold">● Jakarta &amp; Jepara (GMT+7)</span>
              </div>
            </div>

            {/* Big Editorial Links */}
            <nav className="flex flex-col space-y-6 my-auto" aria-label="Menu Mobile">
              {NAV_ITEMS.map((item, index) => (
                <motion.a
                  key={item.number}
                  href={item.href}
                  onClick={handleNavClick}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index, duration: 0.3 }}
                  className="group flex items-baseline justify-between border-b border-white/10 pb-4 text-left"
                >
                  <div className="flex items-baseline space-x-4">
                    <span className="font-mono text-base font-bold text-[#c8ff3d]">({item.number})</span>
                    <span className="font-serif text-3xl sm:text-4xl text-white group-hover:text-[#c8ff3d] group-hover:translate-x-2 transition-transform duration-200 font-normal">
                      {item.label}
                    </span>
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-zinc-400 group-hover:text-[#c8ff3d] transition-colors" />
                </motion.a>
              ))}

              <motion.a
                href="#faq"
                onClick={handleNavClick}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25, duration: 0.3 }}
                className="group flex items-baseline justify-between border-b border-white/10 pb-4 text-left"
              >
                <div className="flex items-baseline space-x-4">
                  <span className="font-mono text-base font-bold text-[#c8ff3d]">(05)</span>
                  <span className="font-serif text-3xl sm:text-4xl text-white group-hover:text-[#c8ff3d] group-hover:translate-x-2 transition-transform duration-200 font-normal">
                    Klarifikasi FAQ
                  </span>
                </div>
                <ArrowUpRight className="w-6 h-6 text-zinc-400 group-hover:text-[#c8ff3d] transition-colors" />
              </motion.a>
            </nav>

            {/* Bottom Contact info */}
            <div className="border-t border-white/15 pt-6 space-y-4">
              <a
                href="#kontak"
                onClick={handleNavClick}
                className="flex items-center justify-center w-full py-4 rounded-full bg-[#c8ff3d] text-[#0a0a0a] font-mono text-xs font-bold uppercase tracking-widest shadow-[0_0_24px_rgba(200,255,61,0.4)] active:scale-95 transition-all"
              >
                Minta Sample &amp; Render 3D (0 DP)
              </a>

              <div className="flex justify-between items-center text-xs font-mono font-medium text-zinc-300">
                <span>halo@kontrast.furniture</span>
                <span className="text-white">+62 812-8899-7700</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
