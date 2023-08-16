require("dotenv").config();

const express = require("express");
const app = express();
const users = require("./routes/user");

const HOST = process.env.HOST;
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/users", users);

app.listen(PORT, () => {
  console.log(`Server running at ${HOST}:${PORT}`);
});
