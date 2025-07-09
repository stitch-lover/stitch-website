const isHomePage =
  window.location.pathname === "/" || window.location.pathname.endsWith("index.html");

if (isHomePage) {
  const welcomeDiv = document.getElementById("welcome-message");
  welcomeDiv.innerText = "Welcome to my website! I love sandwiches!";
  welcomeDiv.style.padding = "10px";
  welcomeDiv.style.backgroundColor = "#ffffff";
  welcomeDiv.style.textAlign = "center";
  welcomeDiv.style.fontSize = "1.2em";
}

function showPersonalGreeting() {
  const isHomePage =
    window.location.pathname === "/" || window.location.pathname.endsWith("index.html");

  if (isHomePage) {
    const name = prompt("What is your name?");
    const greetingBox = document.getElementById("personal-greeting");

    if (name) {
      greetingBox.innerHTML = `
        <div style="
          background-color: #5372A6;
          color: white;
          border: 3px solid #000000;
          padding: 15px;
          margin: 20px auto;
          max-width: 500px;
          text-align: center;
          font-size: 1.5em;
          font-family: Arial, sans-serif;
          border-radius: 8px;
        ">
        Aloha, <strong>${name}</strong>! You are a part of my family now. Do you have sandwiches?
        </div>
      `;
    }
  }
}

showPersonalGreeting();
