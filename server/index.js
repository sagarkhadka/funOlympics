import express from "express";
const app = express();
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import newsRoute from "./routes/news.route.js";
import adminRoute from "./routes/admin.route.js"
import accessTokenRoute from "./routes/accessToken.route.js"
import customErrorHandler from "./utils/handleError.js";

const port = process.env.PORT || 8080;

// app.use(cookieParser());
app.use(express.json());
app.use(cors());

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

//middleWares
app.use("/api/news", newsRoute);
app.use("/api/admin",adminRoute)
app.use("/api/accessToken",accessTokenRoute)

//last middleWare to use
app.use(customErrorHandler);

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
