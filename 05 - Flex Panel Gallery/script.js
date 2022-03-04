const panels = [...document.getElementsByClassName('panel')]

panels.forEach(panel => panel.addEventListener('click', (e) => {
  let panelWithOpen;
  panels.forEach(panel => {
    if (panel.classList.contains('open'))
      panelWithOpen = panel;
    panel.classList.remove('open');
  });
  if (e.currentTarget === panelWithOpen) return;
  e.currentTarget.classList.add('open');
}));

panels.forEach(panel => panel.addEventListener('transitionend', (e) => {
  if (e.propertyName.includes('flex')) {
    e.currentTarget.classList.toggle('open-active');
  }
}));
