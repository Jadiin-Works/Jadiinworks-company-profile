@echo off
echo ========================================
echo Dependency Check for Jadiinworks Company Profile
echo ========================================
echo.
echo This will check your dependencies without installing anything.
echo.

REM Check if PowerShell is available
powershell -Command "Write-Host 'PowerShell is available'" >nul 2>&1
if %errorlevel% neq 0 (
    echo Error: PowerShell is not available or not properly configured.
    pause
    exit /b 1
)

REM Run the dependency check
echo Running dependency check...
powershell -ExecutionPolicy Bypass -File "smart-setup.ps1" -CheckOnly

if %errorlevel% neq 0 (
    echo.
    echo Check completed with warnings or errors.
    echo Review the output above for details.
) else (
    echo.
    echo Dependency check completed successfully!
)

echo.
echo To install missing dependencies, run:
echo   smart-setup.bat
echo.
echo To clean and reinstall everything, run:
echo   smart-setup.bat -Clean
echo.
pause
