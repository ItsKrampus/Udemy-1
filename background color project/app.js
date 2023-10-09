var body=document.querySelector("body")

window.addEventListener("keydown",(e)=>{
    if(e.key===' '){
    console.log(`rgb(${randomcolor()}, ${randomcolor()}, ${randomcolor()})`)
    body.style.backgroundColor=( `rgb(${randomcolor()}, ${randomcolor()}, ${randomcolor()})`)
    body.style.transition = 'background-color 1.5s ease';
    }
})

function randomcolor(){
    return Math.floor(Math.random() * 225)
}
