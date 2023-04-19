/* Skapar ett element (div) sedan kollar jag om boken är betygsatt om den är det så gör jag knappen och omdöme till disabled, om inte så går det att betygsätta. */
function createBookMyPage(
  title,
  image,
  rate,
  author,
  published,
  pages,
  rating,
  id
) {
  let ratingText = "Inga omdömmen";
  if (rate) {
    ratingText = rate + "/10";
  }

  // Change input to be object instead of normal way
  const bookElement = document.createElement("div");
  if (typeof rating === "number") {
    bookElement.innerHTML = `<div class="bookContent"> <h3>${title}</h3> <img src="${image}" /> <div class="infoRow"> <span class="title">Omdömme:</span> <span class="content">${ratingText}</span> </div> <div class="infoRow"> <span class="title">Författare:</span> <span class="content">${author}</span> </div> <div class="infoRow"> <span class="title">Utgiven:</span> <span class="content">${published}</span> </div> <div class="infoRow"> <span class="title">Antal sidor:</span> <span class="content">${pages}</span> </div> <select disabled name="rating" id="rating"> <option value="">${rating}</option> <option value="1">1</option> <option value="2">2</option> <option value="3">3</option> <option value="4">4</option> <option value="5">5</option> <option value="6">6</option> <option value="7">7</option> <option value="8">8</option> <option value="9">9</option> <option value="10">10</option> </select> <button disabled class="saveBtn">Spara omdömme</button></div> `;
  } else {
    bookElement.innerHTML = `<div class="bookContent"> <h3>${title}</h3> <img src="${image}" /> <div class="infoRow"> <span class="title">Omdömme:</span> <span class="content">${ratingText}</span> </div> <div class="infoRow"> <span class="title">Författare:</span> <span class="content">${author}</span> </div> <div class="infoRow"> <span class="title">Utgiven:</span> <span class="content">${published}</span> </div> <div class="infoRow"> <span class="title">Antal sidor:</span> <span class="content">${pages}</span> </div> <select name="rating" id="${id}-rating"> <option value=""> Ge omdömme </option> <option value="1">1</option> <option value="2">2</option> <option value="3">3</option> <option value="4">4</option> <option value="5">5</option> <option value="6">6</option> <option value="7">7</option> <option value="8">8</option> <option value="9">9</option> <option value="10">10</option> </select> <button onclick="saveRating(${id})" class="saveBtn">Spara omdömme</button></div>`;
  }
  /* här lägger jag till den skapade det skapade elementet i domen med appendChild i bookContainer id:T */
  let mainContainer = document.getElementById("bookContainer");
  mainContainer.appendChild(bookElement);
}

function bookCanBeRated(ratings, bookId) {
  const ratedBook = ratings.find((book) => {
    return book.attributes.book.data.id === bookId;
  });


  if (ratedBook) {
    return ratedBook.attributes.Rating;
  }

  return true;
}

async function getAndCreateSavedBooks() {
  const books = await getSavedBooks();
  const myRatings = await getMyRatings();

  books.forEach((book) => {
    const ratingsObjects = book.attributes.book.data.attributes.ratings.data;
    const ratings = ratingsObjects.map((rating) => {
      return rating.attributes.Rating;
    });
    let rating = avarageRating(ratings);

    const myRating = bookCanBeRated(myRatings, book.attributes.book.data.id);

    createBookMyPage(
      book.attributes.book.data.attributes.Titel,
      "http://localhost:1337" +
        book.attributes.book.data.attributes.Image.data.attributes.url,
      rating,
      book.attributes.book.data.attributes.Author,
      book.attributes.book.data.attributes.Published,
      book.attributes.book.data.attributes.Pages,
      myRating,
      book.attributes.book.data.id
    );
  });
}
getAndCreateSavedBooks();

// saverating tar emot ett id letar upp rätt select för att hämta rätt ratig som jag kommer koppla till strapi

function saveRating(id) {
  let ratingSelectElem = document.getElementById(`${id}-rating`);
  let rating = ratingSelectElem.value;
  console.log(rating, id);
}
