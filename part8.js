const names = ["Ridoy", "Abdul Aziz", "Prottoy", "Kayes"]
function update(arr){
    for(let i = 0; i<arr.
        length; i++){
        arr[i] = `${i+1}. ${arr[i]}`
    }
    return arr;
}

update(names)
console.log(names)
