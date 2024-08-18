var express = require("express");
var router = express.Router();

const models = require("../models");
const adminMiddleware = require("../middleware/adminMiddleware");

/**
 * insert data using json
 */
router.post("/create", adminMiddleware, async function (req, res) {
  const insert = await models.Category.bulkCreate(req.body).then((result) => {
    res.json({
      success: true,
      data: result,
    });
  });
});

router.get("/:name", async function (req, res) {
  await models.Category.findOne({
    where: { name: req.params.name },
    include: ["data"],
  }).then((result) => {
    res.json({
      success: true,
      data: result,
    });
  });
});

router.get("/", async function (req, res) {
  await models.Category.findAll().then((result) => {
    res.json({
      success: true,
      data: result,
    });
  });
});

module.exports = router;
