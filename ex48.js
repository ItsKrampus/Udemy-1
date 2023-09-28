const greet=(name)=>{
  try { name===typeof(String)
    return `Hey ${name}!`
    
  } catch (error) {
    console.log("Please enter a valid name")
  }
}
