function avarageRating (ratingArr){
   if (ratingArr.length == 0) {
    return undefined;
   }
    let ratingSum = 0; 
    ratingArr.forEach(currentNum => {
        //här plusar jag på den nuvarande siffran på den totala summan av ratings. 
        ratingSum += currentNum 
    });

    let amountOfNumbers = ratingArr.length 
    let avarage = ratingSum / amountOfNumbers
    
    //här avrundar jag ett tal till utan decimaler. 
    return Math.round(avarage);
}

//lägger in denna funktion i en ny fil appropå att jag behöver den på fler ställen 