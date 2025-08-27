const { execSync } = require('child_process');
const fs = require('fs');

console.log('🔄 Updating dependencies...\n');

try {
  // Remove existing node_modules and lock files
  console.log('🗑️  Removing existing node_modules and lock files...');
  if (fs.existsSync('node_modules')) {
    execSync('rm -rf node_modules', { stdio: 'inherit' });
  }
  if (fs.existsSync('package-lock.json')) {
    execSync('rm package-lock.json', { stdio: 'inherit' });
  }
  if (fs.existsSync('bun.lock')) {
    execSync('rm bun.lock', { stdio: 'inherit' });
  }

  // Install dependencies fresh
  console.log('\n📦 Installing fresh dependencies...');
  execSync('npm install', { stdio: 'inherit' });

  // Check for outdated packages
  console.log('\n🔍 Checking for outdated packages...');
  execSync('npm outdated', { stdio: 'inherit' });

  console.log('\n✅ Dependencies updated successfully!');
  console.log('🚀 Run "npm run dev" to start development server');
} catch (error) {
  console.error('❌ Error updating dependencies:', error.message);
}
