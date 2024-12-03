import mongoose from 'mongoose';
const connectDB= async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DataBase Connected");
    }
    catch(e){
        console.log("Error DataBase Connecting");
        
    }
}
export default connectDB;