import { NextFunction, Response } from "express";
import IRequestWithContext from "@interfaces/RequestWithContext";
import { IAuthController, IAuthService } from "@interfaces/Auth";
import HttpStatus from "http-status-codes";
import { cookieUtils } from "@utils/Cookie";

class AuthController implements IAuthController {
  authService: IAuthService;

  constructor(authService: IAuthService) {
    this.authService = authService;

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  async login(req: IRequestWithContext, res: Response, next: NextFunction): Promise<void | Response> {
    const ctx = req.context;

    try {
      const login = req.body;
      if (!login) return res.status(HttpStatus.BAD_REQUEST).json({ error: "login is missing" });

      const user = await this.authService.getUserByLogin(ctx, login);
      if (!user) return res.status(HttpStatus.UNAUTHORIZED).json({ error: "invalid credentials" });

      const token = this.authService.generateToken(ctx, user);
      const cookie = cookieUtils.getCookieName();
      const options = cookieUtils.getCookieOptions();

      return res.status(HttpStatus.OK).cookie(cookie, token, options).json({ message: "login successful" });
    } catch (error) {
      return next(error);
    }
  }

  async logout(req: IRequestWithContext, res: Response, next: NextFunction): Promise<void | Response> {
    try {
      const cookie = cookieUtils.getCookieName();
      return res.clearCookie(cookie).status(HttpStatus.OK).json({ message: "logout successful" });
    } catch (error) {
      return next(error);
    }
  }
}

export default AuthController;
