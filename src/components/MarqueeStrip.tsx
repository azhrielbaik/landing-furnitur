import { useRef } from 'react'

interface MarqueeStripProps {
  items?: string[]
  speed?: number
  direction?: 'left' | 'right'
  className?: string
  accentHighlight?: boolean
}

const DEFAULT_ITEMS = [
  'KAYU SOLID GRADE A (JATI PERHUTANI & WALNUT)',
  'SAMBUNGAN TRADISIONAL MORTISE & TENON',
  'SAMPEL KAYU & RENDER 3D DIANTAR KE RUMAH',
  'GARANSI INTEGRITAS STRUKTUR 10 TAHUN',
  'FINISHING NATURAL RUBIO MONOCOAT 0% VOC',
  'PENGIRIMAN WHITE-GLOVE SERVICE',
  'BESPOKE FURNITURE WARISAN KELUARGA',
  'LEGALITAS SVLK RESMI TERVERIFIKASI',
]

export function MarqueeStrip({
  items = DEFAULT_ITEMS,
  speed = 45,
  direction = 'left',
  className = '',
  accentHighlight = false,
}: MarqueeStripProps) {
  const trackRef = useRef<HTMLDivElement>(null)

  // Duplicate items enough times so seamless loop always works
  const repeated = [...items, ...items, ...items]

  // Calculate animation duration based on speed prop
  // Higher speed = shorter duration
  const duration = Math.max(5, 300 / speed)

  return (
    <div
      className={`relative w-full overflow-hidden border-y border-white/10 py-3.5 bg-[#0a0a0a] ${className}`}
      aria-hidden="true"
    >
      <div
        ref={trackRef}
        className="flex whitespace-nowrap"
        style={{
          animation: `marquee-${direction} ${duration}s linear infinite`,
          willChange: 'transform',
        }}
      >
        {repeated.map((item, idx) => (
          <div key={idx} className="flex items-center space-x-6 mx-5 flex-shrink-0">
            <span
              className={`font-mono text-xs uppercase tracking-[0.25em] ${
                accentHighlight && idx % 2 === 0
                  ? 'text-[#c8ff3d] font-medium'
                  : 'text-zinc-300'
              }`}
            >
              {item}
            </span>
            <span className="text-[#c8ff3d] text-xs opacity-75">✦</span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="marquee"] { animation: none !important; }
        }
      `}</style>
    </div>
  )
}
