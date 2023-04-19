// en funktion som skapar en div och sätter innerHTML till värden jag sedan ska fylla ut med api
function createBook(title, image, rate, author, published, pages, id, canBeSaved) {
  const bookElement = document.createElement("div");

  let ratingText = "Inga omdömmen";
  if (rate) {
    ratingText = rate + "/10";
  }

  bookElement.innerHTML = `<div class="bookContent"> <h3>${title}</h3> <img src="${image}" /> <div class="infoRow"> <span class="title">Omdömme:</span> <span class="content">${ratingText}</span> </div> <div class="infoRow"> <span class="title">Författare:</span> <span class="content">${author}</span> </div> <div class="infoRow"> <span class="title">Utgiven:</span> <span class="content">${published}</span> </div> <div class="infoRow"> <span class="title">Antal sidor:</span> <span class="content">${pages}</span> </div> <button onclick="saveBook(${id})" ${canBeSaved ? "" : "disabled"} class="saveBtn">Spara</button> </div>`;
  let mainContainer = document.getElementById("bookContainer");
  mainContainer.appendChild(bookElement);
}

/*  savebook tar emot ett id som jag kommer koppla till strapi för att se till att rätt bok sparas till mina sidor   */

async function saveBook(bookId) {
  let userFromLocalStorage = localStorage.getItem("user");
  let user = JSON.parse(userFromLocalStorage);

  if (!user) {
    return;
  }

  await fetch("http://localhost:1337/api/saved-books", {
    method: "POST",
    //det jag skickar med i body är ett json object alltså "application/json"
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user.jwt}`,
    },
    body: JSON.stringify({
      data: {
        user: user.user.id,
        book: bookId,
      },
    }),
  });

  location.reload()

  alert("Boken är sparad!");
}

function bookCanBeSaved(savedBooks, bookId) {
  let userFromLocalStorage = localStorage.getItem("user");
  let user = JSON.parse(userFromLocalStorage);

  if (!user) {
    return false;
  }

  const savedBook = savedBooks.find((book) => {
    return book.attributes.book.data.id === bookId
  });

  if (savedBook) {
    return false;
  }

  return true;
}

async function getAndCreateBooks() {
  let response = await fetch(
    "http://localhost:1337/api/books?populate=Image,ratings"
  );
  let data = await response.json();
  let books = data.data;

  const savedBooks = await getSavedBooks();

  books.forEach((book) => {
    const ratingsObjects = book.attributes.ratings.data;
    const ratings = ratingsObjects.map((rating) => {
      return rating.attributes.Rating;
    });
    let rating = avarageRating(ratings);

    
    const canBeSaved = bookCanBeSaved(savedBooks, book.id);

    createBook(
      book.attributes.Titel,
      "http://localhost:1337" + book.attributes.Image.data.attributes.url,
      rating,
      book.attributes.Author,
      book.attributes.Published,
      book.attributes.Pages,
      book.id,
      canBeSaved
    );
  });
}
getAndCreateBooks();
