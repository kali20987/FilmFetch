var searchInput = document.getElementById("searchMovies");
const apiKey = "2a7d4b5715a1c1e68c7c7be6c0b35221";
var searchBtn = document.getElementById("submit");
const movieURL = "https://api.themoviedb.org/3/discover/movie?api_key=";

var data = '';

console.log(searchInput);

function showCards(data) {
    console.log(data);
    document.getElementById("card1Title").innerHTML = data.results[0].title;
    document.getElementById("card1score").innerHTML = 'Star score =' + data.results[0].vote_average;

}

searchBtn.addEventListener("click", function (event) {
    event.preventDefault();
    var userInput = searchInput.value.toLowerCase();
    if (userInput.length == 0) {
        return;
    }



    fetch(movieURL + apiKey + "&language=en-US&include_adult=false&include_video=false&page=2&with_genres=" + userInput)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            cardTitles = document.getElementsByClassName('cardTitle');
            for (var i = 0; i < 3; i++){
                cardTitles[i].innerHTML=data.results[i].title;
            }
            cardScores = document.getElementsByClassName('cardScore');
            for (var i = 0; i < 3; i++){
                cardScores[i].innerHTML= 'Star score = ' +data.results[i].vote_average;
            }
            cardImages = document.getElementsByClassName('card-img-top');
            for (var i = 0; i < 3; i++){
                cardImages[i].src='https://image.tmdb.org/t/p/w500' + data.results[i].poster_path;
            }
            cardDescriptions = document.getElementsByClassName('cardDescription');
            for (var i = 0; i < 3; i++){
                cardScores[i].innerHTML= data.results[i].overview;
            }

            
            }
    )
})