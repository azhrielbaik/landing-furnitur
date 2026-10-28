import { useLenis } from './hooks/useLenis'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { MarqueeStrip } from './components/MarqueeStrip'
import { HowItWorks } from './components/HowItWorks'
import { Showcase } from './components/Showcase'
import { IndexTable } from './components/IndexTable'
import { WhatsIncluded } from './components/WhatsIncluded'
import { Pricing } from './components/Pricing'
import { FAQ } from './components/FAQ'
import { ContactCTA } from './components/ContactCTA'
import { Footer } from './components/Footer'

export function App() {
  // Initialize Lenis smooth scroll
  useLenis()

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f3] selection:bg-[#c8ff3d] selection:text-[#0a0a0a] relative">
      {/* Accessibility Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#c8ff3d] focus:text-[#0a0a0a] focus:font-mono focus:text-xs focus:rounded-md shadow-xl"
      >
        Lewati ke Konten Utama
      </a>

      {/* 01. Sticky Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main-content">
        {/* 02. Hero Section */}
        <Hero />

        {/* Dynamic Running Ticker */}
        <MarqueeStrip
          speed={40}
          direction="left"
          items={[
            'KAYU SOLID GRADE A (JATI PERHUTANI & WALNUT)',
            'SAMBUNGAN TRADISIONAL MORTISE & TENON',
            'SAMPEL KAYU & RENDER 3D DIANTAR KE RUMAH (0 DP)',
            'GARANSI INTEGRITAS STRUKTUR 10 TAHUN',
            'FINISHING ORGANIK NATURAL OIL / 0% VOC TOXIC',
            'BESPOKE FURNITURE BERKUALITAS WARISAN KELUARGA',
          ]}
          accentHighlight={true}
        />

        {/* 03. How It Works (Metode + 8 Benefit Poin) */}
        <HowItWorks />

        {/* 04. Showcase (6 Kurasi Kartu Selang-Seling) */}
        <Showcase />

        {/* 05. Index Table (Matriks Rekapitulasi + Floating Cursor Preview) */}
        <IndexTable />

        {/* Second Running Ticker with Reverse Direction */}
        <MarqueeStrip
          speed={35}
          direction="right"
          className="bg-[#0e0e0e]"
          items={[
            'ARUNA DINING TABLE (3.4M JATI SLAB UTUH)',
            'KANSO LOUNGE CHAIR (WALNUT & KULIT ITALIA)',
            'SENOPATI CREDENZA (MARMER NERO MARQUINA)',
            'SORA MODULAR DAYBED (BELGIAN LINEN FABRIC)',
            'ALVERIC EXECUTIVE DESK (INVISIBLE QI CHARGING)',
            'KARSA BOOKSHELF (CHARCOAL ASH & SOLID BRASS)',
          ]}
        />

        {/* 06. What's Included (8 Spesifikasi Bernomor + Detail Card) */}
        <WhatsIncluded />

        {/* 07. Pricing (3 Model Investasi Transparan + Garansi DP 0) */}
        <Pricing />

        {/* 08. FAQ (Accordion 7 Pertanyaan Penting) */}
        <FAQ />

        {/* 09. Contact / Inisiasi Proyek (Form React Hook Form + Zod) */}
        <ContactCTA />
      </main>

      {/* 10. Footer */}
      <Footer />
    </div>
  )
}

export default App
