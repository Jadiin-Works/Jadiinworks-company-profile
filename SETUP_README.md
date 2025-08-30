# Smart Setup Guide - Jadiinworks Company Profile

## 🚀 Quick Start

### Option 1: Automatic Setup (Recommended)
```bash
# Run the smart setup (detects and installs missing dependencies)
smart-setup.bat

# Start development server
npm run dev
```

### Option 2: Check Dependencies First
```bash
# Check dependencies without installing
check-deps.bat

# If issues found, run setup
smart-setup.bat
```

## 📋 Available Commands

### Setup Commands
- **`smart-setup.bat`** - Standard setup (installs missing dependencies)
- **`smart-setup.bat -Clean`** - Clean reinstall (removes everything and reinstalls)
- **`smart-setup.bat -Force`** - Force reinstall (reinstalls without cleaning)
- **`check-deps.bat`** - Check dependencies without installing

### NPM Scripts
- **`npm run check-deps`** - PowerShell dependency check
- **`npm run check-deps-bat`** - Batch dependency check
- **`npm run smart-setup`** - PowerShell smart setup
- **`npm run smart-setup-clean`** - Clean PowerShell setup
- **`npm run smart-setup-force`** - Force PowerShell setup

### Development Commands
- **`npm run dev`** - Start dev server (runs setup first)
- **`npm run dev-fast`** - Start dev server (skip setup)
- **`npm run build`** - Build for production
- **`npm run start`** - Start production server
- **`npm run lint`** - Run ESLint

## 🔧 What the Smart Setup Does

### 1. System Requirements Check
- ✅ Node.js version (recommended: 18.17.0+)
- ✅ npm availability
- ✅ PowerShell availability

### 2. Project Configuration Check
- ✅ `next.config.mjs`
- ✅ `tailwind.config.js`
- ✅ `eslint.config.mjs`
- ✅ `postcss.config.mjs`
- ✅ `tsconfig.json`

### 3. Dependency Verification
- ✅ **Core Dependencies**: Next.js 15.5.1, React 18.3.1, React DOM
- ✅ **UI Libraries**: Tailwind CSS 4.1.12, Framer Motion 12.23.12
- ✅ **Animation**: Lottie React 2.4.1
- ✅ **Components**: Embla Carousel 8.6.0, Lucide React 0.542.0
- ✅ **Icons**: Phosphor Icons 2.1.10
- ✅ **Development**: ESLint 9.0.0, TypeScript types

### 4. Smart Installation
- 🧠 Only installs missing dependencies
- 🧠 Skips installation if everything is up-to-date
- 🧠 Uses `--legacy-peer-deps` for compatibility
- 🧠 Falls back to `--force` if needed

## 🛠️ Troubleshooting

### Common Issues

#### 1. PowerShell Execution Policy Error
```bash
# Run as Administrator and execute:
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

#### 2. Node.js Version Too Old
- Download Node.js 18.17.0+ from https://nodejs.org/
- Restart terminal after installation

#### 3. Permission Denied
- Run terminal as Administrator
- Check if antivirus is blocking npm

#### 4. Dependencies Installation Failed
```bash
# Try clean reinstall
smart-setup.bat -Clean

# Or force reinstall
smart-setup.bat -Force
```

### Manual Fixes

#### Clear npm Cache
```bash
npm cache clean --force
```

#### Remove and Reinstall
```bash
# Remove everything
rm -rf node_modules package-lock.json .next

# Reinstall
npm install
```

## 📁 Project Structure

```
Jadiinworks-company-profile/
├── smart-setup.bat          # Main setup script (Windows)
├── smart-setup.ps1          # PowerShell setup logic
├── check-deps.bat           # Dependency checker (Windows)
├── check-deps.ps1           # PowerShell dependency checker
├── package.json             # Dependencies and scripts
├── next.config.mjs          # Next.js configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── eslint.config.mjs        # ESLint configuration
├── postcss.config.mjs       # PostCSS configuration
├── tsconfig.json            # TypeScript configuration
└── src/                     # Source code
```

## 🔍 Dependency Details

### Production Dependencies
- **Next.js 15.5.1** - React framework
- **React 18.3.1** - UI library
- **Tailwind CSS 4.1.12** - Utility-first CSS framework
- **Framer Motion 12.23.12** - Animation library
- **Lottie React 2.4.1** - Lottie animations
- **Embla Carousel 8.6.0** - Touch-friendly carousel
- **Lucide React 0.542.0** - Icon library
- **Phosphor Icons 2.1.10** - Icon library
- **clsx 2.1.1** - Conditional className utility
- **tailwind-merge 3.3.1** - Tailwind class merging

### Development Dependencies
- **ESLint 9.0.0** - Code linting
- **TypeScript types** - Type definitions
- **Tailwind PostCSS** - CSS processing

## 📝 Setup Logs

The setup creates a `.setup-info` file with:
- Last setup timestamp
- Node.js and npm versions
- Dependencies status
- Configuration status
- Project details

## 🎯 Best Practices

1. **Always run `check-deps.bat` first** to see what's needed
2. **Use `smart-setup.bat -Clean`** if you encounter strange issues
3. **Keep Node.js updated** to latest LTS version
4. **Run setup after pulling new changes** from git
5. **Check `.setup-info`** for setup history

## 🆘 Need Help?

If you encounter issues:

1. Run `check-deps.bat` to identify problems
2. Check the error messages in the terminal
3. Try `smart-setup.bat -Clean` for a fresh start
4. Ensure you have Node.js 18.17.0+ installed
5. Run terminal as Administrator if permission issues occur

---

**Happy Coding! 🚀**
