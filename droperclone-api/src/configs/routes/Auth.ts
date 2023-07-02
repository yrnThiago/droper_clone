import AuthController from "@controllers/Auth";
import User from "@models/User";
import UserRepository from "@repositories/User";
import AuthRouter from "@routes/Auth";
import AuthService from "@services/Auth";
import { getRepository } from "typeorm";

const userRepository = new UserRepository(getRepository(User));
const authService = new AuthService(userRepository);
const authController = new AuthController(authService);
const authRouter = new AuthRouter(authController);

export default authRouter.getRouter();
