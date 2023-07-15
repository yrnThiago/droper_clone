import { Router } from "express";
import { IFeedController, IFeedRouter } from "@interfaces/Feed";

class FeedRouter implements IFeedRouter {
  path: string = "/produtos";
  feedController: IFeedController;

  constructor(feedController: IFeedController) {
    this.feedController = feedController;
  }

  getRouter(): Router {
    const router: Router = Router();

    router
      .route(`${this.path}/novidades/:inicio/:fim`)
      .get(this.feedController.getMany);

    router
      .route(`${this.path}/filtros`)
      .get(this.feedController.getProductTypesIds);

    router
      .route(`${this.path}/:id`)
      .get(this.feedController.getById)
      .post(this.feedController.updateById);

    return router;
  }
}

export default FeedRouter;
