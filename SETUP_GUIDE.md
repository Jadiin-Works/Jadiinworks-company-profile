# Setup Guide - Jadiinworks Company Profile

## 🎯 Overview

This project uses a **Smart Setup System** that intelligently manages dependencies to save time and avoid unnecessary reinstalls.

## 🚀 Quick Setup Options

### 1. Smart Setup (Recommended)
```bash
./smart-setup.bat
```
**When to use**: First time setup or when you want to ensure dependencies are up to date
**What it does**: 
- Checks if dependencies are already installed
- Only installs missing or outdated packages
- Saves time by skipping unnecessary reinstalls

### 2. Force Clean Setup
```bash
./smart-setup.bat -Clean
```
**When to use**: 
- When you encounter dependency conflicts
- After major dependency updates
- When you want a completely fresh installation
**What it does**:
- Removes all existing dependencies
- Clears cache and build files
- Performs a clean reinstall

### 3. Force Reinstall
```bash
./smart-setup.bat -Force
```
**When to use**:
- When smart setup doesn't detect changes properly
- When you want to ensure latest versions
- When troubleshooting dependency issues
**What it does**:
- Forces reinstall without cleaning
- Updates all packages to latest compatible versions

## 📋 Setup Process Details

### Smart Detection Logic

The smart setup system checks:

1. **Node Modules Existence**: Verifies `node_modules` folder exists and contains packages
2. **Key Dependencies**: Checks for essential packages (next, react, react-dom, tailwindcss)
3. **Package Lock Age**: Considers `package-lock.json` recent if less than 24 hours old
4. **System Requirements**: Validates Node.js and npm availability

### Setup Information Tracking

After each setup, a `.setup-info` file is created with:
```
# Setup Information
Last Setup: 2024-01-15 14:30:25
Node Version: v18.17.0
NPM Version: 9.6.7
Dependencies Status: Installed
```

## 🛠️ Development Workflow

### Starting Development Server

```bash
# Start development (with smart setup check)
npm run dev

# Start development (fast - skip setup)
npm run dev-fast
```

### 🛑 Stopping Development Server

#### Method 1: Keyboard Shortcut (Recommended)
```bash
# Press in terminal where server is running:
Ctrl + C
```

#### Method 2: Force Stop (if Ctrl+C doesn't work)
```bash
# Find the process and kill it
# Windows (PowerShell):
Get-Process -Name "node" | Stop-Process -Force

# Windows (Command Prompt):
taskkill /f /im node.exe

# Alternative - kill by port (if running on port 3000):
netstat -ano | findstr :3000
taskkill /PID <PID_NUMBER> /F
```

#### Method 3: Close Terminal Window
- Simply close the terminal/command prompt window where the server is running
- This will automatically stop the development server

### 🔄 Restarting Development Server

```bash
# After stopping, restart with:
npm run dev

# Or for faster restart (skip setup check):
npm run dev-fast
```

### When Dependencies Change
```bash
# If package.json was modified
npm run smart-setup

# If you want to update to latest versions
npm run smart-setup-force

# If you encounter issues
npm run smart-setup-clean
```

## 🔧 Troubleshooting

### Common Issues

1. **Setup Fails**
   ```bash
   # Check system requirements
   node --version
   npm --version
   
   # Try clean setup
   ./smart-setup.bat -Clean
   ```

2. **Dependencies Not Detected**
   ```bash
   # Force reinstall
   ./smart-setup.bat -Force
   ```

3. **Permission Issues**
   ```bash
   # Run PowerShell as Administrator
   # Then run setup
   powershell -ExecutionPolicy Bypass -File smart-setup.ps1
   ```

4. **Server Won't Stop**
   ```bash
   # Force kill all Node.js processes
   taskkill /f /im node.exe
   
   # Or restart your computer if necessary
   ```

5. **Port Already in Use**
   ```bash
   # Check what's using port 3000
   netstat -ano | findstr :3000
   
   # Kill the process using that port
   taskkill /PID <PID_NUMBER> /F
   
   # Or use a different port
   npm run dev -- -p 3001
   ```

### Manual Override

If smart setup doesn't work, you can manually:

```bash
# Clean everything
npm run clean

# Install dependencies
npm install

# Start development
npm run dev-fast
```

## 📊 Performance Benefits

### Time Savings
- **First Run**: ~2-3 minutes (full install)
- **Subsequent Runs**: ~5-10 seconds (skip install)
- **Daily Development**: No setup time needed

### Storage Efficiency
- Avoids duplicate downloads
- Preserves cached packages
- Reduces disk usage

## 🔄 Maintenance

### Regular Maintenance
```bash
# Weekly: Check for updates
npm run update-deps

# Monthly: Clean reinstall
./smart-setup.bat -Clean
```

### Before Deployment
```bash
# Ensure clean build
npm run clean
npm run build
```

### Daily Workflow
```bash
# Morning: Start development
npm run dev

# During work: Make changes (server auto-reloads)

# Break time: Stop server
# Press Ctrl + C in terminal

# Resume work: Restart server
npm run dev-fast

# End of day: Stop server
# Press Ctrl + C in terminal
```

## 📝 Best Practices

1. **Use Smart Setup by Default**: Only use force options when necessary
2. **Check Setup Info**: Review `.setup-info` after setup issues
3. **Keep Dependencies Updated**: Run `npm run update-deps` regularly
4. **Use Fast Dev**: Use `npm run dev-fast` for daily development
5. **Clean Before Major Changes**: Use clean setup before major dependency updates
6. **Always Stop Server Properly**: Use Ctrl+C to stop server gracefully
7. **Check Port Usage**: If server won't start, check if port 3000 is already in use

## 🆘 Support

If you encounter issues:

1. Check the `.setup-info` file for system details
2. Try the troubleshooting steps above
3. Use clean setup as a last resort
4. Check the main README.md for additional information

---

**Note**: This smart setup system is designed to save time while ensuring your development environment is always properly configured.
