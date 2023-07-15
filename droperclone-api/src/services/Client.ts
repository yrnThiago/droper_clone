/* eslint-disable no-unused-vars */
import Client from "@models/Client";
import Address from "@models/Address";
import { IClientRepository, IClientService } from "@interfaces/Client";
import { IFavoritesRepository, IFavoritesService } from "@interfaces/Favorites";
import IContext from "@interfaces/Context";
import { validationsUtils } from "@utils/Validations";

class ClientService implements IClientService {
  clientRepository: IClientRepository;

  constructor(clientRepository: IClientRepository) {
    this.clientRepository = clientRepository;
  }

  async add(ctx: IContext, client: Client): Promise<Client> {
    await validationsUtils.validateObject(Client, client);
    await validationsUtils.validateObject(Address, client.address);
    return this.clientRepository.add(ctx, client);
  }

  async getMany(ctx: IContext): Promise<Client[]> {
    return this.clientRepository.getMany(ctx);
  }

  async getById(ctx: IContext, id: string): Promise<Client> {
    return this.clientRepository.getById(ctx, id);
  }

  async update(ctx: IContext, client: Client, newClientData: Client): Promise<Client> {
    await validationsUtils.validateObject(Client, newClientData);
    await validationsUtils.validateObject(Address, newClientData.address);
    return this.clientRepository.update(ctx, client, newClientData);
  }

  async delete(ctx: IContext, client: Client): Promise<Client> {
    return this.clientRepository.delete(ctx, client);
  }
}

export default ClientService;
