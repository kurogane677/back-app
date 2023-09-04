require("dotenv").config();

const express = require("express");
const app = express();
const users = require("./routes/user");
const items = require("./routes/items");
const apiKey = require("./routes/apiKey");
const { verifyKeys } = require("./utils/apiKey");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const HOST = process.env.HOST;
const PORT = process.env.PORT;
const { createToken, verifyToken, deleteToken } = require("./utils/jwt");

app.use(cookieParser());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

// define the about route
app.get("/signin", createToken);
app.get("/signout", deleteToken);

//route for key request
app.use("/apikey", verifyToken, apiKey);

//from here, add api key as header to continue access data
app.use(verifyKeys);

//routes for each tables
app.use("/users", verifyToken, users);
app.use("/items", verifyToken, items);

app.listen(PORT, () => {
  console.log(`Server running at ${HOST}:${PORT}`);
});
