const clock= document.querySelector('#clock')

setInterval(()=>{
  let date=new Date()
  clock.innerHTML=date.toLocaleTimeString()
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
  //date.toLocaleTimeString()
  //date.toLocaleDateString()
  //date.toLocaleString()
},1000)
