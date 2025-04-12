const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const { optimize } = require('svgo');

const sizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 },
  { name: 'mstile-70x70.png', size: 70 },
  { name: 'mstile-150x150.png', size: 150 },
  { name: 'mstile-310x150.png', size: 310 },
  { name: 'mstile-310x310.png', size: 310 }
];

const inputFile = path.join(__dirname, '../public/favicon/logo.svg');
const outputDir = path.join(__dirname, '../public/favicon');

async function generateFavicons() {
  try {
    // Create output directory if it doesn't exist
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Read and optimize SVG
    const svgContent = fs.readFileSync(inputFile, 'utf8');
    const optimizedSvg = optimize(svgContent, {
      path: inputFile,
      multipass: true,
    }).data;

    // Write optimized SVG
    fs.writeFileSync(inputFile, optimizedSvg);

    // Generate each size
    for (const { name, size } of sizes) {
      await sharp(Buffer.from(optimizedSvg))
        .resize(size, size)
        .png()
        .toFile(path.join(outputDir, name));
      
      console.log(`Generated ${name}`);
    }

    // Generate favicon.ico (special case)
    await sharp(Buffer.from(optimizedSvg))
      .resize(32, 32)
      .toFile(path.join(outputDir, 'favicon.ico'));

    console.log('Generated favicon.ico');

    // Create safari-pinned-tab.svg (monochrome version)
    const monochromeSvg = optimizedSvg
      .replace(/stop-color="#3b82f6"/g, 'stop-color="#ffffff"')
      .replace(/stop-color="#60a5fa"/g, 'stop-color="#ffffff"');
    
    fs.writeFileSync(path.join(outputDir, 'safari-pinned-tab.svg'), monochromeSvg);
    console.log('Generated safari-pinned-tab.svg');

  } catch (error) {
    console.error('Error generating favicons:', error);
  }
}

generateFavicons(); 