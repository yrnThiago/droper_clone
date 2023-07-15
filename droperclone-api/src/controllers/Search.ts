import { NextFunction, Response } from "express";
import IRequestWithContext from "@interfaces/RequestWithContext";
import { ISearchController, ISearchService } from "@interfaces/Search";
import HttpStatus from "http-status-codes";
import { ICalendarService } from "@interfaces/Calendar";

class SearchController implements ISearchController {
  CalendarService: ICalendarService;

  constructor(CalendarService: ICalendarService) {
    this.CalendarService = CalendarService;

    this.getMany = this.getMany.bind(this);
  }

  async getMany(req: IRequestWithContext, res: Response, next: NextFunction): Promise<void | Response> {
    const ctx = req.context;

    try {
      const { page = 0, amount = 40, termo = "" } = req.body;

      const searchs = await this.CalendarService.getManyBySearch(ctx, page, amount, termo);
      return res.status(HttpStatus.OK).json({ drops: searchs, amount, page });
    } catch (error) {
      return next(error);
    }
  }
}

export default SearchController;
