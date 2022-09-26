const customErrorHandler = (status, message) => {
  const error = new Error();
  error.status = status || 500;
  error.message = message || "Something Went Wrong";
  // error.stack = process.env.NODE_ENV == "development" ? error.stack : {};
  return error;
};

export default customErrorHandler;
