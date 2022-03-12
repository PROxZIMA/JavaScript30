/* global cornify_add */

const keys = [];
const konamiStr = 'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba';
const konamiLen = 10;

const detectKonami = (e) => {
  keys.push(e.key);
  keys.splice(-konamiLen, keys.length - konamiLen);
  if (keys.join('') === konamiStr) {
    document.removeEventListener('keydown', detectKonami);
    cornify_add();
    alert('KONAMI activated');
  }
};

document.addEventListener('keydown', detectKonami);
