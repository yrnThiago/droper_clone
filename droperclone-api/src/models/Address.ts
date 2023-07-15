/* eslint-disable no-unused-vars */
import {
  Entity, Column
} from "typeorm";
import Metadata from "@models/Metadata";
import {
  IsNotEmpty, IsNumberString, IsPostalCode
} from "class-validator";

@Entity()
class Address extends Metadata {
  @Column("varchar")
  @IsNotEmpty()
  street: string;

  @Column("varchar")
  @IsNumberString()
  number: string;

  @Column("varchar", {
    name: "additional_address_data",
    nullable: true
  })
  additionalAddressData: string;

  @Column("varchar")
  @IsNotEmpty()
  district: string;

  @Column("varchar")
  @IsNotEmpty()
  city: string;

  @Column("varchar")
  @IsNotEmpty()
  state: string;

  @Column("varchar")
  @IsNotEmpty()
  country: string;

  @Column("varchar", {
    name: "zip_code"
  })
  @(IsPostalCode("BR"))
  zipCode: string;
}
export default Address;
