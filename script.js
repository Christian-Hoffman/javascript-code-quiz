// TODO: Function: Set timer to end quiz when time === 0

// TODO: Function: When answer is given, check if correct, go to next question

// TODO: After last question is answered. Show score and ask user to enter Initials

// TODO: When user inputs initials, save initials and score to highscore leaderboards

// Will need a for loop to display questions
// Update a value for the questions

var homeEl = document.querySelector("#home");
var quizEl = document.querySelector("#quiz");
var endEl = document.querySelector("#end");
var highscoreEl = document.querySelector("#highscore");
var questionEl = document.querySelector("#questions");
// var answersEl = document.querySelector('#answers');
var timerEl = document.querySelector("#timer");
var timeRemaining = 60;
var startButton = document.querySelector("#start");
var highscoreButton = document.querySelector("#hsbutton");

var init = function () {
  setState("home");
};

// var correct = function() {

// }

// var wrong = function() {

// };

// var quizEnded = function() {
//     setState('end')
// };

var questionNumber = function (state) {
  if (state === "q1") {
  }
  if (state === "q2") {
  }
  if (state === "q3") {
  }
  if (state === "q4") {
  }
};

var setState = function (state) {
  if (state === "home") {
    homeEl.setAttribute(
      "style",
      "display: flex; flex-direction: column; background: aquamarine; font-size: 50px; text-align: center;"
    );
    quizEl.setAttribute("style", "display: none;");
    endEl.setAttribute("style", "display: none;");
    highscoreEl.setAttribute("style", "display: none;");
  }
  if (state === "quiz") {
    homeEl.setAttribute("style", "display: none;");
    quizEl.setAttribute(
      "style",
      "display: flex; flex-direction: column; background: aquamarine; font-size: 50px; text-align: center;"
    );
    endEl.setAttribute("style", "display: none;");
    highscoreEl.setAttribute("style", "display: none;");
  }
  if (state === "end") {
    homeEl.setAttribute("style", "display: none;");
    quizEl.setAttribute("style", "display: none;");
    endEl.setAttribute(
      "style",
      "display: flex; flex-direction:column; background: aquamarine; font-size: 50px; text-align: center;"
    );
    highscoreEl.setAttribute("style", "display: none;");
  }
  if (state === "highscore") {
    homeEl.setAttribute("style", "display: none;");
    quizEl.setAttribute("style", "display: none;");
    endEl.setAttribute("style", "display: none;");
    highscoreEl.setAttribute(
      "style",
      "display: flex; flex-direction: column; background: aquamarine; font-size: 50px; text-align: center;"
    );
  }
};

var questionOne = function () {
  var createQuestion = document.createElement("p");
  questionEl.appendChild(createQuestion);
  createQuestion.textContent = questions[0].question;
  for (var i = 0; i < questions[0].choices.length; i++) {
    var createChoice = document.createElement("button");
    questionEl.appendChild(createChoice);
    createChoice.textContent = questions[0].choices[i];
    createChoice.classList.add("q1");
  }
};

var questionTwo = function () {
  var createQuestion = document.createElement("p");
  questionEl.appendChild(createQuestion);
  createQuestion.textContent = questions[1].question;
  for (var i = 0; i < questions[1].choices.length; i++) {
    var createChoice = document.createElement("button");
    questionEl.appendChild(createChoice);
    createChoice.textContent = questions[1].choices[i];
  }
};

var answerChoiceButtons = document.querySelector(".q1");

answerChoiceButtons.addEventListener("click", function () {
  questionTwo();
});
// var questionThree = function() {
//     var createQuestion = document.createElement('p');
//     questionEl.appendChild(createQuestion);
//     createQuestion.textContent = questions[2].question;
//     for (var i = 0; i < questions[2].choices.length; i++) {
//         var createChoice = document.createElement('button');
//         questionEl.appendChild(createChoice);
//         createChoice.textContent = questions[2].choices[i];
//     };
// };

// var questionFour = function() {
//     var createQuestion = document.createElement('p');
//     questionEl.appendChild(createQuestion);
//     createQuestion.textContent = questions[3].question;
//     for (var i = 0; i < questions[3].choices.length; i++) {
//         var createChoice = document.createElement('button');
//         questionEl.appendChild(createChoice);
//         createChoice.textContent = questions[3].choices[i];
//     };
// };

// function handles when a user clicks a question
// check if correct answer was clicked
// i++ the currentquetionindex so that the next question show up


// Questions for quiz
var questions = [
  {
    id: 0,
    question: "How is a file determined to be a JavaScript file?",
    options: [
      { choice: ".java", isCorrect: false },
      { choice: ".javascript", isCorrect: false },
      { choice: ".js", isCorrect: true },
      { choice: ".jscript", isCorrect: false },
    ],
  },
  {
    id: 1,
    question: "How do you link a JavaScript file to HTML?",
    options: [
      { choice: "<script src='./script.js'></script>", isCorrect: true },
      { choice: "<script href='./script.js'></script>", isCorrect: false },
      { choice: "<link src='./script.js'>", isCorrect: false },
      { choice: "<link href='./script.js'>", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "How would you call a function named 'myFunction' in JavaScript?",
    options: [
      { choice: "call.myFunction();", isCorrect: false },
      { choice: "myFunction();", isCorrect: true },
      { choice: "myFunction()", isCorrect: false },
      { choice: "call.MyFunction();", isCorrect: false },
    ],
  },
  {
    id: 3,
    question: "How do you define a variable in JavaScript?",
    options: [
      { choice: "variable x = 5;", isCorrect: false },
      { choice: "x = 5;", isCorrect: false },
      { choice: "var x = 5;", isCorrect: true },
      { choice: "var = x = 5;", isCorrect: false },
    ],
  },
];

// var correct =
// var wrong =

startButton.addEventListener("click", function () {
  setState("quiz");
  questionOne();
});

highscoreButton.addEventListener("click", function () {
  setState("highscore");
});

// need to add css to set style of page when each shows
var setState = function (state) {
  if (state === "home") {
    homeEl.setAttribute(
      "style",
      "display: flex; flex-direction: column; background: aquamarine; font-size: 50px; text-align: center;"
    );
    quizEl.setAttribute("style", "display: none;");
    endEl.setAttribute("style", "display: none;");
    highscoreEl.setAttribute("style", "display: none;");
  }
  if (state === "quiz") {
    homeEl.setAttribute("style", "display: none;");
    quizEl.setAttribute(
      "style",
      "display: flex; flex-direction: column; background: aquamarine; font-size: 50px; text-align: center;"
    );
    endEl.setAttribute("style", "display: none;");
    highscoreEl.setAttribute("style", "display: none;");
  }
  if (state === "end") {
    homeEl.setAttribute("style", "display: none;");
    quizEl.setAttribute("style", "display: none;");
    endEl.setAttribute(
      "style",
      "display: flex; flex-direction:column; background: aquamarine; font-size: 50px; text-align: center;"
    );
    highscoreEl.setAttribute("style", "display: none;");
  }
  if (state === "highscore") {
    homeEl.setAttribute("style", "display: none;");
    quizEl.setAttribute("style", "display: none;");
    endEl.setAttribute("style", "display: none;");
    highscoreEl.setAttribute(
      "style",
      "display: flex; flex-direction: column; background: aquamarine; font-size: 50px; text-align: center;"
    );
  }
};

init();
