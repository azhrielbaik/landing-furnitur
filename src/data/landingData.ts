import type {
  NavItem,
  HeroMockupSlide,
  WorkStep,
  Benefit,
  ShowcaseProject,
  MatrixRow,
  IncludedItem,
  PricingPlan,
  FaqItem,
} from '../types'

export const NAV_ITEMS: NavItem[] = [
  { number: '01', label: 'Filosofi', href: '#metode' },
  { number: '02', label: 'Koleksi', href: '#kurasi' },
  { number: '03', label: 'Keahlian', href: '#cakupan' },
  { number: '04', label: 'Investasi', href: '#investasi' },
]

export const HERO_SLIDES: HeroMockupSlide[] = [
  {
    id: 'aruna-dining',
    number: '01',
    title: 'Meja Makan Solid Slab Aruna',
    category: 'Dining & Spatial Architecture',
    metric: 'Kayu Jati Tua 80 Thn • Slab 3.4m',
    url: 'https://kontrast.furniture/koleksi/aruna-slab',
    image: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1600&q=80&fm=webp',
    tag: 'Jati Perhutani A / Bevel Precision Edge',
  },
  {
    id: 'kanso-lounge',
    number: '02',
    title: 'Kursi Santai Kanso Armchair',
    category: 'Sculptural Seating & Leather',
    metric: 'American Walnut • Kulit Italia Pelana',
    url: 'https://kontrast.furniture/koleksi/kanso-lounge',
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1600&q=80&fm=webp',
    tag: 'Hand-Shaped Joints / Zero Screw Exposed',
  },
  {
    id: 'senopati-credenza',
    number: '03',
    title: 'Kredensa Fluted Senopati',
    category: 'Acoustic Storage & Marble Console',
    metric: 'Nero Marquina Marble • Blum Hardware',
    url: 'https://kontrast.furniture/koleksi/senopati-credenza',
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1600&q=80&fm=webp',
    tag: 'Fluted Teak Slats / Silent Soft-Close',
  },
  {
    id: 'sora-modular',
    number: '04',
    title: 'Sofa Modular & Daybed Sora',
    category: 'Architectural Lounge Seating',
    metric: 'Solid White Oak • Belgian Natural Linen',
    url: 'https://kontrast.furniture/koleksi/sora-modular',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1600&q=80&fm=webp',
    tag: 'Low-Slung Comfort / High-Density Foam',
  },
]

export const WORK_STEPS: WorkStep[] = [
  {
    number: '01',
    title: 'Kurasi Kayu & 3D Visual Presisi',
    subtitle: 'Hari 1 — 3',
    description:
      'Kami membedah kebutuhan spasial ruangan Anda. Pemilihan jenis kayu solid (Jati Perhutani Grade A, American Walnut, atau White Oak) dan simulasi render CAD 3D skala 1:1 disusun tanpa biaya komitmen di awal.',
    timeframe: '72 Jam',
    outputs: ['Render 3D Fotorealistik 1:1', 'Pengiriman Box Sampel Kayu Fisik', 'Analisis Ergonomi Ruangan'],
  },
  {
    number: '02',
    title: 'Uji Sentuh Sampel & Persetujuan Spesifikasi',
    subtitle: 'Hari 4 — 5',
    description:
      'Anda menerima kotak sampel kayu berfinishing natural oil langsung di rumah. Cek keserasian serat kayu, tekstur, dan warna di bawah pencahayaan ruangan Anda sebelum proses pengerjaan dimulai.',
    timeframe: '48 Jam',
    outputs: ['Sampel Kayu & Swatch Kulit Asli', 'Persetujuan Dimensi Milimeter', 'Kepastian Waktu Pengerjaan'],
  },
  {
    number: '03',
    title: 'Pengerjaan Artisan & Pengiriman White-Glove',
    subtitle: 'Minggu 2 — 3',
    description:
      'Dikerjakan tangan oleh master craftsman dengan sambungan purus klasik (mortise & tenon). Setelah inspeksi kadar air kayu (MC < 12%), furnitur diantar, dirakit di tempat, dan dilindungi garansi 10 tahun.',
    timeframe: '14 Hari',
    outputs: ['Instalasi Langsung di Ruangan', 'Sertifikat Keaslian Kayu SVLK', 'Garansi Struktur 10 Tahun'],
  },
]

