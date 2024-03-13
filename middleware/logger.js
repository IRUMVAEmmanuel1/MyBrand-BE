// middleware/logger.js

const loggerMiddleware = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); // Call the next middleware function
};

module.exports = loggerMiddleware;
