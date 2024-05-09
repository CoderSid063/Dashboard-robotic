const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
} = require("../controller/userController.js");
const { verifyJWT } = require("../middleware/auth.middleware.js");
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").post(verifyJWT, logoutUser);

module.exports = router;
