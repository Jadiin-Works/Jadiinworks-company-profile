# 🎨 Tailwind CSS Dark Mode Guide

## 🔄 **Perubahan dari CSS Murni ke Tailwind CSS**

### **Sebelum (CSS Murni):**
```css
/* dark-mode.css */
html.dark, body.dark {
  background-color: #1A1A1A !important;
  color: #ffffff !important;
}
```

### **Sesudah (Tailwind CSS):**
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

## 🛠️ **File yang Diubah**

### **1. ThemeProvider.jsx**
**Sebelum:**
```javascript
// Update document background color immediately
root.style.backgroundColor = effective === "dark" ? "#1A1A1A" : "#ffffff";
body.style.backgroundColor = effective === "dark" ? "#1A1A1A" : "#ffffff";
```

**Sesudah:**
```javascript
// Add Tailwind background classes instead of inline styles
if (effective === "dark") {
  root.classList.add("bg-black");
  body.classList.add("bg-black");
} else {
  root.classList.add("bg-white");
  body.classList.add("bg-white");
}
```

### **2. Layout.js**
**Sebelum:**
```javascript
import "./dark-mode.css";
import "./light-mode.css";
```

**Sesudah:**
```javascript
import "./tailwind-theme.css";
```

## 🎯 **Cara Menggunakan Tailwind CSS untuk Dark Mode**

### **1. Menggunakan `dark:` Prefix**

```jsx
// Komponen dengan Tailwind dark mode
function MyComponent() {
  return (
    <div className="
      bg-white dark:bg-gray-900
      text-gray-900 dark:text-white
      border-gray-200 dark:border-gray-700
      hover:bg-gray-50 dark:hover:bg-gray-800
    ">
      Content
    </div>
  );
}
```

### **2. Conditional Classes dengan useIsDark Hook**

```jsx
import { useIsDark } from "../components/useIsDark";

function MyComponent() {
  const { isDark, mounted } = useIsDark();

  return (
    <div className={`
      p-4 rounded-lg transition-colors duration-300
      ${isDark 
        ? 'bg-gray-800 text-white border-gray-600' 
        : 'bg-white text-gray-900 border-gray-200'
      }
    `}>
      Content
    </div>
  );
}
```

### **3. Custom Tailwind Utilities**

```css
/* tailwind-theme.css */
@layer utilities {
  .theme-bg {
    @apply bg-white dark:bg-black;
  }
  
  .theme-text {
    @apply text-gray-900 dark:text-white;
  }
  
  .theme-border {
    @apply border-gray-200 dark:border-gray-700;
  }
}
```

**Penggunaan:**
```jsx
<div className="theme-bg theme-text theme-border p-4 rounded">
  Content
</div>
```

## 📋 **Contoh Komponen dengan Tailwind**

### **Card Component:**
```jsx
export default function TailwindCard() {
  return (
    <div className="
      p-6 rounded-lg border-2 transition-all duration-300 hover:scale-105 shadow-lg
      bg-white dark:bg-gray-800 
      border-gray-200 dark:border-gray-600 
      text-gray-900 dark:text-white
      shadow-gray-200/25 dark:shadow-gray-800/25
    ">
      <h3 className="text-lg font-semibold">Title</h3>
      <p className="text-gray-600 dark:text-gray-300">Description</p>
    </div>
  );
}
```

### **Button Component:**
```jsx
export default function ThemeButton() {
  return (
    <button className="
      px-4 py-2 rounded-lg transition-colors duration-300
      bg-blue-500 dark:bg-blue-600
      text-white dark:text-white
      hover:bg-blue-600 dark:hover:bg-blue-700
      focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
    ">
      Click me
    </button>
  );
}
```

### **Form Input:**
```jsx
export default function ThemeInput() {
  return (
    <input 
      type="text"
      className="
        w-full px-3 py-2 rounded-lg border transition-colors duration-300
        bg-white dark:bg-gray-800
        text-gray-900 dark:text-white
        border-gray-300 dark:border-gray-600
        placeholder-gray-500 dark:placeholder-gray-400
        focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
        focus:border-blue-500 dark:focus:border-blue-400
      "
      placeholder="Enter text..."
    />
  );
}
```

## 🎨 **Color Palette untuk Dark Mode**

### **Background Colors:**
```css
/* Light Mode */
bg-white
bg-gray-50
bg-gray-100

/* Dark Mode */
dark:bg-black
dark:bg-gray-900
dark:bg-gray-800
```

### **Text Colors:**
```css
/* Light Mode */
text-gray-900
text-gray-700
text-gray-600

/* Dark Mode */
dark:text-white
dark:text-gray-200
dark:text-gray-300
```

### **Border Colors:**
```css
/* Light Mode */
border-gray-200
border-gray-300
border-gray-400

/* Dark Mode */
dark:border-gray-700
dark:border-gray-600
dark:border-gray-500
```

## ⚡ **Keuntungan Tailwind CSS untuk Dark Mode**

### **1. Consistency**
- Semua styling menggunakan sistem yang sama
- Tidak ada konflik antara CSS murni dan Tailwind

### **2. Maintainability**
- Mudah diubah dan dikelola
- Tidak perlu menulis CSS custom

### **3. Performance**
- Tailwind hanya menggenerate CSS yang digunakan
- Bundle size lebih kecil

### **4. Developer Experience**
- Autocomplete yang lebih baik
- IntelliSense support
- Konsistensi dengan design system

## 🔧 **Best Practices**

### **1. Gunakan Variants yang Konsisten**
```jsx
// ✅ Good
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">

// ❌ Bad - Inconsistent
<div className="bg-white dark:bg-black text-black dark:text-gray-100">
```

### **2. Gunakan Transition untuk Smooth Changes**
```jsx
// ✅ Good
<div className="transition-colors duration-300 bg-white dark:bg-gray-900">

// ❌ Bad - No transition
<div className="bg-white dark:bg-gray-900">
```

### **3. Gunakan Opacity untuk Subtle Effects**
```jsx
// ✅ Good
<div className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">

// ❌ Bad - Too harsh
<div className="bg-white dark:bg-black text-black dark:text-white">
```

## 🧪 **Testing**

Untuk test Tailwind dark mode:

1. Buka halaman portfolio
2. Lihat komponen "Tailwind Dark Mode Classes"
3. Klik toggle theme di navbar
4. Semua komponen dengan `dark:` prefix akan berubah

## 📁 **File yang Diubah**

- ✅ `src/app/components/ThemeProvider.jsx` - Remove inline styles
- ✅ `src/app/tailwind-theme.css` - New Tailwind-based theme file
- ✅ `src/app/layout.js` - Use new CSS file
- ✅ `src/app/components/ui/TailwindThemeCard.jsx` - Example component
- ✅ `src/app/portfolio/page.jsx` - Add Tailwind examples

Sekarang proyek Anda menggunakan Tailwind CSS sepenuhnya untuk dark mode! 🎉
