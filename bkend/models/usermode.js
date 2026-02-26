let mongoose=require("mongoose")
const AutoIncrement = require('mongoose-sequence')(mongoose);
let usersch=new mongoose.Schema({
    "_id":Number,
    "name":String,
    "pwd":String,
    "phno":String,
    "email":String,
    "marks":[],
    "role":{
        type:String,
        default:"user"
    }
})


usersch.plugin(AutoIncrement, { inc_field: '_id' });

let um=mongoose.model("um",usersch)
module.exports=um