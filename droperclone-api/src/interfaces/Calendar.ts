/* eslint-disable no-unused-vars */
import Calendar from "@models/Calendar";
import { NextFunction, Response } from "express";
import IContext from "@interfaces/Context";
import IRouter from "@interfaces/Router";
import IRequestWithContext from "@interfaces/RequestWithContext";
import { Dates, CalendarOrderType } from "@domain/Calendar";

interface ICalendarRepository {
  add(ctx: IContext, calendar: Calendar): Promise<Calendar>;
  getMany(ctx: IContext, page: number, amount: number, filtroChave: CalendarOrderType, where: {}): Promise<Calendar[]>;
  getManyBySearch(ctx: IContext, page: number, amount: number, where: {}): Promise<Calendar[]>;
  getById(ctx: IContext, id: string): Promise<Calendar>;
  update(ctx: IContext, calendar: Calendar, newCalendarData: Calendar): Promise<Calendar>;
  delete(ctx: IContext, calendar: Calendar): Promise<Calendar>;
};

interface ICalendarService {
  calendarRepository: ICalendarRepository;

  add(ctx: IContext, calendar: Calendar): Promise<Calendar>;
  getMany(ctx: IContext, page: number, amount: number, filtro: string, mes: number, ano: number): Promise<Calendar[]>;
  getManyBySearch(ctx: IContext, page: number, amount: number, termo: string): Promise<Calendar[]>;
  getById(ctx: IContext, id: string): Promise<Calendar>;
  getDates(ctx: IContext,): Promise<Dates>;
  update(ctx: IContext, calendar: Calendar, newCalendarData: Calendar): Promise<Calendar>;
  delete(ctx: IContext, calendar: Calendar): Promise<Calendar>;
};

interface ICalendarController {
  calendarService: ICalendarService;

  add(req: IRequestWithContext, res: Response, next: NextFunction): Promise<void | Response>
  getMany(req: IRequestWithContext, res: Response, next: NextFunction): Promise<void | Response>
  getById(req: IRequestWithContext, res: Response, next: NextFunction): Promise<void | Response>
  getDates(req: IRequestWithContext, res: Response, next: NextFunction): Promise<void | Response>
  updateById(req: IRequestWithContext, res: Response, next: NextFunction): Promise<void | Response>
  deleteById(req: IRequestWithContext, res: Response, next: NextFunction): Promise<void | Response>
};

interface ICalendarRouter extends IRouter {
  calendarController: ICalendarController;
}

export {
  ICalendarRepository,
  ICalendarService,
  ICalendarController,
  ICalendarRouter
};
