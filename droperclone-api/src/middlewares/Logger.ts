import IRequestWithContext from "@interfaces/RequestWithContext";
import { Response, NextFunction } from "express";
import LoggerWinston from "@models/LoggerWinston";
import Context from "@models/Context";

const middleware = (req: IRequestWithContext, res: Response, next: NextFunction): void => {
  const logger = new LoggerWinston();
  req.context = new Context(logger);

  logger.info("received request", { path: `${req.method} ${req.path}` });
  res.on("finish", () => logger.info("response sent", { status: res.statusCode }));

  return next();
};

export default middleware;