export const BENEFITS: Benefit[] = [
  {
    number: '01',
    title: 'Sampel Kayu & Render 0 DP',
    description: 'Tanpa uang muka di awal untuk melihat visual 3D dan merasakan swatch kayu asli di rumah Anda sendiri.',
    metricLabel: 'Sample Gratis 0 DP',
  },
  {
    number: '02',
    title: 'Kayu Solid Legalitas SVLK',
    description: '100% kayu solid utuh pilihan berizin resmi tanpa campuran serbuk gergaji (MDF) atau partikel rapuh.',
    metricLabel: '100% Solid Hardwood',
  },
  {
    number: '03',
    title: 'Sambungan Mortise & Tenon',
    description: 'Sistem sambungan kayu tradisional presisi tinggi yang saling mengunci kuat tanpa bergantung pada sekrup terbuka.',
    metricLabel: 'Teknik Purus Klasik',
  },
  {
    number: '04',
    title: 'Finishing Organik Non-Toxic',
    description: 'Dilapisi minyak biji rami dan lilin lebah alami food-safe berstandar Eropa, 0% senyawa VOC beracun dan aman anak.',
    metricLabel: '0% VOC Food-Safe',
  },
  {
    number: '05',
    title: 'Garansi Struktur 10 Tahun',
    description: 'Jaminan perbaikan atau penggantian bila terjadi retak patah struktur kayu atau kelonggaran konstruksi.',
    metricLabel: '10 Thn Proteksi',
  },
  {
    number: '06',
    title: 'Kadar Air Terkontrol (MC < 12%)',
    description: 'Proses pengeringan oven (kiln-dry) bertahap memastikan kayu stabil terhadap cuaca tropis tanpa melengkung.',
    metricLabel: 'Kiln-Dried Stable',
  },
  {
    number: '07',
    title: 'Bespoke Skala Milimeter',
    description: 'Disesuaikan dengan presisi denah arsitektur dan proporsi tinggi tubuh untuk kenyamanan ergonomis maksimal.',
    metricLabel: 'Bespoke Tailored',
  },
  {
    number: '08',
    title: 'Pengiriman White-Glove Care',
    description: 'Tim kami mengantar, merakit langsung di lantai ruangan Anda, dan membawa kembali seluruh sampah kemasan rapi.',
    metricLabel: 'White-Glove Setup',
  },
]

