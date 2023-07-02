/* eslint-disable no-unused-vars */
import {
  Entity, Column
} from "typeorm";
import Metadata from "@models/Metadata";
import { IsNotEmpty } from "class-validator";

@Entity()
class Favorites extends Metadata {
  @Column("int", {
    name: "id"
  })
  @IsNotEmpty()
  productId: number;

  @Column("int")
  @IsNotEmpty()
  idTipoProduto: number;

  @Column("int")
  @IsNotEmpty()
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
  precoCusto: string;

  @Column("varchar")
  nome: string;

  @Column("varchar")
  @IsNotEmpty()
  linkfoto: string;

  @Column("varchar")
  @IsNotEmpty()
  fotoPrincipal: string;

  @Column("boolean")
  isAtivo: boolean;

  @Column("boolean")
  isVendido: boolean;

  @Column("int")
  visitas: number;

  @Column("boolean")
  isNovo: boolean;

  @Column("boolean")
  isOriginal: boolean;

  @Column("varchar")
  @IsNotEmpty()
  condicaoDescricao: string;

  @Column("varchar")
  @IsNotEmpty()
  dropIcon: string;

  @Column("varchar", {
    nullable: true
  })
  descricao: string;

  @Column("varchar")
  @IsNotEmpty()
  statusBox: string;

  @Column("varchar", {
    nullable: true
  })
  Vendedor: string;

  @Column("simple-array")
  TamanhoProdutoSelecao: string[];
}
export default Favorites;
