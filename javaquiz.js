// Create the necessary elements to use later
var body = document.body;
var startBtn = document.getElementById("startBtn");
var highscoresBtn = document.getElementById("highscoresBtn");

var questionsDiv = document.getElementById("questions");
var choicesDiv = document.getElementById("choices");
var timerDiv = document.getElementById("timer");
var counterDiv = document.getElementById("counter");
let currentQuestion = 0;
var score = 0;
var instructionsDiv = document.getElementById("instructions");
var wrongAnswer = 10;

var highscoreInput = document.querySelector(".highscoreInput")
var firstNameInput = document.querySelector("#firstName");
var lastNameInput = document.querySelector("#lastName");
var submitButton = document.querySelector("#submit");
var msgDiv = document.querySelector("#msg");
var userFirstNameSpan = document.querySelector("#user-first-name");
var userLastNameSpan = document.querySelector("#user-last-name");

highscoreInput.style.display="none"
function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

submitButton.addEventListener("click", function(event) {
  event.preventDefault();
  // create user object from submission
  var user = {
    firstName: firstNameInput.value.trim(),
    lastName: lastNameInput.value.trim(),
    score: score
  };
var highscoresList = JSON.parse(localStorage.getItem("user")) || [];
highscoresList.push(user)


  console.log(user);
  //Get rid of code that gives us an error
  //Grab user names container
  var namesContainer= document.getElementById("namesContainer");
      //Place it in container
namesContainer

  
  //<div> 
  //New elements and set the text to the name
  //.appendchild this new element with the name inside
  //</div>
  
  // validate the fields
  if (user.firstNameInput === "") {
    displayMessage("error", "First name cannot be blank");
  } else if (user.lastNameInput === "") {
    displayMessage("error", "Last name cannot be blank");
  } else {
    displayMessage("You have successfully submitted your high score!");

    // set new submission
    localStorage.setItem("user", JSON.stringify(highscoresList));
    
    // get most recent submission
    // var lastUser = JSON.parse(localStorage.getItem("user"));
    // userFirstNameSpan.textContent = lastUser.firstName;
    // userLastNameSpan.textContent = lastUser.lastName;

  }
});


// Start button and timer begins
document.getElementById("startBtn").addEventListener("click", function () {
  instructionsDiv.textContent = "";
  startBtn.style.display = "none";
  highscoresBtn.style.display= "none";
  var timeleft = 60;

  var downloadTimer = setInterval(function seconds() {
    document.getElementById("count").innerHTML =
      timeleft + "&nbsp" + "seconds remaining";

    // Timer reaches 0 and Time is up, quiz over.
    timeleft -= 1;
    if (timeleft <= 0) {
      clearInterval(downloadTimer);
      document.getElementById("count").innerHTML = "Time is up!";

      //Timer stops and user is no longer able to select answers
      // // $("questionContainer").remove();
      // var img = document.createElement("img");
      // img.src = "./images/timesup.jpg";
      // var src = document.getElementById("questionContainer");
      // src.appendChild(img);
    }
  }, 1000);

  //Display questions in the container
  var renderQuestion = function () {
    document.getElementById("questionContainer").innerHTML = "";
    var h2Tag = document.createElement("h2");
    h2Tag.textContent = questions[currentQuestion].q;
    document.querySelector("#questionContainer").appendChild(h2Tag);

    for (var i = 0; i < questions[currentQuestion].choices.length; i++) {
      var questionButtons = document.createElement("button");
      questionButtons.setAttribute("class", "btn choicesBtn");
      questionButtons.textContent = questions[currentQuestion].choices[i];
      document.querySelector("#questionContainer").appendChild(questionButtons);
    }
    const choicesBtn = document.querySelectorAll(".choicesBtn");
    choicesBtn.forEach(function (button) {
      button.addEventListener("click", function () {
        console.log("clicked");
        var response = this.textContent;
        if (response === questions[currentQuestion].correctAnswer) {
          score++;
          alert("Correct!");
        } else {
          timeleft = timeleft - wrongAnswer;
          timeleft.textContent = timeleft;
          alert("Wrong Answer!");
        }
        if (currentQuestion < lastQuestion) {
          currentQuestion++;
          renderQuestion();
        } else {
          alert("You've completed your coding quiz! You scored " + score + "points.");
          document.getElementById("questionContainer").innerHTML = "";
        highscoreInput.style.display="block"


          
          // alert("Game Over! Your total score is: " + score + "!");
          // document.getElementById("questionContainer").innerHTML = "";
          // var highScoreInput = document.createElement("input");
          // document
          //   .querySelector("#questionContainer")
          //   .appendChild(highScoreInput);

            //Add a button that says, "Click to Submit High Score- takes user to storage html"
            // var highScoreInput = document.createElement("btn");
            // document
            //   .querySelector("#questionContainer")
            //   .appendChild(highScoreInput);
        }
      });
    });
  };
  renderQuestion();
});

// create questions here
let questions = [
  {
    q: "Hyper Text Markup Language Stand For?",
    choices: ["JavaScript", "XHTML", "CSS", "HTML"],
    correctAnswer: "HTML",
  },
  {
    q: "Which language is used for styling web pages?",
    choices: ["HTML", "JQuery", "CSS", "XML"],
    correctAnswer: "CSS",
  },
  {
    q:
      "What tag can be used to insert a line break or blank line in an HTML document?",
    choices: ["<title>", "<head>", "<body>", "<br>"],
    correctAnswer: "<br>",
  },
  {
    q:
      "What declaration MUST be included as the first item in an HTML document before the tag and is used to provide instructions to the web browser?",
    choices: ["<!DOCTYPE>", "<code>", "<embed>", "<caption>"],
    correctAnswer: "<!DOCTYPE>",
  },
  {
    q:
      "What is a JavaScript element that represents either TRUE or FALSE values?",
    choices: ["Condition", "Boolean", "Function", "String"],
    correctAnswer: "Boolean",
  },
  {
    q:
      "What is the type of loop that continues through a block of code as long as the specified condition remains TRUE?",
    choices: ["Conditional Loop", "Else Loop", "While Loop", "For Loop"],
    correctAnswer: "While Loop",
  },
];

var lastQuestion = questions.length - 1;

// This function will check the correct answer against the user choice
// It will also load the next question, or if it is the last question, will alert game over!
// function checkAnswer(event) {
//   event.preventDefault();
//   var wrongAnswer = 10;
//   var q = questions[currentQuestion];
//   var userInput = this.children[0].getAttribute("data-answer");
//   if (userInput === q.correctAnswer) {
//     score++;
//     alert("Correct!");
//   } else {
//     timeleft = timeleft - wrongAnswer;
//     timeleft.textContent = timeleft;
//     alert("Wrong Answer!");
//   }
// if (currentQuestion < lastQuestion) {
//   currentQuestion++;
//   renderQuestion();
// } else {
//   alert("Game Over! Your total score is: " + score + "!");
// }
// // }

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
