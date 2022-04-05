// ## Array Cardio Day 2

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];
console.log('People -> ');
console.table(people);
console.log('Comments -> ');
console.table(comments);

// Some and Every Checks
// Array.prototype.every()
const currYear = (new Date()).getFullYear();
console.log("is at least one person 19 or older? -> ", people.some(person => currYear - person['year'] > 19));
// Array.prototype.some()
console.log("is everyone 19 or older? -> ", people.every(person => currYear - person['year'] > 19));

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
console.log("find the comment with the ID of 823423 -> ", comments.find(comment => comment['id'] === 823423));

// Array.prototype.findIndex()
// Find the comment with this ID
console.log("delete the comment with the ID of 823423")
const findIndex = comments.findIndex(comment => comment['id'] === 823423);
comments.splice(findIndex, 1);
console.table(comments);
