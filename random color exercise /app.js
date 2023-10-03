function randomcolor() {
  return Math.floor(Math.random() * 226);
}
const h1= document.querySelector("h1")
const bdy = document.querySelector("body");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  h1.innerText=`rgb(${randomcolor()}, ${randomcolor()}, ${randomcolor()})`
});
btn.addEventListener("click", ()=>{
  bdy.style.backgroundColor=`rgb(${randomcolor()}, ${randomcolor()}, ${randomcolor()})`;
})

