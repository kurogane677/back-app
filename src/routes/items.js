const express = require("express");
const app = express();
const router = express.Router();
const root = require("path").resolve("./");
const {
  Item,
  ItemRcvDtl,
  ItemStrgDtl,
} = require(`${root}/database/models/item`);

//METHOD GET
//=======================================

router.get("/", async (req, res) => {
  const items = await Item.findAll();
  res.status(200).json({
    success: true,
    message: "Successfully load item data",
    data: items,
  });
});

router.get("/:id", async (req, res) => {
  const items = await Item.findAll({ where: req.params.id });
  res.status(200).json({
    success: true,
    message: "Successfully load item data",
    data: items,
  });
});

//=======================================

//METHOD POST
//=======================================

router.post("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Successfully created item data",
  });
});

router.post("/:id", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Successfully update item data",
  });
});

//=======================================

//METHOD PUT/PATCH
//=======================================

router.put("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Successfully update item data",
  });
});

//=======================================

//METHOD DELETE
//=======================================

router.delete("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Successfully delete item data",
  });
});

//=======================================

module.exports = router;
