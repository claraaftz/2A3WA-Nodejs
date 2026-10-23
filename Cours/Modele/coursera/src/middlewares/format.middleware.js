exports.formatResponse = (req, res, next) => {
  res.jsonSuccess = (data, statusCode = 200) => {
    return res.status(statusCode).json({
      success: true,
      data
    });
  };

  res.jsonError = (message, statusCode = 400) => {
    return res.status(statusCode).json({
      success: false,
      error: message
    });
  };

  next();
};