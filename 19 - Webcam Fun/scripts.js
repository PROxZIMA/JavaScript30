const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');

/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');
const takePhoto = document.getElementById('take-photo');
const toggleCamera = document.getElementById('toggle-camera');
let [re, redEf] = [false, document.getElementById('red-effect')];
let [rs, rgbSp] = [false, document.getElementById('red-split')];

navigator.mediaDevices.getUserMedia = navigator.mediaDevices.getUserMedia || navigator.webKitGetUserMedia || navigator.moxGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

navigator.mediaDevices.getUserMedia({
  video: true,
  audio: false
})
  .then(stream => {
    video.srcObject = stream;
    video.onloadedmetadata = () => {
      video.play();
      canvas.height = (canvas.width * video.videoHeight) / video.videoWidth;
      ctx.translate(canvas.width, 0);
      ctx.scale(-1, 1);
      toggleCamera.innerText = 'Stop Camera';
    };
  })
  .catch(err => console.log(`Oops!!! Can't access camera\nError: ${err}`));

video.addEventListener('play', () => setInterval(() => {
  if (!video.paused) {
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    let pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);

    if (re)
      pixels = redEffect(pixels);

    if (rs)
      pixels = rgbSplit(pixels);
    // ctx.globalAlpha = 0.8;

    pixels = greenScreen(pixels);

    ctx.putImageData(pixels, 0, 0);
  }
}, 100));

const toggleCam = () => {
  if (video.paused) {
    video.play();
    toggleCamera.innerText = 'Stop Camera';
  } else {
    video.pause()
    toggleCamera.innerText = 'Start Camera';
    // try {
    //   let stream = video.srcObject;
    //   let tracks = stream.getTracks();
    //   tracks.forEach(track => track.stop());
    //   video.srcObject = null;
    //   toggleCamera.innerText = 'Start Camera';
    // } catch (error) {
    //   console.log(error);
    // }
  }
};

toggleCamera.addEventListener('click', toggleCam);

takePhoto.addEventListener('click', () => {
  snap.currentTime = 0;
  snap.play();
  const img = canvas.toDataURL('image/png');
  const template = document.createElement('template');
  template.innerHTML = `<a href=${img} download="pro-${strip.childElementCount}.png"><img src=${img}></a>`;
  strip.insertBefore(template.content.firstChild, strip.firstChild);
})

redEf.addEventListener('click', () => re = !re);
rgbSp.addEventListener('click', () => rs = !rs);

const redEffect = (pixels) => {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i + 0] = pixels.data[i + 0] + 200; // RED
    pixels.data[i + 1] = pixels.data[i + 1] - 50; // GREEN
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // Blue
  }
  return pixels;
}

const rgbSplit = (pixels) => {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i - 150] = pixels.data[i + 0]; // RED
    pixels.data[i + 500] = pixels.data[i + 1]; // GREEN
    pixels.data[i - 550] = pixels.data[i + 2]; // Blue
  }
  return pixels;
}

const greenScreen = (pixels) => {
  const levels = {};
  console.log(levels)

  document.querySelectorAll('.rgb input').forEach((input) => {
    levels[input.name] = input.value;
  });

  for (let i = 0; i < pixels.data.length; i = i + 4) {
    let red = pixels.data[i + 0];
    let green = pixels.data[i + 1];
    let blue = pixels.data[i + 2];
    // let alpha = pixels.data[i + 3];

    if (red >= levels.rmin
      && green >= levels.gmin
      && blue >= levels.bmin
      && red <= levels.rmax
      && green <= levels.gmax
      && blue <= levels.bmax) {
      pixels.data[i + 3] = 0;
    }
  }

  return pixels;
}
