const firstUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
const sec=document.querySelector("#container")

for (let i = 1; i < 151; i++) {
  const dv=document.createElement("div")
  const count=document.createElement("span")
  count.innerText=`#${i}`
  const pokeImg=document.createElement("img")
  pokeImg.src=`${firstUrl}${i}.png`
  dv.appendChild(pokeImg)
  dv.appendChild(count)
  sec.appendChild(dv)
}

