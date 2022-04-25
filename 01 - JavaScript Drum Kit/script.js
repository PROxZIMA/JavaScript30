/* global TimelineMax, Expo, Elastic */

const getAudio = (key) => document.getElementById(`audio-${key}`);

[...document.getElementsByClassName('key')].forEach(key => {
  key.addEventListener('transitionend', e => {
    if (e.propertyName !== 'transform') return;
    key.classList.remove('playing');
  });
});


// Right tom drum varibles
const rightTomDrumAll = document.getElementById('Tom-Right-All');
const rightTomDrum = document.getElementById('Tom-Right-Drum');

// Right tom drum timeline
var rightTomtl = new TimelineMax({
  paused: true
});
rightTomtl
  .to(rightTomDrum, 0.1, { scaleX: 1.04, transformOrigin: "50% 50%", ease: Expo.easeOut })
  .to(rightTomDrum, 0.1, { scaleY: 0.95, transformOrigin: "50% 50%", ease: Expo.easeOut }, '0')
  .to(rightTomDrumAll, 0.1, { rotation: 2.5, transformOrigin: "0 50%", ease: Elastic.easeOut }, '0')
  .to(rightTomDrum, 0.4, { scale: 1, transformOrigin: "50% 50%", ease: Elastic.easeOut })
  .to(rightTomDrumAll, 0.6, { rotation: 0, transformOrigin: "0 50%", ease: Elastic.easeOut }, '-=0.4');

// Right tom play
const rightTom = () => {
  rightTomtl.restart();
  rightTomtl.play();
  var smallTomAudioEl = getAudio(74);
  smallTomAudioEl.currentTime = 0;
  smallTomAudioEl.play();
}


// Left tom drum varibles
const leftTomDrumAll = document.getElementById('Tom-Left-All');
const leftTomDrum = document.getElementById('Tom-Left-Drum');

// Left tom drum timeline
var leftTomtl = new TimelineMax({
  paused: true
});
leftTomtl
  .to(leftTomDrum, 0.1, { scaleX: 1.04, transformOrigin: "50% 50%", ease: Expo.easeOut })
  .to(leftTomDrum, 0.1, { scaleY: 0.95, transformOrigin: "50% 50%", ease: Expo.easeOut }, '0')
  .to(leftTomDrumAll, 0.1, { rotation: -2.5, transformOrigin: "100% 50%", ease: Elastic.easeOut }, '0')
  .to(leftTomDrum, 0.4, { scale: 1, transformOrigin: "50% 50%", ease: Elastic.easeOut })
  .to(leftTomDrumAll, 0.6, { rotation: 0, transformOrigin: "100% 50%", ease: Elastic.easeOut }, '-=0.4');

// Left tom play
const leftTom = () => {
  leftTomtl.restart();
  leftTomtl.play();
  var bigTomAudioEl = getAudio(68);
  bigTomAudioEl.currentTime = 0;
  bigTomAudioEl.play();
}


// Floor tom drum varibles
const floorTomDrumAll = document.getElementById('Floor-Tom');

// Floor tom drum timeline
var floorTomtl = new TimelineMax({
  paused: true
});
floorTomtl
  .to(floorTomDrumAll, 0.1, { scaleX: 1.02, transformOrigin: "50% 50%", ease: Expo.easeOut })
  .to(floorTomDrumAll, 0.1, { scaleY: 0.95, transformOrigin: "50% 100%", ease: Expo.easeOut }, '0')
  .to(floorTomDrumAll, 0.4, { scale: 1, transformOrigin: "50% 100%", ease: Elastic.easeOut });

// Floor tom play
const floorTom = () => {
  floorTomtl.restart();
  floorTomtl.play();
  var floorTomAudioEl = getAudio(83);
  floorTomAudioEl.currentTime = 0;
  floorTomAudioEl.play();
}


// Snare drum varibles
const snareDrum = document.getElementById('Snare-Drum');

