const express = require("express");
const router = express.Router();
const { registerUser, loginUser, getMe, logout } = require("../controllers/authController");
const protect = require("../middlewares/authMiddleware");

router.get("/me", protect, getMe);
router.get("/logout", protect, logout);
router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
