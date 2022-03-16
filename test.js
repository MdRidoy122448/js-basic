/**
 * This Program is about print 6 random value, which include numbers(0-9), alphabet(a-z), (A-Z)
 */

//Declared an array with numbers(0-9),alphabet(a-z),(A-Z)
const points = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G",  "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//Sort that array by random sorting.
points.sort(function (a,b)
{return 0.5-Math.random()});

//Print that array for ensure of random sorting
//console.log(points);

//Declared a variable and keep 6 value from random sort array with slice
let randomValue = points.slice(0,6);

//Print the randomValue variable and convert to a string
console.log(randomValue.join(""));

