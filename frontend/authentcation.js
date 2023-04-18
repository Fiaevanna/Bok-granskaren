/* 




if correct save response in lockalstorag 

*/

//En funktion som hämta två input email och lösen, plocka ut värdet ur dem och spara i variablar.
async function loggIn() {
  let passwordElem = document.getElementById("password");
  let password = passwordElem.value;
  let emailElem = document.getElementById("email");
  let email = emailElem.value;

  //fetch request som kommer kommer använda variablena för email och lösen och skicka dem till rätt endpoint.
  const response = await fetch("http://localhost:1337/api/auth/local", {
    method: "POST",
    //det jag skickar med i body är ett json object alltså "application/json"
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      identifier: email,
      password: password,
    }),
  });
  let data = await response.json();
  
  // här kollar jag om det finns ett error i min data, om det finns visar jag felmeddelandet i en alert 
  if(data.error) {
    alert (data.error.message)
    //om det inte finns ett error i min data så sparar jag token och användardata i localstorage 
  }else {
    localStorage.setItem("user", JSON.stringify(data))
    // loggas du in utan problem så redirectar jag så att du hamnar på index sidan.  
    window.location.replace("/frontend/index.html");
  }
}

