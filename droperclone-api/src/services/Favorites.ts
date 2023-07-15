import Favorites from "@models/Favorites";
import { IFavoritesRepository, IFavoritesService } from "@interfaces/Favorites";
import IContext from "@interfaces/Context";
import { validationsUtils } from "@utils/Validations";

class FavoritesService implements IFavoritesService {
  favoritesRepository: IFavoritesRepository;

  constructor(favoritesRepository: IFavoritesRepository) {
    this.favoritesRepository = favoritesRepository;
  }

  async add(ctx: IContext, favorites: Favorites): Promise<Favorites> {
    await validationsUtils.validateObject(Favorites, favorites);
    return this.favoritesRepository.add(ctx, favorites);
  }

  async getById(ctx: IContext, id: string): Promise<Favorites> {
    return this.favoritesRepository.getById(ctx, id);
  }

  async getMany(ctx: IContext): Promise<Favorites[]> {
    return this.favoritesRepository.getMany(ctx);
  }

  async delete(ctx: IContext, favorites: Favorites): Promise<Favorites> {
    return this.favoritesRepository.delete(ctx, favorites);
  }
}

export default FavoritesService;
