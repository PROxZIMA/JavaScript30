document.querySelectorAll('input').forEach(input => {
  input.addEventListener('input', (e) => document.documentElement.style.setProperty(
    `--${e.target.name}`,
    `${e.target.value}${e.target.dataset.sizing || ''}`
  ));
});
