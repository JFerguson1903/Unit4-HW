var url_string = window.location.href;
var url = new URL(url_string);
var initials = url.searchParams.get("initials");
var score = url.searchParams.get("reportedScore");
var listedHighScores = document.querySelector("#listedHighScores");

var results = [
    [initials, score]
];

// Store
localStorage.setItem("highScores", JSON.stringify(results));

var currentHighScore = JSON.parse(localStorage.getItem("highScores"));

for (let index = 0; index < currentHighScore.length; index++) {

    listedHighScores.innerHTML = `<li class="list-group-item list-group-item-secondary text-left">${currentHighScore[index][1]}</li>`

    //console.log(currentHighScore[index][1]);
}

function name(params) {

}