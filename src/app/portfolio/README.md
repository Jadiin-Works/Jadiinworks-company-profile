# Portfolio Page

Halaman portfolio untuk menampilkan proyek-proyek yang telah dibuat oleh Jadiinworks.

## Fitur

- **Filter Kategori**: Filter proyek berdasarkan kategori (Web Development, Mobile Apps, UI/UX Design, Branding)
- **Grid Layout**: Tampilan grid responsif untuk proyek-proyek
- **Modal Detail**: Modal untuk menampilkan detail lengkap proyek
- **Responsive Design**: Desain yang responsif untuk berbagai ukuran layar
- **Dark Mode Support**: Mendukung tema gelap dan terang
- **Smooth Animations**: Animasi yang halus dan menarik

## Struktur File

```
src/app/portfolio/
├── page.jsx          # Halaman utama portfolio
├── layout.jsx        # Layout untuk halaman portfolio
├── portfolio.css     # Styling khusus portfolio
└── README.md         # Dokumentasi ini
```

## Komponen

### PortfolioPage
Komponen utama yang menampilkan halaman portfolio dengan fitur:
- Header dengan navigasi kembali ke home
- Filter kategori proyek
- Grid proyek dengan hover effects
- Modal detail proyek
- Toggle tema gelap/terang

### Data Proyek
Setiap proyek memiliki informasi:
- ID unik
- Judul proyek
- Kategori
- Deskripsi
- Teknologi yang digunakan
- Nama klien
- Tahun pembuatan
- Link proyek

## Penggunaan

1. **Navigasi**: Klik menu "Portfolios" di navbar untuk membuka halaman portfolio
2. **Filter**: Gunakan tombol filter untuk memilih kategori proyek
3. **Detail**: Klik pada proyek untuk melihat detail lengkap
4. **Kembali**: Gunakan tombol "Back to Home" untuk kembali ke halaman utama

## Styling

Halaman menggunakan Tailwind CSS dengan custom CSS untuk styling khusus portfolio. Mendukung:
- Gradient backgrounds
- Hover effects
- Smooth transitions
- Responsive grid
- Modal styling
- Dark mode

## Integrasi

Halaman portfolio terintegrasi dengan:
- Navbar utama (link ke `/portfolio`)
- Theme provider untuk toggle tema
- Routing Next.js
- Komponen yang dapat digunakan kembali

## Customization

Untuk menambahkan proyek baru:
1. Tambahkan data proyek ke array `projects`
2. Pastikan kategori sesuai dengan yang ada di `categories`
3. Tambahkan gambar ke folder `public/portfolio/` jika diperlukan

## Responsive Breakpoints

- **Mobile**: 1 kolom
- **Tablet**: 2 kolom  
- **Desktop**: 3 kolom

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
