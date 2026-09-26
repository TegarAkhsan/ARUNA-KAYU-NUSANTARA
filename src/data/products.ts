export type ProductCategory = 
  | 'All'
  | 'Living Room'
  | 'Bedroom'
  | 'Dining Room'
  | 'Office'
  | 'Storage'
  | 'Custom Furniture';

export interface ProductSpecification {
  material: string;
  upholstery?: string;
  finish?: string;
  width: string;
  height: string;
  depth: string;
  weight: string;
  leadTime?: string;
}

export interface Product {
  id: string;
  code: string;
  name: string;
  category: ProductCategory;
  subcategory: string;
  price: string;
  rawPrice: number;
  featured: boolean;
  shortDescription: string;
  fullDescription: string;
  images: string[];
  materialsSummary: string[];
  specification: ProductSpecification;
  availableColors: string[];
  badge?: string;
}

export const productCategories: ProductCategory[] = [
  'All',
  'Living Room',
  'Dining Room',
  'Bedroom',
  'Office',
  'Storage',
  'Custom Furniture'
];

export const productsData: Product[] = [
  {
    id: "oslo-lounge-chair",
    code: "01",
    name: "Oslo Lounge Chair",
    category: "Living Room",
    subcategory: "Lounge Chair",
    price: "Starting from Rp2.850.000",
    rawPrice: 2850000,
    featured: true,
    shortDescription: "Kursi santai berdesain Scandinavian kontemporer dengan lekukan ergonomis dan kehangatan kayu solid.",
    fullDescription: "Oslo Lounge Chair dirancang dengan bentuk ergonomis dan desain minimalis yang cocok untuk berbagai konsep interior. Menggunakan struktur rangka kayu solid oven-dried dengan finishing halus bernuansa matte natural, dipadukan bantalan busa high-density berlapis kain woven premium yang breathable dan nyaman diduduki berjam-jam.",
    images: [
      "https://images.unsplash.com/photo-1580481077195-c3a82da912c3?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1000&q=80"
    ],
    materialsSummary: ["Solid Wood", "Premium Fabric"],
    specification: {
      material: "Solid Teak & Sungkai Wood",
      upholstery: "Premium Textured Linen Blend",
      finish: "Natural Matte PU Coating",
      width: "72 cm",
      height: "78 cm",
      depth: "76 cm",
      weight: "12 kg",
      leadTime: "10-14 Hari Kerja"
    },
    availableColors: ["Natural Oak", "Walnut Warm", "Dark Charcoal"],
    badge: "Best Seller"
  },
  {
    id: "arlo-dining-table",
    code: "02",
    name: "Arlo Dining Table",
    category: "Dining Room",
    subcategory: "Dining Table",
    price: "Starting from Rp6.500.000",
    rawPrice: 6500000,
    featured: true,
    shortDescription: "Meja makan kayu jati solid dengan proporsi ramping dan profil tepi bevel elegan untuk kehangatan santap keluarga.",
    fullDescription: "Arlo Dining Table mengekspresikan karakter kayu jati Nusantara pilihan dengan serat alami yang hidup dan kuat. Dirancang untuk menampung 6 hingga 8 orang dengan stabilitas struktural teruji dan lapisan perlindungan tahan noda makanan maupun panas sedang.",
    images: [
      "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=1000&q=80"
    ],
    materialsSummary: ["Solid Teak Wood"],
    specification: {
      material: "100% Solid Teak Wood (Jati Perhutani)",
      finish: "Clear Natural Food-Grade Matte Finish",
      width: "180 cm",
      height: "75 cm",
      depth: "90 cm",
      weight: "45 kg",
      leadTime: "14-21 Hari Kerja"
    },
    availableColors: ["Natural Teak", "Honey Gold", "Smoked Walnut"],
    badge: "Signature"
  },
  {
    id: "nara-cabinet",
    code: "03",
    name: "Nara Cabinet",
    category: "Storage",
    subcategory: "Cabinet & Credenza",
    price: "Starting from Rp4.200.000",
    rawPrice: 4200000,
    featured: true,
    shortDescription: "Kabinet multifungsi dengan pintu aksen kisi-kisi kayu minimalis, menawarkan ruang simpan luas dan estetika Jepang modern.",
    fullDescription: "Nara Cabinet menghadirkan perpaduan sempurna antara kepraktisan fungsional dan estetika Japandi. Dilengkapi engsel soft-close bermutu tinggi dari merek ternama, rak modular yang dapat diatur ketinggiannya, dan kaki kayu solid yang kokoh memancarkan kesan melayang yang anggun.",
    images: [
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80"
    ],
    materialsSummary: ["Teak Veneer", "Multipleks Berkualitas"],
    specification: {
      material: "High Grade Plywood & Teak Veneer",
      finish: "Semi-Matte Natural Wood Finish",
      width: "120 cm",
      height: "85 cm",
      depth: "40 cm",
      weight: "32 kg",
      leadTime: "14-18 Hari Kerja"
    },
    availableColors: ["Natural Teak", "Bleached Oak", "Ebony Black"],
    badge: "Featured"
  },
  {
    id: "kanso-work-desk",
    code: "04",
    name: "Kanso Work Desk",
    category: "Office",
    subcategory: "Work Desk",
    price: "Starting from Rp3.750.000",
    rawPrice: 3750000,
    featured: true,
    shortDescription: "Meja kerja minimalis modern dengan manajemen kabel tersembunyi dan rangka baja matte berdaya tahan tinggi.",
    fullDescription: "Terinspirasi dari prinsip Zen 'Kanso' yang berarti kesederhanaan, meja kerja ini dirancang untuk menciptakan ruang kerja yang bersih, fokus, dan bebas distraksi. Daun meja terbuat dari kayu solid dengan bevel ergonomis pada tepian lengan bawah.",
    images: [
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=80"
    ],
    materialsSummary: ["Solid Wood", "Steel Frame"],
    specification: {
      material: "Solid Sungkai Top & Powder-coated Steel Base",
      finish: "Scratch-resistant Polyurethane Coating",
      width: "140 cm",
      height: "75 cm",
      depth: "65 cm",
      weight: "24 kg",
      leadTime: "10-14 Hari Kerja"
    },
    availableColors: ["Natural Oak & Matte Black", "Walnut & Dark Bronze"],
    badge: "Popular"
  },
  {
    id: "soren-modular-sofa",
    code: "05",
    name: "Soren Modular 3-Seater Sofa",
    category: "Living Room",
    subcategory: "Sofa",
    price: "Starting from Rp8.900.000",
    rawPrice: 8900000,
    featured: false,
    shortDescription: "Sofa 3 dudukan berbalut kain woven hangat dengan proporsi rendah dan kedalaman dudukan santai.",
    fullDescription: "Soren Sofa memadukan siluet modern kontemporer dengan kenyamanan maksimal. Rangka internal terbuat dari kayu keras solid anti-rayap dengan garansi struktural 5 tahun, dipadu busa high-resilience yang tidak mudah kempis.",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1000&q=80"
    ],
    materialsSummary: ["Solid Hardwood Frame", "Belgian Woven Fabric"],
    specification: {
      material: "Solid Mahoni / Jati Frame & Pocket Spring",
      upholstery: "Heavy Duty Textured Linen Blend",
      finish: "Hidden Solid Wood Legs",
      width: "220 cm",
      height: "76 cm",
      depth: "92 cm",
      weight: "58 kg",
      leadTime: "14-20 Hari Kerja"
    },
    availableColors: ["Oatmeal Beige", "Charcoal Grey", "Olive Sage", "Warm Terracotta"]
  },
  {
    id: "alva-platform-bed",
    code: "06",
    name: "Alva Platform Bed Frame",
    category: "Bedroom",
    subcategory: "Bed",
    price: "Starting from Rp7.200.000",
    rawPrice: 7200000,
    featured: false,
    shortDescription: "Ranjang platform kayu solid dengan headboard miring ergonomis dan aksen melayang yang menenangkan.",
    fullDescription: "Alva Platform Bed membawa suasana resort eksklusif ke dalam kamar tidur pribadi Anda. Sambungan mortise and tenon tradisional memastikan ketenangan tidur tanpa bunyi berderit. Tersedia dalam ukuran King (180x200) dan Queen (160x200).",
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?auto=format&fit=crop&w=1000&q=80"
    ],
    materialsSummary: ["Solid Teak Wood", "Hidden Steel Support"],
    specification: {
      material: "Kiln-Dried Solid Teak Wood",
      finish: "Ultra-Matte Natural Wood Shield",
      width: "192 cm (untuk Matras 180x200)",
      height: "95 cm",
      depth: "215 cm",
      weight: "62 kg",
      leadTime: "18-24 Hari Kerja"
    },
    availableColors: ["Natural Teak", "Warm Walnut", "Weathered Grey"]
  },
  {
    id: "kyoto-bedside-table",
    code: "07",
    name: "Kyoto Bedside Nightstand",
    category: "Bedroom",
    subcategory: "Bedside Table",
    price: "Starting from Rp1.850.000",
    rawPrice: 1850000,
    featured: false,
    shortDescription: "Meja samping tempat tidur dengan laci tersembunyi bertumpu pada kaki siluet tirus yang manis.",
    fullDescription: "Detail pengerjaan laci dengan rel underslide push-to-open memberikan tampilan muka laci yang bersih tanpa handle konvensional. Cocok bersanding dengan tempat tidur modern maupun klasik.",
    images: [
      "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=80"
    ],
    materialsSummary: ["Solid Wood", "Brass Accent"],
    specification: {
      material: "Solid Sungkai & Teak Veneer",
      finish: "Natural Satin Finish",
      width: "48 cm",
      height: "52 cm",
      depth: "40 cm",
      weight: "8 kg",
      leadTime: "7-10 Hari Kerja"
    },
    availableColors: ["Natural Wood", "Walnut Finish"]
  },
  {
    id: "kumo-dining-chair",
    code: "08",
    name: "Kumo Dining Chair",
    category: "Dining Room",
    subcategory: "Dining Chair",
    price: "Starting from Rp1.450.000",
    rawPrice: 1450000,
    featured: false,
    shortDescription: "Kursi makan dengan sandaran melengkung anatomis dan dudukan empuk berlapis kain water-repellent.",
    fullDescription: "Kumo Dining Chair dirancang agar dapat ditumpuk secara aman dan nyaman untuk santapan berjam-jam maupun kebutuhan restoran/cafe prestisius. Struktur kayu solid diperkuat dengan sambungan tersembunyi.",
    images: [
      "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80"
    ],
    materialsSummary: ["Solid Teak Wood", "Stain-resistant Fabric"],
    specification: {
      material: "Solid Teak Wood Frame",
      upholstery: "Anti-Stain Woven Textile",
      finish: "Smooth Satin Lacquer",
      width: "52 cm",
      height: "79 cm",
      depth: "54 cm",
      weight: "6.5 kg",
      leadTime: "7-14 Hari Kerja"
    },
    availableColors: ["Natural & Beige", "Walnut & Charcoal", "Black & Grey"]
  },
  {
    id: "linear-conference-table",
    code: "09",
    name: "Linear Conference Table",
    category: "Office",
    subcategory: "Meeting Table",
    price: "Starting from Rp14.500.000",
    rawPrice: 14500000,
    featured: false,
    shortDescription: "Meja ruang rapat eksekutif 10-12 orang dengan koneksi power socket pop-up terpadu.",
    fullDescription: "Diciptakan untuk ruang meeting korporat modern. Menampilkan kayu solid tebal 4cm dengan rangka penopang baja berkekuatan tinggi, dilengkapi jalur kabel (cable ducting) terintegrasi untuk tampilan ruang rapat yang rapi dan prestisius.",
    images: [
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=80"
    ],
    materialsSummary: ["Solid Teak Slab", "Heavy Duty Steel"],
    specification: {
      material: "Selected Solid Teak & Reinforced Steel Tube",
      finish: "Industrial Heavy Duty Polyurethane",
      width: "320 cm",
      height: "75 cm",
      depth: "120 cm",
      weight: "95 kg",
      leadTime: "21-30 Hari Kerja"
    },
    availableColors: ["Natural Teak with Black Base", "Dark Espresso"]
  },
  {
    id: "custom-island-kitchen",
    code: "10",
    name: "Architectural Custom Kitchen & Island",
    category: "Custom Furniture",
    subcategory: "Kitchen Set",
    price: "Custom Estimate (By Project)",
    rawPrice: 25000000,
    featured: false,
    shortDescription: "Kitchen set kustom dengan counter island marmer, kabinet full-height, dan sistem hardware Blum.",
    fullDescription: "Layanan custom kitchen set ARUNA Living menghadirkan tata ruang dapur impian yang ergonomis dan estetis. Menggunakan multiplex anti-lembab marinewood grade A, dilapisi veneer kayu jati asli atau HPL premium dengan fitting engsel dan drawer runner bergaransi seumur hidup.",
    images: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1000&q=80"
    ],
    materialsSummary: ["Marine Multipleks", "Teak Veneer", "Quartz/Granite"],
    specification: {
      material: "Water-resistant Plywood + Natural Veneer / HPL",
      finish: "Food-grade UV Coating & Anti-scratch",
      width: "Custom sesuai denah",
      height: "Custom sesuai plafon",
      depth: "60 cm (Base) / 35 cm (Wall)",
      weight: "Berdasarkan volume",
      leadTime: "30-45 Hari Kerja"
    },
    availableColors: ["Custom Palette Sesuai Konsep Arsitek"]
  },
  {
    id: "custom-wardrobe-closet",
    code: "11",
    name: "Bespoke Master Walk-in Wardrobe",
    category: "Custom Furniture",
    subcategory: "Custom Wardrobe",
    price: "Custom Estimate (By Project)",
    rawPrice: 18000000,
    featured: false,
    shortDescription: "Lemari pakaian built-in hingga plafon dengan pintu kaca frame aluminium dan sensor LED terintegrasi.",
    fullDescription: "Solusi penyimpanan pakaian mewah dengan pembagian kompartemen jas, gaun, aksesoris jam tangan dengan velvet tray, dan rak sepatu bertingkat. Dikerjakan dengan presisi millimeter menyesuaikan lekukan dinding ruangan Anda.",
    images: [
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1000&q=80"
    ],
    materialsSummary: ["Anodized Aluminium", "Tempered Fluted Glass", "Veneer"],
    specification: {
      material: "Moisture-resistant Multipleks & Tempered Glass",
      finish: "Warm Walnut Woodgrain & Smoked Glass",
      width: "Disesuaikan denah",
      height: "Hingga 320 cm",
      depth: "60 cm",
      weight: "Berdasarkan volume",
      leadTime: "25-35 Hari Kerja"
    },
    availableColors: ["Smoked Brown Glass", "Bronze Aluminium", "Matte Black"]
  },
  {
    id: "eira-nested-coffee-table",
    code: "12",
    name: "Eira Nested Coffee Table",
    category: "Living Room",
    subcategory: "Coffee Table",
    price: "Starting from Rp2.450.000",
    rawPrice: 2450000,
    featured: false,
    shortDescription: "Set dua meja kopi bertingkat dengan siluet organik fluid yang fleksibel diatur di ruang tamu.",
    fullDescription: "Meja kopi sarang (nested) dengan permukaan berbentuk kurva organik halus. Memungkinkan penataan bertumpuk maupun dipisah saat menerima tamu banyak, menghadirkan dinamika visual yang tidak kaku.",
    images: [
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80"
    ],
    materialsSummary: ["Solid Sungkai Wood", "Matte Lacquer"],
    specification: {
      material: "Kiln-dried Solid Sungkai Wood",
      finish: "Water-based Matte Polyurethane",
      width: "85 cm (Meja Besar) / 55 cm (Meja Kecil)",
      height: "42 cm / 36 cm",
      depth: "60 cm / 45 cm",
      weight: "14 kg (Set)",
      leadTime: "7-12 Hari Kerja"
    },
    availableColors: ["Bleached Natural", "Warm Oak", "Espresso"]
  }
];

export const getProductInquiryMessage = (productName: string): string => {
  return `Halo ARUNA Living, saya tertarik dengan produk ${productName}. Saya ingin mendapatkan informasi lebih lanjut mengenai produk dan harganya.`;
};
