import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

import connection from "./database/db.js";
import Routes from "./routes/route.js";

dotenv.config();

const app = express();
app.use("/", Routes);
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 8080;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

connection(username, password);

app.listen(PORT, () =>
  console.log(`Server is running sucessfully on Port ${PORT}`)
);
