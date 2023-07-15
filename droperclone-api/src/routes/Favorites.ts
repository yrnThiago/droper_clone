import { Router } from "express";
import { IFavoritesController, IFavoritesRouter } from "@interfaces/Favorites";

class FavoritesRouter implements IFavoritesRouter {
  path: string = "/produtos";
  favoritesController: IFavoritesController;

  constructor(favoritesController: IFavoritesController) {
    this.favoritesController = favoritesController;
  }

  getRouter(): Router {
    const router: Router = Router();

    router
      .route(`${this.path}favoritos`)
      .get(this.favoritesController.getMany);

    router
      .route(`${this.path}/:id/favorito`)
      .get(this.favoritesController.getById)
      .post(this.favoritesController.add)
      .delete(this.favoritesController.deleteById);

    return router;
  }
}

export default FavoritesRouter;
