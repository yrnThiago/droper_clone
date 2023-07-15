import { Repository } from "typeorm";
import User from "@models/User";
import { IUserRepository } from "@interfaces/User";
import IContext from "@interfaces/Context";
import { passwordUtils } from "@utils/Password";

class UserRepository implements IUserRepository {
  repository: Repository<User>;

  constructor(repository: Repository<User>) {
    this.repository = repository;
  }

  async add(ctx: IContext, user: User): Promise<User> {
    user = await this.repository.save(user);

    return user;
  }

  // eslint-disable-next-line no-unused-vars
  async getMany(ctx: IContext): Promise<User[]> {
    const users = await this.repository.find();
    return users;
  }

  async getById(ctx: IContext, uuid: string): Promise<User> {
    const user = await this.repository.findOne(uuid);
    return user;
  }

  async getByLogin(ctx: IContext, login: User): Promise<User> {
    const userRaw = await this.repository.createQueryBuilder()
      .select("uuid, password")
      .addSelect("password")
      .where("email = :email", { email: login.email })
      .getRawOne();

    if (!userRaw || !passwordUtils.compareHashPassword(login.password, userRaw.password)) return null;

    const user = await this.repository.findOne(userRaw.uuid);

    return user;
  }

  async getByEmail(ctx: IContext, email: string): Promise<User> {
    const user = await this.repository.findOne({ where: { email } });
    return user;
  }

  async update(ctx: IContext, user: User, newUserData: User): Promise<User> {
    user = await this.repository.manager.transaction(async(entityManager): Promise<User> => {
      await entityManager.update(User, user.uuid, newUserData);
      user = await entityManager.findOne(User, user.uuid);
      return user;
    });

    return user;
  }

  async delete(ctx: IContext, user: User): Promise<User> {
    user = await this.repository.softRemove(user);

    return user;
  }
}

export default UserRepository;
