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
  if (index < 2) {
    displayQ.innerText = data.results[index].question;
    //&quot - replace to '
    document.body.appendChild(displayQ);
    getCorrectAnswer();
    console.log("hello");
  } else {
    endGame();
  }
}

function endGame() {
  let img = document.createElement("img");
  img.setAttribute("class", "game-over-img");
  img.src =
    "https://images.squarespace-cdn.com/content/v1/58af450eb3db2b0582612f1d/1547666385983-B2OJ1FV997UREJZUV4DV/ke17ZwdGBToddI8pDm48kNvT88LknE-K9M4pGNO0Iqd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UbeDbaZv1s3QfpIA4TYnL5Qao8BosUKjCVjCf8TKewJIH3bqxw7fF48mhrq5Ulr0Hg/videoblocks-game-over-8-bit-funky-a-funky-colorful-4k-game-over-screen-animation-letters-falling-towards-the-center-8-bit-retro-style-red-and-yellow_hcqx9_kax_thumbnail-full06.png?format=1000w";

  document.body.appendChild(img);
  trueButton.style.display = "none";
  falseButton.style.display = "none";
  scoreDisplay.style.display = "block";
  question.style.display = "none";
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
