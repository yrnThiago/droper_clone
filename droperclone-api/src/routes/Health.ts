import { Router } from "express";
import { IHealthController, IHealthRouter } from "@interfaces/Health";

class HealthRouter implements IHealthRouter {
  path: string = "/health";
  healthController: IHealthController;

  constructor(healthController: IHealthController) {
    this.healthController = healthController;
  }

  getRouter(): Router {
    const router: Router = Router();

    router
      .route(`${this.path}/ping`)
      .get(this.healthController.ping);

    return router;
  }
} 

export default HealthRouter;
