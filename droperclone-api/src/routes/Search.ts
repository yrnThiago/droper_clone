import { Router } from "express";
import { ISearchController, ISearchRouter } from "@interfaces/Search";

class SearchRouter implements ISearchRouter {
  path: string = "/search";
  SearchController: ISearchController;

  constructor(SearchController: ISearchController) {
    this.SearchController = SearchController;
  }

  getRouter(): Router {
    const router: Router = Router();

    router
      .route(`${this.path}/`)
      .post(this.SearchController.getMany);

    return router;
  }
}

export default SearchRouter;
