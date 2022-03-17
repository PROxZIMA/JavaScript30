const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const articles = ['a', 'an', 'the'];

const bandsList = document.getElementById('bands');

const filter = word =>
  word.split(' ').filter(word => !articles.includes(word.toLocaleLowerCase()));
// word.replace(/^(a |the |an )/i, '').trim();


bands.sort((a, b) => filter(a) > filter(b)).forEach(band => {
  const li = document.createElement('li');
  li.innerText = band;
  bandsList.appendChild(li);
});
