let counter=0;
let input=" "
let tasks=[];
while (input!=="quit"){ 
     input=prompt("What would you like to do?");


    if(input==="new"){
        input=prompt("Enter a task");
        tasks.push(input)
        console.log(`${input}  has been added to list`)
    }
    if(input==="list"){
        console.log("*************")
        for (const task of tasks) {
            counter++
            console.log(`${counter}: ${task} `)
        }
        counter=0;
        console.log("*************")
    }
    if(input==="delete"){
        input=prompt("Enter index of todo to delete")
        tasks.splice(input-1,1);
        console.log("Todo task has been removed")
    }
    




    if(input==="quit"){
        console.log("You quit!")
        break;
    }
}   
