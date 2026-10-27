const sharp = require('sharp');
const fs = require('fs');

async function renderAll() {
  console.log('Rendering high-resolution hoodie PNGs with sharp...');

  try {
    // 1. Master presentation board (2400x1600)
    const boardInfo = await sharp('design/presentation-board.svg', { density: 72 })
      .resize(2400, 1600, { fit: 'fill' })
      .png({ quality: 95, compressionLevel: 7 })
      .toFile('design/presentation-board-2400x1600.png');
    console.log('Generated design/presentation-board-2400x1600.png:', boardInfo.width, 'x', boardInfo.height, (boardInfo.size / 1024 / 1024).toFixed(2), 'MB');

    // 2. Front hoodie mockup (1200x1400)
    const frontInfo = await sharp('design/front-hoodie.svg', { density: 72 })
      .resize(1200, 1400, { fit: 'fill' })
      .png({ quality: 95 })
      .toFile('design/front-hoodie.png');
    console.log('Generated design/front-hoodie.png:', frontInfo.width, 'x', frontInfo.height, (frontInfo.size / 1024).toFixed(1), 'KB');

    // 3. Back hoodie mockup (1200x1400)
    const backInfo = await sharp('design/back-hoodie.svg', { density: 72 })
      .resize(1200, 1400, { fit: 'fill' })
      .png({ quality: 95 })
      .toFile('design/back-hoodie.png');
    console.log('Generated design/back-hoodie.png:', backInfo.width, 'x', backInfo.height, (backInfo.size / 1024).toFixed(1), 'KB');

    console.log('All PNGs successfully rendered!');
  } catch (err) {
    console.error('Error rendering PNGs:', err);
  }
}

renderAll();
