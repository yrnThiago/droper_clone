/* eslint-disable no-unused-vars */
import { NextFunction, Response } from "express";
import IRouter from "@interfaces/Router";
import IRequestWithContext from "@interfaces/RequestWithContext";
import IContext from "./Context";

interface IHealthService {
  ping(ctx: IContext): object;
};

interface IHealthController {
  healthService: IHealthService;

  ping(req: IRequestWithContext, res: Response, next: NextFunction): Promise<void | Response>
};

interface IHealthRouter extends IRouter {
  healthController: IHealthController;
}

export {
  IHealthService,
  IHealthController,
  IHealthRouter
};
