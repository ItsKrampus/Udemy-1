const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path=require('path')
const{v4:uuid}=require('uuid')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs')


let comments = [
    { 
        id:uuid(),
        username: 'user1', 
        comment: 'This is my first comment!' 
    },
    { 
        id:uuid(),
        username: 'user2', 
        comment: 'Hello, everyone!' 
    },
    { 
        id:uuid(),
        username: 'user3', 
        comment: 'Im excited about my new project.' 
    },
    { 
        id:uuid(),
        username: 'user4', 
        comment: 'Just had a great day at the beach!' 
    },
    { 
        id:uuid(),
        username: 'user5', 
        comment: 'Coding is so much fun!' 
    }
];

app.patch('/comments/id',(req,res)=>{
    const {id}=req.params;
    const newComment=req.body.comment;
    const foundComment= comments.find(c=>c.id===id)
    foundComment.comment=newComment;
    res.redirect('/comments')
})



app.get('/comments',(req,res)=>{
    res.render('comments/index',{comments})
})

app.get('/comments/new', (req,res)=>{
    res.render('comments/new')
})

app.post('/comments', (req,res)=>{
    const {username, comment}=req.body;
    comments.push({username,comment, id:uuid()})
    res.redirect('/comments')
})

app.get('/comments/:id', (req,res)=>{
    const {id}=req.params;
    const comment= comments.find(c=>c.id===id)
    res.render('comments/show',{comment})
})


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


