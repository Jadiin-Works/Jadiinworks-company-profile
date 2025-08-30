# Smart PowerShell script to install dependencies only if needed
param(
    [switch]$Force = $false,
    [switch]$Clean = $false,
    [switch]$CheckOnly = $false
)

Write-Host "=== Smart Setup for Jadiinworks Company Profile ===" -ForegroundColor Cyan
Write-Host "Project: Next.js 15.5.1 + React 18.3.1 + Tailwind CSS 4.1.12" -ForegroundColor Yellow

# Function to check if node_modules exists and has content
function Test-NodeModules {
    if (Test-Path "node_modules") {
        $modules = Get-ChildItem "node_modules" -Directory | Measure-Object
        return $modules.Count -gt 0
    }
    return $false
}

# Function to check if package-lock.json exists and is recent
function Test-PackageLock {
    if (Test-Path "package-lock.json") {
        $lockFile = Get-Item "package-lock.json"
        $age = (Get-Date) - $lockFile.LastWriteTime
        return $age.TotalHours -lt 48  # Consider recent if less than 48 hours old
    }
    return $false
}

# Function to check if all critical dependencies are installed
function Test-Dependencies {
    if (-not (Test-NodeModules)) {
        return $false
    }
    
    # Check if key dependencies exist (based on current package.json)
    $keyDeps = @(
        "next",
        "react", 
        "react-dom",
        "tailwindcss",
        "@tailwindcss/postcss",
        "framer-motion",
        "lottie-react",
        "embla-carousel-react",
        "lucide-react",
        "@phosphor-icons/react",
        "@fortawesome/fontawesome-free",
        "@tabler/icons-react",
        "clsx",
        "motion",
        "tailwind-merge"
    )
    
    foreach ($dep in $keyDeps) {
        if (-not (Test-Path "node_modules\$dep")) {
            Write-Host "Missing dependency: $dep" -ForegroundColor Red
            return $false
        }
    }
    
    # Check dev dependencies
    $keyDevDeps = @(
        "eslint",
        "eslint-config-next",
        "@types/react",
        "@types/node",
        "@eslint/eslintrc",
        "typescript"
    )
    
    foreach ($dep in $keyDevDeps) {
        if (-not (Test-Path "node_modules\$dep")) {
            Write-Host "Missing dev dependency: $dep" -ForegroundColor Red
            return $false
        }
    }
    
    return $true
}

# Function to check project configuration files
function Test-ProjectConfig {
    $configFiles = @(
        "next.config.mjs",
        "tailwind.config.js", 
        "eslint.config.mjs",
        "postcss.config.mjs",
        "tsconfig.json"
    )
    
    $missingConfigs = @()
    foreach ($config in $configFiles) {
        if (-not (Test-Path $config)) {
            $missingConfigs += $config
        }
    }
    
    if ($missingConfigs.Count -gt 0) {
        Write-Host "Missing configuration files:" -ForegroundColor Yellow
        foreach ($config in $missingConfigs) {
            Write-Host "  - $config" -ForegroundColor Red
        }
        return $false
    }
    
    return $true
}

# Function to check Node.js and npm versions
function Test-SystemRequirements {
    try {
        $nodeVersion = node --version
        $npmVersion = npm --version
        
        Write-Host "System Requirements:" -ForegroundColor Cyan
        Write-Host "  Node.js: $nodeVersion" -ForegroundColor White
        Write-Host "  npm: $npmVersion" -ForegroundColor White
        
        # Check if Node.js version is compatible (>=18.17.0 for Next.js 15)
        $nodeMajor = [int]($nodeVersion -replace 'v(\d+)\.\d+\.\d+', '$1')
        if ($nodeMajor -lt 18) {
            Write-Host "Warning: Node.js version $nodeVersion may not be fully compatible with Next.js 15" -ForegroundColor Yellow
            Write-Host "Recommended: Node.js 18.17.0 or higher" -ForegroundColor Yellow
        }
        
        return $true
    }
    catch {
        Write-Host "Error checking system requirements: $_" -ForegroundColor Red
        return $false
    }
}

# Handle clean flag
if ($Clean) {
    Write-Host "Cleaning project..." -ForegroundColor Yellow
    if (Test-Path "node_modules") {
        Remove-Item -Recurse -Force "node_modules"
        Write-Host "Removed node_modules" -ForegroundColor Green
    }
    if (Test-Path "package-lock.json") {
        Remove-Item -Force "package-lock.json"
        Write-Host "Removed package-lock.json" -ForegroundColor Green
    }
    if (Test-Path ".next") {
        Remove-Item -Recurse -Force ".next"
        Write-Host "Removed .next build folder" -ForegroundColor Green
    }
    if (Test-Path "out") {
        Remove-Item -Recurse -Force "out"
        Write-Host "Removed out build folder" -ForegroundColor Green
    }
    Write-Host "Clean completed!" -ForegroundColor Green
    $Force = $true
}

# Check system requirements first
if (-not (Test-SystemRequirements)) {
    Write-Host "System requirements check failed!" -ForegroundColor Red
    exit 1
}

# Check project configuration
if (-not (Test-ProjectConfig)) {
    Write-Host "Project configuration check failed!" -ForegroundColor Red
    Write-Host "Please ensure all required configuration files are present." -ForegroundColor Yellow
    exit 1
}

