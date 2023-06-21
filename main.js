  
  /*----- constants -----*/

  const PICTURES = [
  {img1: "/pics/hangman1.jpeg"}, 
  {img2: "pics/hangman2.jpeg"}, 
  {img3: "pics/hangman3.jpeg"}, 
  {img4: "pics/hangman4.jpeg"}, 
  {img5: "pics/hangman5.jpeg"}, 
  {img6: "pics/hangman6.jpeg"},
  {imgDefault: "pics/hangmanRopeMain.jpeg"}]

  const movieList = ["ALIEN", "INCEPTION", "ARMAGEDDON", "PARASITE", "JAWS", "GLADIATOR", "TANGLED", "ENCHANTED", "ARGO"];

  /*----- state variables -----*/

  let win; //winning msg
  let loss;  //losing msg
  let selectWord; //hidden word picked
  let incorrectGuess; //max 5 allowed, 6th is counted as loss
  let wordLength; //length of spaces in 'word'
  let hiddenWord = [];


  /*----- cached elements  -----*/

  const image = document.getElementById("hangMain");
  const userInput = document.getElementById("blank-spaces");
  const lettersToPick = document.getElementById("alphabets");
  const newGameBtn = document.getElementById("new-game")
  const message = document.getElementById("board");
  
  
  /*----- event listeners -----*/

  lettersToPick.addEventListener('click', handleClicks);
  

  /*----- functions -----*/

function checkWinner(){
  //if all blank spaces are filled- winning msg
  //if not - image changes - losing msg after 5th try. picture change
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
  image.src = PICTURES[0].img1;
 }
render();
}
  

function defImg(){
    image.src = PICTURES[6].imgDefault;
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


function render() {
  document.getElementById("blank-spaces").innerHTML = "";
    for(let i=0; i<wordLength; i++){

      document.getElementById("blank-spaces").innerHTML += hiddenWord[i];
  }
  }
  

  function init() {
    defImg();
    selectWord = randomWord(movieList);
    wordLength = selectWord.length;

    for(let i=0; i<wordLength; i++){
      hiddenWord[i] = "_"
    }
    render();
  }

  init();


console.log(selectWord, wordLength);


