  /*----- constants -----*/

  const PICTURES = [
  {img1: "/pics/hangman1.jpeg"}, 
  {img2: "pics/hangman2.jpeg"}, 
  {img3: "pics/hangman3.jpeg"}, 
  {img4: "pics/hangman4.jpeg"}, 
  {img5: "pics/hangman5.jpeg"}, 
  {img6: "pics/hangman6.jpeg"},
  {imgDefault: "pics/hangmanRopeMain.jpeg"}]

  const movieList = ["MONSTERS INC", "BOURNE IDENTITY", "THE FUNDAMENTALS OF CARING", "THE DARK KNIGHT", "PULP FICTION", "THE LORD OF THE RINGS RETURN OF THE KING", "FORREST GUMP", "FIGHT CLUB", "INCEPTION", "THE MATRIX", "JOHN WICK", "SPIRITED AWAY", "PARASITE", "THE USUAL SUSPECTS", "THE ITALIAN JOB", "CATCH ME IF YOU CAN"];

  /*----- state variables -----*/

  let win; //winning msg
  let loss;  //losing msg
  //let selectedWord; //hidden word picked
  let guessedletter; //letters picked from the array/alphabets
  let incorrectGuess; //max 5 allowed, 6th is counted as loss
  let blankSpace; //length of spaces in 'word'


  /*----- cached elements  -----*/

  const image = document.getElementById("hangMain");
  const userInput = document.getElementById("blank-spaces");
  const lettersToPick = document.getElementById("alphabets");
  const newGameBtn = document.getElementById("new-game")
  
  
  /*----- event listeners -----*/

  //document.querySelector('#board').addEventListener('click', handleClicks);


  /*----- functions -----*/

  function defImg(){
    image.src = PICTURES[6].imgDefault;
    
  }
  defImg();

  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x));
  console.log(alphabet)

function createButton() {
  
  for (let i=0; i<alphabet.length; i++){
  document.getElementById("alphabets").innerHTML += "<button>" + alphabet[i] + "</button>"
}}

createButton();

  function randomWord(movieList) {
    return movieList[Math.floor(Math.random()*movieList.length)];
  }


  function blankSpaces() {
    selectWord = randomWord(movieList);
    selectWordLength = selectWord.length;
  }
  blankSpaces();
  console.log(selectWord, selectWordLength);
  
  /*init();

  function init() {
    
    render();
  }


  

  function render() {
    
  }


  function handleClicks(evt){
   

    console.log(evt);

    //location.reload(); ->browser reloads ->new game button?
  }

  //inside or outside the handle clicks event?
  
  //newGameBtn.addEventListener('click', function(evt){
    //evt.target
  //})


  function renderResults() {
    //calculate win & loss counts
  }

  

  /*function refreshPage(){
    window.location.reload();
    console.log("button clicked")*/

 

 

  