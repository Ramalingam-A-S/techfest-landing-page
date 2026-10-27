const fs = require('fs');

function getJpegDimensions(buffer) {
  let i = 4;
  while (i < buffer.length) {
    while (buffer[i] !== 0xFF) i++;
    while (buffer[i] === 0xFF) i++;
    const marker = buffer[i];
    i++;
    if (marker === 0xC0 || marker === 0xC2) {
      i += 3;
      const height = buffer.readUInt16BE(i);
      const width = buffer.readUInt16BE(i + 2);
      return { width, height };
    } else {
      const length = buffer.readUInt16BE(i);
      i += length;
    }
  }
  return null;
}

['assets/vayrath-hero-environment.jpg', 'assets/vayrath-warriors.jpg', 'assets/vayrath-architecture.jpg'].forEach(file => {
  const buf = fs.readFileSync(file);
  console.log(file, '-->', getJpegDimensions(buf), 'Size:', buf.length, 'bytes');
});
