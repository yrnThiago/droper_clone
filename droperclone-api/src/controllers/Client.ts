import { NextFunction, Response } from "express";
import Client from "@models/Client";
import IRequestWithContext from "@interfaces/RequestWithContext";
import { IClientController, IClientService } from "@interfaces/Client";
import HttpStatus from "http-status-codes";

class ClientController implements IClientController {
  clientService: IClientService;

  constructor(clientService: IClientService) {
    this.clientService = clientService;

    this.add = this.add.bind(this);
    this.getMany = this.getMany.bind(this);
    this.getById = this.getById.bind(this);
    this.updateById = this.updateById.bind(this);
    this.deleteById = this.deleteById.bind(this);
  }

  async add(req: IRequestWithContext, res: Response, next: NextFunction): Promise<void | Response> {
    const ctx = req.context;

    try {
      const clientBody = req.body;
      if (!clientBody) return res.status(HttpStatus.BAD_REQUEST).json({ error: "clientBody is missing" });
      const client = await this.clientService.add(ctx, clientBody);

      return res.status(HttpStatus.OK).json(client);
    } catch (error) {
      return next(error);
    }
  }

  async getMany(req: IRequestWithContext, res: Response, next: NextFunction): Promise<void | Response> {
    const ctx = req.context;

    try {
      const clients = await this.clientService.getMany(ctx);
      return res.status(HttpStatus.OK).json(clients);
    } catch (error) {
      return next(error);
    }
  }

  async getById(req: IRequestWithContext, res: Response, next: NextFunction): Promise<void | Response> {
    const ctx = req.context;

    try {
      const { id = null } = req.params;

      const client = await this.clientService.getById(ctx, id);
      if (!client) return res.status(HttpStatus.NOT_FOUND).json({ error: "client not found" });

      return res.status(HttpStatus.OK).json(client);
    } catch (error) {
      return next(error);
    }
  }

  async updateById(req: IRequestWithContext, res: Response, next: NextFunction): Promise<void | Response> {
    const ctx = req.context;

    try {
      const { id = null } = req.params;
      const clientBody: Client = req.body;
      if (!id) return res.status(HttpStatus.BAD_REQUEST).json({ error: "id is missing" });

      const client = await this.clientService.getById(ctx, id);
      if (!client) return res.status(HttpStatus.NOT_FOUND).json({ error: "client not found" });
      const newClient = await this.clientService.update(ctx, client, clientBody);

      return res.status(HttpStatus.OK).json(newClient);
    } catch (error) {
      return next(error);
    }
  }

  async deleteById(req: IRequestWithContext, res: Response, next: NextFunction): Promise<void | Response> {
    const ctx = req.context;

    try {
      const { id = null } = req.params;
      if (!id) return res.status(HttpStatus.BAD_REQUEST).json({ error: "id is missing" });

      const client = await this.clientService.getById(ctx, id);
      if (!client) return res.status(HttpStatus.NOT_FOUND).json({ error: "client not found" });

      const deletedClient = await this.clientService.delete(ctx, client);

      return res.status(HttpStatus.OK).json(deletedClient);
    } catch (error) {
      return next(error);
    }
  }
}

export default ClientController;
