//interceptor
exports.home = (req,res,next) =>{
    console.log("home-controller")
    next()
}

//cpntroller scope
exports.land = (req,res) => {
    console.log("land-controller")
    res.send("Hello Land")
}