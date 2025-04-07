const canvas = document.getElementById('hexhue-circle');
const ctx = canvas.getContext('2d');

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = 100;

ctx.beginPath();
ctx.moveTo(centerX, centerY);
ctx.arc(centerX, centerY, radius, 0, Math.PI);
ctx.closePath();
ctx.fillStyle = '#a855f7';
ctx.fill();

const angles = [
  { percent: 0.5, color: '#cccccc' },
  { percent: 0.3, color: '#aaaaaa' },
  { percent: 0.2, color: '#888888' },
];

let startAngle = Math.PI;

angles.forEach(segment => {
  const endAngle = startAngle + (Math.PI * segment.percent);
  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.arc(centerX, centerY, radius, startAngle, endAngle);
  ctx.closePath();
  ctx.fillStyle = segment.color;
  ctx.fill();
  startAngle = endAngle;
});
