import mongoose from "mongoose";

const connection = async () =>{
  await mongoose.connect("mongodb://127.0.0.1:27017/chat-app");
  console.log("Connected to MongoDB");
}

export default connection;