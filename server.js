const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({extended:true}))
app.use(express.json());
var cors = require('cors');
app.use(cors());
app.use(express.static(path.join(__dirname,'instar/build')))


var member = [{id : 'hantae' , pw : 1234},{id : 'test' , pw : 1234},{id : 'karina' , pw : 1234}]

app.listen(7070,function(){
    console.log("listening on 7070")
})

app.get('/test',function(req,res){
    res.send('test')
})

app.get('/login',function(req,res){
    res.send(member);
})

app.post('/login',function(req,res){
    member.push(req.body)
    res.redirect("/login")
})


app.get('/',function(request,response){
    response.sendFile(path.join(__dirname,'instar/build/index.html'))
})

app.get('*',function(request,response){
    response.sendFile(path.join(__dirname,'instar/build/index.html'));
})