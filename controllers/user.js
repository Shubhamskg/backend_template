const User=require("../models/user")

const handleGetAllUsers=async(req,res)=>{
    const allDbUsers=await User.find({});
    return res.json(allDbUsers);
}

const handleGetUserById=async(req,res)=>{
    const user=await User.findById(req.params.id)
    if(!user) return res.status(404).json({error:"user not found"});
    return res.json(user)
}

const handleUpdateUserById=async(req,res)=>{
    await User.findByIdAndUpdate(req.params.id,{lastName:"Changed"})
    return res.json({status:"success"})
}

const handleDeleteUserById=async(req,res)=>{
    await User.findByIdAndDelete(req.params.id)
    return res.json({status:"deleted"})
}

const handleCreateNewUser=async(req,res)=>{
    const body=req.body;
    if(
        !body||!body.firstName||!body.lastName||!body.email||!body.gender||!body.jobTitle
    ){
        return res.status(400).json({msg:"All fields are req..."});
    }
    const result=await User.create(body)
    console.log(result)
    return res.status(201).json({msg:'success',id:result._id})
}

module.exports={
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser
}