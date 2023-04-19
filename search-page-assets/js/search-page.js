// Beginning of Search Page js

console.log('hello world');
// Global Variables
var tmdbKey = '2a7d4b5715a1c1e68c7c7be6c0b35221';

var resultsEl = document.getElementById('search-results');
var resultDisplayEl = document.getElementById('result-display');
var firstBtn = document.getElementById('frstBtn');
var prevBtn = document.getElementById('prevBtn');
var nextBtn = document.getElementById('nextBtn');
var lastBtn = document.getElementById('lastBtn');

var pageNmbr = 1;

//genres
// {id: 12, name: 'Adventure'}
// {id: 14, name: 'Fantasy'}
// {id: 16, name: 'Animation'}
// {id: 18, name: 'Drama'}
// {id: 27, name: 'Horror'}
// {id: 28, name: 'Action'}
// {id: 35, name: 'Comedy'}
// {id: 36, name: 'History'}
// {id: 37, name: 'Western'}
// {id: 53, name: 'Thriller'}
// {id: 80, name: 'Crime'}
// {id: 99, name: 'Documentary'}
// {id: 878, name: 'Science Fiction'}
// {id: 9648, name: 'Mystery'}
// {id: 10402, name: 'Music'}
// {id: 10749, name: 'Romance'}
// {id: 10751, name: 'Family'}
// {id: 10752, name: 'War'}
// {id: 10770, name: 'TV Movie'}
var genreInputs = [];

// Pseudocode
// ~~~~~~~~~~~~~~~~~~~~~~~
// Api =
// Use variable as a query parameter in api key searches


// Search results =
// call data from api keys
// create dynamic cards
function renderCards(pageNmbr) {
    resultDisplayEl.innerHTML = '';
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=' + tmdbKey + '&language=en-US&include_adult=false&include_video=false&page=' + pageNmbr + '&with_genres=' + genreInputs )
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
};

renderCards();


firstBtn.addEventListener('click', function() {
    if(pageNmbr > 1) {
        pageNmbr = 1
    }
    renderCards(pageNmbr)
});

prevBtn.addEventListener('click', function() {
    if(pageNmbr > 1) {
        pageNmbr--;
    }
    renderCards(pageNmbr)
});

nextBtn.addEventListener('click', function() {
    if(pageNmbr > 0) {
        pageNmbr++;
    } 
    renderCards(pageNmbr)
});

// Filter results =
// Create checkbox aside for filters
// Draw filter data as variable
// Use filter variables in api key