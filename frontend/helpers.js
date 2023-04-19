function avarageRating(ratingArr) {
  if (ratingArr.length == 0) {
    return undefined;
  }
  let ratingSum = 0;
  ratingArr.forEach((currentNum) => {
    //här plusar jag på den nuvarande siffran på den totala summan av ratings.
    ratingSum += currentNum;
  });

  let amountOfNumbers = ratingArr.length;
  let avarage = ratingSum / amountOfNumbers;

  //här avrundar jag ett tal till utan decimaler.
  return Math.round(avarage);
}

async function getSavedBooks() {
  let userFromLocalStorage = localStorage.getItem("user");
  let user = JSON.parse(userFromLocalStorage);

  if (!user) {
    return;
  }
  let response = await fetch(
    "http://localhost:1337/api/saved-books?populate[book][populate][0]=Image&populate[book][populate][1]=ratings&populate=user",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.jwt}`,
      },
    }
  );
  let data = await response.json();
  let books = data.data;

  const mySavedBooks = books.filter((book) => {
    if (book.attributes.user.data.id === user.user.id) {
      return book;
    }
  });

  return mySavedBooks;
}

async function getMyRatings() {
  let userFromLocalStorage = localStorage.getItem("user");
  let user = JSON.parse(userFromLocalStorage);

  if (!user) {
    return;
  }
  let response = await fetch(
    "http://localhost:1337/api/ratings?populate=user&populate=book",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.jwt}`,
      },
    }
  );
  let data = await response.json();
  let books = data.data;

  const myRatedBooks = books.filter((book) => {
    if (book.attributes.user.data.id === user.user.id) {
      return book;
    }
  });

  return myRatedBooks;
}

// här är en funktion som ändrar header beroende på om man är in eller ut loggad
function initHeader() {
  // här använder jag min isLoggedIn funktion och sparar svaret i en variable (loggedIn)
  let loggedIn = isLoggedIn();

  let loggedInElem = document.getElementById("loggIn");
  let loggOutElem = document.getElementById("loggOut");
  let nav = document.getElementById("nav");
  let userEmail = document.getElementById("userEmail");

  // om användare är in loggade så vill man bara gömma logga in knappen
  if (loggedIn) {
    loggedInElem.style.display = "none";
    userEmail.innerText = loggedIn.user.email;
  } else {
    // om man är utloggad så vill man gömma logga ut, mina sidor och email från header
    loggOutElem.style.display = "none";
    nav.style.display = "none";
    userEmail.style.display = "none";
  }
}

initHeader();

//lägger funktioner i en ny fil appropå att jag behöver de på fler ställen
