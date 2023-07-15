import { Repository } from "typeorm";
import Client from "@models/Client";
import { IClientRepository } from "@interfaces/Client";
import IContext from "@interfaces/Context";
import Address from "@models/Address";

class ClientRepository implements IClientRepository {
  repository: Repository<Client>;

  constructor(repository: Repository<Client>) {
    this.repository = repository;
  }

  async add(ctx: IContext, client: Client): Promise<Client> {
    client = await this.repository.manager.transaction(async(entityManager): Promise<Client> => {
      client.address = await entityManager.save(entityManager.create(Address, client.address));
      client = await entityManager.save(entityManager.create(Client, client));
      return client;
    });

    return client;
  }

  // eslint-disable-next-line no-unused-vars
  async getMany(ctx: IContext): Promise<Client[]> {
    const clients = await this.repository.find();
    return clients;
  }

  async getById(ctx: IContext, id: string): Promise<Client> {
    const client = await this.repository.findOne(id);
    return client;
  }

  async update(ctx: IContext, client: Client, newClientData: Client): Promise<Client> {
    client = await this.repository.manager.transaction(async(entityManager): Promise<Client> => {
      await entityManager.update(Address, client.address.id, newClientData.address);
      await entityManager.update(Client, client.id, newClientData);
      client = await entityManager.findOne(Client, client.id);
      return client;
    });

    return client;
  }

  async delete(ctx: IContext, client: Client): Promise<Client> {
    client = await this.repository.softRemove(client);

    return client;
  }
}

export default ClientRepository;
