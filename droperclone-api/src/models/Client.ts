/* eslint-disable no-unused-vars */
import {
  Entity, Column, ManyToOne, JoinColumn
} from "typeorm";
import Metadata from "@models/Metadata";
import Address from "@models/Address";
import {
  IsDateString,
  IsEmail, IsMobilePhone, IsNotEmpty, IsPhoneNumber, IsOptional, IsIn
} from "class-validator";

@Entity()
class Client extends Metadata {
  @Column("varchar")
  @IsNotEmpty()
  nome: string;

  @Column("varchar")
  @IsNotEmpty()
  fotoperfil: string;

  @Column("varchar")
  @IsNotEmpty()
  idsocial: string;

  @Column("varchar")
  @IsNotEmpty()
  cpf: string;

  @Column("varchar")
  @IsEmail()
  email: string;

  @Column("varchar")
  @IsEmail()
  nomeLegal: string;

  @Column("bool")
  verifiedPhone: boolean;

  @Column("bool")
  verifiedDocument: boolean;

  @Column("varchar")
  @IsNotEmpty()
  telefoneCod: string;

  @Column("varchar", {
    name: "cellphone_number"
  })
  @IsMobilePhone("pt-BR")
  telefone: string;

  @Column("bool")
  temEndereco: boolean;

  @Column("date", {
    name: "birth_date"
  })
  @IsNotEmpty()
  @IsDateString()
  birthDate: Date;

  @ManyToOne(() => Address, { eager: true })
  @JoinColumn({name: "id_address"})
  address: Address;
}
export default Client;
