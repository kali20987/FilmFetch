// Global Variables
var tmdbKey = '2a7d4b5715a1c1e68c7c7be6c0b35221';

var resultsEl = document.getElementById('search-results');
var resultDisplayEl = document.getElementById('result-display');
var firstBtn = document.getElementById('frstBtn');
var prevBtn = document.getElementById('prevBtn');
var nextBtn = document.getElementById('nextBtn');
// sets the default page number to 1
var pageNmbr = 1;

// Added variables for targeting user-rating checkboxes.
var checkStarEight = document.querySelector("input[id=star-8]");
var checkStarSix = document.querySelector("input[id=star-6]");
var checkStarFour = document.querySelector("input[id=star-4]");
var checkstarTwo = document.querySelector("input[id=star-2]");
var checkStarZero = document.querySelector("input[id=star-0]");
// Added variables for targetting genre-specific checkboxes.
var checkAction = document.querySelector("input[id=genre-action]");
var checkAdventure = document.querySelector("input[id=genre-adventure]");
var checkAnimation = document.querySelector("input[id=genre-animation]");
var checkComedy = document.querySelector("input[id=genre-comedy]");
var checkCrime = document.querySelector("input[id=genre-crime]");
var checkDocumentary = document.querySelector("input[id=genre-documentary]");
var checkDrama = document.querySelector("input[id=genre-drama]");
var checkFamily = document.querySelector("input[id=genre-family]")
var checkFantasy = document.querySelector("input[id=genre-fantasy]");
var checkHistory = document.querySelector("input[id=genre-history");
var checkHorror = document.querySelector("input[id=genre-horror");
var checkMusic = document.querySelector("input[id=genre-music]");
var checkMystery = document.querySelector("input[id=genre-mystery");
var checkRomance = document.querySelector("input[id=genre-romance");
var checkScifi = document.querySelector("input[id=genre-scifi");
var checkTvMovie = document.querySelector("input[id=genre-tvmovie");
var checkThriller = document.querySelector("input[id=genre-thriller");
var checkWar = document.querySelector("input[id=genre-war]");
var checkWestern = document.querySelector("input[id=genre-western");




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
var releaseDate;
var voteAverage;

// Pseudocode
// ~~~~~~~~~~~~~~~~~~~~~~~
// Api =
// Use variable as a query parameter in api key searches


// renders search result cards to the search results page
function renderCards(pageNmbr) {
    // resets the innerHTML so that nothing remains before new information is displayed
    resultDisplayEl.innerHTML = '';
    // the max page limit a user can hit is 500. If they reach this point and try to go further, it will just redisplay the last page
    if (pageNmbr > 500) {
        pageNmbr = 500; // this needs to be changed to an error screen
    };
    // fetchs the API for The Movie Database
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=' + tmdbKey + '&language=en-US&region=US&include_adult=false&include_video=false&page=' + pageNmbr + '&with_genres=' + genreInputs)
        .then(function (response) {
            // returns API information in a readable json format
            return response.json();
        })
        .then(function (data) {
            // displays API information to the console so that I can read it
            console.log(data);
            // iterates through the data.results to display all of the necessary movie information
            for (var i = 0; i < data.results.length; i++) {
                // creates an anchor tag to wrap the movie information in. When a user clicks the element, they will be redirected to a page that displays more detailed movie information
                var resultCard = document.createElement('a');
                resultCard.classList.add('results-cards', 'card', 'col-2', 'm-1', 'mx-4', 'p-2', 'bg-dark', 'text-light');
                resultCard.setAttribute('href', '../movie-info-assets/movie-info.html?movie=' + data.results[i].id)
                // creates an image element to display the movie poster
                var moviePoster = document.createElement('img');
                moviePoster.setAttribute('alt', 'Movie Poster');
                moviePoster.setAttribute('src', 'https://image.tmdb.org/t/p/w500' + data.results[i].poster_path);
                // creates a title element to display the movie title
                var movieTitle = document.createElement('h5');
                movieTitle.classList.add('col', 'my-2');
                movieTitle.textContent = data.results[i].title;
                // creates a text element to display the average viewer rating
                var movieRating = document.createElement('p');
                movieRating.classList.add('align-items-end', 'border-top');
                movieRating.textContent = data.results[i].vote_average + ' ⭐';
                // append movie info elements to the result card
                resultCard.appendChild(moviePoster);
                resultCard.appendChild(movieTitle);
                resultCard.appendChild(movieRating);
                // appends the result cards to the overall results display
                resultDisplayEl.appendChild(resultCard)
            }
        });
};
// calls the render cards function
renderCards();

