var url_string = window.location.href;
var url = new URL(url_string);
var initials = url.searchParams.get("initials");
var score = url.searchParams.get("reportedScore");
var listedHighScores = document.querySelector("#listedHighScores");
var clearButton = document.querySelector("#clear");
var currentHighScore = JSON.parse(localStorage.getItem("highScores"));

url.searchParams.delete("initials");
url.searchParams.delete("reportedScore");
history.replaceState(null, null, url);


highScoresPageLoad();

function highScoresPageLoad() {
    if (currentHighScore === null) {
        currentHighScore = [];
    }

    if (initials != null && score != null) {
        currentHighScore.push([initials, score]);
        currentHighScore.sort(function(a, b) { return b[1] - a[1] });
        // Store
        localStorage.setItem("highScores", JSON.stringify(currentHighScore));

    }
    console.log(currentHighScore.length);
    if (currentHighScore.length === 0) {
        listedHighScores.innerHTML = `<li class="list-group-item list-group-item-warning">No Scores to display. Play a round and get on the board!</li>`
        clearButton.classList.add("d-none");
    }

    compileHighScores();

}


function compileHighScores() {
    var rank = 1;
    for (var index = 0; index < currentHighScore.length; index++) {

        listedHighScores.innerHTML += `<li class="list-group-item list-group-item-secondary text-left">${rank}. ${currentHighScore[index][0]} - ${currentHighScore[index][1]}</li>`
        rank++;
    }
}


function clearLocalStorage() {
    localStorage.removeItem("highScores");
    listedHighScores.innerHTML = "";
}

clearButton.addEventListener("click", clearLocalStorage);