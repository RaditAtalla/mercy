var express = require("express");
var router = express.Router();

const models = require("../models");
const adminMiddleware = require("../middleware/adminMiddleware");

/**
 * create image
 */
router.post("/create", adminMiddleware, async function (req, res) {
  await models.Gallery.bulkCreate(req.body).then((result) => {
    res.status(200).json({
      success: true,
      data: result,
    });
  });
});

router.get("/", async function (req, res) {
  await models.Gallery.findAll().then((result) => {
    res.status(200).json({
      success: true,
      data: result,
    });
  });
});

module.exports = router;
