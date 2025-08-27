# 🚀 Panduan Update Dependencies

## Masalah yang Sering Terjadi
- Kode tidak ter-update saat `npm run dev`
- Dependencies yang outdated
- Cache yang tidak ter-clear
- Turbopack yang bermasalah

## Solusi Lengkap

### 1. Clear Cache dan Reinstall (Recommended)
```bash
# Clear npm cache
npm cache clean --force

# Remove existing dependencies
rm -rf node_modules
rm package-lock.json
rm bun.lock

# Reinstall fresh
npm install
```

### 2. Update Dependencies ke Versi Terbaru
```bash
# Check outdated packages
npm outdated

# Update packages
npm update

# Or update specific packages
npm install package-name@latest
```

### 3. Gunakan Script Otomatis
```bash
# Untuk Windows PowerShell
.\update-deps.ps1

# Untuk Linux/Mac
node update-deps.js
```

### 4. Restart Development Server
```bash
# Stop server (Ctrl+C)
# Clear terminal
clear

# Start fresh
npm run dev
```

## Troubleshooting

### Jika masih bermasalah:
1. **Restart VS Code/Editor** - Kadang editor cache yang bermasalah
2. **Clear Browser Cache** - Jika testing di browser
3. **Check File Permissions** - Pastikan bisa write ke folder
4. **Update Node.js** - Pastikan menggunakan versi terbaru

### Versi yang Direkomendasikan:
- Node.js: 18.x atau 20.x
- npm: 9.x atau 10.x
- Next.js: 15.x (sudah diupdate)

## Setelah Update
1. Jalankan `npm run dev`
2. Test fitur yang bermasalah
3. Pastikan semua dependencies terinstall dengan benar
4. Check console untuk error

## Catatan Penting
- Script ini akan menghapus `node_modules` dan lock files
- Pastikan backup kode penting sebelum menjalankan
- Jika ada custom configurations, simpan dulu


