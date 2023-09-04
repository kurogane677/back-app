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
  // const items = await Item.findAll({ where: req.params.id });
  const items = await Item.findAll({
    include: [
      {
        model: ItemStrgDtl,
        //  required: false
        where: { item_code: req.params.id },
      },
    ],
  });
  res.status(200).json({
    success: true,
    message: "Successfully load item data",
    data: items,
  });
});

//=======================================

//METHOD POST
//=======================================

router.post("/", async (req, res) => {
  const { item_code, item_name, item_price, item_stock } = req.body;
  //Write data to database
  const items = await Item.create({
    item_code: item_code,
    item_name: item_name,
    item_price: item_price,
    item_stock: item_stock,
  });

  res.status(200).json({
    success: true,
    message: "Successfully created item data",
    data: items,
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

router.put("/update", async (req, res) => {
  const { item_code, item_name, item_price, item_stock } = req.body;
  const items = await Item.update(
    {
      item_name: item_name,
      item_price: item_price,
      item_stock: item_stock,
    },
    { where: { item_code: item_code } }
  );
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
