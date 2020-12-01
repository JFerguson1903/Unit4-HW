var countdownDisplay = document.querySelector("#countdown");
var startButton = document.querySelector("#start");
var infoContainer = document.querySelector("#info");
var quizTimeContainer = document.querySelector("#questions");
var allDoneContainer = document.querySelector("#allDone");
var quizTimeSection = document.querySelector("#quizTime");
var finalScoreSpan = document.querySelector("#finalScore");

var totalSeconds = 0;
var activeQuestion = 0;
var finalScore = 0;


var questions = [{
        question: "Inside which HTML element do we put the JavaScript?",
        choices: ["script", "scripting", "javascript", "js"],
        answer: 0
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        choices: ["The <head> section", "Both the <head> section and the <body> section are correct", "The <body> section"],
        answer: 1
    },
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        choices: ['script name="xxx.js"', 'script src="xxx.js"', 'script href="xxx.js"'],
        answer: 1
    }
];

var questionsLength = questions.length - 1;

function quizStart() {
    infoContainer.classList.add("d-none");
    startTimer(76);
    loadQuestion(activeQuestion);
}

function loadQuestion(questionIndex) {
    quizTimeSection.innerHTML = `<h2>${questions[questionIndex].question}</h2>`;

    var options = questions[questionIndex].choices;
    for (var opt in options) {
        quizTimeSection.innerHTML += `<div><button type="button" value="${opt}" class="btnAnswer btn btn-secondary btn-md my-2">${String(options[opt])}</button></div>`;
    }
}

function usersAnswerChoice(selectedAnswerIndex) {
    if (selectedAnswerIndex == questions[activeQuestion].answer) {
        console.log("correct")
    } else {
        reduceTimer();
        console.log("you wrong SUCKAH!");
    };

    if (activeQuestion === questionsLength) {
        finalScore = totalSeconds;
        finalScoreSpan.innerHTML = finalScore;
        clearInterval(interval);
        countdownDisplay.innerHTML = 0;
        allDoneContainer.classList.remove("d-none");
        quizTimeContainer.classList.add("d-none");
        document.getElementById("reportedScore").value = finalScore;
    } else {
        activeQuestion++;
        loadQuestion(activeQuestion);
    };

}

function startTimer(updatedTime) {
    totalSeconds = updatedTime;

    interval = setInterval(function() {
        totalSeconds--;
        countdownDisplay.innerHTML = totalSeconds;
    }, 1000);
}

function reduceTimer() {
    clearInterval(interval);
    var updatedTime = totalSeconds - 10;
    startTimer(updatedTime);
}

startButton.addEventListener("click", quizStart);


$(document.body).on('click', '.btnAnswer', function() {
    var userChoice = $(this).val();
    usersAnswerChoice(userChoice);
});