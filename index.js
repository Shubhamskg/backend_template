const express=require("express");
const {connectMongoDb}=require("./connection")
const {logReqRes}=require("./middlewares/index")
const userRouter=require("./routes/user")


const app=express();
const PORT=process.env.PORT||5000

//connection
connectMongoDb('mongodb://127.0.0.1:27017/userDb')

//Middleware - Plugin
app.use(express.urlencoded({extended:false}));
app.use(logReqRes('log.txt'));

//Routes
app.use("/api/users",userRouter)

app.listen(PORT,()=>{
    console.log(`app listen on port ${PORT}`)
})