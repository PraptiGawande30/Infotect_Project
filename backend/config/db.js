import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      process.env.mongodb+srv//karinamalviya409:karinamalviya@cluster0.t7kgahl.mongodb.net/
    )
    .then(() =>console.log("DB Connected"));
};
