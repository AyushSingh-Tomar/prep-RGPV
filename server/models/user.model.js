import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        rnum:["student","instructor"],
        default:"student"
    },
    enrolledCourses:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Course'
        }
    ],
    photoURL:{
        type:String,
        default:"https://i.ibb.co/kqPXT6C/Screenshot-20241203-083114.png"
    }
},{timestamps:true});
export const User = mongoose.model("User",userSchema);
