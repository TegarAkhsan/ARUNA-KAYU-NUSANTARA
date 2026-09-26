export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Custom & Order' | 'Material & Kualitas' | 'Pengiriman & Instalasi' | 'Konsultasi';
}

export const faqData: FAQItem[] = [
  {
    id: "faq-1",
    question: "Apakah ARUNA menerima furniture custom?",
    answer: "Ya, kami menerima pembuatan furniture berdasarkan ukuran, denah, dan desain yang disesuaikan sepenuhnya dengan kebutuhan customer, baik untuk hunian pribadi, cafe, hotel, maupun kantor.",
    category: "Custom & Order"
  },
  {
    id: "faq-2",
    question: "Apakah bisa konsultasi terlebih dahulu?",
    answer: "Tentu bisa. Anda dapat melakukan konsultasi gratis melalui WhatsApp dengan tim konsultan kami. Anda bisa membagikan referensi foto, denah ruangan, atau perkiraan kebutuhan ukuran.",
    category: "Konsultasi"
  },
  {
    id: "faq-3",
    question: "Apakah bisa mengirim ke luar Surabaya?",
    answer: "Bisa. Pengiriman tersedia untuk berbagai kota di seluruh Indonesia. Kami menggunakan ekspedisi khusus furniture dengan sistem packing kayu (wooden crate) dan bubble wrap tebal untuk menjamin keamanan hingga tujuan.",
    category: "Pengiriman & Instalasi"
  },
  {
    id: "faq-4",
    question: "Berapa lama pengerjaan furniture custom?",
    answer: "Estimasi waktu pengerjaan berkisar antara 14 hingga 30 hari kerja, bergantung pada jenis produk, tingkat kerumitan desain, pilihan material, dan jumlah volume pesanan. Jadwal pasti akan tertera dalam quotation resmi kami.",
    category: "Custom & Order"
  },
  {
    id: "faq-5",
    question: "Apakah bisa request material tertentu?",
    answer: "Bisa, selama material yang diinginkan tersedia dan sesuai dengan standar kualitas produksi kami. Kami menyediakan pilihan kayu jati solid (Perhutani), kayu sungkai, mahoni, plywood marinewood dengan veneer alami, marmer, hingga berbagai jenis kain pelapis impor.",
    category: "Material & Kualitas"
  },
  {
    id: "faq-6",
    question: "Bagaimana dengan jaminan garansi dan after-sales support?",
    answer: "Setiap produk kami dilengkapi dengan garansi konstruksi struktural selama 12 bulan dan dukungan after-sales. Jika terjadi penyesuaian hardware atau instalasi di kemudian hari, tim teknisi kami siap membantu Anda.",
    category: "Material & Kualitas"
  }
];
