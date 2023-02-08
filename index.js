/*

TODO 
Add dealer ai and cards
Add way to lock in bet when not 21
Add betting system

*/

let player = {
    name: "Jake",
    chips: 1000
}

// let playerEl = document.getElementById('player-el')
// playerEl.textContent = player.name + ": $" + player.chips

function displayImage(src, width, height) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    document.getElementById("cards-img-el").appendChild(img);
}

let cardsImages = [
    ['Cards-Images/2_of_clubs.svg', 'Cards-Images/3_of_clubs.svg', 'Cards-Images/4_of_clubs.svg', 'Cards-Images/5_of_clubs.svg', 'Cards-Images/6_of_clubs.svg', 'Cards-Images/7_of_clubs.svg', 'Cards-Images/8_of_clubs.svg', 'Cards-Images/9_of_clubs.svg', 'Cards-Images/10_of_clubs.svg', 'Cards-Images/jack_of_clubs.svg', 'Cards-Images/queen_of_clubs.svg', 'Cards-Images/king_of_clubs.svg', 'Cards-Images/ace_of_clubs.svg'],
    ['Cards-Images/2_of_diamonds.svg', 'Cards-Images/3_of_diamonds.svg', 'Cards-Images/4_of_diamonds.svg', 'Cards-Images/5_of_diamonds.svg', 'Cards-Images/6_of_diamonds.svg', 'Cards-Images/7_of_diamonds.svg', 'Cards-Images/8_of_diamonds.svg', 'Cards-Images/9_of_diamonds.svg', 'Cards-Images/10_of_diamonds.svg', 'Cards-Images/jack_of_diamonds.svg', 'Cards-Images/queen_of_diamonds.svg', 'Cards-Images/king_of_diamonds.svg', 'Cards-Images/ace_of_diamonds.svg'],
    ['Cards-Images/2_of_hearts.svg', 'Cards-Images/3_of_hearts.svg', 'Cards-Images/4_of_hearts.svg', 'Cards-Images/5_of_hearts.svg', 'Cards-Images/6_of_hearts.svg', 'Cards-Images/7_of_hearts.svg', 'Cards-Images/8_of_hearts.svg', 'Cards-Images/9_of_hearts.svg', 'Cards-Images/10_of_hearts.svg', 'Cards-Images/jack_of_hearts.svg', 'Cards-Images/queen_of_hearts.svg', 'Cards-Images/king_of_hearts.svg', 'Cards-Images/ace_of_hearts.svg'],
    ['Cards-Images/2_of_spades.svg', 'Cards-Images/3_of_spades.svg', 'Cards-Images/4_of_spades.svg', 'Cards-Images/5_of_spades.svg', 'Cards-Images/6_of_spades.svg', 'Cards-Images/7_of_spades.svg', 'Cards-Images/8_of_spades.svg', 'Cards-Images/9_of_spades.svg', 'Cards-Images/10_of_spades.svg', 'Cards-Images/jack_of_spades.svg', 'Cards-Images/queen_of_spades.svg', 'Cards-Images/king_of_spades.svg', 'Cards-Images/ace_of_spades.svg'],
]
// displayImage(cardsImages[0][1], 60, 100)
var sum = 0
let hasBlackJack = false
let isAlive = true
const unchangedDeck = [
    [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11],
    [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11],
    [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11],
    [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11]
]

let availableCards = JSON.parse(JSON.stringify(unchangedDeck));


let cards = [getRandomCard(), getRandomCard()]
function getRandomCard() {
    var suit;
    var cardNumber;
    let tempNum;
    
    // TODO When a card is drawn, set the cards value to 0
    // and if it draws a card whos value is 0 draw a different card
    let value = 1
    while (value === 1) {
        suit = (Math.random() * 4)
        suit = Math.floor(suit)
        cardNumber = (Math.random() * 13)
        cardNumber = Math.floor(cardNumber)
        if (availableCards[suit][cardNumber] === 0) {
            continue
        }
        tempNum = availableCards[suit][cardNumber]
        // availableCards[suit][cardNumber] = 0
        break
    }

    // If an 11 is drawn and the sum goes over 21, it will be turned into a 1
    if (tempNum === 11 && (sum + 11 > 21)){
        console.log("Ace would have been too high, was turned into a 1")
        sum += 1
        cardNumber = 12
        displayImage(cardsImages[suit][cardNumber], 60, 100)
        return 1
    } else {
        sum += tempNum
        displayImage(cardsImages[suit][cardNumber], 60, 100)
        return tempNum
        
    }
    
}

let message = ""
let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

// function startGame(){
//     renderGame()
// }

function renderGame() {
    sumEl.textContent = "Sum: " + sum
    let cardsVal = "Cards:"
    for (let i = 0; i < cards.length; i++) {
        cardsVal += " " + cards[i]
        
    }
    console.log(cardsVal)
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "WOOHOOOO"
        hasBlackJack = true
    } else {
        message = "yikes buddy"
        isAlive = false
    }

    messageEl.textContent = message
}


function newCard() {
    if (sum < 21) {
        let value = getRandomCard()
        cards.push(value)
        renderGame()
    }
}

function startGame() {
    document.getElementById("cards-img-el").innerHTML = null
    sum = 0
    cards = [getRandomCard(), getRandomCard()]
    document.querySelector("#start-btn").textContent = "NEW GAME"
    // cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
    // sum = cards[0] + cards[1]
    sumEl.textContent = "Sum: " + sum
    renderGame()
}

function newDeck() {
    console.log(availableCards)
    availableCards = JSON.parse(JSON.stringify(unchangedDeck));
    startGame()
    console.log(unchangedDeck)
    console.log(availableCards)
}

// "start-btn">START GAME</button>
//         <br>
//         <button id="card-btn">NEW CARD</button>
//         <br>
//         <button id="newDeck-btn

document.getElementById("start-btn").addEventListener("click", function() {
    startGame()
})

document.getElementById("card-btn").addEventListener('click', function(){
    newCard()
})

// document.getElementById("newDeck-btn").addEventListener('click', function(){
//     newDeck()
// })