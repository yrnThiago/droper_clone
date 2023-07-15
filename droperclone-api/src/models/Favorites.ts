/* eslint-disable no-unused-vars */
import {
  Entity, Column, PrimaryColumn
} from "typeorm";
import { IsNotEmpty } from "class-validator";

@Entity()
class Favorites {
  @PrimaryColumn("int")
  @IsNotEmpty()
  id: number;

  @Column("int", {
    nullable: true
  })
  idTipoProduto: number;

  @Column("int", {
    nullable: true
  })
  idDrop: number;

  @Column("int", {
    nullable: true
  })
  idMarca: number;

  @Column("int", {
    nullable: true
  })
  tituloTipoProduto: number;

  @Column("varchar")
  @IsNotEmpty()
  moeda: string;

  @Column("varchar")
  @IsNotEmpty()
  preco: string;

  @Column("varchar")
  nome: string;

  @Column("varchar")
  @IsNotEmpty()
  linkfoto: string;

  @Column("varchar")
  @IsNotEmpty()
  fotoPrincipal: string;

  @Column('simple-array')
  TamanhoProdutoSelecao: string[];

  @Column('varchar')
  @IsNotEmpty()
  nomeMarca: string;

  @Column('varchar')
  @IsNotEmpty()
  urlMarca: string;

  @Column('int')
  @IsNotEmpty()
  totalFavoritas: number;

  @Column('datetime')
  @IsNotEmpty()
  dataCriacao: Date;
}
export default Favorites;
