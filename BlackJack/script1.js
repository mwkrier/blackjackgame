//arrays to create deck of cards
var suit = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
var value = ['Ace', 'King', 'Queen', 'Jack', 'Ten', 'Nine', 'Eight', 
            'Seven', 'Six', 'Five', 'Four', 'Three', 'Two'];

// getElement by id values
var newGame = document.getElementById('new-game');
var dealerPlay = document.getElementById('dealer-area');
var dealerScore = document.getElementById('dealer-score');
var playerPlay = document.getElementById('player-area');
var playerScore = document.getElementById('payer-score');
var hit = document.getElementById('hit');
var stay = document.getElementById('stay');

//hit & stay display values
hit.style.dsiplay = 'none';
stay.style.dsiplay = 'none';

//empty array for deck, dealer, player cards
var deck = [];
var dealerCards = [];
var playerCards = [];

//new game function
newGame.addEventListener('click', function(){
    hit.style.display = 'block';
    stay.style.display = 'block';

    dealerHand();

});

//creates deck of cards
for(suitIndex = 0; suitIndex < suit.length; suitIndex++) {
    for(valueIndex = 0; valueIndex < value.length; valueIndex++){
        var cards = value[valueIndex]+ ' of ' + suit[suitIndex];
        deck.push(cards);
    }
};
//shuffle cards 
function shuffleCards(){
    for (var i = 0; i < deck.length; i++){
        var drawnCard = Math.trunc(Math.random()*deck.length);
        var playedCard = deck[drawnCard];
        deck[drawnCard] = deck[i];
        deck[i] = playedCard;
    }
    console.log(deck);
};

//card values
function getCardValue(cards){
    // cards = ten of clubs
    const splitStr = cards.split(' ')
    const value = splitStr[0]
    switch(value){
        case 'Ace':
            return 1;
        case 'Two':
            return 2;
        case 'Three':
            return 3;
        case 'Four':
            return 4;
        case 'Five':
            return 5;
        case 'Six':
            return 6;
        case 'Seven':
            return 7;
        case 'Eight':
            return 8;
        case 'Nine':
            return 9;
        case 'Ten':
            return 10;
        case 'Jack':
            return 10;
        case 'Queen':
            return 10;
        case 'King':
            return 10;
        default:
            return 0
    }
};

// add score function


// dealer hand function
function dealerHand(){
    dealerPlay.innerHTML += "Dealer Draws <br>" + deck[0] + "<br>" + deck[1];
    getCardValue(deck[0], deck[1]);
    console.log(deck[0].value, deck[1].value);

    stay.addEventListener(click)
};

// player hand function
function playerHand(){
    playerPlay.innerHTML += "Player Draws <br>" += deck[2] + "<br>" + deck[3];
    playerCards.push(deck[2], deck[3]);


};

function addPlayerScore(){

}