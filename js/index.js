/*
Find words that are bigger than a certain size, add them to their own array, then display them.
@scarfino 2018
*/

let words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

//get words that are less than 6 characters long - log true to console if there are
console.log(words.some(function(word) {
  return word.length < 6;
}));

// create a new array of words that are longer than 5 characters
let bigWords = words.filter(word => word.length > 5);


// get words that are more than 5 characters long - log true to console if there are
console.log(bigWords.every(word =>  word.length > 5      ));

// log words that are more than 5 characters long to console
console.log(bigWords)
