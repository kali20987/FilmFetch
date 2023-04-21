// Global variables
var mainEl = document.querySelector('main');
var titleEl = document.getElementById('movie-title');
var posterEl = document.getElementById('movie-poster');
var overviewEl = document.getElementById('movie-overview');
// api key
var tmdbKey = '2a7d4b5715a1c1e68c7c7be6c0b35221';

// when a user is directed to this page, it will retrieve the movie ID so information can be displayed
function getMovieName() {
    // takes the url of the current page
    var urlString = document.location.search;
    // splits the url in two and grabs the movie ID number to use in a later function
    var movieId = urlString.split('=')[1];
    
    if(movieId) { // if there is a valid movie ID
        displayResults(movieId); // then it will call a function to display movie data
    } else {// else, this will send the user back to the search results page
        document.location.replace('../search-page-assets/search-page.html') 
    }
};

getMovieName()
// this function displays the relevant movie information
function displayResults(movieId) {
    fetch('https://api.themoviedb.org/3/movie/' + movieId + '?api_key=' + tmdbKey + '&language=en-US&region=US&')
        .then(function(response) {
            // returns the API information in a readable format
            return response.json();
        })
        .then(function(data) {
            if(!data.status) {
               displayError();
               return; 
            }
            // creates a console.log of the readable movie information
            console.log(data);
            // sets the text of title and overview
            titleEl.textContent = data.title;
            overviewEl.textContent = data.overview;
            // displays the movie backdrop
            posterEl.setAttribute('src', 'https://image.tmdb.org/t/p/w300' + data.poster_path);
        });
};

function displayError() {
    var errorMessage = document.createElement('h1')
    var errorReason = document.createElement('h3')

    posterEl.classList.add('d-none')
    errorMessage.classList.add('text-center')
    errorReason.classList.add('text-center')
    
    errorMessage.textContent = '404';
    errorReason.textContent = 'Unfortunately, the movie you are looking for either does not exist or is not released yet';

    mainEl.appendChild(errorMessage);
    mainEl.appendChild(errorReason);
}

