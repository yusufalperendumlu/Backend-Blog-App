import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect();
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
