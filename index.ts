/**
 * Author: Parables Boltnoel
 * Date: April 5th, 2022
 * Description: This file is the entry point to the server used to
 * connect to the database and start the server
 */

// import our packages
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

// configure dotenv
dotenv.config();

// create an instance of express
const app = express();

// to extract the content of the request stored in the body....
// we need to use the `express.json` middleware... read more
app.use(express.json());

app.use(cors());

// create routes for your server
app.get("/", (req, res) => res.send("Hello World"));

app.post("/login", (req, res) => {
  try {
    if (req.body.username && req.body.password) {
    }
    res.status(400).json({
      message: "Request must contain a username and a password in the body",
    });
  } catch (error) {
    console.log("Something went wrong... ", error);
  }
});

// ??- null collesance operator
mongoose.connect(process.env.MONGO_DB_CON_STRING ?? "", {}, (error) => {
  if (error) {
    return console.log("Failed to connect to database ❌❌❌", error);
  }
  console.log("Connected to MongoDB 📡📡📡");
  // listen to incoming request
  app.listen(3005, () => console.log("Server is up and running 🚀🚀🚀"));
});
