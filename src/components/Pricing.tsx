import { motion } from 'motion/react'
import { Check, ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react'
import { PRICING_PLANS } from '../data/landingData'

export function Pricing() {
  return (
    <section
      id="investasi"
      className="py-24 sm:py-32 border-t border-white/10 relative bg-[#0a0a0a]"
      aria-label="Model Investasi dan Biaya Kriya Furnitur KONTRAST"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 mb-16 gap-6">
          <div className="space-y-3">
            <div className="flex items-center space-x-2 font-mono text-xs uppercase tracking-[0.25em] text-[#c8ff3d]">
              <span>(05)</span>
              <span>/</span>
              <span>MODEL INVESTASI &amp; PENGERJAAN</span>
            </div>
            <h2 className="text-[clamp(2.25rem,4.5vw,3.75rem)] font-light leading-[1.05] tracking-tight text-white">
              Transparan Sejak Awal.{' '}
              <span className="font-serif italic text-zinc-400 font-normal">
                Nol Biaya Tersembunyi.
              </span>
            </h2>
          </div>

          <div className="max-w-md text-sm text-zinc-400 font-light leading-relaxed">
            Tanpa markup bahan yang membingungkan. Anda berinvestasi pada kayu solid asli berkualitas pusaka
            yang nilainya bertahan melintasi generasi.
          </div>
        </div>

        {/* Commitment Highlight Callout */}
        <div className="bg-[#121212] border border-[#c8ff3d]/40 rounded-2xl p-6 sm:p-8 mb-16 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-[#c8ff3d]/10 text-[#c8ff3d] mt-1 flex-shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <div className="font-mono text-xs text-[#c8ff3d] uppercase tracking-widest font-semibold">
                  GARANSI NOL RISIKO KONTRAST
                </div>
                <h3 className="font-serif text-2xl text-white">
                  Sampel Kayu &amp; Render 3D Dulu. Produksi Hanya Saat Spesifikasi Disetujui.
                </h3>
                <p className="text-sm text-zinc-400 font-light max-w-2xl">
                  DP Rp 0 di awal untuk konsultasi desain. Anda melihat simulasi 3D dan menyentuh potongan kayu asli di rumah Anda.
                  Jika tidak puas dengan arahan kriya kami, Anda tidak perlu membayar satu rupiah pun.
                </p>
              </div>
            </div>

            <a
              href="#kontak"
              className="px-6 py-3 rounded-full bg-[#c8ff3d] text-[#0a0a0a] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#b5ea32] transition-colors flex-shrink-0 shadow-lg shadow-[#c8ff3d]/20"
            >
              Klaim Slot Workshop
            </a>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className={`relative rounded-2xl flex flex-col justify-between p-8 sm:p-9 transition-all duration-300 ${
                plan.isFeatured
                  ? 'bg-[#141414] border-2 border-[#c8ff3d] shadow-[0_0_40px_rgba(200,255,61,0.15)]'
                  : 'bg-[#101010] border border-white/10 hover:border-white/25'
              }`}
            >
              {/* Featured Badge */}
              {plan.isFeatured && (
                <div className="absolute -top-3.5 left-8 bg-[#c8ff3d] text-[#0a0a0a] font-mono text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full flex items-center space-x-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Paling Direkomendasikan</span>
                </div>
              )}

              <div>
                {/* Plan Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <span className="font-mono text-xs tracking-widest uppercase text-zinc-400">
                    {plan.tier}
                  </span>
                  <span className="font-mono text-[11px] text-[#c8ff3d] bg-white/5 px-2.5 py-0.5 rounded">
                    {plan.timeline}
                  </span>
                </div>

                <h3 className="font-serif text-3xl text-white mb-3">{plan.name}</h3>

                {/* Price Display */}
                <div className="mb-4">
                  <div className="text-3xl sm:text-4xl font-mono font-semibold text-white tracking-tight">
                    {plan.price}
                  </div>
                  <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mt-1">
                    {plan.priceSuffix} • {plan.paymentTerms}
                  </div>
                </div>

                <p className="text-sm text-zinc-400 font-light leading-relaxed mb-8">
                  {plan.description}
                </p>

                {/* Features List */}
                <div className="border-t border-white/10 pt-6 space-y-3.5 mb-8">
                  <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-500">
                    Cakupan Spesifikasi:
                  </div>
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start space-x-3 text-xs sm:text-sm text-zinc-300">
                      <Check className="w-4 h-4 text-[#c8ff3d] flex-shrink-0 mt-0.5" />
                      <span className="font-light">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card CTA */}
              <a
                href="#kontak"
                className={`w-full py-4 rounded-full font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center space-x-2 ${
                  plan.isFeatured
                    ? 'bg-[#c8ff3d] text-[#0a0a0a] hover:bg-[#b5ea32] shadow-[0_0_20px_rgba(200,255,61,0.3)]'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <span>{plan.ctaText}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
