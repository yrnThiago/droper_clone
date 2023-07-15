/* eslint-disable no-unused-vars */
import {
  Entity, Column, PrimaryColumn
} from "typeorm";
import {
  IsNotEmpty
} from "class-validator";

@Entity()
class Feed {
  @PrimaryColumn("int")
  @IsNotEmpty()
  id: number;

  @Column("int")
  @IsNotEmpty()
  idTipoProduto: number;

  @Column("int", {nullable: true})
  @IsNotEmpty()
  idDrop: number;

  @Column("varchar", {nullable: true})
  @IsNotEmpty()
  dropIcon: string;

  @Column("int", {nullable: true})
  idMarca: number;

  @Column("varchar", {nullable: true})
  tituloTipoProduto: string;

  @Column("varchar")
  @IsNotEmpty()
  moeda: string;

  @Column("varchar")
  @IsNotEmpty()
  preco: string;

  @Column("varchar")
  @IsNotEmpty()
  nome: string;

  @Column("varchar")
  @IsNotEmpty()
  linkfoto: string;

  @Column("varchar")
  @IsNotEmpty()
  fotoPrincipal: string;

  @Column('simple-array')
  TamanhoProdutoSelecao: string[];

  @Column("varchar")
  @IsNotEmpty()
  nomeMarca: string;

  @Column("varchar")
  @IsNotEmpty()
  urlMarca: string;

  @Column("int")
  @IsNotEmpty()
  totalFavoritas: number;

  @Column("datetime")
  @IsNotEmpty()
  dataCriacao: Date;
}
export default Feed;
