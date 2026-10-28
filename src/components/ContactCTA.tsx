import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ArrowUpRight, CheckCircle2, Mail, Phone, MapPin, Clock } from 'lucide-react'

// Contact form data type defined manually for furniture atelier
type ContactFormData = {
  fullName: string
  cityAddress: string
  phone: string
  email: string
  furnitureType?: string
  message: string
}

// Simple native validation resolver (no Zod needed at runtime)
const validateForm = (data: ContactFormData) => {
  const errors: Record<string, { type: string; message: string }> = {}

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = { type: 'manual', message: 'Nama lengkap wajib diisi minimal 2 karakter' }
  }
  if (!data.cityAddress || data.cityAddress.trim().length < 2) {
    errors.cityAddress = { type: 'manual', message: 'Kota atau lokasi domisili wajib diisi' }
  }
  if (!data.phone || data.phone.trim().length < 9) {
    errors.phone = { type: 'manual', message: 'Nomor WhatsApp aktif wajib diisi (minimal 9 digit)' }
  }
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = { type: 'manual', message: 'Format alamat email tidak valid' }
  }
  if (!data.message || data.message.trim().length < 5) {
    errors.message = { type: 'manual', message: 'Tuliskan sedikit kebutuhan ukuran atau jenis furnitur yang diinginkan' }
  }

  return errors
}

const nativeResolver = () => async (data: Record<string, unknown>) => {
  const typedData = data as ContactFormData
  const errors = validateForm(typedData)
  if (Object.keys(errors).length === 0) {
    return { values: typedData, errors: {} }
  }
  return { values: {}, errors }
}

