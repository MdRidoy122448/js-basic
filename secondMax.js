const arr = [50,80,25,200,60,100,70,300,90,70,20]

// let max = 0;

// for(let i = 1; i<arr.length; i++){
//     if(arr[i]>max){
//         max = arr[i] 
//     }
// }
// console.log(max)

let max = 0;//Initial max value first time
let secondMax = 0;//Initial secondMax value first time


for(let i = 1; i<arr.length; i++){
        if(arr[i]>max){//compare with max value 
        max = arr[i];//assaign max value, and get Max value
            for(let j = 0; j<arr.length; j++){//This is for second max value
                if((arr[j]>secondMax) && (arr[j]<max)){//compare with max and secondMax
                    secondMax = arr[j];//assaign secondMax and get max value
            }
        }
    }
}
console.log(max)//This will show you Max value
console.log(secondMax)// This will show you secondMax value