/* eslint-disable no-unused-vars */
import {
  Entity, Column, ManyToOne, JoinColumn
} from "typeorm";
import Metadata from "@models/Metadata";
import {
  IsDateString,
  IsEmail, IsMobilePhone, IsNotEmpty, IsPhoneNumber, IsOptional, IsIn
} from "class-validator";

@Entity()
class Calendar extends Metadata {

}
export default Calendar;
