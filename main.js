  
  /*----- constants -----*/

  const PICTURES = [
  "pics/hangmanRopeMain.jpeg",
  "/pics/hangman1.jpeg", 
  "pics/hangman2.jpeg", 
  "pics/hangman3.jpeg", 
  "pics/hangman4.jpeg", 
  "pics/hangman5.jpeg", 
  "pics/hangman6.jpeg",
  ]

  const movieList = ["ALIEN", "INCEPTION", "ARMAGEDDON", "PARASITE", "JAWS", "GLADIATOR", "TANGLED", "ENCHANTED", "ARGO"];

  /*----- state variables -----*/

  let lives
  let selectWord; //hidden word picked
  let guessAllowed; //max 5 allowed, 6th is counted as loss
  let wordLength; //length of spaces in 'word'
  let hiddenWord = [];
  let userGuess;


  /*----- cached elements  -----*/

  const image = document.getElementById("hangMain");
  const userInput = document.getElementById("blank-spaces");
  const lettersToPick = document.getElementById("alphabets");
  const message = document.getElementById("message");
  
  
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


 //if selectword includes the letter from evt.target.innerText
 //then the letter(s) should show up on the text section in the correct place
 //select blank-spaces then update the textContent property
 //otherwise it should show the wrong answer's picture

function handleClicks(evt){
  evt.preventDefault()
  
  if (evt.target.tagName !== "BUTTON") return
 
  selectWord.split("").forEach((letter, idx) => {
  //console.log(letter)
  if(evt.target.innerText === letter){
  hiddenWord[idx] = evt.target.innerText
}
});
  
  if (!selectWord.includes(evt.target.innerText)){
  ++userGuess;
 
  console.log(userGuess);
 }

 
  render();
  
  checkWinner();
  
}


function checkWinner(){
  let joinedWord = hiddenWord.join("");
  //if all blank spaces are filled -> then winning msg
  //if more than 5 guesses -> image changes till img 6 -> losing msg after 5th try.
  console.log(guessAllowed);
    console.log(userGuess);
  console.log(joinedWord);
  if(userGuess >= guessAllowed){
      message.innerText = "You Lost :(";
  }
  if(selectWord === joinedWord){
    message.innerText = "You Won!!!";
  }
}


function render() {
  document.getElementById("blank-spaces").innerHTML = "";
    for(let i=0; i<wordLength; i++){

    document.getElementById("blank-spaces").innerHTML += hiddenWord[i];

  }
  image.src = PICTURES[userGuess];
  
}


function init() {
    defImg();

    guessAllowed = 6;
    userGuess = 0;

    selectWord = randomWord(movieList);
    wordLength = selectWord.length;

    for(let i=0; i<wordLength; i++){
      hiddenWord[i] = "_"
    }
    render();
  }

  init();


console.log(selectWord, wordLength);


