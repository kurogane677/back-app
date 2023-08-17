require("dotenv").config();

const express = require("express");
const app = express();
const users = require("./routes/user");
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

app.use("/users", verifyToken, users);

app.listen(PORT, () => {
  console.log(`Server running at ${HOST}:${PORT}`);
});
