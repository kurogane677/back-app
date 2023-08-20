const path = require("path").resolve("./");
const ApiKey = require(`${path}/database/models/apikey`);

const verifyKeys = async (req, res, next) => {
  const api_key = req.headers["x-api-key"];
  if (!api_key) return console.log(`Key undefined`);
  const key = await ApiKey.findAll({ where: { keys: api_key } });

  // console.log(key);
  if (key != "") {
    console.log(`Key verified`);
    next();
  } else {
    console.log(`Invalid Key`);
    res.status(403).json({
      success: false,
      message: "Invalid Key",
    });
  }
};

module.exports = { verifyKeys };
