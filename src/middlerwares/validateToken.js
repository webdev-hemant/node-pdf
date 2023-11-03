const jwt = require("jsonwebtoken");

const validateToken = async (req, res, next) => {
  let authHeader = req.header.Authorization || req.headers.authorization;
  let token;
  if (authHeader?.startWith("Bearer")) {
    token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        res.status(401);
        throw new Error("User is not Authorized");
      }
      req.user = decoded.user;
      next();
    });
    if (!token) {
      res.status(401);
      throw new Error("User is not Authorized or token is missing");
    }
  }
  if (!authHeader) {
    res.status(401);
    throw new Error("User is not Authorized or token is missing");
  }
}

module.exports = validateToken;
