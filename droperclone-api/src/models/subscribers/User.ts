/* eslint-disable no-unused-vars */
import User from "@models/User";
import { passwordUtils } from "@utils/Password";
import {
  EventSubscriber, EntitySubscriberInterface, InsertEvent, UpdateEvent
} from "typeorm";

@EventSubscriber()
class UserSubscriber implements EntitySubscriberInterface<User> {
  listenTo(): string | Function {
    return User;
  }

  async beforeInsert(event: InsertEvent<User>): Promise<any> {
    event.entity.password = passwordUtils.hashPassword(event.entity.password);
  }

  async beforeUpdate(event: UpdateEvent<User>): Promise<any> {
    if (event.entity.password) event.entity.password = passwordUtils.hashPassword(event.entity.password);
  }

  async afterInsert(event: InsertEvent<User>): Promise<any> {
    delete event.entity.password;
  }
}

export default UserSubscriber;
