const express = require('express');
const router = express.Router();
const path = require('path');


// 루트 url list로 지정
router.get('/',(request,response)=>{
    let filePath = path.join(__dirname,'..','/views/foods/list.html');
    response.sendFile(filePath);
})

// router.get('/add')

module.exports = router;