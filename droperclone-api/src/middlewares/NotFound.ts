import IRequestWithContext from "@interfaces/RequestWithContext";
import { NextFunction, Response } from "express";
import HttpStatus from "http-status-codes";

// eslint-disable-next-line no-unused-vars
const middleware = (req: IRequestWithContext, res: Response, next: NextFunction): Response => {
  const ctx = req.context;
  const logger = ctx.logger;

  logger.warn("invalid endpoint");
  return res.status(HttpStatus.NOT_FOUND).send({ error: "invalid endpoint" });
};

export default middleware;
