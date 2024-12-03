import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs"
export const register = async(req,res)=>{
try{
const {name,email,password}= req.body;
if(!name || !email || !password){
    return res.status(400).json({
        success: false,
        message:"Not all of the fields have value"
    })
}
const user = await User.findOne({email:email});
if(user){
    return res.status(200).json({
        success: false,
        message:"User already registered",
    })
}
const hashed_password = await bcrypt.hash(password,10);
await User.create({name:name,email:email,password:hashed_password});
return res.status(201).json({
    success: true,
    message:"User registered successfully",
});
}
catch(err){
    console.log(err);
return res.status(500).json({
    success: false,
    message:"Failed to register",
});
}
}
export const login = async(req,re)=>{
    try{
        const {email,password}=req.body;
        if( !email || !password){
            return res.status(400).json({
                success: false,
                message:"Not all of the fields have value"
            })
        }
    }
    catch(err){
        console.log(err);
       return res.status(500).json({
        success:false,
        message:"Error logging in",
       })
    }
}