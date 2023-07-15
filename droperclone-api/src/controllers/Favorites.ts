import { NextFunction, Response } from "express";
import Favorites from "@models/Favorites";
import IRequestWithContext from "@interfaces/RequestWithContext";
import { IFavoritesController, IFavoritesService } from "@interfaces/Favorites";
import HttpStatus from "http-status-codes";

class FavoritesController implements IFavoritesController {
  favoritesService: IFavoritesService;

  constructor(favoritesService: IFavoritesService) {
    this.favoritesService = favoritesService;

    this.add = this.add.bind(this);
    this.getMany = this.getMany.bind(this);
    this.getById = this.getById.bind(this);
    this.deleteById = this.deleteById.bind(this);
  }

  async add(req: IRequestWithContext, res: Response, next: NextFunction): Promise<void | Response> {
    const ctx = req.context;

    try {
      const favoritesBody = req.body;
      if (!favoritesBody) return res.status(HttpStatus.BAD_REQUEST).json({ error: "favoritesBody is missing" });
      const favorites = await this.favoritesService.add(ctx, favoritesBody);

      return res.status(HttpStatus.OK).json(favorites);
    } catch (error) {
      return next(error);
    }
  }

  async getMany(req: IRequestWithContext, res: Response, next: NextFunction): Promise<void | Response> {
    const ctx = req.context;

    try {
      const favorites = await this.favoritesService.getMany(ctx);
      return res.status(HttpStatus.OK).json({ produtos: favorites, total: favorites.length });
    } catch (error) {
      return next(error);
    }
  }

  async getById(req: IRequestWithContext, res: Response, next: NextFunction): Promise<void | Response> {
    const ctx = req.context;

    try {
      const { id = null } = req.params;

      const favorites = await this.favoritesService.getById(ctx, id);
      if (!favorites) return res.status(HttpStatus.NOT_FOUND).json({ error: "favorites not found" });

      return res.status(HttpStatus.OK).json(favorites);
    } catch (error) {
      return next(error);
    }
  }

  async deleteById(req: IRequestWithContext, res: Response, next: NextFunction): Promise<void | Response> {
    const ctx = req.context;

    try {
      const { id = null } = req.params;
      if (!id) return res.status(HttpStatus.BAD_REQUEST).json({ error: "id is missing" });

      const favorites = await this.favoritesService.getById(ctx, id);
      if (!favorites) return res.status(HttpStatus.NOT_FOUND).json({ error: "favorites not found" });

      await this.favoritesService.delete(ctx, favorites);

      return res.status(HttpStatus.OK).json("Produto removido dos favoritos!");
    } catch (error) {
      return next(error);
    }
  }
}

export default FavoritesController;
