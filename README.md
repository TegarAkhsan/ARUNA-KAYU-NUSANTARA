# ARUNA Living — PT Aruna Kayu Nusantara
### Website Company Profile & Katalog Furniture Custom Surabaya

Website company profile resmi dan modern untuk **PT Aruna Kayu Nusantara (ARUNA Living)**, produsen dan distributor furniture custom berbasis kayu solid pilihan di Surabaya, Jawa Timur.

---

## 🌟 Fitur Utama Website

1. **Design & Brand Aesthetics**
   - Mengusung nuansa **Modern, Premium, Minimalist, Warm, dan Professional**.
   - Palet warna brand: Primary `#1F1F1D` (Charcoal/Dark Wood), Secondary `#F5F1EA` (Warm Alabaster/Beige), Accent `#A47C52` (Teak Warm Timber/Wood), Background `#FAF9F5`.
   - Typography editorial menggunakan kombinasi *Playfair Display* (serif elegan) dan *Plus Jakarta Sans* (modern sans-serif).
   - Animasi halus, layout editorial masonry, dan whitespace terukur untuk tampilan berkelas korporat/arsitektural.

2. **Katalog Produk & Detail Interaktif**
   - Kategori produk lengkap: *Living Room, Bedroom, Dining Room, Office, Storage, Custom Furniture*.
   - Filter instan berdasarkan kategori dan pencarian kata kunci / material.
   - 4 Produk unggulan (*Oslo Lounge Chair, Arlo Dining Table, Nara Cabinet, Kanso Work Desk*).
   - **Modal Detail Produk Lengkap**: Galeri multi-foto, spesifikasi teknis (material, dimensi WxHxD, bobot, lead time), opsi warna finishing.
   - **Integrasi WhatsApp Dinamis**: Klik tombol *Tanyakan Produk via WhatsApp* otomatis menyusun pesan:
     > *"Halo ARUNA Living, saya tertarik dengan produk [PRODUCT NAME]. Saya ingin mendapatkan informasi lebih lanjut mengenai produk dan harganya."*

3. **Layanan Custom Furniture (5 Tahap Kerja)**
   - Section khusus *"Your Space. Your Furniture."*
   - Alur 5 tahapan transparan:
     1. `01 — Consultation`
     2. `02 — Design`
     3. `03 — Production`
     4. `04 — Quality Control`
     5. `05 — Delivery & Installation`
   - WhatsApp CTA khusus: *"Halo ARUNA Living, saya ingin berkonsultasi mengenai custom furniture."*

4. **Portofolio Proyek (Editorial Layout)**
   - Menampilkan proyek komersial & residensial (*Modern Residence Graha Famili, Kopi Ruang Tengah, Urban Office Sidoarjo, Villa Amerta Batu, The Luminary Penthouse, dll.*).
   - Modal detail proyek menampilkan foto galeri, scope of work, material yang digunakan, dan testimoni klien.
   - WhatsApp CTA khusus untuk proyek serupa.

5. **Why Choose Us & Animated Stats Counter**
   - 5 pilar keunggulan: *10+ Years Experience, Custom Made, Quality Materials, Professional Production, After Sales Support*.
   - Animated counter interaktif:
     - **10+** Tahun Pengalaman
     - **500+** Projects Completed
     - **1,200+** Happy Clients
     - **25+** Team Members & Craftsmen

6. **Client Testimonials & FAQ Accordion**
   - Ulasan dari klien residensial (*Andi Pratama*) dan klien korporat (*PT Nusantara Digital*).
   - 6 FAQ interaktif mencakup pertanyaan custom, konsultasi, pengiriman se-Indonesia, dan material.

7. **Kontak, Netlify Forms & Google Maps**
   - Informasi lengkap: Alamat Surabaya, Telepon/WA, Email, Jam operasional.
   - Formulir kontak terintegrasi dengan **Netlify Forms** (tanpa perlu backend database).
   - Tombol fallback kirim langsung data form ke chat WhatsApp.
   - Peta interaktif Google Maps lokasi workshop/showroom Surabaya.

8. **Floating WhatsApp Button**
   - Tombol melayang persisten di sudut kanan bawah dengan badge status online dan pop-up ramah.

