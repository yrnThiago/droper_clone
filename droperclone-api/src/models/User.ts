/* eslint-disable no-unused-vars */
import { Entity, Column } from "typeorm";
import Metadata from "@models/Metadata";
import { IsEmail, IsNotEmpty } from "class-validator";

@Entity()
class User extends Metadata {
  @Column('varchar')
  @IsEmail()
  email: string;

  @Column('varchar', {
    select: false,
  })
  @IsNotEmpty()
  password: string;
};

export default User;
