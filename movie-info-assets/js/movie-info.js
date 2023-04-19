console.log('hello');

var titleEl = document.getElementById('movie-title');
var posterEl = document.getElementById('movie-poster');
var overviewEl = document.getElementById('movie-overview');

var tmdbKey = '2a7d4b5715a1c1e68c7c7be6c0b35221';

function getMovieName() {
    var urlString = document.location.search;
    var movieId = urlString.split('=')[1];

    if(movieId) {
        displayResults(movieId);
    } else {
        document.location.replace('../search-page-assets/search-page.html')
    }
};

getMovieName()

function displayResults(movieId) {
    fetch('https://api.themoviedb.org/3/movie/' + movieId + '?api_key=' + tmdbKey + '&language=en-US&region=US&')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            titleEl.textContent = data.title;
            overviewEl.textContent = data.overview;

            posterEl.setAttribute('src', 'https://image.tmdb.org/t/p/w500' + data.backdrop_path);
        });
};