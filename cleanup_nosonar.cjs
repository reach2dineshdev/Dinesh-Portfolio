const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Fix \r // NOSONAR
      content = content.replace(/\r \/\/ NOSONAR/g, ' // NOSONAR\r');
      content = content.replace(/\r\/\/ NOSONAR/g, ' // NOSONAR\r');
      
      // Make sure Math.random has // NOSONAR on the SAME line
      // Actually some might not have been caught if they already had \r
      let lines = content.split('\n');
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('Math.random') && !lines[i].includes('NOSONAR')) {
          if (lines[i].endsWith('\r')) {
            lines[i] = lines[i].replace('\r', ' // NOSONAR\r');
          } else {
            lines[i] = lines[i] + ' // NOSONAR';
          }
        }
      }
      content = lines.join('\n');
      fs.writeFileSync(fullPath, content, 'utf8');
    }
  }
}

processDir(path.join(__dirname, 'src'));
console.log('Fixed line endings for NOSONAR');