# If only checking, exit here
if ($CheckOnly) {
    Write-Host "`n=== Dependency Check Results ===" -ForegroundColor Cyan
    Write-Host "Node Modules: $(if (Test-NodeModules) { "Present" } else { "Missing" })" -ForegroundColor $(if (Test-NodeModules) { "Green" } else { "Red" })
    Write-Host "Package Lock: $(if (Test-PackageLock) { "Recent" } else { "Outdated/Missing" })" -ForegroundColor $(if (Test-PackageLock) { "Green" } else { "Yellow" })
    Write-Host "Dependencies: $(if (Test-Dependencies) { "Complete" } else { "Incomplete" })" -ForegroundColor $(if (Test-Dependencies) { "Green" } else { "Red" })
    Write-Host "Configuration: $(if (Test-ProjectConfig) { "Valid" } else { "Invalid" })" -ForegroundColor $(if (Test-ProjectConfig) { "Green" } else { "Red" })
    exit 0
}

# Check if we need to install dependencies
$needsInstall = $false

if ($Force) {
    Write-Host "Force flag detected - will reinstall all dependencies" -ForegroundColor Yellow
    $needsInstall = $true
} elseif (-not (Test-Dependencies)) {
    Write-Host "Dependencies not found or incomplete - will install" -ForegroundColor Yellow
    $needsInstall = $true
} elseif (-not (Test-PackageLock)) {
    Write-Host "Package-lock.json is outdated - will update dependencies" -ForegroundColor Yellow
    $needsInstall = $true
} else {
    Write-Host "Dependencies are already installed and up to date!" -ForegroundColor Green
    Write-Host "Skipping installation to save time." -ForegroundColor Cyan
}

if ($needsInstall) {
    Write-Host "Installing dependencies..." -ForegroundColor Green
    
    # Clear cache only if forcing or if there are issues
    if ($Force) {
        Write-Host "Clearing npm cache..." -ForegroundColor Yellow
        npm cache clean --force
    }
    
    # Install dependencies with specific flags for better compatibility
    Write-Host "Running npm install..." -ForegroundColor Yellow
    npm install --legacy-peer-deps
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Dependencies installed successfully!" -ForegroundColor Green
    } else {
        Write-Host "Error installing dependencies!" -ForegroundColor Red
        Write-Host "Trying alternative installation method..." -ForegroundColor Yellow
        
        # Try alternative approach
        npm install --force
        
        if ($LASTEXITCODE -eq 0) {
            Write-Host "Dependencies installed with force flag!" -ForegroundColor Green
        } else {
            Write-Host "Failed to install dependencies!" -ForegroundColor Red
            exit 1
        }
    }
}

# Verify installation
if (Test-Dependencies) {
    Write-Host "Dependency verification successful!" -ForegroundColor Green
} else {
    Write-Host "Warning: Some dependencies may not be properly installed" -ForegroundColor Yellow
}

# Create a timestamp file to track last setup
$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
$setupInfo = @"
# Setup Information for Jadiinworks Company Profile
Last Setup: $timestamp
Node Version: $(node --version)
NPM Version: $(npm --version)
Dependencies Status: $(if (Test-Dependencies) { "Complete" } else { "Incomplete" })
Configuration Status: $(if (Test-ProjectConfig) { "Valid" } else { "Invalid" })

Project Details:
- Next.js: 15.5.1
- React: 18.3.1
- Tailwind CSS: 4.1.12
- ESLint: 9.0.0
- TypeScript: 5.9.2

Key Libraries:
- Framer Motion: 12.23.12
- Lottie React: 2.4.1
- Embla Carousel: 8.6.0
- Lucide React: 0.542.0
- Phosphor Icons: 2.1.10
- Tabler Icons: 3.34.1
- FontAwesome Free: 7.0.0
- CLSX: 2.1.1
- Tailwind Merge: 3.3.1
- Motion: 12.23.12

Dev Dependencies:
- ESLint: 9.0.0
- ESLint Config Next: 15.5.1
- TypeScript: 5.9.2
- @types/react: 18.3.12
- @types/node: 24.3.0
- @eslint/eslintrc: 3.0.0
"@

$setupInfo | Out-File -FilePath ".setup-info" -Encoding UTF8

Write-Host "`n=== Setup Summary ===" -ForegroundColor Cyan
Write-Host "Project: Jadiinworks Company Profile" -ForegroundColor White
Write-Host "Status: $(if (Test-Dependencies) { "Ready" } else { "Needs Setup" })" -ForegroundColor $(if (Test-Dependencies) { "Green" } else { "Red" })
Write-Host "Setup Info: Saved to .setup-info" -ForegroundColor Cyan

Write-Host "`nAvailable Commands:" -ForegroundColor Yellow
Write-Host "  npm run dev          : Start development server" -ForegroundColor White
Write-Host "  npm run dev-fast     : Start dev server (skip setup)" -ForegroundColor White
Write-Host "  npm run build        : Build for production" -ForegroundColor White
Write-Host "  npm run start        : Start production server" -ForegroundColor White
Write-Host "  npm run lint         : Run ESLint" -ForegroundColor White

Write-Host "`nSetup Options:" -ForegroundColor Yellow
Write-Host "  ./smart-setup.ps1 -CheckOnly  : Check dependencies without installing" -ForegroundColor White
Write-Host "  ./smart-setup.ps1 -Clean      : Clean and reinstall everything" -ForegroundColor White
Write-Host "  ./smart-setup.ps1 -Force      : Force reinstall without cleaning" -ForegroundColor White

Write-Host "`nSetup completed!" -ForegroundColor Green
