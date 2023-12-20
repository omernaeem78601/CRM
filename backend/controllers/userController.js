const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
// Signup controller
const signup = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      password,
      role,
      address,
      vendorInfo,
      profilePicture,
      paymentInfo,
      additionalContacts,
    } = req.body;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email address", email });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists", email });
    }
    if (password.length < 8 || !/[A-Z]/.test(password)) {
      return res.status(400).json({
        error:
          "Password should be at least 8 characters long and contain at least one uppercase letter",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    let additionalContactsArray = [];
    let additionalContact = "";
    if (additionalContacts) {
      additionalContactsArray = additionalContacts.map((contact) => {
        const [type, value] = contact.split(":");
        return { type, value };
      });
      additionalContact = additionalContactsArray.map(
        (contact) => `${contact.type}:${contact.value}`
      );
    }
    const newUser = new User({
      name,
      email,
      phone,
      password: hashedPassword,
      role,
      address,
      vendorInfo,
      profilePicture,
      paymentInfo,
      additionalContacts: additionalContact || [],
    });
    const user = await newUser.save();
    res
      .status(201)
      .json({ message: "Your Account created successfully", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// login controller
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid email or password" });
    }
    const token = jwt.sign(
      { userId: user._id, userRole: user.role },
      process.env.SECRET_KEY,
      {
        expiresIn: "30d",
      }
    );
    res.setHeader("Authorization", `Bearer ${token}`);

    res.status(200).json({ message: "Login successful", token, user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// get user controller
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, "-password");
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// get single user controller
const getSingleUserProfile = async (req, res) => {
  try {
    const userId = req.user.userId; // Extract user ID from token
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// edit user role
const editUserRole = async (req, res) => {
  try {
    const { userId, role } = req.body;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    user.role = role;
    const updatedRole = await user.save();
    res
      .status(200)
      .json({ message: "User role updated successfully", updatedRole });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
             
const editOwnUserData = async (req, res) => {
  try {
    const userId = req.user.userId; // Extract user ID from token
    const newData = req.body; // New user data to update

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Update allowed fields (customize as needed)
    user.name = newData.name || user.name;
    user.email = newData.email || user.email;
    // ... other fields you want to allow the user to edit

    await user.save();
    res.status(200).json({ message: "User data updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  signup,
  login,
  getAllUsers,
  getSingleUserProfile,
  editUserRole,
  editOwnUserData,
};
