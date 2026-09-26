export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  projectType: 'Residential' | 'Corporate / B2B' | 'Hospitality / F&B';
  city: string;
  rating: number;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "andi-pratama",
    quote: "Proses konsultasinya sangat membantu. Furniture yang dibuat benar-benar sesuai dengan desain interior rumah kami. Kayu jati solidnya terasa mantap, dan finishing mattenya sangat mewah.",
    author: "Andi Pratama",
    role: "Residential Customer",
    projectType: "Residential",
    city: "Surabaya",
    rating: 5
  },
  {
    id: "nusantara-digital",
    quote: "ARUNA sangat komunikatif dan mampu menyelesaikan kebutuhan furniture kantor kami sesuai timeline. Meja conference 12-seater dan workstation staf sangat rapi dengan cable ducting yang cerdas.",
    author: "PT Nusantara Digital",
    role: "Corporate Client",
    projectType: "Corporate / B2B",
    city: "Surabaya & Jakarta",
    rating: 5
  },
  {
    id: "claudia-architect",
    quote: "Sebagai interior designer, menemukan vendor fabrikasi kayu yang memahami detail gambar kerja 3D kami adalah hal yang langka. ARUNA selalu memenuhi standar toleransi millimeter yang kami tentukan.",
    author: "Claudia Setiawan, IAI",
    role: "Principal Architect & Interior Designer",
    projectType: "Corporate / B2B",
    city: "Surabaya",
    rating: 5
  },
  {
    id: "villa-batu-owner",
    quote: "Furniture loose untuk 8 unit villa kami di Batu tahan cuaca dingin lembab dan tidak ada masalah berderit sama sekali. After sales support mereka datang langsung saat kami butuh adjustment minor.",
    author: "Bambang Sudiro",
    role: "Hospitality Owner",
    projectType: "Hospitality / F&B",
    city: "Batu, Malang",
    rating: 5
  }
];
