import User from "@models/User";
import { IAuthService } from "@interfaces/Auth";
import IContext from "@interfaces/Context";
import jwt from "jsonwebtoken";
import { IUserRepository } from "@interfaces/User";

class AuthService implements IAuthService {
  userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  generateToken(ctx: IContext, user: User): string {
    const payload = JSON.parse(JSON.stringify(user));
    return jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: parseInt(process.env.JWT_EXPIRES_IN) });
  }

  getUserByLogin(ctx: IContext, login: User): Promise<User> {
    return this.userRepository.getByLogin(ctx, login);
  }
}

export default AuthService;
