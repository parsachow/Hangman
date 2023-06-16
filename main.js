  //list of movies: THE DARK KNIGHT, PULP FICTION, THE LORD OF THE RINGS RETURN OF THE KING, FORREST GUMP, FIGHT CLUB, INCEPTION, THE MATRIX, JOHN WICK, SPIRITED AWAY, PARASITE, INDIANA JONES RAIDERS OF THE LOST ARK, THE USUAL SUSPECTS, THE ITALIAN JOB, CATCH ME IF YOU CAN, MONSTERS INC, BOURNE IDENTITY, THE FUNDAMENTALS OF CARING

  /*----- constants -----*/

  const ALPHABETS = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", ];

  const IMGAGES = {img1: "/pics/hangman1.jpeg", img2: "pics/hangman2.jpeg", img3: "pics/hangman3.jpeg", img4: "pics/hangman4.jpeg", img5: "pics/hangman5.jpeg", img6: "pics/hangman6.jpeg"}


  /*----- state variables -----*/
   
  //let result; 
  let movieList;
  let winCount;
  let lossCount; 
  let hiddenMoviePicked = "";


  /*----- cached elements  -----*/

  const userInput = document.getElementById("blank-spaces");
  const letterToPick = document.getElementById("alphabets");
  const newGameBtn = document.querySelector('button');


  /*----- event listeners -----*/

  document.querySelector('main').addEventListener('click', handleClicks);


  /*----- functions -----*/
  init();

  function init() {

    movieList = ["MONSTERS INC", "BOURNE IDENTITY", "THE FUNDAMENTALS OF CARING"];
    
    winCount = 0;
    lossCount = 0;


    render();
  }

  function getWinner() {
    //if movie is guessed correctly or not
  }


  function render() {
    renderResults();
  }


  function handleClicks(evt){

  }

  function renderResults() {
    //calculate win & loss counts
  }