// when a user clicks this button, this will display the results for the first page
firstBtn.addEventListener('click', function () {
    if (pageNmbr > 1) {
        pageNmbr = 1
    }
    renderCards(pageNmbr)
});
// when a user clicks this button, this will display the results for the previous page
prevBtn.addEventListener('click', function () {
    if (pageNmbr > 1) {
        pageNmbr--;
    }
    renderCards(pageNmbr)
});
// when a user clicks this button, this will display the results for the next page
nextBtn.addEventListener('click', function () {
    if (pageNmbr > 0) {
        pageNmbr++;
    }
    renderCards(pageNmbr)
});

// Filter results =
// Create checkbox aside for filters
// Draw filter data as variable
// Use filter variables in api key



// Lines below add functionality for filtering via  multiple checkboxes in search filter.

checkAction.addEventListener('change', function () {
    if (this.checked) {
        genreInputs.push(checkAction.value);
    } else {
        for (var i = 0; i < genreInputs.length; i++) {
            if (genreInputs[i] === checkAction.value) {
                genreInputs.splice(i, checkAction.value);
            }
        }
    }
    renderCards();
});

checkAdventure.addEventListener('change', function () {
    if (this.checked) {
        genreInputs.push(checkAdventure.value);
    } else {
        for (var i = 0; i < genreInputs.length; i++) {
            if (genreInputs[i] === checkAdventure.value) {
                genreInputs.splice(i, checkAdventure.value);
            }
        }
    }
    renderCards();
});

checkAnimation.addEventListener('change', function () {
    if (this.checked) {
        genreInputs.push(checkAnimation.value);
    } else {
        for (var i = 0; i < genreInputs.length; i++) {
            if (genreInputs[i] === checkAnimation.value) {
                genreInputs.splice(i, checkAnimation.value);
            }
        }
    }
    renderCards();
});

checkComedy.addEventListener('change', function () {
    if (this.checked) {
        genreInputs.push(checkComedy.value);
    } else {
        for (var i = 0; i < genreInputs.length; i++) {
            if (genreInputs[i] === checkComedy.value) {
                genreInputs.splice(i, checkComedy.value);
            }
        }
    }
    renderCards();
});

checkCrime.addEventListener('change', function () {
    if (this.checked) {
        genreInputs.push(checkCrime.value);
    } else {
        for (var i = 0; i < genreInputs.length; i++) {
            if (genreInputs[i] === checkCrime.value) {
                genreInputs.splice(i, checkCrime.value);
            }
        }
    }
    renderCards();
});

checkDocumentary.addEventListener('change', function () {
    if (this.checked) {
        genreInputs.push(checkDocumentary.value);
    } else {
        for (var i = 0; i < genreInputs.length; i++) {
            if (genreInputs[i] === checkDocumentary.value) {
                genreInputs.splice(i, checkDocumentary.value);
            }
        }
    }
    renderCards();
});

checkDrama.addEventListener('change', function () {
    if (this.checked) {
        genreInputs.push(checkDrama.value);
    } else {
        for (var i = 0; i < genreInputs.length; i++) {
            if (genreInputs[i] === checkDrama.value) {
                genreInputs.splice(i, checkDrama.value);
            }
        }
    }
    renderCards();
});

