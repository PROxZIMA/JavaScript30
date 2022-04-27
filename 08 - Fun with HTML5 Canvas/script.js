const canvas = document.getElementById('draw');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext('2d');

ctx.lineCap = 'round';
ctx.lineJoin = 'round';
ctx.globalCompositeOperation = 'darken';

let [isDrawing, lastX, lastY, hue, lineWidth, incr] = [false, 0, 0, 0, 10, 0.5];

const drawCanvas = (offsetX, offsetY) => {
  if (!isDrawing) return;

  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  hue = (hue + 1) % 360;

  ctx.lineWidth = `${lineWidth}`;
  lineWidth = lineWidth + incr;
  if (lineWidth <= 10 || lineWidth >= 60) incr = -incr;

  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(offsetX, offsetY);
  ctx.stroke();
  [lastX, lastY] = [offsetX, offsetY]; // comment this, incr = 0, lineWidth = 1 and have fun
};

const setLastXY = (x, y) => {
  isDrawing = true;
  [lastX, lastY] = [x, y]; // comment this, incr = 0, lineWidth = 1 and have fun
};

canvas.addEventListener('mousemove', e => drawCanvas(e.offsetX, e.offsetY));

canvas.addEventListener('touchmove', e => {
  e.preventDefault();
  drawCanvas(e.touches[0].pageX - e.touches[0].target.offsetLeft, e.touches[0].pageY - e.touches[0].target.offsetTop);
});

canvas.addEventListener('mousedown', (e) => setLastXY(e.offsetX, e.offsetY));

canvas.addEventListener('touchstart', (e) => setLastXY(e.touches[0].pageX - e.touches[0].target.offsetLeft, e.touches[0].pageY - e.touches[0].target.offsetTop));

canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
canvas.addEventListener('touchend', () => isDrawing = false);
