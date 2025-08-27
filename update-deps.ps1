Write-Host "🔄 Updating dependencies..." -ForegroundColor Yellow
Write-Host ""

try {
    # Remove existing node_modules and lock files
    Write-Host "🗑️  Removing existing node_modules and lock files..." -ForegroundColor Cyan
    if (Test-Path "node_modules") {
        Remove-Item -Recurse -Force "node_modules"
    }
    if (Test-Path "package-lock.json") {
        Remove-Item "package-lock.json"
    }
    if (Test-Path "bun.lock") {
        Remove-Item "bun.lock"
    }

    # Install dependencies fresh
    Write-Host "`n📦 Installing fresh dependencies..." -ForegroundColor Cyan
    npm install

    # Check for outdated packages
    Write-Host "`n🔍 Checking for outdated packages..." -ForegroundColor Cyan
    npm outdated

    Write-Host "`n✅ Dependencies updated successfully!" -ForegroundColor Green
    Write-Host "🚀 Run 'npm run dev' to start development server" -ForegroundColor Green
} catch {
    Write-Host "❌ Error updating dependencies: $($_.Exception.Message)" -ForegroundColor Red
}


