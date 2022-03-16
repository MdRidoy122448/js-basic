//Program about trim the value, which is existing in this array.

//Array of friends
const friends = ["Ridoy","Prottoy","Dipu","Fahim","Kayes","Monir","Abdul Aziz","Fahim","Dipu","Noyon","Rudro","Rifaz","Al Amin","Prottoy"];


function checkFunction(friends){//Work this function for friends array
    const trimedArray = []; // Creating a new array which contain value which has no existing value
    friends.forEach(function(value){
        if(trimedArray.includes(value)){//if value exist,before, then skip 
            continue;
        }
        else{// if value doesn't exist before, then assign it on the trimedArray
        trimedArray+=value;
        }
    })
    return trimedArray;
}
console.log(trimedArray);

