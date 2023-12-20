const express = require("express");
const {
  signup,
  login,
  getAllUsers,
  getSingleUserProfile,
  editUserRole,
  editOwnUserData,
  blockUser,
  logout,
} = require("../controllers/userController");
const {
  authenticateToken,
  authorizeAdmin,
  checkBlockedStatus,
} = require("../middlewares/authMiddleware");
const router = express.Router();

router
  .route("/")
  .post(signup)
  .get(authenticateToken, checkBlockedStatus, getSingleUserProfile);
router.route("/login").post(login);
router.route("/users").get(authenticateToken, authorizeAdmin, getAllUsers); // --admin
router.route("/role").put(authenticateToken, authorizeAdmin, editUserRole); // --admin
router
  .route("/edit")
  .put(authenticateToken, checkBlockedStatus, editOwnUserData);
router.route("/block").put(authenticateToken, authorizeAdmin, blockUser); // --admin
router.route("/logout").post(logout);

module.exports = router;
