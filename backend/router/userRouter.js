const express = require("express");
const {
  signup,
  login,
  getAllUsers,
  getSingleUserProfile,
  editUserRole,
  editOwnUserData,
} = require("../controllers/userController");
const {
  authenticateToken,
  authorizeAdmin,
} = require("../middlewares/authMiddleware");
const router = express.Router();

router.route("/").post(signup);
router.route("/login").post(login);
router.route("/users").get(authenticateToken, authorizeAdmin, getAllUsers);
router.route("/user").get(authenticateToken, getSingleUserProfile);
router.route("/user/role").put(authenticateToken, authorizeAdmin, editUserRole);
router.route("/user/edit").put(authenticateToken, editOwnUserData);

module.exports = router;
