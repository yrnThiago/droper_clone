/* eslint-disable no-unused-vars */
import { PrimaryGeneratedColumn, Column, DeleteDateColumn } from "typeorm";

class Metadata {
  @PrimaryGeneratedColumn("uuid")
  uuid: string;

  @Column('timestamp', {
    name: 'created_at',
  })
  createdAt: Date;

  @Column('timestamp', {
    name: 'updated_at',
  })
  updatedAt: Date;

  @DeleteDateColumn({
    name: 'deleted_at',
    nullable: true,
  })
  deletedAt: Date;
}

export default Metadata;
