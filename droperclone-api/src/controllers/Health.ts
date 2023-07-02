import { NextFunction, Response } from "express";
import IRequestWithContext from "@interfaces/RequestWithContext";
import { IHealthController, IHealthService } from "@interfaces/Health";
import HttpStatus from "http-status-codes";

class HealthController implements IHealthController {
  healthService: IHealthService;

  constructor(healthService: IHealthService) {
    this.healthService = healthService;

    this.ping = this.ping.bind(this);
  }

  async ping(req: IRequestWithContext, res: Response, next: NextFunction): Promise<void | Response> {
    const ctx = req.context;

    try {
      const response = this.healthService.ping(ctx);
      return res.status(HttpStatus.OK).json(response);
    } catch (error) {
      return next(error);
    }
  }
}

export default HealthController;
