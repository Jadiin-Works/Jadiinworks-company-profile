# 🔧 Dark Mode Troubleshooting Guide

## 🚨 **Masalah: `dark:` Prefix Tidak Berfungsi**

### **Gejala:**
- Class `dark:bg-black` tidak mengubah background menjadi hitam
- Class `dark:text-white` tidak mengubah text menjadi putih
- Toggle theme tidak mempengaruhi styling

## 🔍 **Penyebab & Solusi**

### **1. Tailwind Config Issue**

**Pastikan `darkMode: 'class'` ada di `tailwind.config.js`:**
```javascript
module.exports = {
  darkMode: 'class', // ← Ini harus ada!
  content: [...],
  // ...
}
```

**Jika tidak ada, tambahkan:**
```javascript
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // ...
}
```

### **2. ThemeProvider Tidak Menambahkan Class `dark`**

**Pastikan ThemeProvider menambahkan class `dark` ke HTML:**
```javascript
// Di ThemeProvider.jsx
useEffect(() => {
  if (typeof document !== 'undefined') {
    const root = document.documentElement;
    const body = document.body;
    
    // Remove old classes
    root.classList.remove("dark", "light");
    body.classList.remove("dark", "light");
    
    // Add new theme class
    root.classList.add(effective); // "dark" atau "light"
    body.classList.add(effective);
  }
}, [theme]);
```

**Jangan tambahkan class background secara manual:**
```javascript
// ❌ JANGAN LAKUKAN INI
if (effective === "dark") {
  root.classList.add("bg-black"); // ← Ini konflik dengan dark:bg-black
  body.classList.add("bg-black");
}

// ✅ LAKUKAN INI
root.classList.add(effective); // Hanya tambah class "dark" atau "light"
body.classList.add(effective);
```

### **3. CSS Konflik**

**Pastikan tidak ada CSS yang override Tailwind:**
```css
/* ❌ JANGAN LAKUKAN INI */
html.dark {
  background-color: #1A1A1A !important; /* ← Ini override Tailwind */
  color: #ffffff !important;
}

/* ✅ LAKUKAN INI */
@layer base {
  html.dark {
    @apply bg-black text-white;
  }
}
```

### **4. Build Cache Issue**

**Clear build cache:**
```bash
# Hapus folder .next
rm -rf .next

# Hapus node_modules (opsional)
rm -rf node_modules
npm install

# Restart development server
npm run dev
```

## 🧪 **Testing Dark Mode**

### **1. Test Sederhana**
```jsx
function TestComponent() {
  return (
    <div className="p-4 bg-white dark:bg-black text-black dark:text-white">
      Test Dark Mode
    </div>
  );
}
```

### **2. Test dengan Console**
```javascript
// Buka console browser
console.log(document.documentElement.classList.contains('dark')); // true/false
console.log(document.body.classList.contains('dark')); // true/false
```

### **3. Test dengan DevTools**
1. Buka DevTools (F12)
2. Pilih Elements tab
3. Pilih `<html>` element
4. Lihat apakah ada class `dark`
5. Toggle theme dan lihat apakah class berubah

## ✅ **Solusi Lengkap**

### **Step 1: Periksa Tailwind Config**
```javascript
// tailwind.config.js
module.exports = {
  darkMode: 'class', // ← Pastikan ini ada
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}', // ← Pastikan path benar
  ],
  // ...
}
```

### **Step 2: Periksa ThemeProvider**
```javascript
// ThemeProvider.jsx
useEffect(() => {
  if (typeof document !== 'undefined') {
    const root = document.documentElement;
    const body = document.body;
    
    // Hanya tambah class "dark" atau "light"
    root.classList.remove("dark", "light");
    body.classList.remove("dark", "light");
    
    root.classList.add(effective);
    body.classList.add(effective);
    
    // JANGAN tambah bg-black atau bg-white secara manual
  }
}, [theme]);
```

### **Step 3: Gunakan CSS Tailwind**
```css
/* tailwind-theme.css */
@layer base {
  html.dark {
    @apply bg-black text-white;
  }
  
  body.dark {
    @apply bg-black text-white;
  }
}
```

### **Step 4: Test Komponen**
```jsx
function TestComponent() {
  return (
    <div className="
      p-6 rounded-lg border-2
      bg-white dark:bg-gray-900
      text-gray-900 dark:text-white
      border-gray-200 dark:border-gray-700
    ">
      <h3 className="text-lg font-semibold">Title</h3>
      <p className="text-gray-600 dark:text-gray-300">Description</p>
    </div>
  );
}
```

## 🎯 **Verifikasi**

Setelah menerapkan solusi:

1. **Buka halaman portfolio**
2. **Lihat komponen "Simple Dark Mode Test"**
3. **Klik toggle theme di navbar**
4. **Semua card harus berubah warna**
5. **Console tidak boleh ada error**

## 📁 **File yang Harus Diperiksa**

- ✅ `tailwind.config.js` - `darkMode: 'class'`
- ✅ `src/app/components/ThemeProvider.jsx` - Hanya tambah class "dark"/"light"
- ✅ `src/app/tailwind-theme.css` - Gunakan `@apply` bukan CSS murni
- ✅ `src/app/components/ui/SimpleDarkModeTest.jsx` - Test component

Jika masih tidak berfungsi, cek console browser untuk error dan pastikan semua file sudah benar! 🔍
