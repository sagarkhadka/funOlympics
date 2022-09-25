import express from "express";
const app = express();
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 8080;

//DbConnection
mongoose
  .connect(process.env.MONGO_DB_URI, {
    autoIndex: true,
  })
  .then(() => {
    console.log("MongoDb connected successfully !");
  })
  .catch((error) => {
    console.log("MondoDb Disconnected !!!", error);
  });

app.get("/", (req, res) => {
  res.status(200).json({ msg: "This is Success Message" });
});

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
