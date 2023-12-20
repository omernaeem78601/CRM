// const jwt = require("jsonwebtoken");

// const authenticateToken = (req, res, next) => {
//   const authHeader = req.headers["authorization"];
//   const token = authHeader && authHeader.split(" ")[1];
//   if (!token) {
//     return res.status(401).json({ error: "Not Authorized: No token in header" });
//   }

//   jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
//     if (err) {
//       return res.status(403).json({ error: "Not Authorized" });
//     }
//     req.user = user;
//     next();
//   });
// };

// module.exports = { authenticateToken };




const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "Not Authorized: No token in header" });
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ error: "Not Authorized" });
    }
    req.user = user;
    next();
  });   
};

const authorizeAdmin = (req, res, next) => {
  const { userRole  } = req.user;
  if (userRole  !== "admin") {
    return res.status(403).json({ error: "Not Authorized: Admin access required" });
  }
  next();
};

module.exports = { authenticateToken, authorizeAdmin };