9. **SEO & Performance Ready**
   - Title tag, meta description, Open Graph image, keywords, semantic HTML5, `robots.txt`, dan `sitemap.xml`.
   - Konfigurasi Netlify SPA redirects `_redirects` & `netlify.toml` untuk mencegah error 404 saat refresh.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite 8 (TypeScript)
- **Styling**: Tailwind CSS v4 (Vanilla Utility + Custom Design System)
- **Icons**: Lucide React + Bespoke SVG Icons
- **Deployment**: Netlify Ready (`netlify.toml` & `_redirects`)

---

## 📁 Struktur Data yang Mudah Diubah (`src/data/`)

Sesuai permintaan di brief, seluruh konten tersimpan rapi dalam file TypeScript terpisah sehingga staf ARUNA Living dapat dengan mudah menambah produk atau mengubah harga tanpa menyentuh kode komponen:

```
src/
├── data/
│   ├── company.ts       # Profil perusahaan, nomor WA, alamat, jam buka, sosmed
│   ├── products.ts      # Daftar produk katalog, harga, spesifikasi, foto
│   ├── projects.ts      # Portofolio proyek, foto galeri, scope pekerjaan
│   ├── testimonials.ts  # Testimoni klien B2C & B2B
│   └── faq.ts           # Pertanyaan dan jawaban FAQ
```

---

## 🚀 Menjalankan Project Secara Lokal

1. **Install dependensi**:
   ```bash
   npm install
   ```

2. **Jalankan development server**:
   ```bash
   npm run dev
   ```
   Akses `http://localhost:5173` di browser Anda.

3. **Build untuk production**:
   ```bash
   npm run build
   ```
   Folder `dist/` siap di-deploy.

---

## 🌐 Panduan Deployment ke Netlify & Setting Domain `arunaliving.id`

### Langkah 1: Push ke GitHub
1. Buat repository baru di akun GitHub Anda (misal: `aruna-kayu-nusantara` atau `arunaliving-web`).
2. Jalankan perintah git:
   ```bash
   git init
   git add .
   git commit -m "feat: complete ARUNA Living company profile and catalog website"
   git branch -M main
   git remote add origin https://github.com/USERNAME/REPO_NAME.git
   git push -u origin main
   ```

### Langkah 2: Hubungkan ke Netlify
1. Buka [Netlify](https://app.netlify.com/) dan login menggunakan akun GitHub.
2. Klik **Add new site** > **Import an existing project** > pilih **GitHub**.
3. Pilih repository `aruna-kayu-nusantara`.
4. Konfigurasi build setting (sudah otomatis terdeteksi dari `netlify.toml`):
   - **Base directory**: (kosongkan / root)
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Klik **Deploy site**. Dalam 1-2 menit website akan live di subdomain Netlify (contoh: `https://arunaliving.netlify.app`).

### Langkah 3: Menghubungkan Custom Domain `arunaliving.id`
1. Di dashboard Netlify, masuk ke menu **Site settings** > **Domain management** > klik **Add a domain**.
2. Masukkan domain Anda: `arunaliving.id` dan konfirmasi.
3. Buka dashboard registrar tempat Anda membeli domain (misal: Niagahoster, Domainesia, Rumahweb, dll.), lalu buka menu **DNS Management**:
   - **Opsi DNS Record (A & CNAME)**:
     - Record 1: Type `A`, Host/Name `@`, Points to: `75.2.60.5` (Netlify Load Balancer IP)
     - Record 2: Type `CNAME`, Host/Name `www`, Points to: nama subdomain netlify Anda (misal `arunaliving.netlify.app`)
   - **Atau Opsi Netlify DNS (Recommended)**: Ganti Nameserver domain Anda ke 4 nameserver Netlify yang tertera di layar.
4. Di bagian **SSL/TLS Certificate**, klik **Verify DNS configuration** lalu **Provision certificate**. Netlify akan otomatis menerbitkan sertifikat Let's Encrypt SSL (HTTPS aktif secara gratis selamanya).

---

## 📞 Kontak Pengembang

Website ini dirancang khusus memenuhi seluruh poin brief project PT Aruna Kayu Nusantara.
© 2026 PT Aruna Kayu Nusantara — ARUNA Living.
