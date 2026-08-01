const fs = require('fs');

function processFile(path, importStatement) {
  let content = fs.readFileSync(path, 'utf8');
  if (content.includes('<img ')) {
    content = content.replace(/<img /g, '<LazyImage ');
    const lastImportIndex = content.lastIndexOf('import ');
    const endOfLastImport = content.indexOf('\n', lastImportIndex);
    content = content.slice(0, endOfLastImport + 1) + importStatement + '\n' + content.slice(endOfLastImport + 1);
    fs.writeFileSync(path, content, 'utf8');
    console.log(`Processed ${path}`);
  }
}

processFile('src/pages/Home.tsx', 'import LazyImage from "../components/LazyImage";');
processFile('src/components/Project.tsx', 'import LazyImage from "./LazyImage";');