checkFamily.addEventListener('change', function () {
    if (this.checked) {
        genreInputs.push(checkFamily.value);
    } else {
        for (var i = 0; i < genreInputs.length; i++) {
            if (genreInputs[i] === checkFamily.value) {
                genreInputs.splice(i, checkFamily.value);
            }
        }
    }
    renderCards();
});

checkFantasy.addEventListener('change', function () {
    if (this.checked) {
        genreInputs.push(checkFantasy.value);
    } else {
        for (var i = 0; i < genreInputs.length; i++) {
            if (genreInputs[i] === checkFantasy.value) {
                genreInputs.splice(i, checkFantasy.value);
            }
        }
    }
    renderCards();
});

checkHistory.addEventListener('change', function () {
    if (this.checked) {
        genreInputs.push(checkHistory.value);
    } else {
        for (var i = 0; i < genreInputs.length; i++) {
            if (genreInputs[i] === checkHistory.value) {
                genreInputs.splice(i, checkHistory.value);
            }
        }
    }
    renderCards();
});

checkHorror.addEventListener('change', function () {
    if (this.checked) {
        genreInputs.push(checkHorror.value);
    } else {
        for (var i = 0; i < genreInputs.length; i++) {
            if (genreInputs[i] === checkHorror.value) {
                genreInputs.splice(i, checkHorror.value);
            }
        }
    }
    renderCards();
});

checkMusic.addEventListener('change', function () {
    if (this.checked) {
        genreInputs.push(checkMusic.value);
    } else {
        for (var i = 0; i < genreInputs.length; i++) {
            if (genreInputs[i] === checkMusic.value) {
                genreInputs.splice(i, checkMusic.value);
            }
        }
    }
    renderCards();
});

checkMystery.addEventListener('change', function () {
    if (this.checked) {
        genreInputs.push(checkMystery.value);
    } else {
        for (var i = 0; i < genreInputs.length; i++) {
            if (genreInputs[i] === checkMystery.value) {
                genreInputs.splice(i, checkMystery.value);
            }
        }
    }
    renderCards();
});

checkRomance.addEventListener('change', function () {
    if (this.checked) {
        genreInputs.push(checkRomance.value);
    } else {
        for (var i = 0; i < genreInputs.length; i++) {
            if (genreInputs[i] === checkRomance.value) {
                genreInputs.splice(i, checkRomance.value);
            }
        }
    }
    renderCards();
});

checkScifi.addEventListener('change', function () {
    if (this.checked) {
        genreInputs.push(checkScifi.value);
    } else {
        for (var i = 0; i < genreInputs.length; i++) {
            if (genreInputs[i] === checkScifi.value) {
                genreInputs.splice(i, checkScifi.value);
            }
        }
    }
    renderCards();
});

checkTvMovie.addEventListener('change', function () {
    if (this.checked) {
        genreInputs.push(checkTvMovie.value);
    } else {
        for (var i = 0; i < genreInputs.length; i++) {
            if (genreInputs[i] === checkTvMovie.value) {
                genreInputs.splice(i, checkTvMovie.value);
            }
        }
    }
    renderCards();
});

checkThriller.addEventListener('change', function () {
    if (this.checked) {
        genreInputs.push(checkThriller.value);
    } else {
        for (var i = 0; i < genreInputs.length; i++) {
            if (genreInputs[i] === checkThriller.value) {
                genreInputs.splice(i, checkThriller.value);
            }
        }
    }
    renderCards();
});

checkWar.addEventListener('change', function () {
    if (this.checked) {
        genreInputs.push(checkWar.value);
    } else {
        for (var i = 0; i < genreInputs.length; i++) {
            if (genreInputs[i] === checkWar.value) {
                genreInputs.splice(i, checkWar.value);
            }
        }
    }
    renderCards();
});

checkWestern.addEventListener('change', function () {
    if (this.checked) {
        genreInputs.push(checkWestern.value);
    } else {
        for (var i = 0; i < genreInputs.length; i++) {
            if (genreInputs[i] === checkWestern.value) {
                genreInputs.splice(i, checkWestern.value);
            }
        }
    }
    renderCards();
});

