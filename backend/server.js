import dotenv from "dotenv";
dotenv.config();
import express from "express";

// express app
const app = express();

app.get("/", (req, res) => {
  res.json({ msg: "Hello World!" });
});

// listen for requests
app.listen(process.env.PORT, () => {
  console.log("Server is running on port " + process.env.PORT + "!");
});
