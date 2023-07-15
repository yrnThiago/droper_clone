/* eslint-disable no-unused-vars */
import { NextFunction, Response } from "express";
import IContext from "@interfaces/Context";
import IRouter from "@interfaces/Router";
import IRequestWithContext from "@interfaces/RequestWithContext";
import { ICalendarRepository } from "./Calendar";

interface IsearchService {
  calendarRepository: ICalendarRepository;

  getMany(ctx: IContext, termo: string): Promise<any[]>;
};

interface IsearchController {
  searchService: IsearchService;

  getMany(req: IRequestWithContext, res: Response, next: NextFunction): Promise<void | Response>
};

interface IsearchRouter extends IRouter {
  searchController: IsearchController;
}

export {
  IsearchService,
  IsearchController,
  IsearchRouter
};
