import { Router } from "express";
import { IAuthRouter, IAuthController } from "@interfaces/Auth";

class AuthRouter implements IAuthRouter {
  path: string = "/auth";
  authController: IAuthController;

  constructor(authController: IAuthController) {
    this.authController = authController;
  }

  getRouter(): Router {
    const router: Router = Router();

    router
      .route(`${this.path}/login`)
      .post(this.authController.login);

    router
      .route(`${this.path}/logout`)
      .get(this.authController.logout);

    return router;
  }
}

export default AuthRouter;
