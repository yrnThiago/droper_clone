import { NextFunction, Response } from "express";
import IRequestWithContext from "@interfaces/RequestWithContext";
import { ISearchController } from "@interfaces/Search";
import HttpStatus from "http-status-codes";
import { ICalendarService } from "@interfaces/Calendar";
import { IFeedService } from "@interfaces/Feed";

class SearchController implements ISearchController {
  CalendarService: ICalendarService;
  FeedService: IFeedService;

  constructor(CalendarService: ICalendarService, FeedService: IFeedService) {
    this.CalendarService = CalendarService;
    this.FeedService = FeedService;

    this.getMany = this.getMany.bind(this);
  }

  async getMany(req: IRequestWithContext, res: Response, next: NextFunction): Promise<void | Response> {
    const ctx = req.context;

    try {
      const {
        page = 0, amount = 40, termo = "", marca = null, modelo = null, tag = null
      } = req.body;

      const productSearchResults = await this.FeedService.getManyBySearch(ctx, page, amount, termo);
      const totalProdutos = productSearchResults.length;
      const temProdutos = totalProdutos >= 1;

      const dropSearchResults = await this.CalendarService.getManyBySearch(ctx, page, amount, termo);
      const temMaisDrops = dropSearchResults.length >= amount;
      return res.status(HttpStatus.OK).json({
        produtos: productSearchResults,
        lojas: [],
        page,
        amount,
        totalProdutos,
        temProdutos,
        drops: dropSearchResults,
        temMaisDrops,
        marca: null,
        modelo: null,
        banner: null
      });
    } catch (error) {
      return next(error);
    }
  }
}

export default SearchController;
