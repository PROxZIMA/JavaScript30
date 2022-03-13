function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this, args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
const images = [...document.querySelectorAll('img')];

/* METHOD - 1 */

// const makeVIsible = () => {
//   images.forEach((image) => {
//     var rect = image.getBoundingClientRect();
//     var elemTop = rect.top;
//     var elemBottom = rect.bottom;

//     // Only completely visible elements return true:
//     var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
//     // Partially visible elements return true:
//     isVisible = elemTop < window.innerHeight && elemBottom >= 0;

//     (isVisible) ? image.classList.add('active') : image.classList.remove('active');
//   })
// };

// // image appearance is delayed due to "debounce"
// document.addEventListener('scroll', debounce(makeVIsible));


/* METHOD - 2 */
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
