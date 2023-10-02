// WRITE YOUR CODE IN HERE:
const txts=document.querySelectorAll("li");

for (const texti of txts) {
    if(texti.classList.contains("highlight")){
        texti.classList.toggle("highlight")
    }else{
        texti.classList.add("highlight")
    }
   
}
