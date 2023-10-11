
const photoDiv=document.querySelector("#photoDiv")
const input=document.querySelector("#search");
const button=document.querySelector("button")
const form=document.querySelector("fomr")



button.addEventListener("click", async (event)=>{
  event.preventDefault()
  const data= await searchresults()
  console.log(data)
  
  for (const movie of data) {
    console.log(movie.show.image.medium)
    const movieImg=document.createElement("img")
    movieImg.classList.add("col-2")
    movieImg.classList.add("m-auto")
    movieImg.src=movie.show.image.medium
    photoDiv.append(movieImg)
  }
  input.value=""
})

input.addEventListener("change", () => {
  const childrenArray = Array.from(photoDiv.children);
  for (const child of childrenArray) {
    photoDiv.removeChild(child);
  }
});



const searchresults= async ()=>{
  try {
    const res= await axios.get(`https://api.tvmaze.com/search/shows?q=${input.value}`)
    const data=res.data
    return data
    
  } catch (e) {
    console.log("ERRROR! ", e )
    
  }
}


