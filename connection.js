const mongoose=require("mongoose");

async function connectMongoDb(url){
    return mongoose.connect(url)
    .then(()=>console.log('mogosedb connected'))
    .catch(err=>console.log('mongo fail',err.message))    
}

module.exports={
    connectMongoDb
}