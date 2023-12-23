const express=require("express");
const {connectMongoDb}=require("./connection")
const {logReqRes}=require("./middlewares/index")
const userRouter=require("./routes/user")
const path =require("path")

const app=express();
const PORT=process.env.PORT||5000

//connection
connectMongoDb('mongodb://127.0.0.1:27017/userDb')

//server-side rendering
app.set("view engine","ejs")
app.set("views",path.resolve("./views"));

//Middleware - Plugin
app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.use(logReqRes('log.txt'));

//Routes
app.use("/api/users",userRouter)
app.get("/",async(req,res)=>{
    return res.render("home")
})

app.listen(PORT,()=>{
    console.log(`app listen on port ${PORT}`)
})