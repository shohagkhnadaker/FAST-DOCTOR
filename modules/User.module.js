const mongoose=require('mongoose')


const userSchema=mongoose.Schema({

name:{
    type:String,
    required:[true,'name is required']
},

password:{
    type:String,
    required:[true,'password is required']
},
isAdmin:{
    type:Boolean,
    default:false
},
isDoctor:{
    type:Boolean,
    default:false
},
notification:{
    type:Array,
    default:[]
},
seennotification:{
    type:Array,
    default:[]
}


})

 const userModel=mongoose.model("user",userSchema)
 module.exports=userModel
