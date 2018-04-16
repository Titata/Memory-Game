/*
 * Create a list that holds all of your cards
 */
const cardSet = ["fa fa-diamond",
"fa fa-paper-plane-o",
"fa fa-anchor",
"fa fa-bolt",
"fa fa-cube",
"fa fa-anchor",
"fa fa-leaf",
"fa fa-bicycle",
"fa fa-diamond",
"fa fa-bomb",
"fa fa-leaf",
"fa fa-bomb",
"fa fa-bolt",
"fa fa-bicycle",
"fa fa-paper-plane-o",
"fa fa-cube"];

const deck = document.querySelector(".deck");

const cards = document.querySelectorAll(".deck li");

let movesCount = document.querySelector(".moves");

let move = 0;//count moves

let click = 0;//count clicks

const starRate = document.querySelector(".stars");

let star = document.querySelectorAll(".stars li");

let openCards = [];//store opened cards

let matchCards = [];//store matched cards

const restart = document.querySelector(".restart");


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */


// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

//start new game function
function newGame () {
    //remove cards from deck
    deck.innerHTML = "";
    //shuffle cards
    let shuffledCardSet = shuffle(cardSet);
    //add cards to deck and icons to each card
    cards.forEach(function(card) {
      deck.appendChild(card);
      card.classList = "card";
      for (let i = 0; i < shuffledCardSet.length; i++) {
        cards[i].firstElementChild.className = shuffledCardSet[i]
        }
    });
}

//Start new game when window is loaded
document.addEventListener("DOMContentLoaded", newGame);

//Start new game when restart button is clicked
restart.addEventListener("click", newGame);

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */


//Open cards on click
deck.addEventListener("click", function(event) {
    if (!(event.target.className === "deck") && (openCards.length <= 2)) {
        open(event);
        addOpenedCards(event);
      }
});

//function to open card's icon
function open(event) {
    if (openCards.length < 2) {
      event.target.className = "card open show disable";
      } else {
        return false;
    }
}

//function to add opened card to the list of opened cards
function addOpenedCards(event) {
    openCards.push(event.target.firstElementChild);
    //Check if two cards are opened
    if (openCards.length === 2) {
        //Check if two opened cards match
        if (openCards[0].classList.value === openCards[1].classList.value) {
            matched(openCards, matchCards);
        } else {
            unmatched(openCards);
        }
    }
}

//If two opened cards match keep them opened
function matched(arr1, arr2) {
    setTimeout(function(){
        arr1[0].parentNode.classList.remove('open', 'show');
        arr1[1].parentNode.classList.remove('open', 'show');
        arr1[0].parentNode.classList.add('match');
        arr1[1].parentNode.classList.add('match');
        arr2.push(arr1[0], arr1[1]);
        emptyArray(arr1);
    }, 300);

    // If all cards match open modal
    setTimeout(function() {
        if (arr2.length === 16) {
            gameOver();
        }
    }, 1000);
}

// Empty an array
function emptyArray(arr) {
    arr.splice(0, arr.length);
}

//If two opened cards don't match close them
function unmatched(arr) {
    setTimeout(function() {
        arr[0].parentNode.classList.add("unmatched");
        arr[1].parentNode.classList.add("unmatched");
    }, 400);
    setTimeout(function() {
        arr[0].parentNode.classList.remove("open", "show", "disable", "unmatched");
        arr[1].parentNode.classList.remove("open", "show", "disable", "unmatched");
        openCards = [];
    }, 1200);
}
