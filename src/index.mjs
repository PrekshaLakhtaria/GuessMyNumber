import "./styles.css";

// document.querySelector(".message").textContent = "Correct secretNumber";
// console.log(document.querySelector(".message").textContent);

// document.querySelector(".guess").value = 23;
// // console.log(document.querySelector(".guess").value);
// document.querySelector(".check").disabled = false;

function displayMessage(message){
  document.querySelector(".message").textContent = message;
}

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

let score = Number(document.querySelector(".score").textContent);
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  console.log("hello");
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("⛔ No Number");
  } else if (guess == secretNumber) {
    document.querySelector(".check").disabled = true;

    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
displayMessage("🎉Correct guess");
    document.querySelector(".score").textContent = score;

    if (highScore < score) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess != secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? "📈 Guess is high" : " 📉 Guess is low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("!You lost ther game 💥");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);

  document.querySelector(".check").disabled = false;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
  displayMessage("Start guessing...");
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
});
