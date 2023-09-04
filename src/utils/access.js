const express = require("express");
const app = express.Router();
const path = require("path").resolve("./");
const User = require(`${path}/database/models/user`);

app.use("/", async (req, res, next) => {
  const user = await User.findAll({ where: { username: req.body.username } });

  if (user.access != "test") {
    return res.status(400).json({
      success: false,
      message: "No access granted",
    });
  }
  res.status(200);
  next();
});

module.exports = app;
