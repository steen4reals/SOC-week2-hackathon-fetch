let data;
let score;
let index;
let startButton = document.querySelector("#start-button");
let trueButton = document.querySelector("#true-button");
let falseButton = document.querySelector("#false-button");
let displayQ = document.querySelector("p");
let userAnswer;
let correctAnswer;
let scoreDisplay = document.querySelector("#score");
let question = document.querySelector("#question");

trueButton.style.display = "none";
falseButton.style.display = "none";
scoreDisplay.style.display = "none";
question.style.display = "none";

startButton.addEventListener("click", fetchData);
trueButton.addEventListener("click", answerTrue);
falseButton.addEventListener("click", answerFalse);

function answerTrue() {
  userAnswer = "True";
  checkAnswer();
}

function answerFalse() {
  userAnswer = "False";
  checkAnswer();
}

function checkAnswer() {
  if (userAnswer == correctAnswer) {
    score = score + 1;
    scoreDisplay.innerText = `Score: ${score}`;
    index += 1;
    displayQuestion();
  } else {
    // console.log(`correct answer: ${correctAnswer}`);
    // console.log(`User answer: ${userAnswer}`);
    score = score;
    index += 1;
    displayQuestion();
  }
}

function getCorrectAnswer() {
  correctAnswer = data.results[index].correct_answer;
  return correctAnswer;
}

function displayQuestion() {
  displayQ.innerText = data.results[index].question;
  document.body.appendChild(displayQ);
  getCorrectAnswer();
}

function startGame() {
  score = 0;
  index = 0;
  trueButton.style.display = "inline";
  falseButton.style.display = "inline";
  scoreDisplay.style.display = "block";
  question.style.display = "block";
  startButton.style.display = "none";
  scoreDisplay.innerText = `Score: ${score}`;
  document.body.appendChild(scoreDisplay);
  displayQuestion();
}

async function fetchData() {
  let response = await fetch(
    "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=boolean"
  );
  data = await response.json();
  startGame();
}
