let express=require("express")
const {addstd,login, updmarks, userdet, gethnos} = require("../controlers/usercon")
let rt=new express.Router()
rt.post("/reg",addstd)
rt.post("/login",login)
rt.put("/updmarks",updmarks)
rt.get("/getdet/:hno",userdet)
rt.get("/gethnos",gethnos)
module.exports=rt