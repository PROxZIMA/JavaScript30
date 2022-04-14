const pill = document.createElement('div');
pill.classList.add('pill');
document.body.appendChild(pill);

pill.addEventListener('move', (e) => console.log(e));

[...document.querySelectorAll('a')].forEach((href) => {
  href.addEventListener('pointerenter', (e) => {
    const coords = e.currentTarget.getBoundingClientRect();
    // console.log(coords, window.scrollY, window.scrollX);
    pill.style.width = coords.width + 'px';
    pill.style.height = coords.height + 'px';
    pill.style.transform = `translate(${coords.left + window.scrollX}px, ${coords.top + window.scrollY}px)`;
  })
})
