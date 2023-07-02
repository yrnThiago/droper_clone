import { Router } from "express";
import { IUserController, IUserRouter } from "@interfaces/User";

class UserRouter implements IUserRouter {
  path: string = "/user";
  userController: IUserController;

  constructor(userController: IUserController) {
    this.userController = userController;
  }

  getRouter(): Router {
    const router: Router = Router();

    router
      .route(`${this.path}`)
      .post(this.userController.add)
      .get(this.userController.getMany);

    router
      .route(`${this.path}/:id`)
      .get(this.userController.getById)
      .put(this.userController.updateById)
      .delete(this.userController.deleteById);

    return router;
  }
}

export default UserRouter;
