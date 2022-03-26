const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

divs.forEach((div) => {
  div.addEventListener('click', (e) => {
    console.log(e.currentTarget.classList.value);
    // e.stopPropagation();
  }, {
    once: false,
    capture: false
  })
})

button.addEventListener('click', () => {
  console.log('Clicked');
}, {
  once: true
})
