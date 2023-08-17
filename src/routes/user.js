require("dotenv").config();

const express = require("express");
const app = express();
const router = express.Router();
const bcrypt = require("bcrypt");
const saltRounds = 10;
const root = require("path").resolve("./");
const User = require(`${root}/database/models/user`);

// middleware that is specific to this router
// router.use((req, res, next) => {
//   // console.log("Time: ", Date.now());
//   next();
// });

//METHOD GET
// =======================================================

// define the home page route
router.get("/", (req, res) => {
  // res.send("Users home page");
  // Find all users
  // const getData = async () => {
  // const users = await User.findAll();
  // await res.status(200).json(users);
  // };
  // getData();

  //promise
  User.findAll().then((result) => {
    res.status(200).json(result);
  });

  // await bcrypt.compare(password, hash, function (err, result) {
  //   if (err) return console.log(err);
  // });
});

// define the about route
router.get("/:username", async (req, res) => {
  const user = await User.findAll({ where: { username: req.params.username } });

  user == ""
    ? await res.status(404).json({
        success: false,
        message: "Invalid username",
      })
    : await res.status(200).json({
        success: true,
        message: user,
      });
  // res.send("Token created!");
});
// =======================================================

//METHOD POST
// =======================================================
router.post("/add", async (req, res, next) => {
  const { username, password, access } = req.body;
  const user = await User.findOne({ where: { username: username } });

  if (user)
    return res.status(409).json({
      success: false,
      message: "Username has been registered",
    });

  await bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err)
      return res.status(400).json({
        success: false,
        message: "Invalid data",
      });

    // Store hash in password DB.
    User.create({
      username: username,
      password: hash,
      access: access,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  });

  await res.status(200).json({
    success: true,
    message: "Username has been created!",
  });
  next();
  // res.send("Token created!");
});
// =======================================================

//204 DEWLETE
//METHOD PUT/PATCH
// =======================================================
router.put("/:username", (req, res) => {
  const password = req.body.password;
  const username = req.params.username;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) return console.log(err);

    // Store hash password DB.
    User.update(
      { password: hash, updatedAt: new Date() },
      {
        where: {
          username: username,
        },
      }
    );
  });

  res.status(201).json({
    success: true,
    message: "Password has been changed!",
  });
});

// =======================================================

//METHOD DELETE
// =======================================================
router.delete("/:username", async (req, res) => {
  const username = req.params.username;

  const user = await User.destroy({
    where: {
      username: username,
    },
  });

  user == ""
    ? await res.status(404).json({
        success: false,
        message: "User not found",
      })
    : await res.status(200).json({
        success: true,
        message: "User has been deleted",
      });
});
// =======================================================

module.exports = router;
