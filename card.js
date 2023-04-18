// 1. Create a variable, firstCard and secondCard.
// set their values to a random number between 2-11


// Create the player object. Give it two keys, name and chips
let player = {
    name: "Player",
    chips: 990
}
let cards = []
let sum = 0
let message = ""
let hasBlackjack = false
let isAlive = false

let startBtn = document.getElementById("start-btn")
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

// Grab ahold of the player-el paragraph and store it in a variable called playerEl

function getRandomCard() {
    // if 1  return 11
    //if 11-13 return 10
    let randomNewNum = Math.floor( Math.random() *13 ) + 1
    if (randomNewNum > 10) {
        return 10
    } else if (randomNewNum === 1) {
        return 11
    } else {
        return randomNewNum
    }
    
}



function startGame() {
    console.log("clicked")
    // Generate two random numbers]
    // Re-assign the cards and sum variables so that the game can start
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
    
}


function renderGame() {
    cardsEl.textContent = "Cards: "
    for ( let i = 0; i < cards.length; i ++ ) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if ( sum <= 20 ) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackjack = true
        // Render the player's name and chips in playerEl
        playerEl.textContent = player.name + ": $" + player.chips
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    
    console.log(message)
    messageEl.textContent = message
}


function newCard() {
    // Only allow the player to get a new card if she IS alive and does not have BlackJack
    if ( isAlive === true &&  hasBlackjack === false)  {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}