const form=document.querySelector('form')
let Guess_remain=10
const previous_guess=document.querySelector('.guesses')
const Guess_left=document.querySelector('.lastResult')
const min=1
const max=100
const value=Math.floor(Math.random()*(max-min+1)+min)
form.addEventListener('submit',(e)=>{
  e.preventDefault()
 
  console.log(value)
  if(Guess_remain>0 ){
    const input=parseInt(document.querySelector('input').value)
    console.log(input)
    Guess_remain=Guess_remain-1
    if(value!=input){
      previous_guess.innerHTML=input
      Guess_left.innerHTML=Guess_remain

      if(value>input){
        document.querySelector('.lowOrHi').innerHTML="Guess little high"
      }else if(value<input){
        document.querySelector('.lowOrHi').innerHTML="Guess little low"
      }
    }else{
      document.querySelector('.lowOrHi').innerHTML="You guessed Succesfully"
    }
  }else{
    document.querySelector('.lowOrHi').innerHTML="Sorry You lost all the chances for guess"
  }
  
})
