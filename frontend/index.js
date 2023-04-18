 
 // en funktion som skapar en div och sätter innerHTML till värden jag sedan ska fylla ut med api 
 function createBook (title,image,rate,author,published,pages) {
    const bookElement = document.createElement("div")
    bookElement.innerHTML = `<div class="bookContent"> <h3>${title}</h3> <img src="${image}" /> <div class="infoRow"> <span class="title">Omdömme:</span> <span class="content">${rate}</span> </div> <div class="infoRow"> <span class="title">Författare:</span> <span class="content">${author}</span> </div> <div class="infoRow"> <span class="title">Utgiven:</span> <span class="content">${published}</span> </div> <div class="infoRow"> <span class="title">Antal sidor:</span> <span class="content">${pages}</span> </div> <button class="saveBtn">Spara</button> </div>`
    let mainContainer = document.getElementById("bookContainer")
    mainContainer.appendChild(bookElement);

}

createBook(" Carola så ledsen: fick inte vara på dotterns möhippa", "/Book covers/tre-kvinnor.jpg", "10/10", "Sofia Andersen", "2020-08-14", "32256" )
createBook(" Carola så ledsen: fick inte vara på dotterns möhippa", "/Book covers/kyssar-i-regnskog.jpg", "10/10", "Sofia Andersen", "2020-08-14", "32256" )
createBook(" Carola så ledsen: fick inte vara på dotterns möhippa", "/Book covers/spindeln.jpg", "10/10", "Sofia Andersen", "2020-08-14", "32256" )
createBook(" Carola så ledsen: fick inte vara på dotterns möhippa", "/Book covers/au-revoir-agneta.jpg", "5/10", "Jansson Janson", "2020-08-14", "32256" )
createBook(" Carola så ledsen: fick inte vara på dotterns möhippa", "/Book covers/istockphoto-911243488-612x612.jpg", "1/10", "Sofia Andersen", "2020-08-14", "32256" )



/* Skapar ett element (div) sedan kollar jag om boken är betygsatt om den är det så gör jag knappen och omdöme till disabled, om inte så går det att betygsätta. */
function createBookMyPage (title,image,rate,author,published,pages,rating) {
    const bookElement = document.createElement("div")
    if (rating) {
        bookElement.innerHTML = `<div class="bookContent"> <h3>${title}</h3> <img src="${image}" /> <div class="infoRow"> <span class="title">Omdömme:</span> <span class="content">${rate}</span> </div> <div class="infoRow"> <span class="title">Författare:</span> <span class="content">${author}</span> </div> <div class="infoRow"> <span class="title">Utgiven:</span> <span class="content">${published}</span> </div> <div class="infoRow"> <span class="title">Antal sidor:</span> <span class="content">${pages}</span> </div> <select disabled name="rating" id="rating"> <option value="">${rating}</option> <option value="1">1</option> <option value="2">2</option> <option value="3">3</option> <option value="4">4</option> <option value="5">5</option> <option value="6">6</option> <option value="7">7</option> <option value="8">8</option> <option value="9">9</option> <option value="10">10</option> </select> <button disabled class="saveBtn">Spara omdömme</button></div> `

    } else {
        bookElement.innerHTML = `<div class="bookContent"> <h3>${title}</h3> <img src="${image}" /> <div class="infoRow"> <span class="title">Omdömme:</span> <span class="content">${rate}</span> </div> <div class="infoRow"> <span class="title">Författare:</span> <span class="content">${author}</span> </div> <div class="infoRow"> <span class="title">Utgiven:</span> <span class="content">${published}</span> </div> <div class="infoRow"> <span class="title">Antal sidor:</span> <span class="content">${pages}</span> </div> <select name="rating" id="rating"> <option value=""> Ge omdömme </option> <option value="1">1</option> <option value="2">2</option> <option value="3">3</option> <option value="4">4</option> <option value="5">5</option> <option value="6">6</option> <option value="7">7</option> <option value="8">8</option> <option value="9">9</option> <option value="10">10</option> </select> <button class="saveBtn">Spara omdömme</button></div>`
    
    }
    /* här lägger jag till den skapade det skapade elementet i domen med appendChild i bookContainer id:T */
    let mainContainer = document.getElementById("bookContainer")
    mainContainer.appendChild(bookElement);
    

}

createBookMyPage(" Carola så ledsen: fick inte vara på dotterns möhippa", "/Book covers/istockphoto-911243488-612x612.jpg", "1/10", "Sofia Andersen", "2020-08-14", "32256", )

// 1. Replace all books on mypages html with books from javascript, mix with and without reviews
// 2. Make a avarge rating function that takes an array of numbers (ratings) and calulates the avarage rating and returns it