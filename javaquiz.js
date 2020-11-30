// Create the necessary elements to use later
var body = document.body;
const startBtn = document.getElementById("startBtn");
const highscoresBtn = document.getElementById("highscoresBtn");

const questionsDiv = document.getElementById("questions");
const choicesDiv = document.getElementById("choices");
const timerDiv = document.getElementById("timer");
const counterDiv = document.getElementById("counter");
let currentQuestion = 0;

// When you click button to begin quiz, timer counts down
startBtn.onClick = () => {
  document.getElementsByClassName(".container").style.display = "none";
  // quizDir.style.display = "none"
};
// Start button and timer begins
document.getElementById("startBtn").addEventListener("click", function () {
  var timeleft = 60;

  var downloadTimer = setInterval(function seconds() {
    document.getElementById("count").innerHTML =
      timeleft + "&nbsp" + "seconds remaining";

    timeleft -= 1;
    if (timeleft <= 0) {
      clearInterval(downloadTimer);
      document.getElementById("count").innerHTML = "Time is up!";
    }
  }, 1000);
  var h3Tag = document.createElement("h3");
  h3Tag.textContent = questions[currentQuestion].q;
  document.querySelector(".container").appendChild(h3Tag);

  for (var i = 0; i < questions[currentQuestion].answers.length; i++) {
    var questionButtons = document.createElement("button");
    questionButtons.setAttribute("class", "btn");
    questionButtons.textContent = questions[currentQuestion].answers[i];
    document.querySelector(".container").appendChild(questionButtons);
  }
});

// create questions here
let questions = [
  {
    q: "Hyper Text Markup Language Stand For?",
    answers: ["JavaScript", "XHTML", "CSS", "HTML"],
    correctAnswer: "D",
  },
  {
    q: "Which language is used for styling web pages?",
    answers: ["HTML", "JQuery", "CSS", "XML"],
    correctAnswer: "C",
  },
  {
    q:
      "What tag can be used to insert a line break or blank line in an HTML document?",
    A: "<title>",
    B: "<head>",
    C: "<body>",
    D: "<br>",
    answer: "D",
  },
  {
    q:
      "What declaration MUST be included as the first item in an HTML document before the tag and is used to provide instructions to the web browser?",
    A: "<!DOCTYPE>",
    B: "<code>",
    C: "<embed>",
    D: "<caption>",
    answer: "A",
  },
  {
    q:
      "What is a JavaScript element that represents either TRUE or FALSE values?",
    A: "Condition",
    B: "Boolean",
    C: "Funtion",
    D: "String",
    answer: "B",
  },
  {
    q:
      "What is the type of loop that continues through a block of code as long as the specified condition remains TRUE?",
    A: "Conditional Loop",
    B: "Else Loop",
    C: "While Loop",
    D: "For Loop",
    answer: "C",
  },
];

/* GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score */