export function ContactCTA() {
  const [submitted, setSubmitted] = useState(false)
  const [submittedData, setSubmittedData] = useState<ContactFormData | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: nativeResolver(),
  })

  const onSubmit = async (data: ContactFormData) => {
    // Simulate API processing delay
    await new Promise((resolve) => setTimeout(resolve, 800))
    setSubmitted(true)
    setSubmittedData(data)
  }

  const handleReset = () => {
    setSubmitted(false)
    setSubmittedData(null)
    reset()
  }

  return (
    <section
      id="kontak"
      className="py-24 sm:py-32 border-t border-white/10 relative bg-[#0a0a0a]"
      aria-label="Konsultasi Furnitur dan Formulir Pemesanan"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Big Editorial Headline & Contact Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 font-mono text-xs uppercase tracking-[0.25em] text-[#c8ff3d]">
                <span>(07)</span>
                <span>/</span>
                <span>INISIASI KRIYA BESPOKE</span>
              </div>

              <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[0.98] tracking-tight text-white">
                Mari Wujudkan{' '}
                <span className="font-serif italic text-[#c8ff3d] font-normal block">
                  Furnitur Impian Anda.
                </span>
              </h2>

              <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed pt-2">
                Amankan salah satu dari 4 slot workshop pengerjaan bulan ini. Dapatkan simulasi render 3D
                fotorealistik dan kotak sampel kayu asli yang kami kirimkan ke rumah Anda tanpa biaya komitmen di awal.
              </p>
            </div>

            {/* Direct Channels */}
            <div className="space-y-4 pt-4 border-t border-white/10 font-mono text-xs">
              <a
                href="mailto:halo@kontrast.furniture"
                className="flex items-center space-x-3 text-zinc-300 hover:text-[#c8ff3d] transition-colors group p-2 -ml-2 rounded-lg hover:bg-white/5"
              >
                <Mail className="w-4 h-4 text-[#c8ff3d]" />
                <span>halo@kontrast.furniture</span>
              </a>

              <a
                href="https://wa.me/6281288997700?text=Halo%20KONTRAST%2C%20saya%20tertarik%20konsultasi%20furnitur%20kayu%20solid%20dan%20sampel%20gratis"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-zinc-300 hover:text-[#c8ff3d] transition-colors group p-2 -ml-2 rounded-lg hover:bg-white/5"
              >
                <Phone className="w-4 h-4 text-[#c8ff3d]" />
                <span>+62 812-8899-7700 (WhatsApp Atelier)</span>
              </a>

              <div className="flex items-center space-x-3 text-zinc-400 p-2 -ml-2">
                <MapPin className="w-4 h-4 text-zinc-500" />
                <span>Senopati, Jakarta Selatan &amp; Workshop Jepara</span>
              </div>

              <div className="flex items-center space-x-3 text-zinc-400 p-2 -ml-2">
                <Clock className="w-4 h-4 text-zinc-500" />
                <span>Respon Rata-rata: &lt; 2 Jam Kerja</span>
              </div>
            </div>

            {/* Editorial Guarantee Quote */}
            <div className="bg-[#121212] border-l-2 border-[#c8ff3d] p-4 rounded-r-lg">
              <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                Prinsip Komitmen Kami
              </div>
              <p className="text-xs text-zinc-300 font-serif italic mt-1 leading-relaxed">
                “Jika sampel kayu fisik dan render 3D yang kami kirimkan tidak memenuhi standar estetika Anda, Anda bebas membatalkan tanpa kewajiban komitmen finansial apa pun.”
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Form or Success State */}
          <div className="lg:col-span-7">
            <div className="bg-[#121212] border border-white/10 rounded-2xl p-6 sm:p-10 relative">
              {submitted && submittedData ? (
                <div className="py-8 text-center space-y-6">
                  <div className="inline-flex p-4 rounded-full bg-[#c8ff3d]/15 text-[#c8ff3d]">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>

                  <div className="space-y-2">
                    <div className="font-mono text-xs uppercase tracking-widest text-[#c8ff3d]">
                      PERMINTAAN KONSULTASI DITERIMA
                    </div>
                    <h3 className="font-serif text-3xl sm:text-4xl text-white">
                      Terima Kasih, {submittedData.fullName}
                    </h3>
                    <p className="text-sm text-zinc-400 font-light max-w-md mx-auto leading-relaxed">
                      Tim Master Craftsman kami telah mencatat detail inkuiri untuk lokasi <strong className="text-white">{submittedData.cityAddress}</strong>.
                      Kami akan menghubungi nomor WhatsApp Anda dalam kurun waktu 2 jam kerja untuk mengonfirmasi pengiriman box sampel kayu &amp; render 3D.
                    </p>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                      href={`https://wa.me/6281288997700?text=${encodeURIComponent(
                        `Halo KONTRAST, saya ${submittedData.fullName} dari ${submittedData.cityAddress}. Saya baru saja mengisi formulir konsultasi furnitur kriya (${submittedData.furnitureType || 'Custom Order'}).`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-[#c8ff3d] text-[#0a0a0a] px-6 py-3 rounded-full font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#b5ea32] transition-colors"
                    >
                      <span>Lanjut Chat ke WhatsApp</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="font-mono text-xs text-zinc-500 hover:text-zinc-300 transition-colors uppercase tracking-wider"
                    >
                      Isi Formulir Baru
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                  <div className="border-b border-white/10 pb-4 mb-6">
                    <h3 className="font-serif text-2xl text-white">Formulir Sampel Kayu &amp; Render 3D (0 DP)</h3>
                    <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider mt-1">
                      Data Anda terlindungi dan hanya digunakan untuk kurasi pesanan kriya furnitur ini.
                    </p>
                  </div>

                  {/* Form Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="fullName" className="block text-xs font-mono text-zinc-300 uppercase tracking-wider">
                        Nama Lengkap *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        placeholder="Contoh: Budi Pratama"
                        {...register('fullName')}
                        className={`w-full bg-[#0a0a0a] border px-4 py-3 rounded-lg text-sm text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-[#c8ff3d] transition-colors ${
                          errors.fullName ? 'border-red-500' : 'border-white/10 focus:border-[#c8ff3d]'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-red-400 font-mono">{errors.fullName.message}</p>
                      )}
                    </div>

                    {/* City / Address */}
                    <div className="space-y-1.5">
                      <label htmlFor="cityAddress" className="block text-xs font-mono text-zinc-300 uppercase tracking-wider">
                        Kota / Lokasi Hunian *
                      </label>
                      <input
                        id="cityAddress"
                        type="text"
                        placeholder="Contoh: Jakarta Selatan / Surabaya"
                        {...register('cityAddress')}
                        className={`w-full bg-[#0a0a0a] border px-4 py-3 rounded-lg text-sm text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-[#c8ff3d] transition-colors ${
                          errors.cityAddress ? 'border-red-500' : 'border-white/10 focus:border-[#c8ff3d]'
                        }`}
                      />
                      {errors.cityAddress && (
                        <p className="text-[11px] text-red-400 font-mono">{errors.cityAddress.message}</p>
                      )}
                    </div>

                    {/* WhatsApp */}
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="block text-xs font-mono text-zinc-300 uppercase tracking-wider">
                        Nomor WhatsApp *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="0812XXXXXXXX"
                        {...register('phone')}
                        className={`w-full bg-[#0a0a0a] border px-4 py-3 rounded-lg text-sm text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-[#c8ff3d] transition-colors ${
                          errors.phone ? 'border-red-500' : 'border-white/10 focus:border-[#c8ff3d]'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-red-400 font-mono">{errors.phone.message}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="block text-xs font-mono text-zinc-300 uppercase tracking-wider">
                        Alamat Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="budi@email.com"
                        {...register('email')}
                        className={`w-full bg-[#0a0a0a] border px-4 py-3 rounded-lg text-sm text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-[#c8ff3d] transition-colors ${
                          errors.email ? 'border-red-500' : 'border-white/10 focus:border-[#c8ff3d]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-400 font-mono">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Furniture Type (Optional) */}
                  <div className="space-y-1.5">
                    <label htmlFor="furnitureType" className="block text-xs font-mono text-zinc-300 uppercase tracking-wider">
                      Jenis Furnitur yang Diinginkan (Opsional)
                    </label>
                    <input
                      id="furnitureType"
                      type="text"
                      placeholder="Contoh: Meja Makan Jati Slab 3m, Kursi Lounge Walnut, Set Kredensa Foyer"
                      {...register('furnitureType')}
                      className="w-full bg-[#0a0a0a] border border-white/10 focus:border-[#c8ff3d] px-4 py-3 rounded-lg text-sm text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-[#c8ff3d] transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-xs font-mono text-zinc-300 uppercase tracking-wider">
                      Kebutuhan Dimensi, Jenis Kayu &amp; Konsep Ruangan *
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      placeholder="Ceritakan perkiraan ukuran ruangan, preferensi jenis kayu (Jati/Walnut/Oak), atau konsep interior hunian Anda..."
                      {...register('message')}
                      className={`w-full bg-[#0a0a0a] border px-4 py-3 rounded-lg text-sm text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-[#c8ff3d] transition-colors ${
                        errors.message ? 'border-red-500' : 'border-white/10 focus:border-[#c8ff3d]'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-400 font-mono">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-full bg-[#c8ff3d] text-[#0a0a0a] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#b5ea32] transition-all flex items-center justify-center space-x-2 shadow-[0_0_24px_rgba(200,255,61,0.3)] disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'Mengirim Data...' : 'Klaim Sampel Kayu & Render 3D (0 DP)'}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <div className="text-center">
                    <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                      Konfirmasi cepat via WhatsApp • Sampel diantar langsung ke rumah
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
