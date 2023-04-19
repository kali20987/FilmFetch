// Beginning of Search Page js

console.log('hello world');
// Global Variables
var tmdbKey = '2a7d4b5715a1c1e68c7c7be6c0b35221';

var resultsEl = document.getElementById('search-results');
var resultDisplayEl = document.getElementById('result-display');

//genres
//
var genreInputs = [];

// Pseudocode
// ~~~~~~~~~~~~~~~~~~~~~~~
// Api =
// Use variable as a query parameter in api key searches
fetch('https://api.themoviedb.org/3/discover/movie?api_key=' + tmdbKey + '&language=en-US&include_adult=false&include_video=false&page=1&with_genres=' + genreInputs )
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        for(var i = 0; i < data.results.length; i++) {
            var resultCard = document.createElement('div');
            resultCard.classList.add('results-cards', 'card', 'col-2', 'm-1', 'mx-4', 'p-2', 'bg-dark', 'text-light');
            // add information to cards
            var moviePoster = document.createElement('img');
            moviePoster.setAttribute('alt', 'Movie Poster');
            moviePoster.setAttribute('src', 'https://image.tmdb.org/t/p/w500' + data.results[i].poster_path);
            
            var movieTitle = document.createElement('h5');
            movieTitle.classList.add('col', 'my-2');
            movieTitle.textContent = data.results[i].title;

            var movieRating = document.createElement('p');
            movieRating.classList.add('align-items-end', 'border-top');
            movieRating.textContent = data.results[i].vote_average + ' ⭐';
            // append cards to section id="search-results"
            resultCard.appendChild(moviePoster);
            resultCard.appendChild(movieTitle);
            resultCard.appendChild(movieRating);
            resultDisplayEl.appendChild(resultCard)
        }
    });

// Search results =
// call data from api keys
// create dynamic cards
function renderCards() {
    
};

renderCards();

// Filter results =
// Create checkbox aside for filters
// Draw filter data as variable
// Use filter variables in api key