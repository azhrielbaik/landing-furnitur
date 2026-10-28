import { motion } from 'motion/react'
import { Check, ShieldCheck, Zap, PenTool, Smartphone, Unlock, Search, Sparkles, Clock } from 'lucide-react'
import { WORK_STEPS, BENEFITS } from '../data/landingData'

const BENEFIT_ICONS = [
  ShieldCheck,
  Zap,
  PenTool,
  Smartphone,
  Unlock,
  Search,
  Sparkles,
  Clock,
]

export function HowItWorks() {
  return (
    <section
      id="metode"
      className="py-24 sm:py-32 border-t border-white/10 relative bg-[#0a0a0a]"
      aria-label="Filosofi Kriya dan Keunggulan Furnitur KONTRAST"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 mb-16 gap-6">
          <div className="space-y-3">
            <div className="flex items-center space-x-2 font-mono text-xs uppercase tracking-[0.25em] text-[#c8ff3d]">
              <span>(01)</span>
              <span>/</span>
              <span>FILOSOFI &amp; PROSES PENGERJAAN</span>
            </div>
            <h2 className="text-[clamp(2.25rem,4.5vw,3.75rem)] font-light leading-[1.05] tracking-tight text-white">
              Keahlian Kayu Presisi{' '}
              <span className="font-serif italic text-zinc-400 font-normal">
                Tanpa Spekulasi Kualitas.
              </span>
            </h2>
          </div>

          <div className="max-w-md text-sm text-zinc-400 font-light leading-relaxed">
            Kami memadukan teknik sambungan purus klasik dengan rekayasa CAD presisi.
            Anda mengetahui persis serat, tekstur, dan dimensi sebelum sebilah kayu pun dipotong.
          </div>
        </div>

        {/* 3 Main Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {WORK_STEPS.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group relative bg-[#121212] border border-white/10 hover:border-[#c8ff3d]/50 p-8 rounded-2xl flex flex-col justify-between transition-all duration-300"
            >
              {/* Step Top Bar */}
              <div>
                <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                  <span className="font-mono text-3xl font-light text-[#c8ff3d]">
                    ({step.number})
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-zinc-400 bg-white/5 px-2.5 py-1 rounded">
                    {step.subtitle}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-white mb-4 group-hover:text-[#c8ff3d] transition-colors">
                  {step.title}
                </h3>

                <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-light">
                  {step.description}
                </p>
              </div>

              {/* Deliverable outputs */}
              <div className="border-t border-white/5 pt-5 space-y-2.5">
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500 mb-2">
                  Luaran Fase Ini:
                </div>
                {step.outputs.map((out, i) => (
                  <div key={i} className="flex items-center space-x-2.5 text-xs text-zinc-300">
                    <Check className="w-3.5 h-3.5 text-[#c8ff3d] flex-shrink-0" />
                    <span>{out}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sub-header for the 8 benefits */}
        <div className="border-t border-white/10 pt-16 mb-12">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-3">
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-[#c8ff3d]">
              (01.B) / DELAPAN STANDAR KUALITAS KONTRAST
            </div>
            <div className="font-mono text-xs text-zinc-500">
              Fig. 02 — Craftsmanship Value Matrix
            </div>
          </div>
          <h3 className="font-serif text-3xl sm:text-4xl text-white">
            Mengapa Pemilik Hunian Memilih <span className="italic text-[#c8ff3d]">Kriya Bespoke</span> Kami
          </h3>
        </div>

        {/* Grid 8 Benefit Points */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS.map((b, idx) => {
            const Icon = BENEFIT_ICONS[idx % BENEFIT_ICONS.length]
            return (
              <motion.div
                key={b.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.06 }}
                className="bg-[#0f0f0f] border border-white/5 hover:border-white/20 p-6 rounded-xl flex flex-col justify-between transition-colors group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-2.5 rounded-lg bg-white/5 text-[#c8ff3d] group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs text-zinc-600">({b.number})</span>
                  </div>

                  <h4 className="text-base font-medium text-white mb-2 group-hover:text-[#c8ff3d] transition-colors">
                    {b.title}
                  </h4>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed">
                    {b.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/5">
                  <span className="font-mono text-[11px] text-[#c8ff3d] tracking-wider uppercase font-semibold">
                    {b.metricLabel}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
