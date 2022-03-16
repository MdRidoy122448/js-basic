// const numbers = [45, 4, 9, 16,,44, 25];
// let sum = numbers.reduce(myFunction);

// function myFunction(total, value, index, array) {
//     return total + value;
//   }
let numbers = [10, 2, 3,4,8];
let sum = numbers.reduce(function (total,value, array) {
    return total + value;
});

console.log(sum);