const express = require("express");
const router = express.Router();
const path = require("path").resolve("./");
const ApiKey = require(`${path}/database/models/apikey`);
const { generateApiKey } = require("generate-api-key");

router.post("/", (req, res) => {
  const { scope, prefix } = req.body;
  const keys = generateApiKey({ method: "base62", prefix: prefix });

  const prefixCheck = ApiKey.findOne({ where: { name: prefix } });

  prefixCheck == ""
    ? ApiKey.create({
        keys: keys,
        name: prefix,
        scope: scope,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    : ApiKey.update({ keys: keys, scope: scope }, { where: { name: prefix } });

  res.status(200).json({
    success: true,
    message: "Success generate Api Key",
    apikey: keys,
  });
});

router.get("/", (req, res) => {
  const api_key = req.headers["x-api-key"];
  console.log(api_key);
  res.send(200);
});

module.exports = router;
