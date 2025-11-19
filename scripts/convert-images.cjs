/**
 * scripts/convert-images.cjs
 * Auto-discovers images in common locations and converts them to AVIF + WebP
 * Usage: npm run conv-img
 */

const fs = require('fs');
const path = require('path');

let sharp;
try {
  sharp = require('sharp');
} catch (err) {
  console.error('\nERROR: sharp is not installed or failed to load.');
  console.error('Details:', err.message);
  console.error('\nRun `npm install` and if that fails try `npm install --verbose sharp`.');
  process.exit(1);
}

const repoRoot = path.resolve(__dirname, '..');
const candidates = [
  path.join(repoRoot, 'public', 'images'),
  path.join(repoRoot, 'public', 'assets'),
  path.join(repoRoot, 'public'),
  path.join(repoRoot, 'src', 'assets'),
  path.join(repoRoot, 'src', 'images'),
  path.join(repoRoot, 'assets'),
];

function findImageFiles(dir) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  const stack = [dir];
  while (stack.length) {
    const cur = stack.pop();
    const entries = fs.readdirSync(cur, { withFileTypes: true });
    for (const e of entries) {
      const full = path.join(cur, e.name);
      if (e.isDirectory()) stack.push(full);
      else if (/\.(jpe?g|png|tiff)$/i.test(e.name)) results.push(full);
    }
  }
  return results;
}

// collect files from all candidate dirs
let files = [];
for (const c of candidates) {
  const found = findImageFiles(c);
  if (found.length) {
    console.log('Found', found.length, 'images in', c);
    files = files.concat(found);
  }
}

if (!files.length) {
  console.error('No JPG/PNG/TIFF files found in any of the searched locations:');
  candidates.forEach(c => console.error(' -', c));
  process.exit(1);
}

// output base
const outBase = path.join(repoRoot, 'public', 'images_opt');
if (!fs.existsSync(outBase)) fs.mkdirSync(outBase, { recursive: true });

(async () => {
  console.log('Converting', files.length, 'files ->', outBase);
  for (const inPath of files) {
    const rel = path.relative(repoRoot, inPath);
    // preserve directory structure in outBase
    const relDir = path.dirname(rel); // e.g., public/images/gallery
    const cleanedRelDir = relDir.replace(/^public[\/\\]?/, '').replace(/^src[\/\\]?/, '');
    const targetDir = path.join(outBase, cleanedRelDir);
    if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

    const base = path.parse(inPath).name;
    const avifOut = path.join(targetDir, base + '.avif');
    const webpOut = path.join(targetDir, base + '.webp');

    try {
      await sharp(inPath).avif({ quality: 60 }).toFile(avifOut);
      await sharp(inPath).webp({ quality: 70 }).toFile(webpOut);
      console.log('OK:', rel, '→', path.relative(repoRoot, avifOut), path.relative(repoRoot, webpOut));
    } catch (err) {
      console.error('FAILED:', rel, err.message);
    }
  }
  console.log('All done.');
})();
