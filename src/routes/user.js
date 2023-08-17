require("dotenv").config();

const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const bcrypt = require("bcrypt");
const saltRounds = 10;
const root = require("path").resolve("./");
const User = require(`${root}/database/models/user`);

// middleware that is specific to this router
// router.use((req, res, next) => {
//   // console.log("Time: ", Date.now());
//   next();
// });

const users = async (req, res) => {
  const users = await User.findAll();
  await res.status(200).json(JSON.stringify(users, null, 2));
};

// define the home page route
router.get("/", users, (req, res) => {
  // res.send("Users home page");
  // Find all users
});

// define the about route
router.get("/about", (req, res) => {
  res.send("Token created!");
});

router.post("/add", (req, res, next) => {
  const { username, password, access } = req.body;
  const user = User.findOne({ where: username });

  if (user)
    return res.status(409).json({
      success: false,
      message: "Username has been registered",
    });

  bcrypt.hash(password, saltRounds, (err, hash) => {
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

  res.status(201).json({
    success: true,
    message: "Username has been created!",
  });
  next();
  // res.send("Token created!");
});

module.exports = router;
