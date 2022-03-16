function chocolateCalculator(taka){
    let chocolate = 0;
    let wrappers;
    if(taka>4){
        chocolate += (taka / 5);
        wrappers =  chocolate;
        while(wrappers>4){
            newChocolate = Math.floor(wrappers/5)
            chocolate += newChocolate;
            extraWrapper = wrappers % 5 ;
            wrappers = newChocolate + extraWrapper;
        }        
    }
    console.log(chocolate)
}
chocolateCalculator(300)




echo "# Problem_solving" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/MdRidoy122448/Problem_solving.git
git push -u origin main