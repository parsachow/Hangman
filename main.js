//const movieList = ["MONSTERS INC", "BOURNE IDENTITY", "THE FUNDAMENTALS OF CARING", "THE DARK KNIGHT", "PULP FICTION", "THE LORD OF THE RINGS RETURN OF THE KING", "FORREST GUMP", "FIGHT CLUB", "INCEPTION", "THE MATRIX", "JOHN WICK", "SPIRITED AWAY", "PARASITE", "THE USUAL SUSPECTS", "THE ITALIAN JOB", "CATCH ME IF YOU CAN"];
  
  /*----- constants -----*/

  const PICTURES = [
  {img1: "/pics/hangman1.jpeg"}, 
  {img2: "pics/hangman2.jpeg"}, 
  {img3: "pics/hangman3.jpeg"}, 
  {img4: "pics/hangman4.jpeg"}, 
  {img5: "pics/hangman5.jpeg"}, 
  {img6: "pics/hangman6.jpeg"},
  {imgDefault: "pics/hangmanRopeMain.jpeg"}]

  const movieList = ["ALIEN", "INCEPTION", "ARMAGEDDON", "PARASITE", "PULP FICTION"];

  /*----- state variables -----*/

  let win; //winning msg
  let loss;  //losing msg
  let selectWord; //hidden word picked
  let guessedLetterIdx; //letters picked from the array/alphabets
  let incorrectGuess; //max 5 allowed, 6th is counted as loss
  let wordLength; //length of spaces in 'word'
  let hiddenWord = [];


  /*----- cached elements  -----*/

  const image = document.getElementById("hangMain");
  const userInput = document.getElementById("blank-spaces");
  const lettersToPick = document.getElementById("alphabets");
  const newGameBtn = document.getElementById("new-game")
  
  
  /*----- event listeners -----*/

  lettersToPick.addEventListener('click', handleClicks);


  /*----- functions -----*/




function handleClicks(evt){
  evt.preventDefault()
  if (evt.target.tagName !== "BUTTON") return
  console.log(evt.target.innerText);
  console.log(selectWord);

  //if selectword includes the letter from evt.target.innerText
 //then the letter(s) should show up on the text section in the correct place
 //select blank-spaces then update the textContent property
 //otherwise it should show the wrong answer's picture
 selectWord.split("").forEach((letter, idx) => {
  console.log(letter)
if(evt.target.innerText === letter){
  hiddenWord[idx] = evt.target.innerText
}
});
if (!selectWord.includes(evt.target.innerText)){
  image.src = PICTURES[0].img1;
 }
render();
}


  // if(selectWord.includes(evt.target.innerText)) {
    
  //   guessedLetterIdx = selectWord.indexOf(evt.target.innerText)

  //   pickedLetterIdx = [];

  //   for(let i=0; i <selectWord.length; i++){
  //     if(selectWord[i] === evt.target.innerText) 
  //     pickedLetterIdx.push(i);
  //     console.log(pickedLetterIdx);
      
  //   }
  // }else {
  //   image.src = PICTURES[0].img1;
  //   }}
  
 
  



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





function render() {
  document.getElementById("blank-spaces").innerHTML = "";
    for(let i=0; i<wordLength; i++){

      document.getElementById("blank-spaces").innerHTML += hiddenWord[i];
  }
  }
  

  function init() {
    selectWord = randomWord(movieList);
    wordLength = selectWord.length;

    for(let i=0; i<wordLength; i++){
      hiddenWord[i] = "_"
    }
    render();
  }

  init();


console.log(selectWord, wordLength);




    

//     for (let i=0; i< PICTURES.length[5]; i++){
//       PICTURES[i]
//       //updatedPic = PICTURES.map(img => `<img src="$(img)">`)
//       //image.innerHTML = updatedPic

//       //OR, ???
//       //img.innerHTML.append("hangMain");
//     }
// }
//  }
  

  
  /*


  

  


  function renderResults() {
    //calculate win & loss counts
  }

  

  /*function refreshPage(){
    window.location.reload();
    console.log("button clicked")*/

