@echo off
echo ========================================
echo Smart Setup for Jadiinworks Company Profile
echo ========================================
echo.

REM Check if PowerShell is available
powershell -Command "Write-Host 'PowerShell is available'" >nul 2>&1
if %errorlevel% neq 0 (
    echo Error: PowerShell is not available or not properly configured.
    echo Please ensure PowerShell is installed and accessible.
    pause
    exit /b 1
)

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Error: Node.js is not installed or not in PATH.
    echo Please install Node.js from https://nodejs.org/
    echo Recommended version: 18.17.0 or higher
    pause
    exit /b 1
)

REM Check if npm is available
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Error: npm is not available.
    echo Please ensure npm is properly installed with Node.js.
    pause
    exit /b 1
)

echo Checking system requirements...
echo Node.js version: 
node --version
echo npm version:
npm --version
echo.

REM Check command line arguments
set "SCRIPT_ARGS="
if "%1"=="-CheckOnly" set "SCRIPT_ARGS=-CheckOnly"
if "%1"=="-Clean" set "SCRIPT_ARGS=-Clean"
if "%1"=="-Force" set "SCRIPT_ARGS=-Force"

if "%1"=="" (
    echo No specific flags provided. Running standard setup...
    echo Available options:
    echo   -CheckOnly  : Check dependencies without installing
    echo   -Clean      : Clean and reinstall everything
    echo   -Force      : Force reinstall without cleaning
    echo.
) else (
    echo Running with flag: %1
)

REM Run the smart setup PowerShell script
echo Running smart setup...
powershell -ExecutionPolicy Bypass -File "smart-setup.ps1" %SCRIPT_ARGS%

if %errorlevel% neq 0 (
    echo.
    echo Setup failed with error code %errorlevel%
    echo Please check the error messages above.
    echo.
    echo Troubleshooting tips:
    echo - Try running with -Clean flag: smart-setup.bat -Clean
    echo - Check if all configuration files exist
    echo - Ensure you have sufficient disk space
    echo - Try running as administrator if permission issues occur
    pause
    exit /b %errorlevel%
)

echo.
echo ========================================
echo Setup completed successfully!
echo ========================================
echo.
echo Quick commands:
echo - npm run dev          : Start development server
echo - npm run dev-fast     : Start dev server (skip setup)
echo - npm run build        : Build for production
echo - npm run start        : Start production server
echo - npm run lint         : Run ESLint
echo.
echo To stop the development server:
echo - Press Ctrl + C in the terminal
echo - Or use: taskkill /f /im node.exe
echo.
echo For detailed guides, check:
echo - README.md            : Project overview
echo - SETUP_GUIDE.md       : Detailed setup guide
echo - .setup-info          : Last setup information
echo.
echo Setup options for next time:
echo - smart-setup.bat -CheckOnly  : Check dependencies only
echo - smart-setup.bat -Clean      : Clean reinstall
echo - smart-setup.bat -Force      : Force reinstall
echo.
pause
