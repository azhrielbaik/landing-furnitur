import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { MATRIX_ROWS } from '../data/landingData'
import type { MatrixRow } from '../types'

export function IndexTable() {
  const [activeRow, setActiveRow] = useState<MatrixRow | null>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const tableRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      id="indeks"
      className="py-24 sm:py-32 border-t border-white/10 relative bg-[#0a0a0a]"
      aria-label="Tabel Indeks dan Matriks Koleksi Furnitur"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 mb-12 gap-6">
          <div className="space-y-3">
            <div className="flex items-center space-x-2 font-mono text-xs uppercase tracking-[0.25em] text-[#c8ff3d]">
              <span>(03)</span>
              <span>/</span>
              <span>MATRIKS KOLEKSI &amp; ARSIP KRIYA</span>
            </div>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-light leading-tight tracking-tight text-white">
              Karakter Kayu Solid{' '}
              <span className="font-serif italic text-zinc-400 font-normal">
                &amp; Proporsi Spasial
              </span>
            </h2>
          </div>

          <div className="text-xs font-mono text-zinc-500 max-w-xs">
            Fig. 03 — Arahkan kursor ke baris mana pun untuk menampilkan preview visual mengambang.
          </div>
        </div>

        {/* Responsive Table Container */}
        <div ref={tableRef} className="relative overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[760px]">
            <thead>
              <tr className="border-b border-white/15 text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-500">
                <th className="py-4 pr-4 font-normal">No.</th>
                <th className="py-4 px-4 font-normal">Nama Koleksi</th>
                <th className="py-4 px-4 font-normal">Karakter / Material</th>
                <th className="py-4 px-4 font-normal">Ruangan Ideal</th>
                <th className="py-4 px-4 font-normal">Palet Finishing</th>
                <th className="py-4 px-4 font-normal">Dimensi / Spesifikasi</th>
                <th className="py-4 pl-4 text-right font-normal">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {MATRIX_ROWS.map((row) => (
                <tr
                  key={row.number}
                  onMouseEnter={() => setActiveRow(row)}
                  onMouseLeave={() => setActiveRow(null)}
                  className="group hover:bg-white/[0.03] transition-colors cursor-pointer"
                >
                  {/* Number */}
                  <td className="py-5 pr-4 font-mono text-xs text-zinc-500 group-hover:text-[#c8ff3d] transition-colors">
                    ({row.number})
                  </td>

                  {/* Name & Category */}
                  <td className="py-5 px-4">
                    <div className="font-serif text-lg text-white group-hover:text-[#c8ff3d] group-hover:translate-x-1 transition-all duration-200">
                      {row.name}
                    </div>
                    <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">
                      {row.category}
                    </div>
                  </td>

                  {/* Look & Vibe */}
                  <td className="py-5 px-4 font-mono text-xs text-zinc-300">
                    <span className="bg-white/5 px-2.5 py-1 rounded border border-white/10">
                      {row.lookVibe}
                    </span>
                  </td>

                  {/* Suitable For */}
                  <td className="py-5 px-4 text-xs text-zinc-400 font-light">
                    {row.suitableFor}
                  </td>

                  {/* Palette Swatches */}
                  <td className="py-5 px-4">
                    <div className="flex items-center space-x-1.5">
                      {row.palette.map((color, idx) => (
                        <span
                          key={idx}
                          className="w-3.5 h-3.5 rounded-full border border-white/20 inline-block shadow-sm"
                          style={{ backgroundColor: color }}
                          title={color}
                        />
                      ))}
                    </div>
                  </td>

                  {/* Impact Metric */}
                  <td className="py-5 px-4 font-mono text-xs font-semibold text-[#c8ff3d]">
                    {row.impactMetric}
                  </td>

                  {/* Action */}
                  <td className="py-5 pl-4 text-right">
                    <a
                      href="#kontak"
                      className="inline-flex items-center space-x-1 font-mono text-xs text-zinc-400 group-hover:text-white transition-colors"
                      aria-label={`Minta custom order untuk ${row.name}`}
                    >
                      <span>Pilih</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#c8ff3d]" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Floating Mouse Cursor Thumbnail (Smooth reveal & follow) */}
        <AnimatePresence>
          {activeRow && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: mousePos.x + 20,
                y: mousePos.y - 120,
              }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="pointer-events-none fixed z-50 hidden md:block w-64 rounded-xl overflow-hidden bg-[#161616] border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.85)]"
              style={{ left: 0, top: 0 }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={activeRow.thumbnail}
                  alt={activeRow.name}
                  className="w-full h-full object-cover filter brightness-[0.9]"
                />
                <div className="absolute top-2 left-2 font-mono text-[9px] uppercase tracking-widest bg-black/80 text-[#c8ff3d] px-2 py-0.5 rounded">
                  Preview ({activeRow.number})
                </div>
              </div>
              <div className="p-3 bg-[#121212] border-t border-white/10">
                <div className="font-serif text-sm text-white font-medium">{activeRow.name}</div>
                <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 mt-1">
                  <span>{activeRow.lookVibe}</span>
                  <span className="text-[#c8ff3d] font-bold">{activeRow.impactMetric}</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
