/* Skapar ett element (div) sedan kollar jag om boken är betygsatt om den är det så gör jag knappen och omdöme till disabled, om inte så går det att betygsätta. */
function createBookMyPage (title,image,rate,author,published,pages,rating,id) {
    // Change input to be object instead of normal way
    const bookElement = document.createElement("div")
    if (rating) {
        bookElement.innerHTML = `<div class="bookContent"> <h3>${title}</h3> <img src="${image}" /> <div class="infoRow"> <span class="title">Omdömme:</span> <span class="content">${rate}</span> </div> <div class="infoRow"> <span class="title">Författare:</span> <span class="content">${author}</span> </div> <div class="infoRow"> <span class="title">Utgiven:</span> <span class="content">${published}</span> </div> <div class="infoRow"> <span class="title">Antal sidor:</span> <span class="content">${pages}</span> </div> <select disabled name="rating" id="rating"> <option value="">${rating}</option> <option value="1">1</option> <option value="2">2</option> <option value="3">3</option> <option value="4">4</option> <option value="5">5</option> <option value="6">6</option> <option value="7">7</option> <option value="8">8</option> <option value="9">9</option> <option value="10">10</option> </select> <button disabled class="saveBtn">Spara omdömme</button></div> `

    } else {
        bookElement.innerHTML = `<div class="bookContent"> <h3>${title}</h3> <img src="${image}" /> <div class="infoRow"> <span class="title">Omdömme:</span> <span class="content">${rate}</span> </div> <div class="infoRow"> <span class="title">Författare:</span> <span class="content">${author}</span> </div> <div class="infoRow"> <span class="title">Utgiven:</span> <span class="content">${published}</span> </div> <div class="infoRow"> <span class="title">Antal sidor:</span> <span class="content">${pages}</span> </div> <select name="rating" id="${id}-rating"> <option value=""> Ge omdömme </option> <option value="1">1</option> <option value="2">2</option> <option value="3">3</option> <option value="4">4</option> <option value="5">5</option> <option value="6">6</option> <option value="7">7</option> <option value="8">8</option> <option value="9">9</option> <option value="10">10</option> </select> <button onclick="saveRating(${id})" class="saveBtn">Spara omdömme</button></div>`
    
    }
    /* här lägger jag till den skapade det skapade elementet i domen med appendChild i bookContainer id:T */
    let mainContainer = document.getElementById("bookContainer")
    mainContainer.appendChild(bookElement);
}

createBookMyPage(" Carola så ledsen: fick inte vara på dotterns möhippa", "/Book covers/istockphoto-911243488-612x612.jpg", "1/10", "Sofia Andersen", "2020-08-14", "32256", )
createBookMyPage(" Carola så ledsen: fick inte vara på dotterns möhippa", "/Book covers/istockphoto-911243488-612x612.jpg", "1/10", "Sofia Andersen", "2020-08-14", "32256", 8)
createBookMyPage(" Carola så ledsen: fick inte vara på dotterns möhippa", "/Book covers/istockphoto-911243488-612x612.jpg", "1/10", "Sofia Andersen", "2020-08-14", "32256", 6)
createBookMyPage(" Carola så ledsen: fick inte vara på dotterns möhippa", "/Book covers/istockphoto-911243488-612x612.jpg", "1/10", "Sofia Andersen", "2020-08-14", "32256", 1)
createBookMyPage(" Carola så ledsen: fick inte vara på dotterns möhippa", "/Book covers/istockphoto-911243488-612x612.jpg", "1/10", "Sofia Andersen", "2020-08-14", "32256", 2)
createBookMyPage(" Carola så ledsen: fick inte vara på dotterns möhippa", "/Book covers/istockphoto-911243488-612x612.jpg", "1/10", "Sofia Andersen", "2020-08-14", "32256",undefined, 3333)
createBookMyPage(" Carola så ledsen: fick inte vara på dotterns möhippa", "/Book covers/istockphoto-911243488-612x612.jpg", "1/10", "Sofia Andersen", "2020-08-14", "32256", )
createBookMyPage(" Carola så ledsen: fick inte vara på dotterns möhippa", "/Book covers/istockphoto-911243488-612x612.jpg", "1/10", "Sofia Andersen", "2020-08-14", "32256",  )
createBookMyPage(" Carola så ledsen: fick inte vara på dotterns möhippa", "/Book covers/istockphoto-911243488-612x612.jpg", "1/10", "Sofia Andersen", "2020-08-14", "32256",  )
createBookMyPage(" Carola så ledsen: fick inte vara på dotterns möhippa", "/Book covers/istockphoto-911243488-612x612.jpg", "1/10", "Sofia Andersen", "2020-08-14", "32256",  )


// 1. Replace all books on mypages html with books from javascript, mix with and without reviews DONE
// 2. Make a avarge rating function that takes an array of numbers (ratings) and calulates the avarage rating and returns it

const createRatingArr = [1,2,3,4,5,6,7,8,9,10] 

function avarageRating (ratingArr){
   
    let ratingSum = 0; 
    ratingArr.forEach(currentNum => {
        //här plusar jag på den nuvarande siffran på den totala summan av ratings. 
        ratingSum += currentNum 
    });

    let amountOfNumbers = ratingArr.length 
    let avarage = ratingSum / amountOfNumbers
    return avarage;
}

const result1 = avarageRating( [5,5] )
const result2 = avarageRating( [5,5,7,2,5,8,8,9,10,1,8] )
console.log(result1, result2)

// saverating tar emot ett id letar upp rätt select för att hämta rätt ratig som jag kommer koppla till strapi 

function saveRating(id){
   let ratingSelectElem = document.getElementById(`${id}-rating`)
   let rating = ratingSelectElem.value
   console.log(rating,id)
}