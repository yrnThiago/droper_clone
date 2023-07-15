/* eslint-disable no-unused-vars */
import Favorites from "@models/Favorites";
import { NextFunction, Response } from "express";
import IContext from "@interfaces/Context";
import IRouter from "@interfaces/Router";
import IRequestWithContext from "@interfaces/RequestWithContext";
import Favorites from "@models/Favorites";
import { ResultDelete } from "@repositories/Favorites";

interface IFavoritesRepository {
  add(ctx: IContext, favorites: Favorites): Promise<Favorites>;
  getMany(ctx: IContext,): Promise<Favorites[]>;
  getById(ctx: IContext, id: string): Promise<Favorites>;
  delete(ctx: IContext, favorites: Favorites): Promise<Favorites>;
};

interface IFavoritesService {
  favoritesRepository: IFavoritesRepository;

  add(ctx: IContext, favorites: Favorites): Promise<Favorites>;
  getMany(ctx: IContext,): Promise<Favorites[]>;
  getById(ctx: IContext, id: string): Promise<Favorites>;
  delete(ctx: IContext, favorites: Favorites): Promise<Favorites>;
};

interface IFavoritesController {
  favoritesService: IFavoritesService;

  add(req: IRequestWithContext, res: Response, next: NextFunction): Promise<void | Response>
  getMany(req: IRequestWithContext, res: Response, next: NextFunction): Promise<void | Response>
  getById(req: IRequestWithContext, res: Response, next: NextFunction): Promise<void | Response>
  deleteById(req: IRequestWithContext, res: Response, next: NextFunction): Promise<void | Response>
};

interface IFavoritesRouter extends IRouter {
  favoritesController: IFavoritesController;
}

export {
  IFavoritesRepository,
  IFavoritesService,
  IFavoritesController,
  IFavoritesRouter
};
