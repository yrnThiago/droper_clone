/* eslint-disable no-unused-vars */
import Search from "@models/Search";
import { ISearchRepository, ISearchService } from "@interfaces/Search";
import IContext from "@interfaces/Context";
import { validationsUtils } from "@utils/Validations";
import { TiposDeProduto, ProductSizesTypeApiResponse } from "@domain/Search";
import { FindOperator, Like } from "typeorm";
import { ICalendarRepository } from "@interfaces/Calendar";

class SearchService implements ISearchService {
  CalendarRepository: ICalendarRepository;

  constructor(CalendarRepository: ICalendarRepository) {
    this.CalendarRepository = CalendarRepository;
  }

  async getMany(ctx: IContext, page: number, amount: number, filtroChave: string, termo: string): Promise<Search[]> {
    const where = {};

    if (termo) where.titulo = Like(termo);

    return this.CalendarRepository.getMany(ctx, page, amount, filtroChave, where);
  }
}

export default SearchService;
