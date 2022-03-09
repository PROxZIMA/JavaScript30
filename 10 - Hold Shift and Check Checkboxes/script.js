const checkboxes = [...document.querySelectorAll('.item>input')];
let keyStopper = false;

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('click', e => {
    if (keyStopper && checkbox.checked) {
      // OR if (e.shiftKey && checkbox.checked) and remove both the document.addEventListener
      let index = checkboxes.indexOf(checkbox);
      while (index-- && !checkboxes[index].checked) {
        checkboxes[index].checked = true;
      }
    }
  })
});

document.addEventListener('keydown', e => {
  if (keyStopper) return;
  keyStopper = e.key === 'Shift'
})

document.addEventListener('keyup', e => keyStopper = false);
