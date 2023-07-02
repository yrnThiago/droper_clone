import { Repository } from "typeorm";
import Calendar from "@models/Calendar";
import { ICalendarRepository } from "@interfaces/Calendar";
import IContext from "@interfaces/Context";
import Address from "@models/Address";

class CalendarRepository implements ICalendarRepository {
  repository: Repository<Calendar>;

  constructor(repository: Repository<Calendar>) {
    this.repository = repository;
  }

  async add(ctx: IContext, calendar: Calendar): Promise<Calendar> {
    calendar = await this.repository.manager.transaction(async(entityManager): Promise<Calendar> => {
      calendar = await entityManager.save(entityManager.create(Calendar, calendar));
      return calendar;
    });

    return calendar;
  }

  // eslint-disable-next-line no-unused-vars
  async getMany(ctx: IContext): Promise<Calendar[]> {
    const calendars = await this.repository.find();
    return calendars;
  }

  async getById(ctx: IContext, id: string): Promise<Calendar> {
    const calendar = await this.repository.findOne(id);
    return calendar;
  }

  async update(ctx: IContext, calendar: Calendar, newCalendarData: Calendar): Promise<Calendar> {
    calendar = await this.repository.manager.transaction(async(entityManager): Promise<Calendar> => {
      await entityManager.update(Calendar, calendar.id, newCalendarData);
      calendar = await entityManager.findOne(Calendar, calendar.id);
      return calendar;
    });

    return calendar;
  }

  async delete(ctx: IContext, calendar: Calendar): Promise<Calendar> {
    calendar = await this.repository.softRemove(calendar);

    return calendar;
  }
}

export default CalendarRepository;