export const SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    id: '01',
    number: '01',
    name: 'Meja Makan Solid Slab Aruna',
    category: 'Dining & Gathering Architecture',
    industry: 'Ruang Makan Privat & Luxury Villa',
    headline: 'Satu Bilah Utuh Kayu Jati Perhutani 80 Tahun Sebagai Titik Kumpul Hangat',
    description:
      'Dibuat dari kayu jati tua berukuran panjang 3.4 meter dengan ketebalan slab 5cm dan bevel edge ergonomis yang halus di pergelangan tangan. Kaki baja arsitektural berlapis powder-coat matte black memberikan kontras modern yang berwibawa.',
    image: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=80&fm=webp',
    metric: '3.4m Slab',
    metricDetail: 'Kapasitas 10-12 Kursi • Kayu Solid Utuh Tanpa Sambungan Lebar',
    palette: ['#0a0a0a', '#c8ff3d', '#d4af37'],
    tags: ['Jati Tua Perhutani', 'Mortise Joinery', 'Rubio Monocoat Finish'],
    figNumber: 'Fig. 01',
  },
  {
    id: '02',
    number: '02',
    name: 'Kursi Santai Kanso Lounge',
    category: 'Sculptural Seating & Armchair',
    industry: 'Master Suite & Private Library',
    headline: 'Keseimbangan Kontras Antara Kayu Walnut Gelap dan Kulit Pelana Italia',
    description:
      'Siluet ramping terinspirasi dari pertemuan estetika Japandi dan Mid-Century Modern. Rangka American Walnut dipahat secara manual oleh artisan kami, dipasangkan dengan bantalan kulit full-grain yang semakin menawan seiring bertambahnya usia.',
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1200&q=80&fm=webp',
    metric: '100% Leather',
    metricDetail: 'Kulit Sapi Asli Italia • Busa Memori Anatomis Nyaman',
    palette: ['#0e0e0e', '#8d6e53', '#f5f5f3'],
    tags: ['American Walnut', 'Hand-Stitched', 'Ergonomic 105° Recline'],
    figNumber: 'Fig. 02',
  },
  {
    id: '03',
    number: '03',
    name: 'Kredensa Fluted Senopati',
    category: 'Acoustic Storage & Marble Console',
    industry: 'Executive Foyer & Audio Lounge',
    headline: 'Tekstur Kisi-kisi Kayu Jati Berpadu Kemewahan Marmer Nero Marquina',
    description:
      'Konsol fungsional dengan panel depan fluted kayu jati solid dan top table marmer Spanyol berurat putih alami. Dilengkapi hardware Blum Austria silent soft-close dan kompartemen ventilasi tersembunyi untuk peralatan sound system premium.',
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80&fm=webp',
    metric: '2.4 Meter',
    metricDetail: 'Marmer Nero Marquina Asli • Hardware Soft-Close Blum',
    palette: ['#0a0a0a', '#222222', '#c8ff3d'],
    tags: ['Nero Marquina Marble', 'Blum Soft-Close', 'Cable Concealment'],
    figNumber: 'Fig. 03',
  },
  {
    id: '04',
    number: '04',
    name: 'Sofa Modular & Daybed Sora',
    category: 'Modular Spatial Lounge',
    industry: 'Open-Concept Living Room',
    headline: 'Rangka White Oak Kokoh Rendah Bernuansa Santai dengan Linen Alami Belgia',
    description:
      'Konsep tempat duduk rendah (low-slung) dengan proporsi arsitektural lapang. Memadukan kayu solid White Oak tahan lembap dengan kain pelapis linen Belgia berserat alami yang sejuk di iklim tropis dan mudah dilepas untuk pencucian.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80&fm=webp',
    metric: 'Density 45',
    metricDetail: 'Busa Anti-Kempes 15 Tahun • Kain Linen Belgia Lepas-Pasang',
    palette: ['#0f0f0f', '#e6e2d8', '#c8ff3d'],
    tags: ['Solid White Oak', 'Belgian Linen', 'Modular Configuration'],
    figNumber: 'Fig. 04',
  },
  {
    id: '05',
    number: '05',
    name: 'Meja Kerja Eksekutif Alveric',
    category: 'Executive Desk & Home Studio',
    industry: 'Private Study & CEO Chamber',
    headline: 'Kewibawaan Meja Kerja Jati Solid dengan Modul Pengisi Daya Tersembunyi',
    description:
      'Meja kerja minimalis berskala megah dengan laci rahasia presisi magnetik dan permukaan inlay kulit matte. Modul wireless fast-charging tertanam rapi tepat di bawah lapisan kayu solid tanpa merusak tekstur visual alami.',
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1200&q=80&fm=webp',
    metric: 'Invisible Qi',
    metricDetail: 'Pengisi Daya Nirkabel Tersembunyi • Laci Magnetik Rahasia',
    palette: ['#0d0c0b', '#42372e', '#c8ff3d'],
    tags: ['Concealed Fast Qi', 'Leather Desk Inlay', 'Integrated Cable Duct'],
    figNumber: 'Fig. 05',
  },
  {
    id: '06',
    number: '06',
    name: 'Rak Buku Arsitektural Karsa',
    category: 'Spatial Partition & Bookcase',
    industry: 'Penthouse Gallery & Library Room',
    headline: 'Pemisah Ruang Bernafas Terbuka Berpadu Kayu Ash Arang dan Aksen Kuningan',
    description:
      'Sistem rak buku modular tanpa sambungan sekrup luar yang tampak. Memadukan kayu ash wood oven berwarna arang dan pilar kuningan padat (brushed solid brass) yang memantulkan kilau hangat pada koleksi literatur dan artefak Anda.',
    image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=1200&q=80&fm=webp',
    metric: 'Beban 180kg',
    metricDetail: 'Kapasitas Beban Kokoh Per Rak • Nol Lenturan Kayu',
    palette: ['#0a0a0a', '#c2a878', '#c8ff3d'],
    tags: ['Charcoal Ash Wood', 'Brushed Brass', 'Modular Grid System'],
    figNumber: 'Fig. 06',
  },
]

