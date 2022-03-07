const canvas = document.getElementById('draw');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext('2d');

ctx.lineCap = 'round';
ctx.lineJoin = 'round';
ctx.globalCompositeOperation = 'darken';

let [isDrawing, lastX, lastY, hue, lineWidth, incr] = [false, 0, 0, 0, 10, 0.5];

canvas.addEventListener('mousemove', e => {
  if (!isDrawing) return;

  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  hue = (hue + 1) % 360;

  ctx.lineWidth = `${lineWidth}`;
  lineWidth = lineWidth + incr;
  if (lineWidth <= 10 || lineWidth >= 60) incr = -incr;

  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY]; // comment this, incr = 0, lineWidth = 1 and have fun

});

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY] // comment this, incr = 0, lineWidth = 1 and have fun
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
