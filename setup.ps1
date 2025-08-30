# PowerShell script to clear cache and install dependencies
Write-Host "Clearing npm cache..." -ForegroundColor Yellow
npm cache clean --force

Write-Host "Removing node_modules and package-lock.json..." -ForegroundColor Yellow
if (Test-Path "node_modules") {
    Remove-Item -Recurse -Force "node_modules"
}
if (Test-Path "package-lock.json") {
    Remove-Item -Force "package-lock.json"
}
if (Test-Path ".next") {
    Remove-Item -Recurse -Force ".next"
}

Write-Host "Installing dependencies..." -ForegroundColor Green
npm install

Write-Host "Setup completed successfully!" -ForegroundColor Green
Write-Host "You can now run 'npm run dev' to start the development server." -ForegroundColor Cyan
