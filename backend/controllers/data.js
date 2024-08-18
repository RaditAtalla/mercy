var express = require("express");
var router = express.Router();

const models = require("../models");
const { Op } = require("sequelize");

const adminMiddleware = require("../middleware/adminMiddleware");

/**
 * insert data using json
 */
router.post("/create/json", adminMiddleware, async function (req, res) {
  await models.Data.bulkCreate(req.body).then((result) => {
    res.json({
      success: true,
      data: result,
    });
  });
});

router.post("/create", adminMiddleware, async function (req, res) {
  await models.Data.create(req.body).then((result) => {
    res.json({
      success: true,
      data: result,
    });
  });
});

router.get("/", adminMiddleware, async function (req, res) {
  await models.Data.findAll().then((result) => {
    res.json({
      data: result,
    });
  });
});

router.post("/update", adminMiddleware, async function (req, res) {
  const data = await models.Data.findByPk(req.body.id);
  data.update(req.body).then((result) => {
    res.json({
      success: true,
      data: result,
    });
  });
});

router.get("/delete/:id", adminMiddleware, async function (req, res) {
  await models.Data.destroy({
    where: { id: req.params.id },
  }).then(() => {
    res.json({
      success: true,
    });
  });
});

router.get("/search/:q", async function (req, res) {
  await models.Data.findAll({
    where: {
      name: {
        [Op.substring]: req.params.q,
      },
    },
  }).then((result) => {
    res.json({
      result: result,
    });
  });
});

router.post("/create/major", adminMiddleware, async function (req, res) {
  await models.Major.findByPk(1)
    .then(async (result) => {
      if (result) {
        await models.Major.update(req.body, {
          where: { id: 1 },
        });
      } else {
        await models.Major.create(req.body);
      }
    })
    .then((result) => {
      res.status(200).json({
        success: true,
        message: "Data berhasil di update!",
      });
    });
});

router.get("/major", async function (req, res) {
  await models.Major.findByPk(1).then((result) => {
    res.status(200).json({
      success: true,
      data: result,
    });
  });
});

router.get("/:id", async function (req, res) {
  await models.Data.findAll({ where: { categoryId: req.params.id } }).then((result) => {
    res.json({
      success: true,
      data: result,
      total: result.length,
    });
  });
});

module.exports = router;
