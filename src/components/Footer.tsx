import { ArrowUp } from 'lucide-react'
import { NAV_ITEMS } from '../data/landingData'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-white/10 bg-[#080808] pt-20 pb-12 relative overflow-hidden" aria-label="Footer Website KONTRAST">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="font-serif text-3xl text-white tracking-tight inline-block">
              KONTRAST<span className="text-[#c8ff3d]">.</span>
            </a>
            <p className="text-sm text-zinc-400 font-light max-w-sm leading-relaxed">
              Atelier pembuatan furnitur kayu solid bespoke berstandar arsitektural untuk hunian privat,
              penthouse, villa mewah, dan ruang komersial berkarakter kuat.
            </p>
            <div className="flex items-center space-x-2 font-mono text-[11px] text-zinc-500 pt-2">
              <span className="w-2 h-2 rounded-full bg-[#c8ff3d] inline-block" />
              <span>WORKSHOP &amp; GALLERY AKTIF — JAKARTA &amp; JEPARA (GMT+7)</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <div className="uppercase tracking-[0.2em] text-zinc-500 mb-4">(01) Navigasi</div>
            <ul className="space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.number}>
                  <a
                    href={item.href}
                    className="text-zinc-400 hover:text-[#c8ff3d] transition-colors flex items-center space-x-2"
                  >
                    <span className="text-zinc-600">({item.number})</span>
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#faq"
                  className="text-zinc-400 hover:text-[#c8ff3d] transition-colors flex items-center space-x-2"
                >
                  <span className="text-zinc-600">(06)</span>
                  <span>FAQ</span>
                </a>
              </li>
              <li>
                <a
                  href="#kontak"
                  className="text-zinc-400 hover:text-[#c8ff3d] transition-colors flex items-center space-x-2"
                >
                  <span className="text-zinc-600">(07)</span>
                  <span>Inisiasi Pesanan</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Studio Details */}
          <div className="md:col-span-4 space-y-3 font-mono text-xs">
            <div className="uppercase tracking-[0.2em] text-zinc-500 mb-4">(02) Kontak Atelier</div>
            <div className="space-y-2 text-zinc-400">
              <p>Email: <a href="mailto:halo@kontrast.furniture" className="text-white hover:text-[#c8ff3d]">halo@kontrast.furniture</a></p>
              <p>WhatsApp: <a href="https://wa.me/6281288997700" className="text-white hover:text-[#c8ff3d]">+62 812-8899-7700</a></p>
              <p>Gallery: Jl. Senopati No. 42, Kebayoran Baru, Jakarta Selatan</p>
              <p>Workshop: Kawasan Industri Kriya Kayu, Jepara &amp; Cikarang</p>
              <p className="text-[#c8ff3d] pt-2">Kunjungan Galeri: Sen - Sab (09:00 - 18:00 WIB)</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-zinc-500">
          <div>
            © {new Date().getFullYear()} KONTRAST. BESPOKE WOODWORK &amp; FURNITURE ATELIER. SELURUH HAK CIPTA DILINDUNGI.
          </div>

          <div className="flex items-center space-x-6">
            <span className="hover:text-zinc-400 cursor-pointer">Kebijakan Privasi</span>
            <span className="hover:text-zinc-400 cursor-pointer">Syarat & Ketentuan</span>

            {/* Back to top button */}
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center space-x-1.5 text-zinc-300 hover:text-[#c8ff3d] transition-colors p-1.5 rounded-lg hover:bg-white/5"
              aria-label="Kembali ke atas halaman"
            >
              <span>Atas</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
