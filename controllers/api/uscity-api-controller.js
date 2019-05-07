class Test {
    constructor(data) {
        this.name = data.name;
        this.gender = data.gender;
        this.age = data.age;
        this.email = data.email;
    }
}

var router = require('express').Router();

/* data access objects */
var USCityDao = require('../../db/dao/us-city-dao')

/* API RESPONSE OBJECT */
var ApiResponse = require('../../utils/api-response');

/* get request api url */
router.get('/get_all_cities', (req,res) => {
    console.log('getallcity---')
    USCityDao.getAllCities( (err,result) => {
        if (err){
            res.send(err)
        }
        let apiResponse = new ApiResponse(200,'ok', result);
        res.json(apiResponse)
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
//     usCityDao.getAll( (err,result) => {
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