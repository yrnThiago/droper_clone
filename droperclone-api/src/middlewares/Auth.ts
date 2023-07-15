import IRequestWithContext from "@interfaces/RequestWithContext";
import { Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import User from "@models/User";

const middleware = (req: IRequestWithContext, res: Response, next: NextFunction): void => {
  const ctx = req.context;
  const logger = ctx.logger;

  try {
    if (process.env.SKIP_AUTH === "true") {
      logger.info("skipping authentication");
      return next();
    }

    ctx.user = jwt.verify(req.cookies[process.env.JWT_COOKIE_NAME], process.env.JWT_SECRET_KEY) as User;
    logger.info("user authenticated", { userId: ctx.user.uuid });

    return next();
  } catch (error) {
    return next(error);
  }
};

export default middleware;
