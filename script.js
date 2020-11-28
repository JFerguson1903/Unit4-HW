var countdownDisplay = document.querySelector("#countdown");
var secondsLeft;
var secondsElapsed = 0;
var startButton;
var totalSeconds = 75;

function startTimer() {

    // We only want to start the timer if totalSeconds is > 0
    if (totalSeconds > 0) {
        /* The "interval" variable here using "setInterval()" begins the recurring increment of the
           secondsElapsed variable which is used to check if the time is up */
        interval = setInterval(function() {
            secondsElapsed++;
            totalSeconds--;
            console.log(secondsElapsed);
        }, 1000);
    } else {
        alert("Minutes of work/rest must be greater than 0.")
    }
}

startTimer();

startButton.addEventListener("click", startTimer);