const dropDownBg = document.querySelector('.dropdownBackground');
const navCords = document.querySelector('.top').getBoundingClientRect();

dropDownBg.addEventListener('move', (e) => console.log(e));

[...document.querySelectorAll('.cool > li')].forEach(li => {
  li.addEventListener('mouseenter', (e) => {
    const dropDown = e.currentTarget;
    dropDown.classList.add('trigger-enter');
    setTimeout(() => dropDown.classList.contains('trigger-enter') && dropDown.classList.add('trigger-enter-active'), 150);
    dropDownBg.classList.add('open');

    const coords = dropDown.querySelector('.dropdown').getBoundingClientRect();

    dropDownBg.style.width = coords.width + 'px';
    dropDownBg.style.height = coords.height + 'px';
    dropDownBg.style.transform = `translate(${coords.left - navCords.left}px, ${coords.top - navCords.top}px)`;
  });
  li.addEventListener('mouseleave', (e) => {
    e.currentTarget.classList.remove('trigger-enter', 'trigger-enter-active');
    dropDownBg.classList.remove('open');
  })
})
