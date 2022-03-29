const speed = document.querySelector('.speed');
const speedBar = document.querySelector('.speed-bar');
const video = document.querySelector('.flex');
const [min, max] = [0.05, 4];
let isdown = false;

const setPlayBackRate = (e) => {
  const percent = (e.pageY - e.currentTarget.offsetTop) / e.currentTarget.offsetHeight;
  const playBackRate = percent * (max - min) + min;
  if (percent < min / 10 || percent > 1) return;
  speedBar.style.height = `${percent * 100}%`;
  speedBar.innerText = `${playBackRate.toFixed(1)}×`;
  video.playbackRate = playBackRate;
};

speed.addEventListener('mousedown', e => { isdown = true; setPlayBackRate(e) });

speed.addEventListener('mouseleave', () => isdown = false);

speed.addEventListener('mouseup', () => isdown = false);

speed.addEventListener('mousemove', e => isdown && setPlayBackRate(e));
