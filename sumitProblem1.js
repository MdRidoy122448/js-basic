// const vowel = ["a","e","i","o","u","A","E","I","O","U"];

// function countVowels(sentence){
//     let count = 0;
//     const letters = Array.from(sentence);
    
//     letters.forEach(function(value){
//         if(vowel.includes(value)){
//             count++;
//         }
//     });
//     return count;
// }
// console.log(countVowels("I love Bangladesh"));


// // same program
// // just trying to modify
// function countVowels(sentence){
//     let count = 0;
//     const letters = Array.from(sentence);
    
//     letters.forEach(myFunction)

//     function myFunction(value){
//         if(vowel.includes(value)){
//             count++;
//         }
//     };
//     return count;     
// }



// console.log(countVowels("I love Bangladesh"));


const numbers = [5,1,5,5,8,3,1,8,6,8,6,2,3,4,7]

const duplicates = numbers.filter(function(value, index, array){
    return array.indexOf(value) !== index;
})

console.log(duplicates)