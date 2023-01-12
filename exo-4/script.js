

var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];


// 1.

console.log(secretMessage.pop());
console.log(secretMessage);


// 2.

console.log(secretMessage.push('to','program'));
console.log(secretMessage);


// 3.

console.log(secretMessage.splice(6, 1, 'right'));
console.log(secretMessage);


// 4.

console.log(secretMessage.shift());
console.log(secretMessage);


// 5.

console.log(secretMessage.unshift('Programming'));
console.log(secretMessage);


// 6.

console.log(secretMessage.splice(5, 5, 'know'));
console.log(secretMessage);


// 7.

console.log(secretMessage.join(' '));





