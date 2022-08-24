// TODO: Function: Set timer to end quiz when time === 0


// TODO: Function: When answer is given, check if correct, go to next question

// TODO: After last question is answered. Show score and ask user to enter Initials

// TODO: When user inputs initials, save initials and score to highscore leaderboards

// Will need a for loop to display questions
// Update a value for the questions

var homeEl = document.querySelector('#home');
var quizEl = document.querySelector('#quiz');
var endEl = document.querySelector('#end');
var highscoreEl = document.querySelector('#highscore');
var questionEl = document.querySelector('#questions');
var answersEl = document.querySelector('#answers');
var timerEl = document.querySelector('#timer');
var timeRemaining = 60;
var startButton = document.querySelector('#start');


var init = function() {
    setState('home');
};

// var nextQuestion = function() {

// };

// var correct = function() {

// }

// var wrong = function() {

// };

// var quizEnded = function() {
//     setState('end')
// };


// // questions for quiz
// var questions = [
//     {   question: 'How is a file determined to be a JavaScript file?',
//         choices: [
//             '.Java',
//             '.JavaScript',
//             '.js',
//             '.JScript'
//         ],
//         right: choices[2]
//     },
//     {   question: 'How do you link a JavaScript file to HTML?',
//         choices: [
//             '<script src="./script.js></script>"',
//             '<script href="./script.js></script>"',
//             '<link src="./script.js>"',
//             '<link href="./script.js>"'
//         ],
//         right: choices[0]
//     },
//     {   question: 'How would you call a function named myFunction in JavaScript?',
//     choices: [
//         'call.myFunction();',
//         'myFunction();',
//         'myFunction()',
//         'call.MyFunction();'
//     ],
//     right: choices[1]
//     },
//     {   question: 'How do you define a variable in JavaScript?',
//     choices: [
//         'variable x = 5',
//         'x = 5',
//         'var x = 5;',
//         'var x = 5'
//     ],
//     right: choices[2]
//     }
// ];

// var correct = 
// var wrong = 

startButton.addEventListener('click', function() {
    setState('quiz');
});

// need to add css to set style of page when each shows
var setState = function(state) {
    if (state === 'home') {
        homeEl.setAttribute('style', 'display: flex; flex-direction: column; background: aquamarine; font-size: 50px; text-align: center;');
        quizEl.setAttribute('style', 'display: none;');
        endEl.setAttribute('style', 'display: none;');
        highscoreEl.setAttribute('style', 'display: none;');
    }
    if (state === 'quiz') {
        homeEl.setAttribute('style', 'display: none;');
        quizEl.setAttribute('style', 'display: flex; flex-direction: column; background: yellow;');
        endEl.setAttribute('style', 'display: none;');
        highscoreEl.setAttribute('style', 'display: none;');
    }
    if (state === 'end') {
        homeEl.setAttribute('style', 'display: none;');
        quizEl.setAttribute('style', 'display: none;');
        endEl.setAttribute('style', 'display: flex; flex-direction:column; background: yellow;');
        highscoreEl.setAttribute('style', 'display: none;');
    }
    if (state === 'highscore') {
        homeEl.setAttribute('style', 'display: none;');
        quizEl.setAttribute('style', 'display: none;');
        endEl.setAttribute('style', 'display: none;');
        highscoreEl.setAttribute('style', 'display: flex; flex-direction: column; background: yellow;');
    }
};

init();