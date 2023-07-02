import { NextFunction, Response } from "express";
import User from "@models/User";
import IRequestWithContext from "@interfaces/RequestWithContext";
import { IUserController, IUserService } from "@interfaces/User";
import HttpStatus from "http-status-codes";

class UserController implements IUserController {
  userService: IUserService;

  constructor(userService: IUserService) {
    this.userService = userService;

    this.add = this.add.bind(this);
    this.getMany = this.getMany.bind(this);
    this.getById = this.getById.bind(this);
    this.updateById = this.updateById.bind(this);
    this.deleteById = this.deleteById.bind(this);
  }

  async add(req: IRequestWithContext, res: Response, next: NextFunction): Promise<void | Response> {
    const ctx = req.context;

    try {
      const userBody = req.body;
      if (!userBody) return res.status(HttpStatus.BAD_REQUEST).json({ error: "userBody is missing" });

      const userExists = await this.userService.getByEmail(ctx, userBody.email);
      if (userExists) return res.status(HttpStatus.BAD_REQUEST).json({ error: "user already exists" });

      const user = await this.userService.add(ctx, userBody);

      return res.status(HttpStatus.OK).json(user);
    } catch (error) {
      return next(error);
    }
  }

  async getMany(req: IRequestWithContext, res: Response, next: NextFunction): Promise<void | Response> {
    const ctx = req.context;

    try {
      const users = await this.userService.getMany(ctx);
      return res.status(HttpStatus.OK).json(users);
    } catch (error) {
      return next(error);
    }
  }

  async getById(req: IRequestWithContext, res: Response, next: NextFunction): Promise<void | Response> {
    const ctx = req.context;

    try {
      const { id = null } = req.params;

      const user = await this.userService.getById(ctx, id);
      if (!user) return res.status(HttpStatus.NOT_FOUND).json({ error: "user not found" });

      return res.status(HttpStatus.OK).json(user);
    } catch (error) {
      return next(error);
    }
  }

  async updateById(req: IRequestWithContext, res: Response, next: NextFunction): Promise<void | Response> {
    const ctx = req.context;

    try {
      const { id = null } = req.params;
      const userBody: User = req.body;
      if (!id) return res.status(HttpStatus.BAD_REQUEST).json({ error: "id is missing" });

      const user = await this.userService.getById(ctx, id);
      if (!user) return res.status(HttpStatus.NOT_FOUND).json({ error: "user not found" });
      const newUser = await this.userService.update(ctx, user, userBody);

      return res.status(HttpStatus.OK).json(newUser);
    } catch (error) {
      return next(error);
    }
  }

  async deleteById(req: IRequestWithContext, res: Response, next: NextFunction): Promise<void | Response> {
    const ctx = req.context;

    try {
      const { id = null } = req.params;
      if (!id) return res.status(HttpStatus.BAD_REQUEST).json({ error: "id is missing" });

      const user = await this.userService.getById(ctx, id);
      if (!user) return res.status(HttpStatus.NOT_FOUND).json({ error: "user not found" });
      const deletedUser = await this.userService.delete(ctx, user);

      return res.status(HttpStatus.OK).json(deletedUser);
    } catch (error) {
      return next(error);
    }
  }
}

export default UserController;
