
const jwt = require("jsonwebtoken");
require("dotenv").config();


 // Middleware to authenticate JWT token

const authenticateToken = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1]; // Extract token from Bearer <token>
  
  if (!token) {
    return res.status(401).json({ message: "Access Denied: No token provided" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid or expired token" });
    }
    req.user = user; // Attach user data to request
    next();
  });
};

module.exports = authenticateToken;



