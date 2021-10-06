import { ErrorRequestHandler } from "express";

/**
 * Handles errors thrown in express and sends the formatted error response
 * @param err any - the error object thrown
 * @param req Request object
 * @param res Response object
 * @param next Next function
 */
export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  // error handler
  // @TODO - fill in the other stupid currently available fields
  // 400 - bad request, 404 and 405 thrown by validator middleware
  // 401 unauthorized, is also thrown if not matching security annotations
  // but further auth should be done in the Authenticate middleware
  // console.error(err); // dump error to console for debug
  // res.status(err.status || 500).json({
  //     message: err.message,
  //     errors: err.errors,
  //     requestId: "",
  //     origin: "",
  //     errorCode: "EVAL01",
  //     fields: {
  //       additionalProp1: {}
  //     }
  // });
}