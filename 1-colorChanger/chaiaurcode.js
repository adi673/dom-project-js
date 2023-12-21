const body=document.querySelector('body')
const buttons=document.querySelectorAll('.button')
console.log(buttons)
buttons.forEach(function(button){
  //console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e.target.id)
    body.style.backgroundColor=e.target.id
  })
})
// btn.addEventListener('click',(e)=>{

//   console.log(e.target.id)
//   body.style.backgroundColor=e.target.id
// })