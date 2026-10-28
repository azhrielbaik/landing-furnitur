import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Plus, Minus, HelpCircle } from 'lucide-react'
import { FAQ_ITEMS } from '../data/landingData'

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>('faq-1')

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section
      id="faq"
      className="py-24 sm:py-32 border-t border-white/10 relative bg-[#0a0a0a]"
      aria-label="Pertanyaan yang Sering Diajukan"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="border-b border-white/10 pb-8 mb-16 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start space-x-2 font-mono text-xs uppercase tracking-[0.25em] text-[#c8ff3d] mb-3">
            <span>(06)</span>
            <span>/</span>
            <span>KLARIFIKASI & TRANSPARANSI</span>
          </div>
          <h2 className="text-[clamp(2.25rem,4.5vw,3.75rem)] font-light leading-[1.05] tracking-tight text-white mb-4">
            Jawaban Jujur Sebelum{' '}
            <span className="font-serif italic text-zinc-400 font-normal">
              Memulai Pesanan.
            </span>
          </h2>
          <p className="text-sm text-zinc-400 font-light max-w-xl">
            Transparansi penuh adalah fondasi atelier kami. Berikut hal-hal penting yang paling sering ditanyakan
            oleh pemilik hunian dan arsitek sebelum memesan furnitur kriya kami.
          </p>
        </div>

        {/* 7 Accordion Items */}
        <div className="divide-y divide-white/10 border-y border-white/10">
          {FAQ_ITEMS.map((faq) => {
            const isOpen = openId === faq.id

            return (
              <div key={faq.id} className="py-6 sm:py-7">
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  className="w-full flex items-start justify-between text-left group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#c8ff3d] rounded-lg"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-baseline space-x-4 pr-6">
                    <span className="font-mono text-xs text-[#c8ff3d]">
                      ({faq.number})
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl text-white group-hover:text-[#c8ff3d] transition-colors leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <div className="p-1.5 rounded-full bg-white/5 group-hover:bg-white/15 text-zinc-400 group-hover:text-white transition-all flex-shrink-0 mt-1">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-[#c8ff3d]" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 pl-8 sm:pl-9 pr-6 sm:pr-12">
                        <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

        {/* Still have questions prompt */}
        <div className="mt-12 p-6 rounded-xl bg-[#121212] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-center sm:text-left">
            <div className="p-2 rounded-lg bg-white/5 text-[#c8ff3d]">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-medium text-white">Ada pertanyaan spesifik mengenai ruangan Anda?</div>
              <div className="text-xs text-zinc-400 font-light">Konsultasikan langsung dengan Master Craftsman &amp; Tim Desainer kami.</div>
            </div>
          </div>

          <a
            href="https://wa.me/6281288997700?text=Halo%20KONTRAST%2C%20saya%20ingin%20konsultasi%20pesanan%20furnitur%20kayu%20solid"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-[#c8ff3d] hover:underline uppercase tracking-wider flex-shrink-0"
          >
            Chat WhatsApp Langsung →
          </a>
        </div>
      </div>
    </section>
  )
}
