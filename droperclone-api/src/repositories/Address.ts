import { Repository } from "typeorm";
import Address from "@models/Address";
import { IAddressRepository } from "@interfaces/Address";
import IContext from "@interfaces/Context";

class AddressRepository implements IAddressRepository {
  repository: Repository<Address>;

  constructor(repository: Repository<Address>) {
    this.repository = repository;
  }

  async add(ctx: IContext, address: Address): Promise<Address> {
    address = await this.repository.save(address);

    return address;
  }

  async getById(ctx: IContext, id: string): Promise<Address> {
    const address = await this.repository.findOne(id);
    return address;
  }

  async updateById(ctx: IContext, id: string, newAddress: Address): Promise<Address> {
    await this.repository.update(id, newAddress);
    const address = await this.repository.findOne(id);

    return address;
  }

  async delete(ctx: IContext, address: Address): Promise<Address> {
    address = await this.repository.softRemove(address);

    return address;
  }
}

export default AddressRepository;
