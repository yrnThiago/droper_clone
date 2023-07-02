import User from "@models/User";
import { IUserRepository, IUserService } from "@interfaces/User";
import IContext from "@interfaces/Context";
import { validationsUtils } from "@utils/Validations";

class UserService implements IUserService {
  userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async add(ctx: IContext, user: User): Promise<User> {
    await validationsUtils.validateObject(User, user);
    return this.userRepository.add(ctx, user);
  }

  async getMany(ctx: IContext): Promise<User[]> {
    return this.userRepository.getMany(ctx);
  }

  async getById(ctx: IContext, id: string): Promise<User> {
    return this.userRepository.getById(ctx, id);
  }

  async getByEmail(ctx: IContext, email: string): Promise<User> {
    return this.userRepository.getByEmail(ctx, email);
  }

  async update(ctx: IContext, user: User, newUserData: User): Promise<User> {
    await validationsUtils.validateObject(User, newUserData);
    return this.userRepository.update(ctx, user, newUserData);
  }

  async delete(ctx: IContext, user: User): Promise<User> {
    return this.userRepository.delete(ctx, user);
  }
}

export default UserService;
