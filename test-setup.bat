@echo off
echo ========================================
echo Testing Smart Setup System
echo ========================================
echo.

echo Testing dependency checker...
call check-deps.bat
if %errorlevel% neq 0 (
    echo Warning: Dependency check had issues
) else (
    echo Dependency check completed
)

echo.
echo Testing smart setup (check only mode)...
powershell -ExecutionPolicy Bypass -File "smart-setup.ps1" -CheckOnly
if %errorlevel% neq 0 (
    echo Warning: Smart setup check had issues
) else (
    echo Smart setup check completed
)

echo.
echo ========================================
echo Test Summary
echo ========================================
echo.
echo If you see any errors above, they may indicate:
echo - Missing configuration files
echo - Node.js/npm not properly installed
echo - Permission issues
echo.
echo To run full setup:
echo   smart-setup.bat
echo.
echo To clean and reinstall:
echo   smart-setup.bat -Clean
echo.
pause
