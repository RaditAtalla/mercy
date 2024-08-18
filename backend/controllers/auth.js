require("dotenv").config();
var express = require("express");
var router = express.Router();
const bcrypt = require("bcrypt");
const models = require("../models");
const jwt = require("jsonwebtoken");

const adminMiddleware = require("../middleware/adminMiddleware");

router.post("/create/admin", async function (req, res) {
  if (req.body.secret === process.env.SECRET_PASS) {
    const data = {
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
      name: req.body.name,
      address: req.body.address,
      level: "admin",
    };
    await models.User.create(data).then((result) => {
      res.json({
        success: true,
        data: result,
      });
    });
  } else {
    res.status(401).json({
      success: false,
      message: "Acces Denied!",
    });
  }
});

router.post("/login", function (req, res) {
  models.User.findOne({
    where: { email: req.body.email },
  }).then((result) => {
    if (result) {
      const decryptPassword = bcrypt.compareSync(req.body.password, result.password);
      if (decryptPassword) {
        const token = jwt.sign({ data: result }, process.env.TOKEN_SECRET);
        res.json({
          success: true,
          message: "Login Berhasil",
          token: token,
          data: result,
        });
      } else {
        res.json({
          success: false,
          message: "Password salah",
        });
      }
    } else {
      res.json({
        success: false,
        message: "login gagal",
      });
    }
  });
});

router.get("/me", adminMiddleware, async function (req, res) {
  res.json({
    success: true,
    data: req.auth,
  });
});

module.exports = router;
