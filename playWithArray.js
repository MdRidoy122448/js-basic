// //constructor pattern 
// const a1 = new Array(); // [] same
// console.log(a1, a1.length)//

// const a2 = new Array(5)//length 5
// console.log(a2, a2.length)//[5 empty items] , length 5 

// const a3 =  new Array(1,2,3,4,5)
// console.log(a3, a3.length)// same as [1,2,3,4,5]
// //factory pattern
// const b1 = new Array(); // [] same
// console.log(b1, b1.length)//

// const b2 = new Array(5)//length 5
// console.log(b2, b2.length)//[5 empty items] , length 5 

// const b3 =  new Array(1,2,3,4,5)
// console.log(b3, b3.length)// same as [1,2,3,4,5]

// console.log(a1.__proto__.constructor)// same like below
// console.log(b1.__proto__.constructor)//same like above

// const arr = [2,5,4,2,30,5,1,40,5,7,6,10,8,20,4]

// let max = 0;
// for(let i = 0; i<arr.length; i++){
//     for(let j = 0; j<arr.length; j++){
//         if(arr[i]>max){
//             max = arr[i];
//             if(arr[j]<max){
//             let secondMax = arr[j]
//             console.log(secondMax)
//             }  
//         }
//     }
// }


// let secondMax = 0;
// for(let j = 0; j<arr.length; j++){
//     if(arr[j]>max){
//         max = arr[j];
//     }
// }





