"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.notFound = exports.errorHandler = void 0;
var notFound = exports.notFound = function notFound(req, res, next) {
  var error = new Error("Not. Found- ".concat(req.originalUrl));
  res.status(404);
  next(error);
};
var errorHandler = exports.errorHandler = function errorHandler(err, req, res, next) {
  res.status(400).json({
    message: err.message,
    stack: err.stack
  });
};