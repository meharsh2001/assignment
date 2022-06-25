const user = require("./models/user");

var express         =require("express"),
    mongoose        =require("mongoose"),
    port            =process.env.PORT || 3001,
    app             =express(),

    methodOverride  =require("method-override")
    User            =require("./models/user"),
    bodyParser      =require("body-parser")

    app.use(methodOverride("_method"));
    app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(__dirname + "/public"));
app.set("view engine","ejs");


//ONLINE MONGODB ATLAS
const DB='mongodb+srv://admin:admin@cluster0.oun5l.mongodb.net/assignment';
mongoose.connect(DB).then(()=>{console.log('DATABASE CONNECTED to localhost:'+ port);}).catch((err)=> console.log('Database Not Connected'+err));

app.use(require("express-session")({
    secret:"Session ",
    resave:false,
    saveUninitialized:false
}));


app.get("/",function(req,res)
{   
    User.find({},function(err,user){
    res.render("home",{userlist: user})});
});;

app.post("/",function(req,res){ 
    const newuser=new user({ 
    name:req.body.name,
    phone:req.body.number,
    email:req.body.email, 
     books:[{
         "sno": req.body.srno,
         "booktitle": req.body.title,
         "author": req.body.author,
         "genre": req.body.genre,
         "yop": req.body.year,
         "isbm": req.body.isbm
     }]
    });newuser.save();
    res.redirect("/");});


app.post("/delete",function(req,res)
{  console.log(req.body.id);
     User.findByIdAndRemove(req.body.id,(err) => {
    if(err)
    {     console.log(err); 
    }});
    res.redirect("/");
});

app.post("/update",function(req,res)
{   console.log(req.body.id);
    User.findByIdAndUpdate(req.body.id,{books:[{sno:req.body.sno,booktitle:req.body.booktitle,author:req.body.author,genre:req.body.genre,yop:req.body.yop,isbm:req.body.isbm}]}, function(err, data) {
        if(err){console.log(err);}else{res.redirect("/");}});});

app.listen(port,function()
{
    console.log("started!");
});