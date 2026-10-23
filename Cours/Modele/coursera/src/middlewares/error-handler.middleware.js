exports.errorHandlerMiddleware = (err, req, res, next) => {
  const formattedError = {
    message: err.message || "Une erreur s'est produite",
    code: err.code || 500
  };

  res.jsonError(formattedError, formattedError.code);
};