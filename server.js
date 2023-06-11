const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname,'instar/build')))


app.listen(7070,function(){
    console.log("listening on 7070")
})

app.get('/test',function(req,res){
    res.send('test')
})


app.get('/',function(request,response){
    response.sendFile(path.join(__dirname,'instar/build/index.html'))
})
