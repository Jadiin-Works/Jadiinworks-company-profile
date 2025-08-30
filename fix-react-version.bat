@echo off
echo 🔧 Fixing React Version Mismatch...

REM Stop any running processes
echo ⏹️  Stopping any running processes...
taskkill /f /im node.exe >nul 2>&1

REM Clean everything
echo 🧹 Cleaning project...
if exist "node_modules" (
    rmdir /s /q "node_modules"
    echo ✅ Removed node_modules
)
if exist "package-lock.json" (
    del "package-lock.json"
    echo ✅ Removed package-lock.json
)
if exist ".next" (
    rmdir /s /q ".next"
    echo ✅ Removed .next
)

REM Clear npm cache
echo 🗑️  Clearing npm cache...
npm cache clean --force

REM Install dependencies with correct versions
echo 📦 Installing dependencies with correct React versions...
npm install

echo ✅ React version mismatch fixed!
echo 🚀 You can now run 'npm run dev' without errors
pause
