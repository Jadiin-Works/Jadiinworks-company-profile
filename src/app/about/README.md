# About Page - Halaman Tentang Kami

## Overview
Halaman About Us yang telah diperbarui dengan konten lengkap dan gaya storytelling yang personal untuk membangun hubungan emosional dan kepercayaan dengan menampilkan wajah di balik "Jadiin".

## Konten yang Telah Ditambahkan

### 1. Cerita Singkat "Jadiin" 🚀
- **Judul:** "Mengapa Kami Memulai Startup Ini?"
- **Konten:** Storytelling personal tentang perjalanan tim dari ide hingga realitas, dengan narasi yang engaging dan relatable
- **Highlight:** "Yang Membuat Kami Berbeda" - fokus pada pengalaman nyata bersama klien
- **Nilai-nilai:** Prinsip yang menuntun setiap langkah dengan cerita di baliknya

### 2. Visi & Misi 🎯
- **Visi:** Menjadi platform terdepan di Indonesia yang memberdayakan individu, UMKM, dan startup untuk memiliki kehadiran digital profesional dan berdampak, melalui solusi pembuatan website yang inovatif, solutif, mudah, dan terjangkau.
- **Misi:** 5 poin misi lengkap sesuai brand guidelines:
  1. Memberikan Layanan Pembuatan Website yang Cepat dan Efisien
  2. Menciptakan Desain yang Responsif dan Menarik
  3. Menyediakan Dukungan dan Edukasi yang Responsif
  4. Mengembangkan Teknologi Berbasis Kebutuhan Pengguna
  5. Meningkatkan Efisiensi Bisnis Klien Melalui Integrasi Teknologi

### 3. Perkenalkan Tim 👥
- **Arbi Laksmana Putra Rosydin**
  - Peran: Project Manager & Lead
  - Bio: Mengelola proyek, berinteraksi dengan klien, merencanakan alur kerja, dan memimpin pengembangan teknis inti. Spesialis dalam memberdayakan UMKM Indonesia melalui solusi digital yang efektif.
  - Social Media: Instagram @arbilaksmana, Linktree
  
- **Zaki Affandi**
  - Peran: UI/UX Designer & Frontend Developer
  - Bio: Mendesain antarmuka pengguna (UI) dan pengalaman pengguna (UX), serta menerjemahkan desain menjadi kode frontend. Spesialis dalam menciptakan pengalaman digital yang intuitif, modern, dan user-friendly.
  - Social Media: Instagram @zkafnd
  
- **Muhammad Rakha Nasjaya**
  - Peran: Backend Developer & Infrastructure
  - Bio: Membangun fungsionalitas di sisi server, mengelola database, dan memastikan infrastruktur website berjalan dengan baik. Ahli dalam mengembangkan sistem backend yang robust, scalable, dan handal.
  - Social Media: Instagram @mm.rakha

### 4. Team Section 👥
- Card design dengan CometCard wrapper
- Hover effects dan animasi
- Social media links (Instagram & Linktree) untuk setiap anggota tim
- **Update:** Team Story section dengan highlights telah dihapus

## Fitur Desain

### Story Brief Section
- Layout grid 2 kolom (konten + nilai-nilai)
- Highlight box dengan ikon dan konten
- Responsive design untuk mobile
- **Update:** Badge/tombol rounded di atas section telah dihapus untuk tampilan yang lebih clean

### Team Section
- Card design dengan CometCard wrapper
- Hover effects dan animasi
- Social media links (Instagram & Linktree) untuk setiap anggota tim
- Styling khusus untuk social media dengan hover effects
- **Update:** Team Story section dengan highlights telah dihapus

### Styling
- Gradient backgrounds (Purple theme only)
- Glass morphism effects
- Hover animations
- Responsive design
- Dark/light mode support
- Professional icon system using @phosphor-icons/react

## File yang Diperbarui

1. **`page.jsx`** - Konten utama halaman About
2. **`about.css`** - Styling untuk semua section baru

## Catatan untuk Developer

- **Foto Profil:** Saat ini menggunakan placeholder images. Ganti dengan foto asli tim di folder `/public/assets/`
- **Konten:** Semua konten sudah sesuai dengan brand guidelines dan permintaan
- **Gaya Penulisan:** Menggunakan storytelling personal yang engaging dan relatable
- **Social Media:** Instagram dan Linktree links sudah terintegrasi untuk setiap anggota tim
- **Responsive:** Semua section sudah responsive untuk mobile dan desktop
- **Theme:** Mendukung dark mode dan light mode
- **Visi & Misi:** Sudah diupdate sesuai dengan brand guidelines yang lengkap
- **UI Update:** Badge/tombol rounded di atas hero dan section telah dihapus untuk tampilan yang lebih clean
- **Section Update:** Team Story section dan CTA section telah dihapus sesuai permintaan
- **Icon Update:** Semua emoji telah diganti dengan icon profesional dari @phosphor-icons/react
- **Color Update:** Skema warna telah diubah menjadi hanya ungu tua, ungu muda, putih, dan hitam (tidak ada warna hijau)
- **Visibility Fix:** Section "Mengapa Kami Memulai Startup Ini?" telah diperbaiki agar terlihat jelas di mode light dan dark
- **Green Shadow Removal:** Semua shadow dan gradient hijau telah dihapus dari section tim, seluruh halaman About, dan CometCard component
- **Consistent Hero Styling:** Semua section header sekarang memiliki style yang konsisten dengan hero section, termasuk background gradients, floating elements, dan particle effects
- **Enhanced Font Styling & Animations:** Font styling telah ditingkatkan dengan font family Inter, typography scale, dan animasi fade-in yang smooth untuk semua elemen utama

## Struktur Komponen

```
AboutPage
├── Hero Section
├── Story Brief Section (NEW)
├── Vision Mission Section
└── Team Section (ENHANCED)
```

## Dependencies

- `TeamMemberCard` component
- `CometCard` component
- `AboutThemeProvider`
- Custom CSS dengan variabel tema
