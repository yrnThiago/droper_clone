import { NextFunction, Response } from "express";
import Calendar from "@models/Calendar";
import IRequestWithContext from "@interfaces/RequestWithContext";
import { ICalendarController, ICalendarService } from "@interfaces/Calendar";
import HttpStatus from "http-status-codes";

class CalendarController implements ICalendarController {
  calendarService: ICalendarService;

  constructor(calendarService: ICalendarService) {
    this.calendarService = calendarService;

    this.add = this.add.bind(this);
    this.getMany = this.getMany.bind(this);
    this.getDates = this.getDates.bind(this);
    this.getById = this.getById.bind(this);
    this.updateById = this.updateById.bind(this);
    this.deleteById = this.deleteById.bind(this);
  }

  async add(req: IRequestWithContext, res: Response, next: NextFunction): Promise<void | Response> {
    const ctx = req.context;

    try {
      const calendarBody = req.body;
      if (!calendarBody) return res.status(HttpStatus.BAD_REQUEST).json({ error: "calendarBody is missing" });
      const calendar = await this.calendarService.add(ctx, calendarBody);

      return res.status(HttpStatus.OK).json(calendar);
    } catch (error) {
      return next(error);
    }
  }

  async getMany(req: IRequestWithContext, res: Response, next: NextFunction): Promise<void | Response> {
    const ctx = req.context;

    try {
      const {
        page = 0, amount = 100, filtro = "maisvistos", mes = 7, ano = 2023
      } = req.body;

      const calendars = await this.calendarService.getMany(ctx, page, amount, filtro, mes, ano);
      const temMais = (calendars.length + 1 >= (page + 1) * amount);
      return res.status(HttpStatus.OK).json({ drops: calendars, temMais, total: calendars.length });
    } catch (error) {
      return next(error);
    }
  }

  async getDates(req: IRequestWithContext, res: Response, next: NextFunction): Promise<void | Response> {
    const ctx = req.context;

    try {
      const dates = await this.calendarService.getDates(ctx);
      return res.status(HttpStatus.OK).json(dates);
    } catch (error) {
      return next(error);
    }
  }

  async getById(req: IRequestWithContext, res: Response, next: NextFunction): Promise<void | Response> {
    const ctx = req.context;

    try {
      const { id = null } = req.params;

      const calendar = await this.calendarService.getById(ctx, id);
      if (!calendar) return res.status(HttpStatus.NOT_FOUND).json({ error: "calendar not found" });

      return res.status(HttpStatus.OK).json(calendar);
    } catch (error) {
      return next(error);
    }
  }

  async updateById(req: IRequestWithContext, res: Response, next: NextFunction): Promise<void | Response> {
    const ctx = req.context;

    try {
      const { id = null } = req.params;
      const calendarBody: Calendar = req.body;
      if (!id) return res.status(HttpStatus.BAD_REQUEST).json({ error: "id is missing" });

      const calendar = await this.calendarService.getById(ctx, id);
      if (!calendar) return res.status(HttpStatus.NOT_FOUND).json({ error: "calendar not found" });
      const newCalendar = await this.calendarService.update(ctx, calendar, calendarBody);

      return res.status(HttpStatus.OK).json(newCalendar);
    } catch (error) {
      return next(error);
    }
  }

  async deleteById(req: IRequestWithContext, res: Response, next: NextFunction): Promise<void | Response> {
    const ctx = req.context;

    try {
      const { id = null } = req.params;
      if (!id) return res.status(HttpStatus.BAD_REQUEST).json({ error: "id is missing" });

      const calendar = await this.calendarService.getById(ctx, id);
      if (!calendar) return res.status(HttpStatus.NOT_FOUND).json({ error: "calendar not found" });

      const deletedCalendar = await this.calendarService.delete(ctx, calendar);

      return res.status(HttpStatus.OK).json(deletedCalendar);
    } catch (error) {
      return next(error);
    }
  }
}

export default CalendarController;
