


let cards = [];
let playing = false;
let hasBlackJack = false;
let text = "";
let sum = 0;
let cardsEl = document.querySelector(".cards");
let sumEl = document.querySelector(".sum");
let button1 = document.querySelector("#btn1");
let button2 = document.querySelector("#btn2");
let textEl = document.querySelector(".text");
let playerEl = document.querySelector("#player-el");

/*let player ={
    name: "",
    chips: 200
}
let playerInfo =  player.name + ": $" + player.chips;
playerEl.textContent = playerInfo;*/

function getRandomCards() {
       let randomNumber = Math.floor(Math.random()*13)+ 1; // 1 to 13
       if (randomNumber > 10){
           return 10;
       }else if (randomNumber === 1){
           return 11;
       }else{
           return randomNumber;
       }    
}

button1.addEventListener("click", startGame);

function startGame(){
         playing = true;
         let card1 = getRandomCards();
         let card2 = getRandomCards();
         cards = [card1, card2];
         sum = card1 + card2; 
         renderGame();
}

function renderGame(){
         
         cardsEl.textContent = "Cards: ";
           for(let i = 0; i < cards.length; i++){
              cardsEl.textContent += cards[i] + " ";
           }   
      
          sumEl.textContent = "Sum: " + sum;


           if (sum < 21){

            text = "Do you want a new card?";
            
           }else if (sum === 21){

            text = "You've got BlackJack!";
            hasBlackJack = true;

           }else{

            text = "You're out of the game!";
            playing = false;
           }
        textEl.textContent = text;
}

button2.addEventListener("click", newCard)
     
function newCard() {
    if (playing === true && hasBlackJack === false){
        let getNewCard = getRandomCards();
        cards.push(getNewCard);
        sum += getNewCard;
        renderGame();
    }
    
}
    

