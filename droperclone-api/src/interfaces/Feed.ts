/* eslint-disable no-unused-vars */
import Feed from "@models/Feed";
import { NextFunction, Response } from "express";
import IContext from "@interfaces/Context";
import IRouter from "@interfaces/Router";
import IRequestWithContext from "@interfaces/RequestWithContext";
import { ProductSizesTypeApiResponse } from "@domain/Feed";

interface IFeedRepository {
  add(ctx: IContext, feed: Feed): Promise<Feed>;
  getMany(ctx: IContext, inicio: number, fim: number, where: {}): Promise<Feed[]>;
  getManyBySearch(ctx: IContext, page: number, amount: number, where: {}): Promise<Feed[]>;
  getById(ctx: IContext, id: string): Promise<Feed>;
  update(ctx: IContext, feed: Feed, newFeedData: Feed): Promise<Feed>;
  delete(ctx: IContext, feed: Feed): Promise<Feed>;
};

interface IFeedService {
  feedRepository: IFeedRepository;

  add(ctx: IContext, feed: Feed): Promise<Feed>;
  getMany(ctx: IContext, inicio: number, fim: number, idTipoProduto: any, tamanho: any): Promise<Feed[]>;
  getManyBySearch(ctx: IContext, page: number, amount: number, termo: string): Promise<Feed[]>;
  getById(ctx: IContext, id: string): Promise<Feed>;
  getProductTypesIds(ctx: IContext,): Promise<ProductSizesTypeApiResponse>;
  update(ctx: IContext, feed: Feed, newFeedData: Feed): Promise<Feed>;
  delete(ctx: IContext, feed: Feed): Promise<Feed>;
};

interface IFeedController {
  feedService: IFeedService;

  add(req: IRequestWithContext, res: Response, next: NextFunction): Promise<void | Response>
  getMany(req: IRequestWithContext, res: Response, next: NextFunction): Promise<void | Response>
  getById(req: IRequestWithContext, res: Response, next: NextFunction): Promise<void | Response>
  getProductTypesIds(req: IRequestWithContext, res: Response, next: NextFunction): Promise<void | Response>
  updateById(req: IRequestWithContext, res: Response, next: NextFunction): Promise<void | Response>
  deleteById(req: IRequestWithContext, res: Response, next: NextFunction): Promise<void | Response>
};

interface IFeedRouter extends IRouter {
  feedController: IFeedController;
}

export {
  IFeedRepository,
  IFeedService,
  IFeedController,
  IFeedRouter
};
