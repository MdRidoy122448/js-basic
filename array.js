// function greeting(name) {
//     console.log('Hello ' + name);
//   }
  
//   function processUserInput(callback) {
//     let name = "Ridoy";
//     callback(name);
//   }
  
//   function processUserInput(callback) {
//     let name = "Prottoy";
//     callback(name);
//   }

//  processUserInput(greeting)

function showResult(some){
    console.log(some)
}
function callback(a,b){
    let result = a + b;
    return result
}

let show =  callback(5,5);
console.log(show)