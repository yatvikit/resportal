const um = require("../models/usermode")
let bcrypt=require("bcrypt")

let addstd=async(req,res)=>{
    try{
        let arr=await um.find({$or:[{"email":req.body.email},{"phno":req.body.phno}]})
        if(arr.length>0)
        {
            res.json({"msg":"use diff email or phno"})
        }
        else{
            let pwdhash=await bcrypt.hash(req.body.pwd,10)
              let data=new um({...req.body,"pwd":pwdhash})
              await data.save()
              res.json({"msg":"registration done"})

        }
      
        

    }
    catch{
        res.json({"msg":"error in reg"})

    }
}

module.exports=addstd