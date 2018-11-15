var suit = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
var values = ['Ace', 'King', 'Queen', 'Jack', 'Ten', 'Nine', 'Eight', 
            'Seven', 'Six', 'Five', 'Four', 'Three', 'Two'];

var deck = [];

var newGame = document.getElementById('new-game');
var hit = document.getElementById('hit');
var stay = document.getElementById('stay');
var game = document.getElementById('dealer-area');
var dscore = document.getElementById('dealer-score');
var pscore = document.getElementById('player-score');
var player = document.getElementById('player-area');
var pAgain = document.getElementById('play-again');

var dcards = [];
var pcards = [];
var dealerScore = [];
var playerScore = [];

game.innerHTML = 'Welcome to the Blackjack Table <br> <br>';

hit.style.display = 'none';
stay.style.display = 'none';
pAgain.style.display='none';

//Start a new game
newGame.addEventListener('click', function(){ 

    hit.style.display = 'block';
    stay.style.display = 'block';
    pAgain.style.display = 'block';

    dealersHand();
    playersHand();

});

//reset game
pAgain.addEventListener('click', function(){
    window.location.reload(true);
});

//creates deck of cards
for(suitIndex = 0; suitIndex < suit.length; suitIndex++) {
    for(valuesIndex = 0; valuesIndex < values.length; valuesIndex++){
        var cards = values[valuesIndex]+ ' of ' + suit[suitIndex];
        deck.push(cards);
    }
};

//assign values to cards
function getCardValue(cards){
    // cards = ten of clubs
    const splitStr = cards.split(' ');
    const amount = splitStr[0]
    switch(amount){
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

//shuffle cards in empty deck array
function shuffleCards(){
    for (var i = 0; i < deck.length; i++){
        var drawnCard = Math.trunc(Math.random()*deck.length);
        var playedCard = deck[drawnCard];
        deck[drawnCard] = deck[i];
        deck[i] = playedCard;
    }
    console.log(deck);
};
shuffleCards();


//dealers hand, dealt cards, waits on stay for further calculation
function dealersHand(){
    game.innerHTML += "Dealer Draws <br>" + deck[0] + "<br>" + deck[2] + "<br>"
    
    var score = [];
    score.push(getCardValue(deck[0])+getCardValue(deck[2]));
    dealerScore.push(score);

    dscore.innerHTML = "Dealer Score: " + score;

    function dScoreRun(){
        while(score <= 19){
            var nextCard = randCard();
            game.innerHTML += nextCard + "<br>";
            dcards.push(nextCard);
            score.splice( 0, 1, parseInt(score) + getCardValue(nextCard));
            dscore.innerHTML = "Dealer Score: " + score
            console.log(score);
            dealerScore.splice(0,1, score);
            console.log(dealerScore, "dealer Score");
        }
    };
    
    stay.addEventListener('click', function(){
        dScoreRun();
        winLose();
    });
};


function playersHand(){
    player.innerHTML +=  "<br> Player Draws <br>" + deck[1] + "<br>" + deck[3] + "<br>"
    
    var score = [];
    score.push(getCardValue(deck[1])+getCardValue(deck[3]));
    playerScore.push(score[0]);
    pscore.innerHTML = "Player's Score: " + score;


    hit.addEventListener('click', function(){
        var newCard = randCard();
        player.innerHTML += newCard + "<br>";
        pcards.push(newCard);
        console.log(newCard);
        
        score.splice( 0, 1, parseInt(score) + getCardValue(newCard));
            pscore.innerHTML = "Player's Score: " + score;
            console.log(score);
        
        playerScore.splice(0, 1, score);
        console.log(playerScore);
        });
    };


function randCard(){   
    for (var i = 0; i < deck.length; i++){
        var drawnCard = Math.trunc(Math.random()*deck.length);
        var playedCard = deck[drawnCard];
        deck[drawnCard] = deck[i];
        deck[i] = playedCard;
        return playedCard;
    }
};

//conditionals for win/loss
function winLose(){
    if(dealerScore === 21 && dealerScore < playerScore){
        alert("Dealer Wins");
    }if(dealerScore > playerScore && playerScore <= 21){
        alert("Player Wins");
    }if(dealerScore > 21 && playerScore > 21){
        alert("House Wins");
    }if(dealerScore === playerScore){
        alert("It's a wash!");
    }
};
console.log(randCard());