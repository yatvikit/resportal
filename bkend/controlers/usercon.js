const um = require("../models/usermode")
let bcrypt=require("bcrypt")
let jwt=require("jsonwebtoken")
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

let login=async(req,res)=>{
    try{
        if(/^[0-9]{6}$/.test(req.body.uid))
        {
            let obj=await um.findById(req.body.uid)
            if(obj)
            {
                let f=await bcrypt.compare(req.body.pwd,obj.pwd)

                if(f)
                {
                    res.json({"token":jwt.sign({"uid":obj.email},"1234"),"name":obj.name,"role":obj.role,"hno":obj._id})
                }
                else{
                    res.json({"msg":"check pwd"})
                }

            }
            else{
                res.json({"msg":"check hno"})
            }

        }
        else{
            let arr=await um.find({$or:[{"email":req.body.uid},{"phno":req.body.uid}]})
            if(arr.length>0)
            {
                      let f=await bcrypt.compare(req.body.pwd,arr[0].pwd)
                if(f)
                {
                    res.json({"token":jwt.sign({"uid":arr[0].email},"1234"),"name":arr[0].name,"role":arr[0].role,"hno":arr[0]._id})
                }
                else{
                    res.json({"msg":"check pwd"})
                }
            }
            else{
               res.json({"msg":"check phno or email"}) 
            }

        }

    }
    catch(err)
    {
        console.log(err)
         res.json({"msg":"error in login"})
    }
}

let updmarks=async(req,res)=>{
    try{
      let data= await um.findByIdAndUpdate({"_id":req.body._id},{$push:{"marks":{$each:[req.body.sub1,req.body.sub2,req.body.sub3,req.body.sub4]}}})
      console.log(data)
        res.json({"msg":"marks updated" })

    }
    catch(err)
    {
        console.log(err)
        res.json({"msg":"error in updating marks"})

    }
}
let gethnos=async(req,res)=>{
    try{
        let data=await um.find({"role":"user"},{"_id":1})
        res.json(data)

    }
    catch
    {
        res.json({"msg":"error fetching hno"})
    }
}

let userdet=async(req,res)=>{
    try{
        let obj=await um.findById(req.params.hno)
        res.json(obj)

    }
    catch{
        res.json({"msg":"error fetching det based on hno"})
    }
}

let getusers=async(req,res)=>{
    try{
        let data=await um.find({"role":"user"},{"pwd":0})
        res.json(data)

    }
    catch
    {
        res.json({"msg":"error fetching data"})
    }
}


module.exports={addstd,login,updmarks,userdet,gethnos,getusers}