function chocolateCalculator(tk){
    let chocolate = 0;
    let wrapper;
    if(tk>4){
        chocolate += (tk / 5);
        wrapper =  chocolate;
        while(wrapper>4){
            newChocolate = Math.floor(wrapper/5)//10
            chocolate = chocolate + newChocolate;//54+10
            extraWrapper = wrapper % 5 ;//54 % 5 = 4
            wrapper = newChocolate + extraWrapper;
        }        
    }
    console.log(chocolate)
}
chocolateCalculator(280)