/* eslint-disable no-unused-vars */
import User from "@models/User";
import { NextFunction, Response } from "express";
import IContext from "@interfaces/Context";
import IRouter from "@interfaces/Router";
import IRequestWithContext from "@interfaces/RequestWithContext";

interface IUserRepository {
  add(ctx: IContext, user: User): Promise<User>;
  getMany(ctx: IContext,): Promise<User[]>;
  getById(ctx: IContext, id: string): Promise<User>;
  getByLogin(ctx: IContext, login: User): Promise<User>;
  getByEmail(ctx: IContext, email: string): Promise<User>;
  update(ctx: IContext, user: User, newUserData: User): Promise<User>;
  delete(ctx: IContext, user: User): Promise<User>;
};

interface IUserService {
  userRepository: IUserRepository;

  add(ctx: IContext, user: User): Promise<User>;
  getMany(ctx: IContext,): Promise<User[]>;
  getById(ctx: IContext, id: string): Promise<User>;
  getByEmail(ctx: IContext, email: string): Promise<User>;
  update(ctx: IContext, user: User, newUserData: User): Promise<User>;
  delete(ctx: IContext, user: User): Promise<User>;
};

interface IUserController {
  userService: IUserService;

  add(req: IRequestWithContext, res: Response, next: NextFunction): Promise<void | Response>;
  getMany(req: IRequestWithContext, res: Response, next: NextFunction): Promise<void | Response>;
  getById(req: IRequestWithContext, res: Response, next: NextFunction): Promise<void | Response>;
  updateById(req: IRequestWithContext, res: Response, next: NextFunction): Promise<void | Response>;
  deleteById(req: IRequestWithContext, res: Response, next: NextFunction): Promise<void | Response>;
};

interface IUserRouter extends IRouter {
  userController: IUserController;
}

export {
  IUserRepository,
  IUserService,
  IUserController,
  IUserRouter
};
