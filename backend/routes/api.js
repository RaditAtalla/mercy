var express = require("express");
var router = express.Router();

router.use("/auth", require("../controllers/auth"))
router.use("/data", require("../controllers/data"));
router.use("/category", require("../controllers/category"));
router.use("/gallery", require("../controllers/gallery"));

module.exports = router;
