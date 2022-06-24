var express         =require("express"),
    mongoose        =require("mongoose"),
    port            =process.env.PORT || 8000,
    app             =express(),
    User            =require("./models/user")
app.use(express.static(__dirname + "/public"));
app.set("view engine","ejs");

app.get("/",function(req,res)
{
    res.render("home");
    const newUser=new User({ 
      });newUser.save(); 
});; 


//ONLINE MONGODB ATLAS
const DB='mongodb+srv://admin:admin@cluster0.oun5l.mongodb.net/MissingX';
mongoose.connect(DB).then(()=>{console.log('DATABASE CONNECTED to localhost:'+ port);}).catch((err)=> console.log('Database Not Connected'+err));

app.use(require("express-session")({
    secret:"Session ",
    resave:false,
    saveUninitialized:false
}));

app.listen(port,function()
{
    console.log("started!");
});