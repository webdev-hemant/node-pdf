require("dotenv").config();

const { errorCodeConstants } = require("../constants/errorCode");

const environment = process.env.ENVIRONMENT;

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  const errObject = {
    title: "",
    message: err.message,
    ...(environment === "dev" && { stackTrace: err.stack }),
  };
  switch (statusCode) {
    case errorCodeConstants.VALIDATION_ERROR:
      errObject.title = "Validation Failed";
      res.json(errObject);
      break;

    case errorCodeConstants.NOT_FOUND:
      errObject.title = "Not Found";
      res.json(errObject);
      break;

    case errorCodeConstants.UNAUTHORIZED:
      errObject.title = "Unauthorized";
      res.json(errObject);
      break;

    case errorCodeConstants.FORBIDDEN:
      errObject.title = "Forbidden";
      res.json(errObject);
      break;

    case errorCodeConstants.SERVER_ERROR:
      errObject.title = "Server Error";
      res.json(errObject);
      break;

    default:
      console.log("No Error, All good !");
      break;
  }
};

module.exports = errorHandler;
