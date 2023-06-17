  //list of movies: THE DARK KNIGHT, PULP FICTION, THE LORD OF THE RINGS RETURN OF THE KING, FORREST GUMP, FIGHT CLUB, INCEPTION, THE MATRIX, JOHN WICK, SPIRITED AWAY, PARASITE, INDIANA JONES RAIDERS OF THE LOST ARK, THE USUAL SUSPECTS, THE ITALIAN JOB, CATCH ME IF YOU CAN, MONSTERS INC, BOURNE IDENTITY, THE FUNDAMENTALS OF CARING

  /*----- constants -----*/

  const IMGAGES = {img1: "/pics/hangman1.jpeg", img2: "pics/hangman2.jpeg", img3: "pics/hangman3.jpeg", img4: "pics/hangman4.jpeg", img5: "pics/hangman5.jpeg", img6: "pics/hangman6.jpeg"}

  const movieList = ["MONSTERS INC", "BOURNE IDENTITY", "THE FUNDAMENTALS OF CARING"];

  /*----- state variables -----*/

  let winCount; //number/counting of wins
  let lossCount;  //number/counting of loss
  let hiddenWord; //selected word
  let guessedletter; //letters picked from the array/alphabets
  let incorrectGuess; //max 5 allowed, 6th is counted as loss
  let blankSpace; //length of spaces in 'word'


  /*----- cached elements  -----*/

  const userInput = document.getElementById("blank-spaces");
  const lettersToPick = document.getElementById("alphabets");
  const newGameBtn = document.getElementById("new-game")
  const playAgainBtn = document.getElementById("play-again")
  

  /*----- event listeners -----*/

  //document.querySelector('main').addEventListener('click', handleClicks);


  /*----- functions -----*/

  /*init();

  function init() {
    
   winCount = 0;
   lossCount = 0;
   //blankSpace = movieList[i(str.length)];


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

 

    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabet = alpha.map((x) => String.fromCharCode(x));
    console.log(alphabet)

  function createButton() {
    
    for (let i=0; i<alphabet.length; i++) {
    /*lettersToPick = document.getElementById("alphabets");
    let btn = document.createElement("button");
    btn.textContent=lettersToPick[i];
    lettersToPick.append(btn);*/
 
    document.getElementById("alphabets").innerHTML += "<button>" + alphabet[i] + "</button>"

  }}

  createButton();