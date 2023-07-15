import { Router } from "express";
import { IClientController, IClientRouter } from "@interfaces/Client";

class ClientRouter implements IClientRouter {
  path: string = "/client";
  clientController: IClientController;

  constructor(clientController: IClientController) {
    this.clientController = clientController;
  }

  getRouter(): Router {
    const router: Router = Router();

    router
      .route(`${this.path}`)
      .post(this.clientController.add)
      .get(this.clientController.getMany);

    router
      .route(`${this.path}/:id`)
      .get(this.clientController.getById)
      .put(this.clientController.updateById)
      .delete(this.clientController.deleteById);

    return router;
  }
}

export default ClientRouter;
