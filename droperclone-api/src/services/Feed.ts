/* eslint-disable no-unused-vars */
import Feed from "@models/Feed";
import { IFeedRepository, IFeedService } from "@interfaces/Feed";
import IContext from "@interfaces/Context";
import { validationsUtils } from "@utils/Validations";
import { TiposDeProduto, ProductSizesTypeApiResponse } from "@domain/Feed";
import { FindOperator, Like } from "typeorm";

class FeedService implements IFeedService {
  feedRepository: IFeedRepository;

  constructor(feedRepository: IFeedRepository) {
    this.feedRepository = feedRepository;
  }

  async add(ctx: IContext, feed: Feed): Promise<Feed> {
    await validationsUtils.validateObject(Feed, feed);
    return this.feedRepository.add(ctx, feed);
  }

  async getMany(ctx: IContext, inicio: number, fim: number, idTipoProduto: string, tamanho: string): Promise<Feed[]> {
    interface FeedWhereType {
      idTipoProduto: number;
      TamanhoProdutoSelecao: FindOperator<string>;
    };
    const where = {} as FeedWhereType;

    if (idTipoProduto !== undefined) {
      where.idTipoProduto = Number(idTipoProduto);
      if (tamanho !== undefined) {
        const tamanhoStr = TiposDeProduto.tipos.find((tipo) => tipo.id === Number(idTipoProduto)).Tamanhos.find((size) => size.id === Number(tamanho)).titulo;
        where.TamanhoProdutoSelecao = Like(`%${tamanhoStr}%`);
      };
    }

    return this.feedRepository.getMany(ctx, inicio, fim, where);
  }

  async getManyBySearch(ctx: IContext, page: number, amount: number, termo: string): Promise<Feed[]> {
    const where = {} as {nome: FindOperator<string>};

    where.nome = Like(`%${termo}%`);

    return this.feedRepository.getManyBySearch(ctx, page, amount, where);
  }

  async getProductTypesIds(ctx: IContext): Promise<ProductSizesTypeApiResponse> {
    return TiposDeProduto;
  }

  async getById(ctx: IContext, id: string): Promise<Feed> {
    return this.feedRepository.getById(ctx, id);
  }

  async update(ctx: IContext, feed: Feed, newFeedData: Feed): Promise<Feed> {
    await validationsUtils.validateObject(Feed, newFeedData);
    return this.feedRepository.update(ctx, feed, newFeedData);
  }

  async delete(ctx: IContext, feed: Feed): Promise<Feed> {
    return this.feedRepository.delete(ctx, feed);
  }
}

export default FeedService;
