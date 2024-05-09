const express = require("express");
const { getData } = require("../controller/dataManageController");
const router = express.Router();

router.route("/data").get(getData);

module.exports = router;
