
// const express = require("express");
// const { body } = require("express-validator");
// const { signup, login, verifyUser } = require("../controllers/userController");
// const authenticateToken = require("../middleware/jwtMiddleware"); // Create middleware separately

// const router = express.Router();

// // Signup Route
// router.post(
//   "/signup",
//   [
//     body("email").isEmail().withMessage("Invalid email format"),
//     body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
//   ],
//   signup
// );

// // Login Route
// router.post(
//   "/login",
//   [
//     body("email").isEmail().withMessage("Invalid email format"),
//     body("password").notEmpty().withMessage("Password is required"),
//   ],
//   login
// );

// // Verify Token Route (Protected)
// router.get("/verify", authenticateToken, verifyUser);

// module.exports = router;
// ---------------------------------------------------------
const express = require("express");
const authenticateToken = require("../middleware/jwtMiddleware");

const router = express.Router();

router.get("/verify", authenticateToken, (req, res) => {
  res.json({ message: "Token is valid", user: req.user });
});

module.exports = router;
