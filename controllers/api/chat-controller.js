class Chat {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.message = data.message;
        this.dateTime = data.dateTime;
    }
}

var router = require('express').Router();
var ChatHistoryDao = require('../../db/dao/chat-history-dao');
var ApiResponse = require('../../utils/api-response');

router.get('/get_all_chats', (req,res) => {
    console.log('--get_all_chats')
    ChatHistoryDao.getAllChats(10,(err,result) => {
        if(err){
            res.send(err);
        }

        let apiResponse = new ApiResponse(200,'ok', result);
        res.json(apiResponse)
    });
    
    // res.json(new ApiResponse(200,'ok','hi there!!'))
});

module.exports = router;