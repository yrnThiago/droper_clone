/* eslint-disable no-unused-vars */
import Calendar from "@models/Calendar";
import { ICalendarRepository, ICalendarService } from "@interfaces/Calendar";
import IContext from "@interfaces/Context";
import { validationsUtils } from "@utils/Validations";
import {
  DATES, Dates, CalendarOrderType, filterKeyType
} from "@domain/Calendar";
import { FindOperator, Like } from "typeorm";

class CalendarService implements ICalendarService {
  calendarRepository: ICalendarRepository;

  constructor(calendarRepository: ICalendarRepository) {
    this.calendarRepository = calendarRepository;
  }

  async add(ctx: IContext, calendar: Calendar): Promise<Calendar> {
    await validationsUtils.validateObject(Calendar, calendar);
    return this.calendarRepository.add(ctx, calendar);
  }

  async getMany(ctx: IContext, page: number, amount: number, filtro: string, mes: number, ano: number): Promise<Calendar[]> {
    const { anos, meses } = await this.getDates(ctx);
    const mesStr = meses[mes - 1].titulo.toLowerCase();

    const where = {} as {dataLancamentoAno: number, dataLancamentoMes: string};

    if (ano) where.dataLancamentoAno = ano;
    if (meses) where.dataLancamentoMes = mesStr;

    const filtroChaveMap: filterKeyType = {
      retail: { precofRetail: "DESC" },
      maisvistos: { },
      maisantigos: { dataLancamentoDia: "ASC" },
      maisrecentes: { dataLancamentoDia: "DESC" }
    };
    const filtroChave = filtroChaveMap[filtro] || {};

    return this.calendarRepository.getMany(ctx, page, amount, filtroChave, where);
  }

  async getManyBySearch(ctx: IContext, page: number, amount: number, termo: string): Promise<Calendar[]> {
    const where = {} as {titulo: FindOperator<string>};

    where.titulo = Like(`%${termo}%`);

    return this.calendarRepository.getManyBySearch(ctx, page, amount, where);
  }

  async getDates(ctx: IContext): Promise<Dates> {
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
