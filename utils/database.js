import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("mongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "chatblock",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;

    console.log("mongoDB connected");
  } catch (e) {
    console.log(e);
  }
};
