import express from "express";
import cors from "cors";
import logger from "morgan";
import db from "./db/index.js";
import routes from "./routes/index.js";
import cookieParser from 'cookie-parser'
import {checkingUser, requiringAuth}  from './middleware/authMiddleware.js'
const app = express();
app.use(cors());
app.use(cookieParser())
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(logger("dev"));



app.get("*", checkingUser)
app.use("/api", routes);

db.on("error", console.error.bind(console, "MongoDB connection error:"));


app.listen(PORT, () => console.log(`server is running on port ${PORT}`));