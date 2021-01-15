
let data;
let score;
let index;
let startButton = document.querySelector("#start-button")
let trueButton = document.querySelector("#true-button")
let falseButton = document.querySelector("#false-button")
let displayQ = document.querySelector("p");
let answer;
let scoreDisplay;

startButton.addEventListener("click", fetchData);
function answerTrue() {
  answer = true;
  console.log(answer);
}

function answerFalse() {
  answer = false;
  console.log(answer);
}

function displayQuestion() {
  displayQ.innerText = data.results[index].question;
  document.body.appendChild(displayQ);
  index += 1;
}

function startGame() {
  score = 0;
  index = 0;
  trueButton.style.display = 'none';
  falseButton.style.display = 'none';
  scoreDisplay.innerText = `Score: ${score}`;
  document.body.appendChild(scoreDisplay);
  displayQuestion();
  trueOrFalse();
  trueButton.addEventListener("click", displayQuestion);
}

async function fetchData() {
  let response = await fetch(
    "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=boolean"
  );
  data = await response.json();
  startGame();
}
