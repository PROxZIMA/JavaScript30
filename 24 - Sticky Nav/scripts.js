const images = [...document.querySelectorAll('img')];
const nav = document.getElementById('main');
const navOffsetTop = nav.offsetTop;

const onIntersection = (entries, opts) => {
  entries.forEach(entry => entry.target.classList.toggle('active', entry.isIntersecting))
}

var observer = new IntersectionObserver(onIntersection, {
  root: null,
  threshold: 0
});

images.forEach((image) => {
  observer.observe(image);
});

window.addEventListener('scroll', () => {
  if (window.scrollY >= navOffsetTop) {
    nav.classList.add('fixed');
    document.body.style.paddingTop = nav.offsetHeight + 'px';
  } else {
    nav.classList.remove('fixed');
    document.body.style.paddingTop = '0px';
  }
})
