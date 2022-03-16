"use strict";
process.stdin.resume();
process.stdin.setEncoding("utf-8");
 
function print(x) {
  console.log(x);
}
let inputString = "";
let currentLine = 0;
 
process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});
process.stdin.on("end", () => {
  inputString = inputString.split("\n");
  main();
});
function readline() {
  return inputString[currentLine++];
}
 
// ********** Code Start **********

function main() {
    console.log('Enter radius = ');
    var input = parseFloat(readline());
    console.log(input);
}
//Math.floor(Math.random() * (max - min + 1) ) + min
//Math.floor(0.8*(10-1+1)+1);
//Math.floor(0.8*10)+1;
//Math.floor(10.8)+1;
//Math.floor(11.8);
//11

const wow = Boolean(5>6)
console.log("wow")
