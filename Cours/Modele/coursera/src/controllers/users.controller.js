const User = require('../models/user.model');

exports.addUser = async (req, res, next) => {
  try {
    const { firstname, lastname, email, password } = req.body;
    const user = await User.create({ firstname, lastname, email, password });
    res.jsonSuccess(user, 201);
  } catch (error) {
    next(error);
  }
};

exports.loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.authenticate(email, password);

    if (!user) {
      return res.jsonError("Invalid credentials", 401);
    }

    const token = Buffer.from(`${email}:${password}`).toString('base64');
    res.jsonSuccess({ token });
  } catch (error) {
    next(error);
  }
};