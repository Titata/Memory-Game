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

/*setting variables*/
const restartBtn = document.querySelector(".restart");

const deck = document.querySelector(".deck");

const cards = document.querySelectorAll(".card");

let openCards = [];//store opened cards

let matchedCards = [];//store matched cards

let movesCount = document.querySelector(".moves");

let move = 0;//count moves

let click = 0;//count clicks

const starRate = document.querySelector(".stars");

let star = document.querySelectorAll(".stars li");

/*Start new game on document load*/
document.addEventListener('DOMContentLoaded', newGame);

/*Start new game when restart button press*/
function (newGame) {
  /*empty cards arrays*/
  emptyArray(openedCards);
  emptyArray(matchedCards);

  click = 0;
  move = 0;
};

restartBtn.addEventListener("click", function() {
  startGane();
});
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
