/* eslint-disable no-unused-vars */
import Calendar from "@models/Calendar";
import { ICalendarRepository, ICalendarService } from "@interfaces/Calendar";
import IContext from "@interfaces/Context";
import { validationsUtils } from "@utils/Validations";
import { DATES } from "@domain/Calendar";

class CalendarService implements ICalendarService {
  calendarRepository: ICalendarRepository;

  constructor(calendarRepository: ICalendarRepository) {
    this.calendarRepository = calendarRepository;
  }

  async add(ctx: IContext, calendar: Calendar): Promise<Calendar> {
    await validationsUtils.validateObject(Calendar, calendar);
    return this.calendarRepository.add(ctx, calendar);
  }

  async getMany(ctx: IContext): Promise<Calendar[]> {
    return this.calendarRepository.getMany(ctx);
  }

  async getDates(ctx: IContext): Promise<string[]> {
    return DATES;
  }

  async getById(ctx: IContext, id: string): Promise<Calendar> {
    return this.calendarRepository.getById(ctx, id);
  }

  async update(ctx: IContext, calendar: Calendar, newCalendarData: Calendar): Promise<Calendar> {
    await validationsUtils.validateObject(Calendar, newCalendarData);
    return this.calendarRepository.update(ctx, calendar, newCalendarData);
  }

  async delete(ctx: IContext, calendar: Calendar): Promise<Calendar> {
    return this.calendarRepository.delete(ctx, calendar);
  }
}

export default CalendarService;
