console.log('hello');

var tmdbKey = '2a7d4b5715a1c1e68c7c7be6c0b35221';

// fetch('https://api.themoviedb.org/3/movie/' + movieId + '?api_key=' + tmdbKey + '&language=en-US&region=US&')
//         .then(function(response) {
//             return response.json();
//         }).then(function(data) {
//             console.log(data);
//         });

function getMovieName() {
    var urlString = document.location.search;
    var movieId = urlString.split('=')[1];

    if(movieId) {
        displayResults();
    } else {
        document.location.replace('../search-page-assets/search-page.html')
    }
};

getMovieName()

function displayResults() {

};