// Snare drum timeline
var snaretl = new TimelineMax({
  paused: true
});
snaretl
  .to(snareDrum, 0.1, { scaleX: 1.04, transformOrigin: "50% 50%", ease: Expo.easeOut })
  .to(snareDrum, 0.1, { scaleY: 0.9, transformOrigin: "50% 100%", ease: Expo.easeOut }, '0')
  .to(snareDrum, 0.4, { scale: 1, transformOrigin: "50% 100%", ease: Elastic.easeOut });

// Snare play
const snare = () => {
  snaretl.restart();
  snaretl.play();
  var snareAudioEl = getAudio(75);
  snareAudioEl.currentTime = 0;
  snareAudioEl.play();
}


// Kick drum varibles
const kickDrumAll = document.getElementById('Kick');

// Kick drum timeline
var kicktl = new TimelineMax({
  paused: true
});
kicktl
  .to(kickDrumAll, 0.1, { scale: 1.02, transformOrigin: "50% 100%", ease: Expo.easeOut })
  .to(kickDrumAll, 0.4, { scale: 1, transformOrigin: "50% 100%", ease: Elastic.easeOut });

// Kick play
const kick = () => {
  kicktl.restart();
  kicktl.play();
  var kickAudioEl = getAudio(70);
  kickAudioEl.currentTime = 0;
  kickAudioEl.play();
}


// Hi-hat varibles
const hiHatTop = document.getElementById('Hi-Hat-Top');
const hiHatBottom = document.getElementById('Hi-Hat-Bottom');

// Hi-hat timeline
var hiHattl = new TimelineMax({
  paused: true
});
hiHattl
  .to([hiHatTop, hiHatBottom], 0.1, { rotation: -4, transformOrigin: "50% 50%" })
  .to([hiHatTop, hiHatBottom], 0.6, { rotation: 0, transformOrigin: "50% 50%", ease: Elastic.easeOut.config(1.5, 0.2) });

// Hi-hat play
const hiHat = () => {
  hiHattl.restart();
  hiHattl.play();
  var hiHatClosedAudioEl = getAudio(76);
  hiHatClosedAudioEl.currentTime = 0;
  hiHatClosedAudioEl.play();
}


// Crash varibles
const crashCymbol = document.getElementById('Crash-Cymbol');

// Crash timeline
var crashtl = new TimelineMax({
  paused: true
});
crashtl
  .to(crashCymbol, 0.1, { rotation: 8, transformOrigin: "50% 50%" })
  .to(crashCymbol, 1.5, { rotation: 0, transformOrigin: "50% 50%", ease: Elastic.easeOut.config(2.5, 0.3) });

// Crash play
const crash = () => {
  crashtl.restart();
  crashtl.play();
  var crashAudioEl = getAudio(65);
  crashAudioEl.currentTime = 0;
  crashAudioEl.play();
}


// Key timeline
const animateKey = (key) => {
  const keytl = new TimelineMax({
    paused: true
  });
  keytl
    .to(key, 0.1, { scale: 1.1, transformOrigin: "50% 50%", ease: Expo.easeOut })
    .to(key, 0.4, { scale: 1, transformOrigin: "50% 50%", ease: Elastic.easeOut });
  keytl.restart();
  keytl.play();
}

const handleKeyCode = (keyCode) => {
  const drumKey = document.getElementById(`Key-${keyCode}`);
  const key = document.getElementById(`key-${keyCode}`);
  if (!drumKey) return;

  switch (keyCode) {
    case 76:
      hiHat();
      break;
    case 75:
      snare();
      break;
    case 70:
      kick();
      break;
    case 83:
      floorTom();
      break;
    case 65:
      crash();
      break;
    case 68:
      leftTom();
      break;
    case 74:
      rightTom();
      break;
  }
  animateKey(drumKey);
  key.classList.add('playing');
}

document.addEventListener('keydown', e => handleKeyCode(e.keyCode));

const setKeyClick = (keyClass) => {
  [...document.getElementsByClassName(keyClass)].forEach(key =>
    key.addEventListener('click', e => handleKeyCode(parseInt(e.currentTarget.id.slice(4))))
  );
};

setKeyClick('key');
setKeyClick('key-wrap');
