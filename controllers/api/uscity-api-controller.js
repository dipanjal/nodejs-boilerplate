class Test {
    constructor(data) {
        this.name = data.name;
        this.gender = data.gender;
        this.age = data.age;
        this.email = data.email;
    }
}

var router = require('express').Router();
var UScity = require('../../db/us-city-dao')

router.get('/getall', (req,res) => {  
    console.log('getall---')
    UScity.getAll( (err,result) => {
        if (err){
            res.send(err)
        }
        res.json(result)
    });

});

module.exports = router


// exports.testGetApi = (req,res) => {  
//     // let test = new Test(data);
//     // name = req.params.name
    
//     // data = {
//     //     "name":name,
//     //     "gender": "M",
//     //     "age": 25,
//     //     "email": "dipanjalmaitra@gmail.com"
//     // }

//     // let test = new Test(data)
//     UScity.getAll( (err,result) => {
//         if (err){
//             res.send(err)
//         }
//         res.json(result)
//     });

// };

// exports.testPostApi = (req, res) => {
//     let test = new Test(req.body);
//     res.send(test);
// };