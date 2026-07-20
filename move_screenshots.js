const fs = require('fs');
const path = require('path');

const srcDir = 'D:\\project@8\\screenshots';
const destDir = path.join(__dirname, 'public', 'projects');

// Mapping from user's folder names to the base image name expected by the portfolio
const folderMap = {
    'atom': 'atom',
    'cinema time': 'cinema',
    'repo runner': 'repo',
    'smart environment system': 'iot'
};

console.log('📸 Starting automated screenshot import from local folders...');

Object.keys(folderMap).forEach(folderName => {
    const baseName = folderMap[folderName];
    const fullSrcPath = path.join(srcDir, folderName);

    if (fs.existsSync(fullSrcPath)) {
        // Get all PNG files and sort them alphabetically
        const files = fs.readdirSync(fullSrcPath).filter(f => f.endsWith('.png')).sort();
        
        if (files.length > 0) {
            console.log(`\n📂 Processing [${folderName}] -> mapped to '${baseName}' (${files.length} images)`);
            
            files.forEach((file, index) => {
                const srcFile = path.join(fullSrcPath, file);
                
                // First image becomes the main screenshot, the rest become previews
                let destFileName = '';
                if (index === 0) {
                    destFileName = `${baseName}.png`;
                } else {
                    destFileName = `${baseName}-preview-${index}.png`;
                }
                
                const destFile = path.join(destDir, destFileName);
                
                // Copy the file
                fs.copyFileSync(srcFile, destFile);
                console.log(`  ✅ Copied: ${file} -> ${destFileName}`);
            });
        }
    } else {
        console.log(`\n⚠️ Warning: Folder ${folderName} not found at ${fullSrcPath}`);
    }
});

console.log('\n🎉 All screenshots successfully imported into your portfolio!');
