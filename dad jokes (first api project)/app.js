
const jokes=document.querySelector("#jokes")
const jokebtn=document.querySelector("#jokebtn")
const url="https://icanhazdadjoke.com/"
const config={
  headers: {
    'Accept': 'application/json'
  }
}

jokebtn.addEventListener("click", async ()=>{
  const joke= await generatejoke()
  const newli=document.createElement("li")
  newli.append(joke)
  jokes.append(newli)
})




const generatejoke= async ()=>{
  try{
    const res= await axios.get(url,config)
    return res.data.joke;
  }
  catch(e){
    console.log("error", e)
  }
}
