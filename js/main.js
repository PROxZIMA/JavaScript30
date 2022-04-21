/* global Flickity */
// external js: flickity.pkgd.js

let dots;
let oldIndex = 0;
const carousel = document.querySelector('.gallery');
const title = document.getElementById('title');
const flkty = new Flickity(carousel, {
  imagesLoaded: true,
  percentPosition: false,
  on: {
    ready: () => dots = [...document.getElementsByClassName('dot')]
  }
});

const iframes = carousel.querySelectorAll('.gallery-cell iframe');
const length = iframes.length - 1;
const docStyle = document.documentElement.style;
const transformProp = typeof docStyle.transform == 'string' ?
  'transform' : 'WebkitTransform';

flkty.on('scroll', () => {
  flkty.slides.forEach((slide, i) => {
    const frame = iframes[i];
    const x = (slide.target + flkty.x) * -1 / 3;
    frame.style[transformProp] = 'translateX(' + x + 'px)';
  });
});


flkty.on('change', (index) => {
  if (oldIndex > 0)
    dots[oldIndex - 1].style.transform = "scale(1)";

  dots[oldIndex].style.transform = "scale(1)";

  if (oldIndex < length)
    dots[oldIndex + 1].style.transform = "scale(1)";

  if (index > 0)
    dots[index - 1].style.transform = "scale(1.5)";

  dots[index].style.transform = "scale(2)";
  title.textContent = iframes[index].dataset.src.slice(3, -11);

  if (!iframes[index].src)
    iframes[index].src = iframes[index].dataset.src

  if (index < length) {
    dots[index + 1].style.transform = "scale(1.5)";
  }

  oldIndex = index;
});


flkty.on('settle', (index) => {
  if (index > 0 && !iframes[index - 1].src)
    iframes[index - 1].src = iframes[index - 1].dataset.src;

  if (index < length && !iframes[index + 1].src)
    iframes[index + 1].src = iframes[index + 1].dataset.src;
});
