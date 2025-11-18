/**
 * Script to copy projects from root projects/ to public/projects/
 * This is needed for Vercel deployment
 */
const fs = require('fs');
const path = require('path');

const rootProjectsDir = path.join(__dirname, 'projects');
const publicProjectsDir = path.join(__dirname, 'public', 'projects');

// Create public/projects directory if it doesn't exist
if (!fs.existsSync(publicProjectsDir)) {
  fs.mkdirSync(publicProjectsDir, { recursive: true });
  console.log('✅ Created public/projects directory');
}

// Check if root projects directory exists
if (!fs.existsSync(rootProjectsDir)) {
  console.log('❌ projects/ directory not found');
  process.exit(1);
}

// Get all project folders
const projectFolders = fs.readdirSync(rootProjectsDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

if (projectFolders.length === 0) {
  console.log('⚠️ No projects found in projects/ directory');
  process.exit(0);
}

console.log(`📁 Found ${projectFolders.length} project(s) to copy:`);

// Copy each project
let copiedCount = 0;
for (const projectFolder of projectFolders) {
  const sourceDir = path.join(rootProjectsDir, projectFolder);
  const targetDir = path.join(publicProjectsDir, projectFolder);
  
  // Check if project has index.html
  const indexHtmlPath = path.join(sourceDir, 'index.html');
  if (!fs.existsSync(indexHtmlPath)) {
    console.log(`⚠️ Skipping ${projectFolder} (no index.html)`);
    continue;
  }
  
  // Create target directory
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  
  // Copy files
  const files = fs.readdirSync(sourceDir);
  for (const file of files) {
    const sourceFile = path.join(sourceDir, file);
    const targetFile = path.join(targetDir, file);
    
    if (fs.statSync(sourceFile).isFile()) {
      fs.copyFileSync(sourceFile, targetFile);
    }
  }
  
  console.log(`✅ Copied ${projectFolder}`);
  copiedCount++;
}

console.log(`\n✨ Done! Copied ${copiedCount} project(s) to public/projects/`);
console.log(`📝 Don't forget to commit and push these files to deploy on Vercel!`);

