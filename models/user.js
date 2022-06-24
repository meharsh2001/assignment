var mongoose=require("mongoose");

var UserSchema=new mongoose.Schema({
   profilepic:String,
   firstname:String,
   lastname:String,
   number:String,
   dob:String,
    gender:String,
    username:String,
    password:String,
    paid:{type:Boolean,default:false},
    isAdmin:{type:Boolean,default:false}
});
//var log= mongoose.model("log",logSchema);
module.exports= mongoose.model("User",UserSchema);