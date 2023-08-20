require("dotenv").config();
const jwt = require("jsonwebtoken");

const createToken = (req, res, next) => {
  const token = jwt.sign(
    {
      data: "users",
    },
    "secret",
    { expiresIn: "1d" }
  );

  const refreshToken = jwt.sign(
    {
      data: "users",
    },
    "secret"
  );

  res
    .cookie("access_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    })
    .status(200)
    .json({
      success: true,
      message: "Logged in successfull",
      access_token: token,
      refresh_token: refreshToken,
    });
  // next();
};

const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token)
    return res.status(403).json({
      success: false,
      message: "Invalid Token",
      date: new Date(),
    });
  // verify a token symmetric
  jwt.verify(token, "secret", (err, decoded) => {
    if (err) {
      return res.status(403).json({
        success: false,
        message: "Token expired",
        date: new Date(),
      });
    }
    console.log(`Token verified!`);
    next();
  });
};

const deleteToken = (req, res, next) => {
  res
    .clearCookie("access_token")
    .status(200)
    .json({ message: "Successfully logged out" });
  // next();
};

// invalid token - synchronous
// try {
//   var decoded = jwt.verify(token, "wrong-secret");
// } catch (err) {
//   // err
// }

// invalid token
// jwt.verify(token, "wrong-secret", function (err, decoded) {
// err
// decoded undefined
// });

module.exports = { createToken, verifyToken, deleteToken };