export const MATRIX_ROWS: MatrixRow[] = [
  {
    number: '01',
    name: 'Meja Makan Aruna',
    category: 'Dining Table',
    lookVibe: 'Monolithic Jati Tua Slab',
    suitableFor: 'Ruang Makan, Villa, Ruang Rapat CEO',
    palette: ['#0a0a0a', '#c8ff3d', '#d4af37'],
    impactMetric: '3.4m Solid Slab',
    status: 'Ready Custom Order',
    thumbnail: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=300&q=75&fm=webp',
  },
  {
    number: '02',
    name: 'Kursi Santai Kanso',
    category: 'Lounge Chair',
    lookVibe: 'Mid-Century Sculptural',
    suitableFor: 'Living Room, Ruang Baca, Suite Room',
    palette: ['#0e0e0e', '#8d6e53', '#f5f5f3'],
    impactMetric: 'Kulit Italia Asli',
    status: 'Ready Custom Order',
    thumbnail: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=300&q=75&fm=webp',
  },
  {
    number: '03',
    name: 'Kredensa Senopati',
    category: 'Sideboard Console',
    lookVibe: 'Fluted Teak & Nero Marble',
    suitableFor: 'Foyer, Audio-Visual Lounge, Ruang Tamu',
    palette: ['#0a0a0a', '#222222', '#c8ff3d'],
    impactMetric: 'Nero Marquina Top',
    status: 'Ready Custom Order',
    thumbnail: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=300&q=75&fm=webp',
  },
  {
    number: '04',
    name: 'Sofa Modular Sora',
    category: 'Modular Daybed',
    lookVibe: 'Low-Slung White Oak',
    suitableFor: 'Ruang Keluarga, Sunroom, Lounge Santai',
    palette: ['#0f0f0f', '#e6e2d8', '#c8ff3d'],
    impactMetric: 'Belgian Linen Fabric',
    status: 'Ready Custom Order',
    thumbnail: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=300&q=75&fm=webp',
  },
  {
    number: '05',
    name: 'Meja Kerja Alveric',
    category: 'Executive Desk',
    lookVibe: 'Bespoke Teak & Leather',
    suitableFor: 'Ruang Kerja Pribadi, Kantor Direksi',
    palette: ['#0d0c0b', '#42372e', '#c8ff3d'],
    impactMetric: 'Hidden Wireless Qi',
    status: 'Ready Custom Order',
    thumbnail: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=300&q=75&fm=webp',
  },
  {
    number: '06',
    name: 'Rak Buku Karsa',
    category: 'Architectural Bookshelf',
    lookVibe: 'Charcoal Ash & Brass',
    suitableFor: 'Partisi Ruangan, Galeri, Perpustakaan',
    palette: ['#0a0a0a', '#c2a878', '#c8ff3d'],
    impactMetric: '180kg Max Load',
    status: 'Ready Custom Order',
    thumbnail: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=300&q=75&fm=webp',
  },
]

