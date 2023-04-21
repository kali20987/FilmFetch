var searchInput = document.querySelector("#searchMovies");
const apiKey = "2a7d4b5715a1c1e68c7c7be6c0b35221";
var searchBtn = document.querySelector("#submit");
const movieURL = "https://api.themoviedb.org/3/discover/movie?api_key=";
var userFormEl = document.querySelector("#user-form");
var submitButtonEl = document.querySelector("#submit-button");

console.log('In recs.js, after initializations');

var data = '';

console.log(searchInput);

function showCards(data) {
    console.log(data);
    document.getElementById("card1Title").innerHTML = data.results[0].title;
    document.getElementById("card1score").innerHTML = 'Star score =' + data.results[0].vote_average;

}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

var formSubmitHandler = function (event) {
    event.preventDefault();
    var userInput = searchInput.value.toLowerCase();
    if (userInput.length == 0) {
        return;
    }



    fetch(movieURL + apiKey + "&language=en-US&include_adult=false&include_video=false&page=1&with_genres=" + userInput)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            var n = 0;
            while (n < 3) {
                i = getRandomInt(20);
                cardTitles = document.getElementsByClassName('cardTitle');
                cardTitles[n].innerHTML = data.results[i].title;
                cardScores = document.getElementsByClassName('cardScore');
                cardScores[n].innerHTML = 'Star score = ' + data.results[i].vote_average;
                cardImages = document.getElementsByClassName('card-img-top');
                cardImages[n].src = 'https://image.tmdb.org/t/p/w500' + data.results[i].poster_path;
                cardDescriptions = document.getElementsByClassName('cardDescription');
                cardScores[n].innerHTML = data.results[i].overview;

                n++;
            }

        }
        )
}


submitButtonEl.addEventListener("click", formSubmitHandler);

