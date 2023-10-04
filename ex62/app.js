const h1=document.querySelector('h1')
const input=document.querySelector('#username')

input.addEventListener('input', (e)=>{
  switch (input.value) {
    case "":
      h1.innerText="Enter Your Username"
      break;
  
    default:
      h1.innerText=`Welcome, ${input.value}`  
      break;
  }
})
