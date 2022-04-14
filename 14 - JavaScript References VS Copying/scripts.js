console.log(`start with strings, numbers and booleans`);

console.log(`Let's say we have an array`);
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

console.log(`and we want to make a copy of it.`);

console.log(`You might think we can just do something like this:`);
const simpleAssign = players;

console.log(`however what happens when we update that array?`);
simpleAssign[1] = 'Jhonny';

console.log(`now here is the problem!`);

console.log(`oh no - we have edited the original array too!`);
console.log({ players, simpleAssign });

console.log(`Why? It's because that is an array reference, not an array copy. They both point to the same array!`);

console.log(`So, how do we fix this? We take a copy instead!`);
const simpleCopy = Array.from(players);
simpleCopy[1] = "Brendon";
console.log({ players, simpleCopy });

console.log(`one way`);
const slice = players.slice();
slice[1] = "Jason";
console.log({ players, slice });

console.log(`or create a new array and concat the old one in`);
console.log(`let concat = Array();`);
console.log(`concat = concat.concat(players);`);
let concat = [].concat(players);
concat[1] = "Alex";
console.log({ players, concat });

console.log(`or use the new ES6 Spread`);
const spread = [...players];
spread[1] = "Samon";

console.log(`now when we update it, the original one isn't changed`);
console.log({ players, spread });

console.log(`The same thing goes for objects, let's say we have a person object`);

console.log(`with Objects`);
const person = {
  name: 'Wes Bos',
  age: 80
};

console.log(`and think we make a copy:`);
const who = person;
who.name = 'PROxZIMA';
console.log({ person, who });

console.log(`how do we take a copy instead?`);
const me = Object.assign({}, person, { number: 99, age: 20 });
me.name = 'Pratik';
console.log({ person, me });

console.log(`We will hopefully soon see the object ...spread`);

console.log(`Things to note - this is only 1 level deep - both for Arrays and Objects.\nlodash has a cloneDeep method, but you should think twice before using it.`);
const future = JSON.parse(JSON.stringify(person));
future.name = 'Pro';
future.age = '???';
console.log({ person, future });
