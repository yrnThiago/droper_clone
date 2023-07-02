import UserController from "@controllers/User";
import User from "@models/User";
import UserRepository from "@repositories/User";
import UserRouter from "@routes/User";
import UserService from "@services/User";
import { getRepository } from "typeorm";

const userRepository = new UserRepository(getRepository(User));
const userService = new UserService(userRepository);
const userController = new UserController(userService);
const userRouter = new UserRouter(userController);

export default userRouter.getRouter();
