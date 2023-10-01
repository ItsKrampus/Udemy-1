const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:
const word=document.querySelectorAll("h1 span")
    for (let i = 0; i < colors.length; i++) {
         word[i].style.color = colors[i];

    }
