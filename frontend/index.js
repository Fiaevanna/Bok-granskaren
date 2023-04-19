 
 // en funktion som skapar en div och sätter innerHTML till värden jag sedan ska fylla ut med api 
 function createBook (title,image,rate,author,published,pages,id) {
    const bookElement = document.createElement("div")

    let ratingText = "Inga omdömmen";
    if (rate) {
        ratingText = rate + "/10"
    }

    bookElement.innerHTML = `<div class="bookContent"> <h3>${title}</h3> <img src="${image}" /> <div class="infoRow"> <span class="title">Omdömme:</span> <span class="content">${ ratingText }</span> </div> <div class="infoRow"> <span class="title">Författare:</span> <span class="content">${author}</span> </div> <div class="infoRow"> <span class="title">Utgiven:</span> <span class="content">${published}</span> </div> <div class="infoRow"> <span class="title">Antal sidor:</span> <span class="content">${pages}</span> </div> <button onclick="saveBook(${id})" class="saveBtn">Spara</button> </div>`
    let mainContainer = document.getElementById("bookContainer")
    mainContainer.appendChild(bookElement);

}


/*  savebook tar emot ett id som jag kommer koppla till strapi för att se till att rätt bok sparas till mina sidor   */

function saveBook (id){
    console.log("book saved",id);
}

async function getAndCreateBooks () {
    let response = await fetch ("http://localhost:1337/api/books?populate=Image,ratings")
    let data = await response.json()
    let books = data.data
    books.forEach(book => {
        const ratingsObjects = book.attributes.ratings.data
        const ratings = ratingsObjects.map(rating=> {
            return rating.attributes.Rating
        })
        let rating = avarageRating(ratings)
        createBook(book.attributes.Titel, "http://localhost:1337"+ book.attributes.Image.data.attributes.url, rating, book.attributes.Author,book.attributes.Published, book.attributes.Pages, book.id)

    });

}
getAndCreateBooks()