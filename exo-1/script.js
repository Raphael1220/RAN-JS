
// 1.
//let kelvins = 294;
// 5.
let kelvins = prompt("Quelle est la température en Kelvins aujourd'hui ?");
console.log(kelvins);

// 2.
let celsius = kelvins - 273;
console.log(celsius);

// 3.
// je déclare la variable fahreinheits en faisant un calcul à partir de la variable celsius.
// j'utilise aussi la méthode floor pour arrondir le résulter sous forme d'entier.
let fahrenheits = (celsius * (9/5) + 32);
console.log(fahrenheits);

// 4.
console.log(Math.floor(fahrenheits));


