const player = document.querySelector('.player');
const video = document.querySelector('video');
const toggleButton = document.querySelector('.toggle');
const progressContainer = document.querySelector('.progress');
const progress = document.querySelector('.progress__filled');
const playerCurrent = document.querySelector('.player__current');
const playerDuration = document.querySelector('.player__duration');
const volume = document.querySelector('input[type=range][name=volume]');
const playbackRate = document.querySelector('input[type=range][name=playbackRate]')
const playerSkipper = document.querySelectorAll('button[data-skip]');
const unmute = document.querySelector('.unmute');
const fullscreen = document.querySelector('.fullscreen');
const arrowSkipTime = 5;
let [isSliding, oldValue] = [false];

const toggle = () => (video.paused) ? video.play() : video.pause();

const hover = (bool) => bool ? player.classList.add('hover') : player.classList.remove('hover');

const updateTime = e => {
  video.currentTime = (e.offsetX * video.duration) / progressContainer.clientWidth;
  updateCurrentTime();
};

const skipTime = (time) => {
  video.currentTime += parseInt(time);
  updateCurrentTime();
};

const updateCurrentTime = () => {
  playerCurrent.innerText = `${parseInt(video.currentTime / 60).toString().padStart(2, '0')}:${parseInt(video.currentTime % 60).toString().padStart(2, '0')}`;

  playerDuration.innerText = `${parseInt(video.duration / 60).toString().padStart(2, '0')}:${parseInt(video.duration % 60).toString().padStart(2, '0')}`;
};

const makeFullscreen = () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
    fullscreen.firstChild.innerText = 'fullscreen';
  }
  else {
    player.requestFullscreen();
    fullscreen.firstChild.innerText = 'fullscreen_exit';
  }
};

player.addEventListener('mousemove', () => {
  clearTimeout(player.timerId);
  hover(true);
  player.timerId = setTimeout(() => hover(false), 2000);
});

player.addEventListener('mouseenter', () => hover(true));

player.addEventListener('mouseleave', () => hover(false));

video.onloadedmetadata = () => {
  volume.value = video.volume;
  playbackRate.value = video.playbackRate;
};

video.addEventListener('click', () => toggle());

video.addEventListener('play', () => toggleButton.firstChild.innerText = 'pause');

video.addEventListener('pause', () => toggleButton.firstChild.innerText = 'play_arrow');

video.addEventListener('dblclick', () => makeFullscreen());

window.addEventListener('keydown', (e) => {
  switch (e.key) {
    case ' ':
      toggle();
      break;
    case 'ArrowLeft':
      skipTime(-arrowSkipTime);
      break;
    case 'ArrowRight':
      skipTime(arrowSkipTime);
      break;
    default:
      break;
  }
});

video.addEventListener('timeupdate', () => {
  progress.style.flexBasis = `${(video.currentTime / video.duration) * 100}%`;
  updateCurrentTime();
})

toggleButton.addEventListener('click', () => toggle());

unmute.addEventListener('click', () => {
  video.muted = !video.muted;
  unmute.firstChild.innerText = video.muted ? 'volume_off' : 'volume_up';
  if (video.muted) {
    oldValue = volume.value;
    volume.value = '0';
  } else {
    volume.value = oldValue;
  }
});

volume.addEventListener('change', () => {
  if (volume.value === '0') {
    video.muted = true;
    unmute.firstChild.innerText = 'volume_off';
    return;
  }
  oldValue = volume.value;
  video.volume = volume.value;
  if (video.muted) {
    video.muted = false;
    unmute.firstChild.innerText = 'volume_up';
  }
});

playbackRate.addEventListener('change', () => video.playbackRate = playbackRate.value);

playerSkipper.forEach(skipper => skipper.addEventListener('click', () => skipTime(skipper.dataset.skip)));

progressContainer.addEventListener('mousedown', e => { isSliding = true; updateTime(e) });
progressContainer.addEventListener('mouseup', () => isSliding = false);
progressContainer.addEventListener('mousemove', (e) => isSliding && updateTime(e));
progressContainer.addEventListener('mouseleave', () => isSliding = false);

fullscreen.addEventListener('click', () => makeFullscreen());
