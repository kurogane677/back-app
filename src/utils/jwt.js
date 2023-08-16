const jwt = require("jsonwebtoken");
const token = jwt.sign({ foo: "bar" }, "shhhhh");

jwt.sign(
  {
    data: "foobar",
  },
  "secret",
  { expiresIn: "1h" }
);

// verify a token symmetric - synchronous
// var decoded = jwt.verify(token, "shhhhh");
// console.log(decoded.foo); // bar

// verify a token symmetric
jwt.verify(token, "shhhhh", function (err, decoded) {
  if (err) {
    //   /*
    err = {
      name: "NotBeforeError",
      message: "jwt not active",
      date: Date.now(),
    };
    //   */
  }
});

// invalid token - synchronous
// try {
//   var decoded = jwt.verify(token, "wrong-secret");
// } catch (err) {
//   // err
// }

// invalid token
jwt.verify(token, "wrong-secret", function (err, decoded) {
  // err
  // decoded undefined
});
