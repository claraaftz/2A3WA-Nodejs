const User = require('../models/user.model');

exports.isAuthenticated = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    return res.jsonError("Unauthorized", 401);
  }

  const [scheme, token] = authorization.split(" ");
  if (scheme !== "Basic" || !token) {
    return res.jsonError("Invalid token", 401);
  }

  const decoded = Buffer.from(token, "base64").toString("utf-8");
  const [email, password] = decoded.split(":");

  User.authenticate(email, password)
    .then((user) => {
      if (!user) {
        return res.jsonError("Invalid credentials", 401);
      }
      req.user = user;
      next();
    })
    .catch(() => {
      res.jsonError("Internal server error", 500);
    });
};