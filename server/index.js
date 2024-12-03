import dotenv from "dotenv"
import express from'express';
import connectDB from "./DB/dbConnect.js";
dotenv.config({});
connectDB();
const app = express();
const PORT = process.env.PORT || 3001;
app.listen(PORT,()=>{
console.log(
    `listening on ${PORT}`
)
});