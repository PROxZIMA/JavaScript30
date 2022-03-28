const items = document.querySelector('.items');
let [isdown, displacement] = [false];

items.addEventListener('mousedown', e => {
  isdown = true;
  items.classList.add('active');
  displacement = e.clientX;
})

items.addEventListener('mouseleave', () => {
  isdown = false;
  items.classList.remove('active');
})

items.addEventListener('mouseup', () => {
  isdown = false;
  items.classList.remove('active');
})

items.addEventListener('mousemove', e => {
  if (isdown) {
    e.preventDefault();
    items.scrollBy((displacement - e.clientX) * 3, 0);
    displacement = e.clientX;
  }
})
