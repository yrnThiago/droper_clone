import { Repository } from "typeorm";
import Feed from "@models/Feed";
import { IFeedRepository } from "@interfaces/Feed";
import IContext from "@interfaces/Context";

class FeedRepository implements IFeedRepository {
  repository: Repository<Feed>;

  constructor(repository: Repository<Feed>) {
    this.repository = repository;
  }

  async add(ctx: IContext, feed: Feed): Promise<Feed> {
    feed = await this.repository.manager.transaction(async(entityManager): Promise<Feed> => {
      feed = await entityManager.save(entityManager.create(Feed, feed));
      return feed;
    });

    return feed;
  }

  // eslint-disable-next-line no-unused-vars
  async getMany(ctx: IContext, inicio: number, fim: number, where: {}): Promise<Feed[]> {
    const feeds = await this.repository.find({
      where: {
        ...where
      },
      take: fim,
      skip: inicio * fim,
      order: {
        dataCriacao: "DESC"
      }
    });
    return feeds;
  }

  async getManyBySearch(ctx: IContext, page: number, amount: number, where: {}): Promise<Feed[]> {
    const feed = await this.repository.find({
      where: { ...where }, skip: page * amount, take: amount
    });
    return feed;
  }

  async getById(ctx: IContext, id: string): Promise<Feed> {
    const feed = await this.repository.findOne(id);
    return feed;
  }

  async update(ctx: IContext, feed: Feed, newFeedData: Feed): Promise<Feed> {
    feed = await this.repository.manager.transaction(async(entityManager): Promise<Feed> => {
      await entityManager.update(Feed, feed.id, newFeedData);
      feed = await entityManager.findOne(Feed, feed.id);
      return feed;
    });

    return feed;
  }

  async delete(ctx: IContext, feed: Feed): Promise<Feed> {
    feed = await this.repository.softRemove(feed);

    return feed;
  }
}

export default FeedRepository;
