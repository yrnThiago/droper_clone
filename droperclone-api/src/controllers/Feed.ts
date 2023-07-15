import { NextFunction, Response } from "express";
import Feed from "@models/Feed";
import IRequestWithContext from "@interfaces/RequestWithContext";
import { IFeedController, IFeedService } from "@interfaces/Feed";
import HttpStatus from "http-status-codes";

class FeedController implements IFeedController {
  feedService: IFeedService;

  constructor(feedService: IFeedService) {
    this.feedService = feedService;

    this.add = this.add.bind(this);
    this.getMany = this.getMany.bind(this);
    this.getProductTypesIds = this.getProductTypesIds.bind(this);
    this.getById = this.getById.bind(this);
    this.updateById = this.updateById.bind(this);
    this.deleteById = this.deleteById.bind(this);
  }

  async add(req: IRequestWithContext, res: Response, next: NextFunction): Promise<void | Response> {
    const ctx = req.context;

    try {
      const feedBody = req.body;
      if (!feedBody) return res.status(HttpStatus.BAD_REQUEST).json({ error: "feedBody is missing" });
      const feed = await this.feedService.add(ctx, feedBody);

      return res.status(HttpStatus.OK).json(feed);
    } catch (error) {
      return next(error);
    }
  }

  async getMany(req: IRequestWithContext, res: Response, next: NextFunction): Promise<void | Response> {
    const ctx = req.context;

    try {
      const { inicio = 0, fim = 10 } = req.params;

      const { idTipoProduto, tamanho } = req.query;

      const feeds = await this.feedService.getMany(ctx, Number(inicio), Number(fim), idTipoProduto, tamanho);
      return res.status(HttpStatus.OK).json(feeds);
    } catch (error) {
      return next(error);
    }
  }

  async getProductTypesIds(req: IRequestWithContext, res: Response, next: NextFunction): Promise<void | Response> {
    const ctx = req.context;

    try {
      const types = await this.feedService.getProductTypesIds(ctx);
      return res.status(HttpStatus.OK).json(types);
    } catch (error) {
      return next(error);
    }
  }

  async getById(req: IRequestWithContext, res: Response, next: NextFunction): Promise<void | Response> {
    const ctx = req.context;

    try {
      const { id = null } = req.params;

      const feed = await this.feedService.getById(ctx, id);
      if (!feed) return res.status(HttpStatus.NOT_FOUND).json({ error: "feed not found" });

      return res.status(HttpStatus.OK).json(feed);
    } catch (error) {
      return next(error);
    }
  }

  async updateById(req: IRequestWithContext, res: Response, next: NextFunction): Promise<void | Response> {
    const ctx = req.context;

    try {
      const { id = null } = req.params;
      const feedBody: Feed = req.body;
      if (!id) return res.status(HttpStatus.BAD_REQUEST).json({ error: "id is missing" });

      const feed = await this.feedService.getById(ctx, id);
      if (!feed) return res.status(HttpStatus.NOT_FOUND).json({ error: "feed not found" });
      const newFeed = await this.feedService.update(ctx, feed, feedBody);

      return res.status(HttpStatus.OK).json(newFeed);
    } catch (error) {
      return next(error);
    }
  }

  async deleteById(req: IRequestWithContext, res: Response, next: NextFunction): Promise<void | Response> {
    const ctx = req.context;

    try {
      const { id = null } = req.params;
      if (!id) return res.status(HttpStatus.BAD_REQUEST).json({ error: "id is missing" });

      const feed = await this.feedService.getById(ctx, id);
      if (!feed) return res.status(HttpStatus.NOT_FOUND).json({ error: "feed not found" });

      const deletedFeed = await this.feedService.delete(ctx, feed);

      return res.status(HttpStatus.OK).json(deletedFeed);
    } catch (error) {
      return next(error);
    }
  }
}

export default FeedController;
