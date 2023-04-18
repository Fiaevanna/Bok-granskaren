 
 // en funktion som skapar en div och sätter innerHTML till värden jag sedan ska fylla ut med api 
 function createBook (title,image,rate,author,published,pages,id) {
    const bookElement = document.createElement("div")
    bookElement.innerHTML = `<div class="bookContent"> <h3>${title}</h3> <img src="${image}" /> <div class="infoRow"> <span class="title">Omdömme:</span> <span class="content">${rate}</span> </div> <div class="infoRow"> <span class="title">Författare:</span> <span class="content">${author}</span> </div> <div class="infoRow"> <span class="title">Utgiven:</span> <span class="content">${published}</span> </div> <div class="infoRow"> <span class="title">Antal sidor:</span> <span class="content">${pages}</span> </div> <button onclick="saveBook(${id})" class="saveBtn">Spara</button> </div>`
    let mainContainer = document.getElementById("bookContainer")
    mainContainer.appendChild(bookElement);

}

createBook(" Carola så ledsen: fick inte vara på dotterns möhippa", "/Book covers/tre-kvinnor.jpg", "10/10", "Sofia Andersen", "2020-08-14", "32256" )
createBook(" Carola så ledsen: fick inte vara på dotterns möhippa", "/Book covers/kyssar-i-regnskog.jpg", "10/10", "Sofia Andersen", "2020-08-14", "32256" )
createBook(" Carola så ledsen: fick inte vara på dotterns möhippa", "/Book covers/spindeln.jpg", "10/10", "Sofia Andersen", "2020-08-14", "32256" )
createBook(" Carola så ledsen: fick inte vara på dotterns möhippa", "/Book covers/au-revoir-agneta.jpg", "5/10", "Jansson Janson", "2020-08-14", "32256" )
createBook(" Carola så ledsen: fick inte vara på dotterns möhippa", "/Book covers/istockphoto-911243488-612x612.jpg", "1/10", "Sofia Andersen", "2020-08-14", "32256",10)



/*  savebook tar emot ett id som jag kommer koppla till strapi för att se till att rätt bok sparas till mina sidor   */

function saveBook (id){
    console.log("book saved",id);
}

