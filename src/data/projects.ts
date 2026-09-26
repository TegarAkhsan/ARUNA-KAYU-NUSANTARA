export type ProjectCategory = 'All' | 'Residential' | 'Commercial & Cafe' | 'Office' | 'Hospitality';

export interface ProjectItem {
  id: string;
  code: string;
  title: string;
  client: string;
  location: string;
  year: string;
  category: ProjectCategory;
  scope: string[];
  thumbnail: string;
  gallery: string[];
  summary: string;
  description: string;
  materialsUsed: string[];
  clientFeedback?: {
    quote: string;
    author: string;
  };
}

export const projectCategories: ProjectCategory[] = [
  'All',
  'Residential',
  'Commercial & Cafe',
  'Office',
  'Hospitality'
];

export const projectsData: ProjectItem[] = [
  {
    id: "modern-residence-surabaya",
    code: "01",
    title: "Modern Residence Graha Famili",
    client: "Private Residence",
    location: "Surabaya, Jawa Timur",
    year: "2025",
    category: "Residential",
    scope: ["Living Room Loose Furniture", "Dining Room Custom Set", "Master Bedroom Wardrobe & Bed"],
    thumbnail: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=80"
    ],
    summary: "Konsep interior Japandi kontemporer dengan palet kayu jati alami yang menghadirkan kehangatan dan ketenangan di setiap sudut rumah.",
    description: "Proyek hunian dua lantai di kawasan prestisius Graha Famili Surabaya. Pemilik menginginkan furnitur custom dengan material kayu solid yang dipadukan warna netral krem dan abu-abu. Kami memproduksi seluruh loose furniture living room, meja makan 8-seater dengan sambungan presisi, serta master bedroom bedframe terintegrasi dengan floating nightstand.",
    materialsUsed: ["Solid Teak Wood", "Natural Sungkai", "Belgian Linen", "Matte Brass Hardware"],
    clientFeedback: {
      quote: "Hasil eksekusi kayu jati ARUNA Living sangat halus dan presisi. Detail sambungan dan finishingnya luar biasa rapi.",
      author: "Bpk. Hendra W. — Pemilik Rumah"
    }
  },
  {
    id: "kopi-ruang-tengah",
    code: "02",
    title: "Kopi Ruang Tengah",
    client: "Ruang Tengah Hospitality",
    location: "Surabaya, Jawa Timur",
    year: "2025",
    category: "Commercial & Cafe",
    scope: ["Dining Table", "Cafe Chair", "Counter Bar Table", "Service Station"],
    thumbnail: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1200&q=80"
    ],
    summary: "Pembuatan lebih dari 60 unit kursi dan 20 set meja kafe bernuansa warm earthy yang ramah terhadap mobilitas tinggi pengunjung.",
    description: "Kopi Ruang Tengah merupakan cafe berkonsep communal living di pusat kota Surabaya. Kebutuhan utama adalah durabilitas tinggi untuk penggunaan komersial harian tanpa mengorbankan estetika industrial hangat. Kami menggunakan kayu jati perhutani dengan coating anti-gores dan anti-noda kopi/minuman.",
    materialsUsed: ["Solid Teak Kiln-Dried", "Powder-coated Matte Steel", "Water-resistant PU Shield"],
    clientFeedback: {
      quote: "Meja dan kursi ARUNA kokoh sekali meski dipakai ratusan pengunjung setiap hari. Sangat recommended untuk project F&B.",
      author: "Reza Mahendra — Founder Kopi Ruang Tengah"
    }
  },
  {
    id: "urban-office-sidoarjo",
    code: "03",
    title: "Urban Office HQ",
    client: "PT Indo Logistik Presisi",
    location: "Sidoarjo, Jawa Timur",
    year: "2024",
    category: "Office",
    scope: ["Executive Work Desk", "12-Person Meeting Table", "Modular Storage Wall", "Reception Counter"],
    thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80"
    ],
    summary: "Transformasi kantor logistik modern dengan workstation ergonomis berorientasi produktivitas dan kolaborasi.",
    description: "Pengerjaan furniture ruang kerja direksi, ruang rapat utama, serta stasiun kerja staf terbuka. Menghadirkan meja meeting berukuran 3.6 meter dengan sistem kabel tersembunyi yang terhubung ke proyektor dan soket daya, serta kabinet arsip dengan sistem kunci sentral.",
    materialsUsed: ["Teak Veneer Grade A", "Steel Substructure", "Hettich Soft-closing Hinges"],
    clientFeedback: {
      quote: "Pengerjaan tepat waktu sesuai jadwal peresmian kantor baru. Komunikasi tim ARUNA sangat profesional.",
      author: "Dian Permadi — HR & Facility Manager"
    }
  },
  {
    id: "villa-amerta-batu",
    code: "04",
    title: "Villa Amerta Retreat",
    client: "Amerta Hospitality",
    location: "Batu, Malang, Jawa Timur",
    year: "2024",
    category: "Hospitality",
    scope: ["Bedroom Furniture Suites", "Living Room Lounge Sets", "Outdoor Terrace Furniture"],
    thumbnail: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80"
    ],
    summary: "Koleksi furnitur resort pegunungan dengan ketahanan cuaca sejuk dan kelembaban tinggi di dataran tinggi Batu.",
    description: "Proyek furnishing untuk 8 vila paviliun eksklusif dengan panorama gunung Arjuna. Furnitur dirancang dengan kayu jati solid berkadar air rendah (MC di bawah 10%) dan finishing outdoor tahan jamur untuk menjamin keawetan di cuaca sejuk pegunungan.",
    materialsUsed: ["Old Teak Wood (Kayu Jati Lawas)", "Sunbrella Outdoor Fabric", "Weatherproof Polyurethane"],
    clientFeedback: {
      quote: "Tamu vila kami sering sekali memuji kenyamanan tempat tidur dan kursi santai teras buatan ARUNA.",
      author: "Vania Santoso — Director of Amerta Group"
    }
  },
  {
    id: "the-luminary-penthouse",
    code: "05",
    title: "The Luminary Penthouse",
    client: "Private Client",
    location: "Pakuwon Mall Tower, Surabaya",
    year: "2025",
    category: "Residential",
    scope: ["Custom Kitchen Island Marmer", "Walk-in Dressing Room", "Credenza TV Paneling"],
    thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80"
    ],
    summary: "Kemewahan urban kontemporer di lantai 38 dengan integrasi marmer Italia dan veneer kayu jati gelap.",
    description: "Sebuah unit penthouse 240 m2 yang membutuhkan penyesuaian khusus saat pengangkutan lift apartemen dan instalasi malam hari. Menampilkan kitchen island spektakuler dengan bookmatched marble dan pencahayaan LED tersembunyi.",
    materialsUsed: ["Italian Carrara Marble", "American Walnut Veneer", "Anodized Black Metal"]
  },
  {
    id: "dharmahusada-clinic",
    code: "06",
    title: "Aura Aesthetic Clinic",
    client: "Aura Wellness Co.",
    location: "Dharmahusada, Surabaya",
    year: "2024",
    category: "Commercial & Cafe",
    scope: ["Curved Reception Desk", "Waiting Lounge Curved Sofas", "Consultation Room Desks"],
    thumbnail: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80"
    ],
    summary: "Klinik estetika berdesain lengkung organik (curvilinear) yang menenangkan, higienis, dan elegan.",
    description: "Memproduksi meja resepsionis lengkung dengan teknik thermoforming dan paneling bilah kayu jati yang presisi, menciptakan welcoming ambience yang ramah dan berkelas bagi pasien.",
    materialsUsed: ["Solid Teak Slats", "Duco Matte Non-toxic", "Solid Surface Anti-bacterial"]
  }
];

export const getProjectInquiryMessage = (projectName: string): string => {
  return `Halo ARUNA Living, saya tertarik dengan project ${projectName} dan ingin mengetahui lebih lanjut.`;
};
