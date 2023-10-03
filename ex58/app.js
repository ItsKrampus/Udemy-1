// WRITE YOUR CODE IN HERE:
const cont=document.querySelector("#container")

for (let i = 0; i < 100; i++) {
   let btn=document.createElement("button")
   btn.innerText="Hey!"
   cont.appendChild(btn)    
}
