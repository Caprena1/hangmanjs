 const hangmanWord = ['poodle', 'goldendoodle', 'pitbull', 'maltese','toyota',
                      'lamborghini', 'honda', 'subaru', 'montgomery','juneau',
                      'tallahassee', 'annapolis','harrisburg', 'montpelier', 
                      'cheyenne']
  
let answer = ''
let maxWrong = 6
let wrongLetter = 0
let userGuess = []
let statusOfWord = null

let hintRandom = Math.floor(Math.random() * hangmanWord.length)
let giveHint = document.getElementById('hint')
let showClue = document.getElementById('clue')
function getHint() {
  let hints = ['fluffy dog', 'mix of poodle and golden retriever', 
               'has reputation for being vicious', 'small white dog', 'Japanese made car', 
               'Italian made luxury car', 'makes CR-V', 'makes Forester', 
               'capital of Alabama', 'capital of Alaska', 'capital of Florida', 'capital of Maryland',
               'capital of Pennsylvania', 'capital of Vermont', 'capital of Wyoming']
  showClue.innerHTML = "Clue: - " + hints [hintRandom]
  
}


function wordToGuess() {
  answer = hangmanWord[hintRandom];
 
}

function abcButtons(clickALetter) {
  let results = answer.includes(clickALetter)
    if(results > 0) {
      document.getElementById('results').setAttribute('disabled', true)
      userGuess.push(clickALetter) 
      guessedWord()
      gameWon()
    } else if(wrongLetter >= maxWrong){
        gameLost()
    } else {
        wrongLetter++
        updatewrongLetter()
        updateHangmanPic()
         
    }
  }

function guessedWord() {
  statusOfWord = answer.split('').map(results => (userGuess.indexOf(results) >= 0 ? results : " _ ")).join('');

  document.getElementById('rightWord').innerHTML = statusOfWord;
}

function updatewrongLetter() {
  document.getElementById('wrongLetter').innerHTML = wrongLetter
  // document.getElementById('clickALetter').setAttribute('disabled', true)
}

function updateHangmanPic() {
  document.getElementById('figure').src = 'images/' + wrongLetter + '.jpeg'
}

function gameWon() {
  if(statusOfWord === answer) {
    document.getElementById('popup').innerHTML = "CONGRATS! You won!!🥳"
  }
}

function gameLost() {
  if(wrongLetter >= maxWrong) {
    document.getElementById('rightWord').innerHTML = `The answer was ${answer}`
    document.getElementById('popupmess').innerHTML = "SORRY! You Lost😞 Try Again"
    
  }
}
                                            AbortController
function reset() {
  wrongLetter = 0
  userGuess = []
  maxWrong = 6
  document.getElementById('figure').src =  'images/10.jpeg'
  document.getElementById('popupmess').innerHTML = " "
  document.getElementById('rightWord').innerHTML = " "
  hintRandom = Math.floor(Math.random() * hangmanWord.length)
  document.getElementById('popup').innerHTML = " "
  showClue.innerHTML = "Clue: "

  wordToGuess()
  guessedWord()
  updatewrongLetter()  
  
  

}
document.getElementById('maxWrong').innerHTML = maxWrong

wordToGuess()
guessedWord()












  




    

   
    
    
