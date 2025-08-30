# Dependency Check Script for Jadiinworks Company Profile
# This script checks dependencies without installing anything

Write-Host "=== Dependency Check for Jadiinworks Company Profile ===" -ForegroundColor Cyan
Write-Host "Project: Next.js 15.5.1 + React 18.3.1 + Tailwind CSS 4.1.12" -ForegroundColor Yellow
Write-Host ""

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
        return $age.TotalHours -lt 48
    }
    return $false
}

# Function to check if all critical dependencies are installed
function Test-Dependencies {
    if (-not (Test-NodeModules)) {
        return $false
    }
    
    # Check if key dependencies exist (based on package.json)
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
        "@phosphor-icons/react"
    )
    
    $missingDeps = @()
    foreach ($dep in $keyDeps) {
        if (-not (Test-Path "node_modules\$dep")) {
            $missingDeps += $dep
        }
    }
    
    if ($missingDeps.Count -gt 0) {
        Write-Host "Missing dependencies:" -ForegroundColor Red
        foreach ($dep in $missingDeps) {
            Write-Host "  - $dep" -ForegroundColor Red
        }
        return $false
    }
    
    # Check dev dependencies
    $keyDevDeps = @(
        "eslint",
        "eslint-config-next",
        "@types/react",
        "@types/node"
    )
    
    $missingDevDeps = @()
    foreach ($dep in $keyDevDeps) {
        if (-not (Test-Path "node_modules\$dep")) {
            $missingDevDeps += $dep
        }
    }
    
    if ($missingDevDeps.Count -gt 0) {
        Write-Host "Missing dev dependencies:" -ForegroundColor Yellow
        foreach ($dep in $missingDevDeps) {
            Write-Host "  - $dep" -ForegroundColor Yellow
        }
        return $false
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
        Write-Host "Missing configuration files:" -ForegroundColor Red
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

# Run all checks
Write-Host "Running dependency checks..." -ForegroundColor Green
Write-Host ""

# Check system requirements
if (-not (Test-SystemRequirements)) {
    Write-Host "❌ System requirements check failed!" -ForegroundColor Red
    exit 1
} else {
    Write-Host "✅ System requirements check passed" -ForegroundColor Green
}

# Check project configuration
if (-not (Test-ProjectConfig)) {
    Write-Host "❌ Project configuration check failed!" -ForegroundColor Red
} else {
    Write-Host "✅ Project configuration check passed" -ForegroundColor Green
}

# Check dependencies
if (-not (Test-Dependencies)) {
    Write-Host "❌ Dependencies check failed!" -ForegroundColor Red
} else {
    Write-Host "✅ Dependencies check passed" -ForegroundColor Green
}

# Check package lock
if (-not (Test-PackageLock)) {
    Write-Host "⚠️  Package lock is outdated or missing" -ForegroundColor Yellow
} else {
    Write-Host "✅ Package lock is recent" -ForegroundColor Green
}

Write-Host ""
Write-Host "=== Check Summary ===" -ForegroundColor Cyan
Write-Host "Node Modules: $(if (Test-NodeModules) { "✅ Present" } else { "❌ Missing" })" -ForegroundColor $(if (Test-NodeModules) { "Green" } else { "Red" })
Write-Host "Package Lock: $(if (Test-PackageLock) { "✅ Recent" } else { "⚠️  Outdated/Missing" })" -ForegroundColor $(if (Test-PackageLock) { "Green" } else { "Yellow" })
Write-Host "Dependencies: $(if (Test-Dependencies) { "✅ Complete" } else { "❌ Incomplete" })" -ForegroundColor $(if (Test-Dependencies) { "Green" } else { "Red" })
Write-Host "Configuration: $(if (Test-ProjectConfig) { "✅ Valid" } else { "❌ Invalid" })" -ForegroundColor $(if (Test-ProjectConfig) { "Green" } else { "Red" })

Write-Host ""
if (Test-Dependencies -and Test-ProjectConfig) {
    Write-Host "🎉 All checks passed! Your project is ready to run." -ForegroundColor Green
    Write-Host "Run 'npm run dev' to start the development server." -ForegroundColor White
} else {
    Write-Host "⚠️  Some checks failed. Run 'smart-setup.bat' to fix issues." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Available commands:" -ForegroundColor Yellow
Write-Host "  smart-setup.bat        : Install/update dependencies" -ForegroundColor White
Write-Host "  smart-setup.bat -Clean : Clean and reinstall everything" -ForegroundColor White
Write-Host "  check-deps.bat         : Run this check again" -ForegroundColor White
