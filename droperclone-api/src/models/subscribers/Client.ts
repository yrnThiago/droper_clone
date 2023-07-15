/* eslint-disable no-unused-vars */
import Client from "@models/Client";
import {
  EventSubscriber, EntitySubscriberInterface, UpdateEvent
} from "typeorm";

@EventSubscriber()
class ClientSubscriber implements EntitySubscriberInterface<Client> {
  listenTo(): string | Function {
    return Client;
  }

  async beforeUpdate(event: UpdateEvent<Client>): Promise<any> {
    delete event.entity.address;
  }
}

export default ClientSubscriber;
