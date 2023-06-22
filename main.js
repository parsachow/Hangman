  
  /*----- constants -----*/

  const PICTURES = [
  "pics/hangmanRopeMain.jpeg",
  "pics/hangman1.jpeg", 
  "pics/hangman2.jpeg", 
  "pics/hangman3.jpeg", 
  "pics/hangman4.jpeg", 
  "pics/hangman5.jpeg", 
  "pics/hangman6.jpeg",
  ]

  const movieList = ["ALIEN", "INCEPTION", "ARMAGEDDON", "PARASITE", "JAWS", "GLADIATOR", "TANGLED", "ENCHANTED", "ARGO", "AVATAR", "PSYCHO", "CASABLANCA"];


  /*----- state variables -----*/

  let selectWord; //hidden word picked from movielist
  let guessAllowed; //max 6 allowed
  let wordLength; //length of 'selectword'
  let hiddenWord = [];
  let userGuess; //wrong guess being counted
  let win;
  let loss;


  /*----- cached elements  -----*/

  const image = document.getElementById("hangMain");
  const userInput = document.getElementById("blank-spaces");
  const lettersToPick = document.getElementById("alphabets");
  const message = document.getElementById("message");
  const winCount = document.getElementById("winCnt");
  const lossCount = document.getElementById("lossCnt");
  
  /*----- event listeners -----*/

  lettersToPick.addEventListener('click', handleClicks);
  

  /*----- functions -----*/

function defImg(){
  image.src = PICTURES[0];
}


const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));


function createButton() {
  for (let i=0; i<alphabet.length; i++){
  document.getElementById("alphabets").innerHTML += "<button>" + alphabet[i] + "</button>"
}}

  createButton();


function randomWord(movieList) {
  return movieList[Math.floor(Math.random()*movieList.length)];
}
 //if selectword includes the letter clicked from evt.target.innerText
 //then the letter(s) should show up on the blank space section in the correct index/location
 //selected letters should be placed in the correct location(s)
 //if guess is incorrect, hangman picture gets updated and number of guessAllowed gets decresed

function handleClicks(evt){
  evt.preventDefault()
  
  if (evt.target.tagName !== "BUTTON") return
 
  selectWord.split("").forEach((letter, idx) => {

    if(evt.target.innerText === letter){
    hiddenWord[idx] = evt.target.innerText
  }
});
  
  if (!selectWord.includes(evt.target.innerText)){
  ++userGuess;
 
 }
 
  render();
  
  checkWinner();
  
}


function checkWinner(){
  let joinedWord = hiddenWord.join("");

  //if all blank spaces are filled -> then winning msg
  //if 6 guesses -> image changes till img 6 -> losing msg
  
  if(userGuess >= guessAllowed){
      message.innerText = "You Lost :(";
      loss = +1;
      lossCount.innerText = "Loss: " + loss;
  }
  if(selectWord === joinedWord){
    message.innerText = "You Won!!!";
    win = +1;
    winCount.innerText = "Win: " + win;
  }
}


function render() {
  userInput.innerHTML = "";
    for(let i=0; i<wordLength; i++){

    userInput.innerHTML += hiddenWord[i];
  }
  //picture updated with each wrong guess
  image.src = PICTURES[userGuess];
  
}


function init() {
  defImg();

  guessAllowed = 6;
  userGuess = 0;
  win = 0;
  loss = 0;

  selectWord = randomWord(movieList);
  wordLength = selectWord.length;

  for(let i=0; i<wordLength; i++){
    hiddenWord[i] = "_"
  }
  render();
}

  init();
