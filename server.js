const express = require('express');
const app = express();

app.listen(7070,function(){
    console.log("listening on 7070")
})

app.get('/test',function(req,res){
    res.send('test')
})