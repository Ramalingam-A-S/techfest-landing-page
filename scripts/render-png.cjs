const sharp = require('sharp');
const fs = require('fs');

async function render() {
  console.log('Rendering 2400x1600 PNG from vayrath-concept-board.svg using sharp...');
  try {
    const info = await sharp('vayrath-concept-board.svg', { density: 72 })
      .resize(2400, 1600, { fit: 'fill' })
      .png({ quality: 95, compressionLevel: 8 })
      .toFile('vayrath-concept-board-2400x1600.png');
    
    console.log('Successfully generated vayrath-concept-board-2400x1600.png!');
    console.log('Dimensions:', info.width, 'x', info.height, 'Size:', (info.size / 1024 / 1024).toFixed(2), 'MB');
  } catch (err) {
    console.error('Sharp render error:', err);
  }
}

render();
