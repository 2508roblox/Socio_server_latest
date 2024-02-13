import asyncHandler from "express-async-handler";

const asyncHandlerWrapper = (func) => {
  return async (req, res, next) => {
    try {
      await func(req, res, next);
    } catch (error) {
      next(error);
      // go to error middleware
    }
  };
};

export default asyncHandlerWrapper;