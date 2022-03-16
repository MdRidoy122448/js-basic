
function brickCalculator(numberOfFloor){
    let feet = 0;
for (let i = 1; i<=numberOfFloor; i++){
    if(i<11){
        feet += 15;
    }
    else if(i>10 && i<21){
        feet += 12;
    }
    else if(i>20){
        feet += 10;
    }
    else{
        console.log("Not a number.");
    }
}
console.log("Feets in the building = ", feet);
let numberOfBricks = feet * 1000;
console.log("Number of bricks needed in the building = ",numberOfBricks);
}
brickCalculator(40);
console.log("rrrrr")