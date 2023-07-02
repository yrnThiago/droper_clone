/* eslint-disable no-unused-vars */
import { NextFunction, Response } from "express";
import IRouter from "@interfaces/Router";
import IRequestWithContext from "@interfaces/RequestWithContext";
import User from "@models/User";
import IContext from "./Context";
import { IUserRepository } from "./User";

interface IAuthService {
  userRepository: IUserRepository;

  generateToken(ctx: IContext, user: User): string;
  getUserByLogin(ctx: IContext, user: User): Promise<User>;
};

interface IAuthController {
  authService: IAuthService;

  login(req: IRequestWithContext, res: Response, next: NextFunction): Promise<void | Response>
  logout(req: IRequestWithContext, res: Response, next: NextFunction): Promise<void | Response>
};

interface IAuthRouter extends IRouter {
  authController: IAuthController;
}

export {
  IAuthService,
  IAuthController,
  IAuthRouter
};
