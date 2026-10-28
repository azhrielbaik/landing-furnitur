import { useState } from 'react'
import { Check, ChevronRight } from 'lucide-react'
import { INCLUDED_ITEMS } from '../data/landingData'


export function WhatsIncluded() {
  const [activeItem, setActiveItem] = useState<number>(0)

  return (
    <section
      id="cakupan"
      className="py-24 sm:py-32 border-t border-white/10 relative bg-[#0a0a0a]"
      aria-label="Cakupan Standar Keahlian Kayu KONTRAST"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 mb-16 gap-6">
          <div className="space-y-3">
            <div className="flex items-center space-x-2 font-mono text-xs uppercase tracking-[0.25em] text-[#c8ff3d]">
              <span>(04)</span>
              <span>/</span>
              <span>STANDAR KEAHLIAN &amp; TEKNIS KRIYA</span>
            </div>
            <h2 className="text-[clamp(2.25rem,4.5vw,3.75rem)] font-light leading-[1.05] tracking-tight text-white">
              Kelengkapan Mutlak,{' '}
              <span className="font-serif italic text-zinc-400 font-normal">
                Tanpa Kompromi Kualitas.
              </span>
            </h2>
          </div>

          <div className="max-w-md text-sm text-zinc-400 font-light leading-relaxed">
            Setiap furnitur dikerjakan dengan standar kriya tertinggi — mulai dari pemilihan kayu jati
            berumur puluhan tahun hingga sambungan purus tanpa sekrup terbuka.
          </div>
        </div>

        {/* 2-Column Editorial Grid: Left List (8 items), Right Interactive Showcase / Spec Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: 8 Numbered List Items */}
          <div className="lg:col-span-7 divide-y divide-white/10 border-y border-white/10">
            {INCLUDED_ITEMS.map((item, idx) => {
              const isSelected = activeItem === idx

              return (
                <div
                  key={item.number}
                  onClick={() => setActiveItem(idx)}
                  className={`py-6 transition-all cursor-pointer group ${
                    isSelected ? 'bg-white/[0.02] pl-4 -ml-4 pr-4 rounded-xl' : ''
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="space-y-2 max-w-xl">
                      <div className="flex items-center space-x-3">
                        <span className="font-mono text-xs text-[#c8ff3d]">
                          ({item.number})
                        </span>
                        <h3 className="font-serif text-xl sm:text-2xl text-white group-hover:text-[#c8ff3d] transition-colors">
                          {item.title}
                        </h3>
                      </div>

                      <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed pl-7">
                        {item.description}
                      </p>

                      {/* Detail points */}
                      <div className="pl-7 pt-2 flex flex-wrap gap-x-4 gap-y-2">
                        {item.points.map((pt, pIdx) => (
                          <div key={pIdx} className="flex items-center space-x-1.5 text-xs text-zinc-300">
                            <Check className="w-3 h-3 text-[#c8ff3d]" />
                            <span className="font-mono text-[11px]">{pt}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-1 pl-2">
                      <ChevronRight
                        className={`w-5 h-5 transition-transform duration-200 ${
                          isSelected ? 'rotate-90 text-[#c8ff3d]' : 'text-zinc-600 group-hover:text-zinc-400'
                        }`}
                      />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right Column: Editorial Visual Spec Gallery */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <div className="bg-[#121212] border border-white/10 rounded-2xl p-6 sm:p-8 overflow-hidden relative">
              {/* Top Meta */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <span className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">
                  Spesifikasi Detail
                </span>
                <span className="font-mono text-xs text-[#c8ff3d] font-bold">
                  ({INCLUDED_ITEMS[activeItem].number}) / 08
                </span>
              </div>

              {/* Dynamic Feature Focus */}
              <div className="space-y-4">
                <h4 className="font-serif text-2xl text-white">
                  {INCLUDED_ITEMS[activeItem].title}
                </h4>

                <p className="text-sm text-zinc-400 leading-relaxed font-light">
                  {INCLUDED_ITEMS[activeItem].description}
                </p>

                {/* Technical specs highlight box */}
                <div className="bg-black/60 rounded-xl p-4 border border-white/5 space-y-3 font-mono">
                  <div className="text-[10px] uppercase text-[#c8ff3d] tracking-widest">
                    Tolok Ukur Kualitas:
                  </div>
                  {INCLUDED_ITEMS[activeItem].points.map((pt, i) => (
                    <div key={i} className="flex items-center justify-between text-xs text-zinc-300 border-b border-white/5 pb-2 last:border-0 last:pb-0">
                      <span>{pt}</span>
                      <span className="text-[#c8ff3d]">TERVERIFIKASI</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual Craftsmanship Gauge / Specification Graphic */}
              <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 gap-4 text-center font-mono">
                <div className="bg-white/[0.02] p-3 rounded-lg border border-white/5">
                  <div className="text-2xl font-bold text-[#c8ff3d]">&lt; 12%</div>
                  <div className="text-[10px] text-zinc-500 uppercase mt-1">Kadar Air Kayu (MC)</div>
                </div>
                <div className="bg-white/[0.02] p-3 rounded-lg border border-white/5">
                  <div className="text-2xl font-bold text-white">10 Tahun</div>
                  <div className="text-[10px] text-zinc-500 uppercase mt-1">Garansi Struktur</div>
                </div>
              </div>

              {/* Editorial Fig caption */}
              <div className="mt-6 text-center text-[11px] font-mono text-zinc-600">
                Fig. 04 — KONTRAST Woodcraft &amp; Joinery Quality Assurance Standard
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
