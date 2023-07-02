import IRequestWithContext from "@interfaces/RequestWithContext";
import { NextFunction, Response } from "express";
import HttpStatus from "http-status-codes";

// eslint-disable-next-line no-unused-vars
const middleware = (error: Error, req: IRequestWithContext, res: Response, next: NextFunction): Response => {
  const ctx = req.context;
  const logger = ctx.logger;

  logger.error(error.message, error);

  switch (error.name) {
  case "ValidationsError":
    return res.status(HttpStatus.BAD_REQUEST).send({ error: error.message });
  case "TokenExpiredError":
    return res.status(HttpStatus.UNAUTHORIZED).send({ error: error.message });
  case "JsonWebTokenError":
    return res.status(HttpStatus.UNAUTHORIZED).send({ error: error.message });
  default:
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ error: "internal server error" });
  }
};

export default middleware;
