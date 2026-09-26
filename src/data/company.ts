export interface CompanyInfo {
  name: string;
  brand: string;
  tagline: string;
  subheadline: string;
  introHeading: string;
  introDescription: string;
  aboutTitle: string;
  aboutStory: string[];
  address: {
    street: string;
    city: string;
    province: string;
    postalCode: string;
    full: string;
  };
  contact: {
    whatsapp: string;
    whatsappFormatted: string;
    phone: string;
    email: string;
    businessHours: string;
    businessDays: string;
  };
  social: {
    instagram: string;
    tiktok: string;
    linkedin: string;
  };
  stats: {
    value: string;
    numeric: number;
    label: string;
    suffix: string;
  }[];
  values: {
    id: string;
    number: string;
    title: string;
    description: string;
    icon: string;
  }[];
  whyChooseUs: {
    id: string;
    title: string;
    description: string;
    highlight: string;
  }[];
  services: {
    id: string;
    title: string;
    description: string;
    scope: string[];
    image: string;
  }[];
  customProcess: {
    step: string;
    title: string;
    description: string;
  }[];
}

export const companyData: CompanyInfo = {
  name: "PT Aruna Kayu Nusantara",
  brand: "ARUNA Living",
  tagline: "Crafting Spaces, Creating Stories.",
  subheadline: "Furniture berkualitas dengan desain yang dibuat untuk menghadirkan kenyamanan, karakter, dan keindahan pada setiap ruang.",
  introHeading: "Furniture Made With Purpose",
  introDescription: "ARUNA Living menghadirkan furniture berkualitas yang memadukan fungsi, estetika, dan craftsmanship. Kami mengerjakan berbagai kebutuhan furniture, mulai dari residential hingga commercial project dengan proses yang terukur dan perhatian terhadap setiap detail.",
  aboutTitle: "We Believe Good Furniture Should Last.",
  aboutStory: [
    "ARUNA Living berdiri dengan visi untuk menghadirkan furniture yang tidak hanya memiliki nilai estetika, tetapi juga mampu menjadi bagian dari kehidupan penggunanya dalam jangka panjang.",
    "Kami menggabungkan craftsmanship tradisional Indonesia yang kaya, material kayu solid pilihan, teknologi fabrikasi presisi, dan standar quality control bertingkat untuk menghasilkan furniture yang memiliki karakter abadi dan ketahanan puluhan tahun."
  ],
  address: {
    street: "Jl. Raya Rungkut Industri No. 88",
    city: "Surabaya",
    province: "Jawa Timur",
    postalCode: "60293",
    full: "Jl. Raya Rungkut Industri No. 88, Surabaya, Jawa Timur 60293"
  },
  contact: {
    whatsapp: "6281234567890",
    whatsappFormatted: "+62 812-3456-7890",
    phone: "+62 812-3456-7890",
    email: "hello@arunaliving.id",
    businessHours: "08.00 – 17.00 WIB",
    businessDays: "Senin – Sabtu"
  },
  social: {
    instagram: "https://instagram.com/arunaliving.id",
    tiktok: "https://tiktok.com/@arunaliving",
    linkedin: "https://linkedin.com/company/aruna-kayu-nusantara"
  },
  stats: [
    { value: "10+", numeric: 10, label: "Tahun Pengalaman", suffix: "+" },
    { value: "500+", numeric: 500, label: "Projects Completed", suffix: "+" },
    { value: "1,200+", numeric: 1200, label: "Happy Clients", suffix: "+" },
    { value: "25+", numeric: 25, label: "Team Members & Craftsmen", suffix: "+" }
  ],
  values: [
    {
      id: "quality",
      number: "01",
      title: "Quality",
      description: "Kami memperhatikan kualitas material kayu, sambungan struktural, dan proses finishing dengan standar ketat.",
      icon: "ShieldCheck"
    },
    {
      id: "craftsmanship",
      number: "02",
      title: "Craftsmanship",
      description: "Setiap produk dikerjakan dengan presisi tinggi oleh perajin kayu berpengalaman dengan sentuhan tangan terampil.",
      icon: "Hammer"
    },
    {
      id: "integrity",
      number: "03",
      title: "Integrity",
      description: "Kami menjaga transparansi dalam proses kerja, kepastian jadwal produksi, spesifikasi material, dan komunikasi.",
      icon: "Handshake"
    },
    {
      id: "sustainability",
      number: "04",
      title: "Sustainability",
      description: "Kami berusaha menggunakan material kayu bersertifikasi secara bertanggung jawab dan meminimalkan waste produksi.",
      icon: "Leaf"
    }
  ],
  whyChooseUs: [
    {
      id: "experience",
      title: "10+ Years Experience",
      description: "Rekam jejak terbukti dalam pengerjaan furniture residential prestisius dan proyek komersial berskala besar.",
      highlight: "Teruji & Andal"
    },
    {
      id: "custom-made",
      title: "Custom Made Precision",
      description: "Furniture dapat disesuaikan secara milimeter dengan ukuran, layout, ergonomi, dan karakter estetika ruang Anda.",
      highlight: "Sesuai Kebutuhan"
    },
    {
      id: "quality-materials",
      title: "Quality Materials Selection",
      description: "Menggunakan solid teak wood (kayu jati pilihan), oven-dried timber, premium veneer, finishing food-grade dan hardware bergaransi.",
      highlight: "Material Terbaik"
    },
    {
      id: "professional-production",
      title: "Professional Production & QC",
      description: "Didukung workshop mandiri, mesin presisi, tenaga produksi terlatih, serta inspeksi quality control 3 tahap.",
      highlight: "QC Bertingkat"
    },
    {
      id: "after-sales",
      title: "After Sales Support",
      description: "Kami mendampingi Anda setelah pengiriman, menjamin instalasi rapi di lokasi serta garansi struktural produk.",
      highlight: "Garansi & Servis"
    }
  ],
  services: [
    {
      id: "custom-furniture",
      title: "Bespoke Custom Furniture",
      description: "Pembuatan furniture custom lepasan (loose furniture) maupun terpasang (built-in) yang dirancang khusus menyesuaikan denah dan selera Anda.",
      scope: ["Kitchen Set & Pantry", "Walk-in Closet & Wardrobe", "Custom Sofa & Dining Table", "Wall Paneling & Partition"],
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "residential-project",
      title: "Residential Interior Furnishing",
      description: "Solusi pengadaan furniture menyeluruh untuk rumah tinggal, villa, dan apartemen dengan konsep yang terpadu dan personal.",
      scope: ["Master Bedroom Suite", "Living & Family Lounge", "Open Dining Area", "Study & Home Library"],
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "commercial-b2b",
      title: "Commercial & Hospitality B2B",
      description: "Kolaborasi profesional dengan arsitek, desainer interior, kontraktor, pemilik hotel, cafe, restoran, dan gedung perkantoran.",
      scope: ["Office Workstations & Meeting Tables", "Cafe & Restaurant Dining Sets", "Hotel Bedroom Loose Furniture", "Reception & Lounge Areas"],
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
    }
  ],
  customProcess: [
    {
      step: "01",
      title: "Consultation & Brief",
      description: "Customer menyampaikan kebutuhan, sketsa ide, referensi desain, denah ruang, dan perkiraan budget kepada konsultan kami."
    },
    {
      step: "02",
      title: "Design & Measurement",
      description: "Tim perancang membuat visualisasi 3D, penyesuaian ukuran presisi di lokasi (survey), dan pemilihan sampel material & kain."
    },
    {
      step: "03",
      title: "Precision Production",
      description: "Produksi furniture dilakukan di workshop kami oleh tim perajin berpengalaman dengan material yang telah dikeringkan (kiln-dried)."
    },
    {
      step: "04",
      title: "Quality Control (QC)",
      description: "Pemeriksaan teliti terhadap kekuatan konstruksi, kehalusan finishing, kerapian jahitan, dan kelancaran hardware fitting."
    },
    {
      step: "05",
      title: "Delivery & Installation",
      description: "Furniture dikirim dengan packing pelindung berstandar dan dipasang langsung oleh teknisi internal kami di lokasi Anda."
    }
  ]
};

export const getWhatsAppUrl = (message: string): string => {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${companyData.contact.whatsapp}?text=${encoded}`;
};
