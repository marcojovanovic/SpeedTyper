// Sam uberi boje
// Uradi HTML i Css kako je u orginalu, transform gornje polovine na klik pripremi
// pokupi varijable
// kada dodjes na stranu, u inputu je vec postavljen cursor
// Prikazi random word na ekran
// Podesi uneti input i randWord
// Povecaj score za 1 na tacan odgovor
// updateTime
// Game over funkcionalnost
// na svaki tacan odgovor vreme podici za 5s
// na click da difficutl container ode gore
// dodaj dificulty
// dodaj diffilcuty za local storage

const word = document.querySelector('#word')
const text = document.querySelector('#text')
const scoreEl = document.querySelector('#score')
const endGameEl = document.querySelector('.end-game')
const settingsBtn = document.querySelector('#settings-btn')
const settings = document.querySelector('#settings')
const settingsForm = document.querySelector('#settings-form')
const difficultySelect = document.querySelector('#difficulty')
const timeEl = document.querySelector('#time')

// list of words

let words = ['loving','sign', 'ball','bad','silver','gold','drag','one','two','three','four', 'five','six','sex']



let score=0;
let time=10;
let randomWord;




  


let difficulty = localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty') : 'medium'

console.log(difficulty)






// focus on text on start

difficultySelect.value = localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty') : 'medium'

text.focus()

const timeInterval = setInterval(updateTime,1000)


function getRandomWord(){

let rand = Math.floor(Math.random() * words.length)

  return words[rand]

}

function addWordDom(){

  randomWord = getRandomWord()
  word.innerHTML = randomWord

}

function updateScore(){

  score++
  scoreEl.innerHTML = score

}

function updateTime(){


  time--
  timeEl.innerHTML = time + 's'
  if(time === 0){
    clearInterval(timeInterval)
    gameOver()
  }

  
}


function gameOver(){


  endGameEl.innerHTML = `
  
    <h1>Time run out</h1>
    <p>Your final Score is ${score}</p>
   <button onclick='location.reload()'>Reload</button>
  `

  endGameEl.style.display = 'flex'

  }


addWordDom()

text.addEventListener('input',(e)=>{

  const insertedText = e.target.value 

 // console.log(insertedText)

 if(insertedText === randomWord){

    addWordDom()
    updateScore()
    e.target.value=''


   if(difficulty === 'hard'){
  time += 1
}else
if(difficulty === 'easy'){
  time += 5
}else{


  difficulty === 'medium'
  time += 3
}

 }

 


})


settingsBtn.addEventListener('click',()=>{


 settings.classList.toggle('hide')

})

settingsForm.addEventListener('change', (e)=>{

  difficulty = e.target.value 
   

  localStorage.setItem('difficulty',difficulty)

})