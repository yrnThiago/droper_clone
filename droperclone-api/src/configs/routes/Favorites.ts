import FavoritesController from "@controllers/Favorites";
import Favorites from "@models/Favorites";

import FavoritesRepository from "@repositories/Favorites";

import FavoritesRouter from "@routes/Favorites";
import FavoritesService from "@services/Favorites";
import { getRepository } from "typeorm";

const favoritesRepository = new FavoritesRepository(getRepository(Favorites));
const favoritesService = new FavoritesService(favoritesRepository);
const favoritesController = new FavoritesController(favoritesService);
const favoritesRouter = new FavoritesRouter(favoritesController);

export default favoritesRouter.getRouter();
