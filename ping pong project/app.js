var player1btn = document.querySelector("#player1");
var player2btn = document.querySelector("#player2");
const player1txt = document.querySelector("#player1score");
const player2txt = document.querySelector("#player2score");
var player1score = 0;
var player2score = 0;
const selectElement = document.querySelector("#floatingSelect");
let maxscore = 3;
var reset = document.querySelector("#reset");

selectElement.addEventListener("change", function () {
  maxscore = selectElement.value;
  player1score=0
    player2score=0
    player1txt.textContent=player1score
    player2txt.textContent=player2score
    player1btn.disabled = false;
    player2btn.disabled = false;    
    player1txt.classList.toggle("lose",false);
    player2txt.classList.toggle("win",false);
    player1txt.classList.toggle("win",false);
    player2txt.classList.toggle("lose",false);
});

player1btn.addEventListener("click", () => {
  if (player1score < maxscore) {
    player1score++;
    player1txt.textContent = player1score;
    if (player1score == maxscore) {
      player1txt.classList.toggle("win");
      player2txt.classList.toggle("lose");
      player1btn.disabled = true;
      player2btn.disabled = true;
    }
  }
});

player2btn.addEventListener("click", () => {
  if (player2score < maxscore) {
    player2score++;
    player2txt.textContent = player2score;
    if (player2score == maxscore) {
      player1txt.classList.toggle("lose");
      player2txt.classList.toggle("win");
      player1btn.disabled = true;
      player2btn.disabled = true;
    }
  }
});

reset.addEventListener("click", ()=>{
    player1score=0
    player2score=0
    player1txt.textContent=player1score
    player2txt.textContent=player2score
    player1btn.disabled = false;
    player2btn.disabled = false;    
    player1txt.classList.toggle("lose",false);
    player2txt.classList.toggle("win",false);
    player1txt.classList.toggle("win",false);
    player2txt.classList.toggle("lose",false);
})
