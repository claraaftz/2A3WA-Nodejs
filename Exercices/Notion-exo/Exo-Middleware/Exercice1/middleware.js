module.exports.getCurrentUser = (req, res, next) => {
  req.user = {
    name: "John",
    authenticated: true
  };
  next();
};

module.exports.isAuthenticated = (req, res, next) => {
  if (!req.user || !req.user.authenticated) {
    console.log("Pas authentifié");
    return res.sendStatus(403);
  }

  console.log("authentifié !");
  next();
};