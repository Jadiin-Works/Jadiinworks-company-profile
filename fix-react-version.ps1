# Fix React Version Mismatch Script
Write-Host "🔧 Fixing React Version Mismatch..." -ForegroundColor Yellow

# Stop any running processes
Write-Host "⏹️  Stopping any running processes..." -ForegroundColor Blue
Get-Process -Name "node" -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue

# Clean everything
Write-Host "🧹 Cleaning project..." -ForegroundColor Blue
if (Test-Path "node_modules") {
    Remove-Item -Recurse -Force "node_modules"
    Write-Host "✅ Removed node_modules" -ForegroundColor Green
}
if (Test-Path "package-lock.json") {
    Remove-Item -Force "package-lock.json"
    Write-Host "✅ Removed package-lock.json" -ForegroundColor Green
}
if (Test-Path ".next") {
    Remove-Item -Recurse -Force ".next"
    Write-Host "✅ Removed .next" -ForegroundColor Green
}

# Clear npm cache
Write-Host "🗑️  Clearing npm cache..." -ForegroundColor Blue
npm cache clean --force

# Install dependencies with correct versions
Write-Host "📦 Installing dependencies with correct React versions..." -ForegroundColor Blue
npm install

# Verify versions
Write-Host "🔍 Verifying installed versions..." -ForegroundColor Blue
$packageJson = Get-Content "package.json" | ConvertFrom-Json
Write-Host "React: $($packageJson.dependencies.react)" -ForegroundColor Green
Write-Host "React-DOM: $($packageJson.dependencies.'react-dom')" -ForegroundColor Green
Write-Host "Next.js: $($packageJson.dependencies.next)" -ForegroundColor Green

Write-Host "✅ React version mismatch fixed!" -ForegroundColor Green
Write-Host "🚀 You can now run 'npm run dev' without errors" -ForegroundColor Cyan
