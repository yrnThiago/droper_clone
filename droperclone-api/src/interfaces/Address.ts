/* eslint-disable no-unused-vars */
import Address from "@models/Address";
import IContext from "@interfaces/Context";

interface IAddressRepository {
  add(ctx: IContext, address: Address): Promise<Address>;
  getById(ctx: IContext, id: string): Promise<Address>;
  updateById(ctx: IContext, id: string, newAddress: Address): Promise<Address>;
  delete(ctx: IContext, address: Address): Promise<Address>;
};

interface IAddressService {
  addressRepository: IAddressRepository;

  add(ctx: IContext, address: Address): Promise<Address>;
  getById(ctx: IContext, id: string): Promise<Address>;
  updateById(ctx: IContext, id: string, newAddress: Address): Promise<Address>;
  delete(ctx: IContext, address: Address): Promise<Address>;
};

export {
  IAddressRepository,
  IAddressService
};