export const INCLUDED_ITEMS: IncludedItem[] = [
  {
    number: '01',
    title: 'Kayu Solid Grade A Bersertifikasi SVLK Legal',
    description:
      'Hanya menggunakan kayu utuh berkualitas tinggi: Kayu Jati Perhutani berumur puluhan tahun, American Walnut impor, dan White Oak berserat lurus tanpa cacat rongga.',
    points: ['Jati Perhutani & Walnut Pilihan', 'Bebas Bahan MDF / Serbuk Partikel', 'Sertifikat Legalitas SVLK Indonesia'],
  },
  {
    number: '02',
    title: 'Konstruksi Sambungan Purus Klasik (Mortise & Tenon)',
    description:
      'Teknik sambungan kayu tradisional presisi tinggi di mana tiap komponen saling mengunci dengan pasak kayu keras, menghasilkan kekuatan struktur yang kokoh puluhan tahun.',
    points: ['Interlocking Wood Joinery', 'Nol Baut / Sekrup Luar yang Tampak', 'Tahan Beban Hingga Ratusan Kilogram'],
  },
  {
    number: '03',
    title: 'Finishing Organik Non-Toxic (Rubio Monocoat & Beeswax)',
    description:
      'Menonjolkan keindahan serat kayu alami dengan minyak organik food-safe berstandar Eropa. Bebas timbal, 0% VOC beracun, aman bersentuhan dengan makanan dan ramah anak.',
    points: ['Minyak Alami Food-Safe Eropa', '0% Gas Beracun VOC', 'Permukaan Tahan Noda Kopi & Air'],
  },
  {
    number: '04',
    title: 'Pengeringan Oven Terstandarisasi (Kiln-Dried MC 8-12%)',
    description:
      'Kayu diproses dalam oven kiln bertahap untuk menurunkan kadar air hingga di bawah 12%. Mencegah risiko kayu melengkung, retak rambut, atau memuai di iklim tropis lembap.',
    points: ['Kadar Air Kayu Terkontrol < 12%', 'Anti Muai-Susut Cuaca Ekstrem', 'Bebas Hama Bubuk & Rayap Kayu'],
  },
  {
    number: '05',
    title: 'Simulasi Render 3D Skala 1:1 & Sample Box ke Rumah',
    description:
      'Sebelum produksi dimulai, Anda menerima visualisasi CAD 3D presisi ukuran ruangan serta kotak sampel potongan kayu asli berfinishing natural yang diantar gratis.',
    points: ['Render 3D Fotorealistik Ruangan', 'Kotak Sampel Kayu & Swatch Kulit', 'Uji Coba Warna di Pencahayaan Rumah'],
  },
  {
    number: '06',
    title: 'Hardware Premium Eropa (Blum Soft-Close & Solid Brass)',
    description:
      'Setiap engsel dan rel laci menggunakan sistem peredam keheningan buatan Austria (Blum) serta aksen handle berbahan kuningan tempa padat yang tak lekang oleh zaman.',
    points: ['Engsel Soft-Close Blum Austria', 'Aksen Kuningan Padat Solid Brass', 'Daya Tahan 100.000 Siklus Buka-Tutup'],
  },
  {
    number: '07',
    title: 'Layanan Pengiriman Khusus & Instalasi White-Glove',
    description:
      'Kami tidak mempercayakan karya berharga ini pada kurir umum. Tim spesialis KONTRAST membawa, merakit dengan teliti di ruangan Anda, dan membersihkan area tanpa sisa kemasan.',
    points: ['Armada Pengiriman Khusus Atelier', 'Perakitan Teliti di Tempat', 'Pembersihan Bebas Sampah Kemasan'],
  },
  {
    number: '08',
    title: 'Garansi Struktur 10 Tahun & Sertifikat Pelat Kuningan',
    description:
      'Setiap karya dilengkapi pelat kuningan dengan nomor seri kriya unik yang tercatat di arsip atelier kami, diproteksi garansi pemeliharaan struktur kayu selama 10 tahun.',
    points: ['Pelat Kuningan Nomor Seri Unik', 'Garansi Resmi Sambungan 10 Tahun', 'Buku Panduan Perawatan Kayu Solid'],
  },
]

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'signature-piece',
    tier: 'PAKET 01',
    name: 'Bespoke Single Masterpiece',
    price: 'Rp 8.500.000',
    priceSuffix: 'mulai dari',
    paymentTerms: 'Sample & 3D Render 0 DP — Produksi setelah acc spesifikasi',
    timeline: 'Selesai dlm 10-14 Hari Kerja',
    description:
      'Pilihan sempurna bagi Anda yang ingin menghadirkan satu mahakarya furnitur utama: Meja Makan Solid, Kredensa Foyer, atau Meja Kerja Eksekutif dengan standar kriya tertinggi.',
    features: [
      'Satu unit furnitur kustom berdimensi presisi',
      'Pilihan Kayu Jati Perhutani / White Oak Solid',
      'Simulasi visual 3D fotorealistik ruangan Anda',
      'Box sampel kayu & pilihan warna diantar gratis',
      'Sambungan purus kayu klasik Mortise & Tenon',
      'Finishing minyak organik food-safe (0% VOC)',
      'Garansi struktur 10 tahun resmi',
    ],
    ctaText: 'Klaim Sample & Render 3D (0 DP)',
  },
  {
    id: 'spatial-suite',
    tier: 'PAKET 02',
    name: 'Dining or Living Suite',
    price: 'Rp 24.500.000',
    priceSuffix: 'mulai dari',
    paymentTerms: 'Sample & 3D Render 0 DP — Produksi setelah acc spesifikasi',
    timeline: 'Selesai dlm 18-24 Hari Kerja',
    description:
      'Solusi terpadu untuk satu zona ruangan utuh: Set Meja Makan Slab + 6 Kursi Ergonomis, atau Set Living Room (Sofa Modular + Kredensa + Meja Kopi) dengan keselarasan urat kayu sempurna.',
    isFeatured: true,
    features: [
      'Semua fasilitas pada Paket Masterpiece',
      'Satu set ruangan lengkap (Meja Makan + Kursi / Sofa Set)',
      'Pilihan kayu grade atas (Jati Tua Slab / American Walnut)',
      'Kunjungan pengukuran presisi di lokasi hunian Anda',
      'Penyelarasan urat kayu (matching grain continuity)',
      'Hardware premium Blum Austria & aksen solid brass',
      'White-Glove delivery & 1x perawatan tahunan gratis',
    ],
    ctaText: 'Minta Konsultasi Suite (0 DP)',
  },
  {
    id: 'architectural-residence',
    tier: 'PAKET 03',
    name: 'Full Residence & Villa Project',
    price: 'Custom Quote',
    priceSuffix: 'berdasarkan lingkup proyek',
    paymentTerms: 'Termin bertahap transparan sesuai kurva pengerjaan',
    timeline: 'Sesuai Master Schedule Hunian',
    description:
      'Layanan menyeluruh untuk rumah tinggal mewah, penthouse, butik villa, atau restoran eksklusif yang memerlukan furnitur lepas bespoke dan panel dinding kayu terintegrasi penuh.',
    features: [
      'Seluruh kebutuhan furnitur lepas & built-in terpadu',
      'Kolaborasi langsung dengan arsitek & desainer interior Anda',
      'Integrasi marmer alam impor, kulit Italia, & aksen kuningan',
      'Mockup fisik skala 1:1 sebelum produksi massal',
      'Dedicated Master Craftsman & Project Supervisor di lokasi',
      'Garansi konstruksi struktur kayu seumur hidup (Lifetime Joinery)',
    ],
    ctaText: 'Jadwalkan Diskusi Proyek Arsitektur',
  },
]

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    number: '01',
    question: 'Bagaimana sebenarnya sistem "Sample Kayu & Render 3D Dulu, 0 DP" ini berjalan?',
    answer:
      'Sederhana dan transparan: Kami tidak meminta uang muka (DP Rp 0) di awal untuk tahap desain. Setelah Anda menyampaikan dimensi ruangan dan konsep yang diinginkan, desainer kami membuatkan simulasi 3D fotorealistik serta mengirimkan kotak sampel potongan kayu asli berfinishing natural ke rumah Anda. Anda dapat memeriksa warna dan urat kayu langsung di bawah lampu ruangan Anda. Saat Anda 100% yakin dengan ukuran, material, dan harga, barulah proses pengerjaan produksi disepakati. Jika tidak cocok? Anda tidak berutang apa pun.',
  },
  {
    id: 'faq-2',
    number: '02',
    question: 'Dari mana asal kayu yang digunakan dan bagaimana jaminan legalitasnya?',
    answer:
      'Kami hanya menggunakan kayu solid berizin resmi. Kayu Jati kami peroleh dari Perhutani Jawa Tengah/Timur berumur matang (>40-80 tahun) dengan sertifikat SVLK (Sistem Verifikasi Legalitas Kayu). Untuk kayu impor seperti American Black Walnut dan White Oak, seluruhnya bersertifikasi FSC (Forest Stewardship Council) dari hutan budidaya berkelanjutan.',
  },
  {
    id: 'faq-3',
    number: '03',
    question: 'Mengapa furnitur kayu solid KONTRAST tidak melengkung atau retak seperti mebel biasa?',
    answer:
      'Kunci stabilitas kayu solid ada pada dua hal: Pertama, pengeringan oven terukur (kiln-dry) hingga kadar air di bawah 12% (MC < 12%) sehingga kayu sudah stabil dan mati rasa terhadap perubahan suhu. Kedua, teknik sambungan purus tradisional (mortise & tenon) yang memungkinkan kayu sedikit bernafas secara alami tanpa merusak struktur ikatan.',
  },
  {
    id: 'faq-4',
    number: '04',
    question: 'Bisakah saya memesan ukuran custom sesuai gambar dari desainer interior atau denah saya?',
    answer:
      'Tentu saja. Sebagian besar klien kami adalah pemilik hunian yang bekerja sama dengan arsitek atau desainer interior. Anda cukup mengirimkan sketsa, file CAD/PDF, atau foto referensi ruangan Anda. Kami akan menyesuaikan dimensi hingga ke tingkat milimeter agar pas sempurna dengan ruangan Anda.',
  },
  {
    id: 'faq-5',
    number: '05',
    question: 'Apakah finishing minyak alami tahan terhadap tumpahan kopi, air, dan panas piring?',
    answer:
      'Ya. Kami menggunakan minyak organik standar Eropa (Rubio Monocoat / Danish Oil) yang berikatan secara molekuler dengan serat selulosa kayu, bukan sekadar pelapis plastik di permukaan. Permukaan ini bersifat water-repellent (menolak air) dan tahan noda kopi, anggur, atau saus selama dibersihkan secara wajar, serta tidak akan pernah mengelupas seperti pernis melamin murah.',
  },
  {
    id: 'faq-6',
    number: '06',
    question: 'Bagaimana cara perawatan harian dan pemeliharaan furnitur kayu solid ini?',
    answer:
      'Sangat mudah: Cukup seka dengan kain mikrofiber lembap bersih untuk debu harian. Hindari cairan pembersih kimia keras yang mengandung alkohol atau amonia. Setiap pembelian produk kami sertakan satu kaleng lilin lebah alami (natural beeswax conditioner) gratis untuk Anda oleskan tipis setahun sekali agar kelembapan kayu tetap prima.',
  },
  {
    id: 'faq-7',
    number: '07',
    question: 'Bagaimana proses pengiriman dan apakah menjangkau area luar Jabodetabek?',
    answer:
      'Untuk wilayah Jabodetabek, kami menyediakan armada internal White-Glove delivery gratis lengkap dengan tim perakit ahli. Untuk pengiriman ke Bandung, Surabaya, Bali, dan kota-kota lain di Indonesia, furnitur dipacking dengan peti kayu solid (wooden crate) berlapis foam tebal 3 lapis dan dilindungi asuransi pengangkutan penuh.',
  },
]
