const player1btn=document.querySelector("#player1");
const player2btn=document.querySelector("#player2");
const player1txt=document.querySelector("#player1score")
const player2txt=document.querySelector("#player2score")
var player1score=0
var player2score=0
var maxscore=3
const selectElement = document.querySelector("#floatingSelect");


selectElement.addEventListener("change", function() {
maxscore = selectElement.value;
    console.log("Selected value: " + maxscore);
});

player1btn.addEventListener("click",()=>{
    if(player1score<maxscore && player2score!==maxscore){
        player1score++
        player1txt.textContent=player1score
    }
})

player2btn.addEventListener("click", ()=>{
    if(player2score<maxscore && player1score!==maxscore){
        player2score++
        player2txt.textContent=player2score
    }
})
