let express=require("express")
const addstd = require("../controlers/usercon")
let rt=new express.Router()
rt.post("/reg",addstd)
module.exports=rt