# Manual Setup Guide

## Langkah-langkah Manual Setup

### 1. Clear Cache dan Hapus Dependencies Lama
```bash
# Clear npm cache
npm cache clean --force

# Hapus node_modules dan package-lock.json
rm -rf node_modules package-lock.json .next

# Untuk Windows PowerShell:
Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json
Remove-Item -Recurse -Force .next
```

### 2. Install Dependencies Baru
```bash
# Install semua dependencies
npm install

# Atau jika ada masalah, coba dengan:
npm install --legacy-peer-deps
```

### 3. Jalankan Development Server
```bash
# Start development server
npm run dev
```

## Troubleshooting

### Jika ada error "Module not found":
```bash
# Reinstall dependencies
npm install

# Atau coba dengan:
npm install --force
```

### Jika ada masalah dengan React hooks:
- Semua framer-motion hooks sudah dihapus
- Komponen sudah dikonversi ke regular React components
- Tidak ada lagi dependency pada framer-motion

### Jika ada masalah dengan cache:
```bash
# Clear semua cache
npm cache clean --force
npm cache verify

# Hapus dan reinstall
rm -rf node_modules package-lock.json
npm install
```

## File yang Sudah Diperbaiki:
- ✅ `evervault-card.tsx` - Hapus framer-motion hooks
- ✅ `ClientLayout.jsx` - Hapus framer-motion hooks  
- ✅ `page.js` - Hapus framer-motion hooks
- ✅ `package.json` - Hapus framer-motion dependency

## Dependencies yang Diperlukan:
- React 19.1.0
- Next.js 15.5.0
- Phosphor Icons 2.1.10
- Tailwind CSS 4.1.12
- Dan lainnya (lihat package.json)
