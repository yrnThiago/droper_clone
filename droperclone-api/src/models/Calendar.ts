/* eslint-disable no-unused-vars */
import {
  Entity, Column, PrimaryColumn
} from "typeorm";
import {
  IsNotEmpty
} from "class-validator";

@Entity()
class Calendar {
  @PrimaryColumn("int")
  @IsNotEmpty()
  id: number;

  @Column("varchar", {
    nullable: true
  })
  nomeMarca: string;

  @Column("varchar", {
    nullable: true
  })
  logoMarca: string;

  @Column("varchar")
  @IsNotEmpty()
  titulo: string;

  @Column("varchar")
  @IsNotEmpty()
  icone: string;

  @Column("varchar")
  @IsNotEmpty()
  url: string;

  @Column("varchar")
  @IsNotEmpty()
  query: string;

  @Column("varchar")
  @IsNotEmpty()
  precoRetail: string;

  @Column("int")
  @IsNotEmpty()
  precofRetail: number;

  @Column("bool")
  @IsNotEmpty()
  forceCompraPro: boolean;

  @Column("varchar")
  @IsNotEmpty()
  dataLancamentoMes: string;

  @Column("int")
  @IsNotEmpty()
  dataLancamentoDia: number;

  @Column("int")
  @IsNotEmpty()
  dataLancamentoAno: number;

  @Column("varchar")
  @IsNotEmpty()
  dataLancamentoAnoAbrev: string;

  @Column("bool")
  @IsNotEmpty()
  isTenis: boolean;
}
export default Calendar;
