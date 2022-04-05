const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

const makeGreen = (e) => {
  e.currentTarget.style.color = '#BADA55';
  e.currentTarget.style.fontSize = '50px';
}

document.getElementById('green-me')?.addEventListener('click', (e) => makeGreen(e));

// clearing
console.clear();

// Regular
console.log('makeGreen');

// Interpolated
console.log('%s is a function -> ', 'makegreen');

// Styled
console.log('%c A green text with big font', 'color: #BADA55; font-size: 30px');

// warning!
console.warn('Warning');

// Error :|
console.error('Error!!!!!');

// Info
console.info('Information');

// Testing
console.assert('' === false, "That's not how it works");

// Viewing DOM Elements
console.dir(document.querySelector('p'));

// Grouping together
dogs.forEach(dog => {
  if (dog.name === 'hugo') console.group(dog.name);
  else console.groupCollapsed(dog.name);

  console.log(`This is ${dog.name}.`);
  console.log(`He is ${dog.age} year old`);

  console.groupEnd();
});

// counting
console.count('z');
console.count('y');
console.count('y');
console.count('x');
console.count('z');
console.count('z');
console.count('x');
console.count('z');
console.count('y');

// timing
console.time('Fetching data');
fetch('https://api.github.com/users/PROxZIMA')
  .then(resposne => {
    console.timeLog('Fetching data');
    return resposne.json()
  })
  .then(data => {
    console.timeEnd('Fetching data');
    console.log(data);
  });
