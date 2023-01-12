

let input = 'Turpentine and turtles';
const vowels = ["a","e","i","o","u","y"];
let resultArray =[];


for(let i = 0 ; i < input.length; i ++){
    console.log(input[i]);
   if(vowels.indexOf(input[i])!= - 1){
    resultArray.push(input[i]);
   }
}
console.log(resultArray.join('').toUpperCase());

