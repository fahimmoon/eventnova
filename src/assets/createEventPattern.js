// You can use this script to generate a pattern
const canvas = document.createElement('canvas');
canvas.width = 100;
canvas.height = 100;
const ctx = canvas.getContext('2d');

// Draw pattern
ctx.strokeStyle = 'rgba(255,255,255,0.1)';
ctx.lineWidth = 1;

// Draw grid
for(let i = 0; i < 10; i++) {
  ctx.beginPath();
  ctx.moveTo(i * 10, 0);
  ctx.lineTo(i * 10, 100);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.moveTo(0, i * 10);
  ctx.lineTo(100, i * 10);
  ctx.stroke();
}

// Save as PNG
const dataUrl = canvas.toDataURL('image/png');
console.log(dataUrl);
