import { Repository } from "typeorm";
import Favorites from "@models/Favorites";
import { IFavoritesRepository } from "@interfaces/Favorites";
import IContext from "@interfaces/Context";

export interface ResultDelete {
  raw: any[];
  affected: number;
}

class FavoritesRepository implements IFavoritesRepository {
  repository: Repository<Favorites>;

  constructor(repository: Repository<Favorites>) {
    this.repository = repository;
  }

  async add(ctx: IContext, favorites: Favorites): Promise<Favorites> {
    favorites = await this.repository.save(favorites);

    return favorites;
  }

  async getById(ctx: IContext, id: string): Promise<Favorites> {
    const favorites = await this.repository.findOne(id);
    return favorites;
  }

  // eslint-disable-next-line no-unused-vars
  async getMany(ctx: IContext): Promise<Favorites[]> {
    const favorites = await this.repository.find();
    return favorites;
  }

  async delete(ctx: IContext, favorites: Favorites): Promise<Favorites> {
    favorites = await this.repository.delete(favorites.id);

    return favorites;
  }
}

export default FavoritesRepository;
