let express=require("express")
const {addstd,login, updmarks} = require("../controlers/usercon")
let rt=new express.Router()
rt.post("/reg",addstd)
rt.post("/login",login)
rt.put("/updmarks",updmarks)
module.exports=rt