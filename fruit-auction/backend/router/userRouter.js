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
  deleteUser,
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
  .get(authenticateToken, checkBlockedStatus, getSingleUserProfile); // everyone
router.route("/login").post(login); // everyone 
router.route("/users").get(authenticateToken, authorizeAdmin, getAllUsers); // --admin
router.route("/role").put(authenticateToken, authorizeAdmin, editUserRole); // --admin
router
  .route("/edit")
  .put(authenticateToken, checkBlockedStatus, editOwnUserData); // everyone
router.route("/block").put(authenticateToken, authorizeAdmin, blockUser); // --admin
router.route("/logout").get(logout); // everyone
router.route('/delete/:userId').delete(authenticateToken, authorizeAdmin, deleteUser); // --admins

module.exports = router;
