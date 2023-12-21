const form= document.querySelector('form')
//dont put height and weight here they will be none

const text=document.querySelector('#results')
form.addEventListener('submit', (e)=>{
  e.preventDefault()
   const height=parseInt(document.querySelector('#height').value)
   const weight=parseInt(document.querySelector('#weight').value)
   if(height===''||height<0 ||isNaN(height)){
    text.innerHTML="Fill the correct height"
   }else if(weight===''||weight<0 ||isNaN(weight)){
    text.innerHTML="Fill the correct weight"
   }else{
    const bmi=(weight / ((height * height) / 10000)).toFixed(2);
    console.log(bmi)
    text.innerHTML= `<span>${bmi}</span>`
   }
   
  
})


