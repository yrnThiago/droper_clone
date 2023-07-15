/* eslint-disable no-unused-vars */
import Client from "@models/Client";
import { NextFunction, Response } from "express";
import IContext from "@interfaces/Context";
import IRouter from "@interfaces/Router";
import IRequestWithContext from "@interfaces/RequestWithContext";

interface IClientRepository {
  add(ctx: IContext, client: Client): Promise<Client>;
  getMany(ctx: IContext,): Promise<Client[]>;
  getById(ctx: IContext, id: string): Promise<Client>;
  update(ctx: IContext, client: Client, newClientData: Client): Promise<Client>;
  delete(ctx: IContext, client: Client): Promise<Client>;
};

interface IClientService {
  clientRepository: IClientRepository;

  add(ctx: IContext, client: Client): Promise<Client>;
  getMany(ctx: IContext,): Promise<Client[]>;
  getById(ctx: IContext, id: string): Promise<Client>;
  update(ctx: IContext, client: Client, newClientData: Client): Promise<Client>;
  delete(ctx: IContext, client: Client): Promise<Client>;
};

interface IClientController {
  clientService: IClientService;

  add(req: IRequestWithContext, res: Response, next: NextFunction): Promise<void | Response>
  getMany(req: IRequestWithContext, res: Response, next: NextFunction): Promise<void | Response>
  getById(req: IRequestWithContext, res: Response, next: NextFunction): Promise<void | Response>
  updateById(req: IRequestWithContext, res: Response, next: NextFunction): Promise<void | Response>
  deleteById(req: IRequestWithContext, res: Response, next: NextFunction): Promise<void | Response>
};

interface IClientRouter extends IRouter {
  clientController: IClientController;
}

export {
  IClientRepository,
  IClientService,
  IClientController,
  IClientRouter
};
