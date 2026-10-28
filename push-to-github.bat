@echo off
cd /d "%~dp0"
echo ====================================================================
echo  Shaz Cakes - Pushing Latest Version to GitHub
echo  Repository: https://github.com/AhmadhZahidh/shazcakes.git
echo ====================================================================
echo.
git status
echo.
echo Pushing to GitHub...
git push -u origin main
echo.
echo ====================================================================
if %ERRORLEVEL% EQU 0 (
    echo  [SUCCESS] All files and new animations pushed to GitHub!
    echo  Live preview on GitHub Pages will update in 1-2 minutes.
) else (
    echo  [NOTE] If a browser login window opened, please click "Authorize"
    echo  to allow GitHub to complete your upload.
)
echo ====================================================================
echo.
pause
