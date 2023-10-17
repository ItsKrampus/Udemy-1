const express=require("express")
const app=express()
// console.dir(app)

// app.use((req,res)=>{
//     console.log("We got a new request!!")
//     res.send("<h1>Hello We got your request this is your response!!</h1>")
// })


app.get('/',(req,res)=>{
    res.send("This is the home page")
})

app.get('/r/:subreddit/:postId',(req,res)=>{
    const {subreddit,postId}=req.params
    res.send(`<h1> viewing Post ID: ${postId} on the  ${subreddit} subreddit!`)
})

app.get('/cats', (req,res)=>{
    res.send("Meow")
})

app.get('/dogs', (req,res)=>{
    res.send("WOOOF")
})


app.get('*', (req, res)=>{
    res.send("We dont have that path")
})


// /cats=>meow 
// /dogs=>woof
// '/'


app.listen(3000, ()=>{
    console.log("Listening on port 3000")
})
