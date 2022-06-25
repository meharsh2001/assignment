var mongoose=require("mongoose");

var UserSchema=new mongoose.Schema({
   name:String,
   phone:String,
   email:String, 
    books:{type:[{
        "sno": String,
        "booktitle": String,
        "author": String,
        "genre": String,
        "yop": String,
        "isbm": String
    }],default:[{
        "sno": "0",
        "booktitle": "nul",
        "author": "nul",
        "genre": "nul",
        "yop": "nul",
        "isbm": "nul"
    }]},
});
//var log= mongoose.model("log",logSchema);
module.exports= mongoose.model("User",UserSchema);