const express = require('express')
const app = express()
const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: true }))

app.get('/tacos',(req,res)=>{
    res.send("Get /tacos response")
})

app.post('/tacos',(req,res)=>{
    const {meat,qty}=req.body;
    res.send(`OK, here are your ${qty} ${meat} tacos`)
})

app.listen(3000, ()=>{
    console.log("on port 3000")
})
