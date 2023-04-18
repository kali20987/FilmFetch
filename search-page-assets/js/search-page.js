// Beginning of Search Page js

console.log('hello world');
// Global Variables
// var omdbKey = '2b24b8e5';
// var tmdbKey = '2a7d4b5715a1c1e68c7c7be6c0b35221';

var resultsEl = document.getElementById('search-results');
var resultDisplayEl = document.getElementById('result-display');

// Pseudocode
// ~~~~~~~~~~~~~~~~~~~~~~~
// Api =
// After search result input
// Set search results as variable
// Use variable as a query parameter in api key searches

// Search results =
// call data from api keys
// create dynamic cards
function renderCards() {
    for(var i = 0; i < 5; i++) {
        var resultCard = document.createElement('div');
        resultCard.classList.add('card', 'col-3', 'm-1');
        // add information to cards
        var movieTitle = document.createElement('h3');
        movieTitle.textContent = 'A movie';
        // append cards to section id="search-results"
        resultCard.appendChild(movieTitle);
        resultDisplayEl.appendChild(resultCard)
    }
};

renderCards();

// Filter results =
// Create checkbox aside for filters
// Draw filter data as variable
// Use filter variables in api key