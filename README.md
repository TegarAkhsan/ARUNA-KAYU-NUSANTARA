# ARUNA Living — PT Aruna Kayu Nusantara
> **Premium Furniture & Bespoke Interior Company Profile Website**  
> *Crafting Spaces, Creating Stories.* • Surabaya, Jawa Timur, Indonesia

Website resmi dan katalog interaktif berstandar editorial luxury untuk **PT Aruna Kayu Nusantara (ARUNA Living)**. Dirancang khusus untuk membangun kredibilitas merek (*brand trust*), memamerkan portofolio pengerjaan residential & B2B komersial berskala besar, serta mempermudah calon customer melakukan pemesanan dan konsultasi custom furniture melalui WhatsApp.

---

## 📑 Daftar Isi
1. [Fitur Unggulan Website](#-fitur-unggulan-website)
2. [Teknologi yang Digunakan](#-teknologi-yang-digunakan)
3. [Arsitektur Data Modular (`src/data/`)](#-arsitektur-data-modular-srcdata)
4. [Cara Menjalankan Secara Lokal](#-cara-menjalankan-secara-lokal)
5. [Panduan Deployment ke Netlify (Lengkap & Teruji)](#-panduan-deployment-ke-netlify-lengkap--teruji)
6. [Panduan Menghubungkan Domain `arunaliving.id` & SSL](#-panduan-menghubungkan-domain-arunalivingid--ssl)
7. [Checklist Kesiapan Produksi (Acceptance Criteria)](#-checklist-kesiapan-produksi)

---

## 🌟 Fitur Unggulan Website

### 1. Desain Editorial Luxury Arsitektural
- **Palet Warna Hangat & Berkelas**:
  - `Primary`: `#191816` (Deep Charcoal & Dark Wood)
  - `Secondary`: `#FAF8F5` & `#F3EFEA` (Warm Alabaster & Warm Beige)
  - `Accent`: `#C59B6D` & `#A47C52` (Teak Timber & Warm Caramel)
- **Tipografi Editorial**: Kombinasi Google Fonts **Playfair Display** (serif elegan) untuk judul dan **Plus Jakarta Sans** (sans-serif kontemporer) untuk kenyamanan membaca di smartphone.
- **Floating Pill Navbar**: Header melayang modern dengan efek *glassmorphism backdrop blur*, tombol aksi cepat WhatsApp, dan drawer navigasi mobile responsif.
- **Framed Cinematic Hero**: Hero berbingkai sudut melengkung dengan foto interior sinematik beresolusi tinggi, headline terkurasi, tombol konsultasi, indikator scroll down, dan icon sosial media terpadu.

### 2. Katalog Produk & Union Cart Button
- **Koleksi Lengkap & Filter Instan**: Mendukung kategori *Living Room, Bedroom, Dining Room, Office, Storage, dan Custom Furniture* dengan kolom live search.
- **Union Shape Circular Action Button**: Tombol keranjang/inquiry berbentuk lingkaran estetik yang menyatu dengan kartu produk.
- **Modal Spesifikasi Detail**: Informasi detail material (kayu jati Perhutani, sungkai, veneer), dimensi (P x T x L), berat, lead time produksi, dan pilihan warna finishing.
- **WhatsApp Inquiry Otomatis**: Tombol *"Tanyakan Produk via WhatsApp"* yang langsung membuka chat WhatsApp dengan format teks dinamis:
  > *"Halo ARUNA Living, saya tertarik dengan produk [NAMA PRODUK]. Saya ingin mendapatkan informasi lebih lanjut mengenai produk dan harganya."*

### 3. Alur Kerja Custom Furniture (5 Tahapan Transparan)
- Section khusus *"How We Turn Vision Into Well-Crafted Spaces"*.
- Kartu tahapan kerja arsitektural:
  - `01 — Consultation & Brief` *(Aksen Emas Karamel)*
  - `02 — Design & Measurement`
  - `03 — Precision Production`
  - `04 — Quality Control (QC)`
  - `05 — Delivery & Installation`
- Pesan otomatis WhatsApp khusus custom: *"Halo ARUNA Living, saya ingin berkonsultasi mengenai custom furniture."*

### 4. Halaman Portofolio Proyek Mandiri (Dedicated Standalone Project Pages)
- Setiap proyek memiliki **halaman detail mandiri** yang luas dan sinematik (bukan sekadar popup modal):
  - Banner widescreen rasio 21:9 / 16:9 beresolusi tinggi.
  - Galeri multi-foto dengan switcher interaktif.
  - Narasi konsep desain & tantangan arsitektur.
  - Spesifikasi material kayu dan hardware.
  - Scope of work dan kutipan ulasan klien nyata.
  - Tombol WhatsApp inquiry khusus proyek dan navigasi ke proyek berikutnya.
- **URL Hash Routing**: Setiap proyek memiliki link langsung (misal: `#project/modern-residence-surabaya`, `#project/kopi-ruang-tengah`), sehingga link dapat dibagikan langsung ke calon klien WhatsApp/klien korporat.

### 5. Bento Grid Stats & Trust Pillars
- Visual asimetris (*Bento Grid*) dengan foto arsitektural bersudut lengkung khas.
- Animated counter angka pengalaman:
  - **10+** Years of Experience
  - **500+** Tailored Design Projects
  - **1,200+** Happy Clients & Partners
  - **25+** Master Craftsmen & Engineers

### 6. Kontak, Netlify Forms & Peta Google Maps
- Terintegrasi dengan **Netlify Forms** (`data-netlify="true"`) tanpa perlu server backend database terpisah.
- Tombol alternatif kirim langsung isi formulir ke chat sales WhatsApp.
- Embed interaktif **Google Maps** lokasi showroom & workshop Surabaya (Jl. Raya Rungkut Industri No. 88).

### 7. Floating WhatsApp Support
- Tombol melayang persisten di kanan bawah dengan status indikator online hijau dan bubble sapaan ramah.

---

## 🛠️ Teknologi yang Digunakan

- **Frontend Core**: [React 19](https://react.dev/) + [Vite 8](https://vite.dev/)
- **Bahasa**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Ikonografi**: [Lucide React](https://lucide.dev/) + Custom SVG Icons
- **Deployment Platform**: [Netlify](https://www.netlify.com/)
- **Target Domain**: `arunaliving.id`

---

## 📁 Arsitektur Data Modular (`src/data/`)

Seluruh data konten dipisahkan dari komponen tampilan. Tim ARUNA Living dapat menambah produk baru, mengubah harga, atau menambah portofolio proyek tanpa mengubah struktur HTML:

```
src/
├── data/
│   ├── company.ts       # Nomor WhatsApp, telepon, alamat Surabaya, jam operasional, sosmed
│   ├── products.ts      # Daftar produk katalog, foto, harga, dimensi, spesifikasi teknis
│   ├── projects.ts      # Portofolio proyek, galeri foto, scope pekerjaan, testimoni
│   ├── testimonials.ts  # Ulasan klien B2C & B2B beserta foto profil
│   └── faq.ts           # Daftar pertanyaan & jawaban seputar pemesanan custom
```

---

## 💻 Cara Menjalankan Secara Lokal

1. **Pastikan Node.js terpasang** (disarankan Node.js v18 atau v20+).
2. **Install seluruh dependensi**:
   ```bash
   npm install
   ```
3. **Jalankan development server**:
   ```bash
   npm run dev
   ```
   Buka browser di alamat: `http://localhost:5173`
4. **Uji kompilasi production build**:
   ```bash
   npm run build
   ```
   Folder `dist/` akan terbentuk dalam waktu 2-3 detik dan siap dideploy.

---

## 🚀 Panduan Deployment ke Netlify (Lengkap & Teruji)

Project ini telah dilengkapi dengan konfigurasi standar Netlify:
- [`netlify.toml`](./netlify.toml) &mdash; Konfigurasi otomatis build command dan publish directory.
- [`public/_redirects`](./public/_redirects) &mdash; Mencegah error 404 saat pengguna merefresh browser di halaman proyek atau sub-halaman SPA.
- [`public/robots.txt`](./public/robots.txt) & [`public/sitemap.xml`](./public/sitemap.xml) &mdash; Optimasi indexing mesin pencari (SEO).

### Langkah 1: Unggah Source Code ke GitHub
1. Buat repository baru di akun GitHub Anda (misalnya: `aruna-kayu-nusantara` atau `arunaliving-web`).
2. Di terminal project lokal, jalankan perintah git berikut:
   ```bash
   git remote add origin https://github.com/USERNAME/aruna-kayu-nusantara.git
   git branch -M main
   git push -u origin main
   ```

### Langkah 2: Hubungkan Repositori ke Netlify
1. Buka dan login ke [Netlify Dashboard](https://app.netlify.com/).
2. Klik tombol **Add new site** > pilih **Import an existing project**.
3. Pilih penyedia Git: **GitHub**, lalu izinkan akses dan pilih repositori `aruna-kayu-nusantara`.
4. Netlify akan otomatis mendeteksi pengaturan dari `netlify.toml`:
   - **Base directory**: *(kosongkan / default)*
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Klik **Deploy site**.
6. Tunggu sekitar 1–2 menit hingga status build berubah menjadi **Published**. Netlify akan memberikan alamat sementara (contoh: `https://aruna-kayu-nusantara.netlify.app`).

---

## 🌐 Panduan Menghubungkan Domain `arunaliving.id` & SSL

Setelah domain `arunaliving.id` Anda beli (misal di Niagahoster, Domainesia, Rumahweb, Dewaweb, dll.):

### 1. Tambahkan Domain di Netlify
1. Pada dashboard Netlify site Anda, buka menu **Site settings** > **Domain management**.
2. Klik tombol **Add custom domain**.
3. Masukkan nama domain: `arunaliving.id`, lalu klik **Verify** dan **Add domain**.

### 2. Atur DNS Record di Panel Registrar Domain Anda
Buka menu **DNS Management / DNS Zone Editor** di tempat Anda membeli domain, lalu masukkan 2 record berikut:

| Tipe (Type) | Nama / Host (Name) | Nilai / Tujuan (Points to / Target) | Keterangan |
|---|---|---|---|
| **A** | `@` (atau kosong) | `75.2.60.5` | Alamat IP resmi Netlify Load Balancer |
| **CNAME** | `www` | `aruna-kayu-nusantara.netlify.app` *(sesuaikan nama subdomain netlify Anda)* | Mengarahkan `www.arunaliving.id` |

> 💡 **Opsi Alternatif (Netlify DNS)**: Anda juga dapat mengganti Name Server (NS) domain di registrar ke 4 Nameserver yang disediakan oleh Netlify.

### 3. Aktivasi Sertifikat SSL / HTTPS (Gratis & Otomatis)
1. Setelah DNS terhubung (biasanya memakan waktu 5 menit hingga maksimal beberapa jam propagasi DNS).
2. Di tab **HTTPS / SSL/TLS Certificate** pada Netlify, klik **Verify DNS configuration** lalu **Provision certificate**.
3. Netlify akan secara otomatis menerbitkan sertifikat SSL Let's Encrypt resmi dan mengaktifkan protokol aman **`https://arunaliving.id`** secara permanen.

---

## ✅ Checklist Kesiapan Produksi

- [x] Responsive penuh di Desktop, Laptop, Tablet, dan Smartphone (iOS & Android).
- [x] Format pesan WhatsApp terkonfigurasi otomatis dan berbeda untuk setiap produk & proyek.
- [x] Formulir kontak mendukung format Netlify Forms.
- [x] Setiap proyek portofolio memiliki halaman detail mandiri yang luas dan dapat di-share.
- [x] Konfigurasi SPA routing `_redirects` dan `netlify.toml` tersedia.
- [x] Favicon custom SVG, meta tag OpenGraph, `robots.txt`, dan `sitemap.xml` terpasang.
- [x] Kompilasi `npm run build` tervalidasi 100% tanpa error.

---

© 2026 **PT Aruna Kayu Nusantara — ARUNA Living**. All Rights Reserved.  
*Jl. Raya Rungkut Industri No. 88, Surabaya, Jawa Timur 60293* • `hello@arunaliving.id`
