import Address from "@models/Address";
import { IAddressRepository, IAddressService } from "@interfaces/Address";
import IContext from "@interfaces/Context";
import { validationsUtils } from "@utils/Validations";

class AddressService implements IAddressService {
  addressRepository: IAddressRepository;

  constructor(addressRepository: IAddressRepository) {
    this.addressRepository = addressRepository;
  }

  async add(ctx: IContext, address: Address): Promise<Address> {
    await validationsUtils.validateObject(Address, address);
    return this.addressRepository.add(ctx, address);
  }

  async getById(ctx: IContext, id: string): Promise<Address> {
    return this.addressRepository.getById(ctx, id);
  }

  async updateById(ctx: IContext, id: string, newAddress: Address): Promise<Address> {
    await validationsUtils.validateObject(Address, newAddress);
    return this.addressRepository.updateById(ctx, id, newAddress);
  }

  async delete(ctx: IContext, address: Address): Promise<Address> {
    return this.addressRepository.delete(ctx, address);
  }
}

export default AddressService;
