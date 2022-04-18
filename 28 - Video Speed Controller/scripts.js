const speedContainer = document.querySelector('.speed');
const speed = document.querySelector('.speed-bar');
const video = document.querySelector('.flex');
const [min, max] = [0.05, 4];
let isdown = false;

const setPlayBackRate = (e) => {
  const percent = (e.pageY - e.currentTarget.offsetTop) / e.currentTarget.offsetHeight;
  const playBackRate = percent * (max - min) + min;
  if (percent < min / 10 || percent > 1) return;
  speed.style.height = `${percent * 100}%`;
  speed.innerText = `${playBackRate.toFixed(1)}×`;
  video.playbackRate = playBackRate;
};

speedContainer.addEventListener('mousedown', e => { isdown = true; setPlayBackRate(e) });

speedContainer.addEventListener('mouseleave', () => isdown = false);

speedContainer.addEventListener('mouseup', () => isdown = false);

speedContainer.addEventListener('mousemove', e => isdown && setPlayBackRate(e));
