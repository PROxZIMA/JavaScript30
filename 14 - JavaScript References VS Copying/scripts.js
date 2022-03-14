// start with strings, numbers and booleans

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.

// You might think we can just do something like this:
const simpleAssign = players;

// however what happens when we update that array?
simpleAssign[1] = 'Jhonny';

// now here is the problem!

// oh no - we have edited the original array too!
console.log({ players, simpleAssign });

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
const simpleCopy = Array.from(players);
simpleCopy[1] = "Brendon";
console.log({ players, simpleCopy });

// one way
const slice = players.slice();
slice[1] = "Jason";
console.log({ players, slice });

// or create a new array and concat the old one in
// let concat = Array();
// concat = concat.concat(players);
let concat = [].concat(players);
concat[1] = "Alex";
console.log({ players, concat });

// or use the new ES6 Spread
const spread = [...players];
spread[1] = "Samon";

// now when we update it, the original one isn't changed
console.log({ players, spread });

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: 'Wes Bos',
  age: 80
};

// and think we make a copy:
const who = person;
who.name = 'PROxZIMA';
console.log({ person, who });

// how do we take a copy instead?
const me = Object.assign({}, person, { number: 99, age: 20 });
me.name = 'Pratik';
console.log({ person, me });

// We will hopefully soon see the object ...spread

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const future = JSON.parse(JSON.stringify(person));
future.name = 'Pro';
future.age = '???';
console.log({ person, future });
