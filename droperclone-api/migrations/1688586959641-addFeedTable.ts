import { MigrationInterface, QueryRunner } from "typeorm";

export class addFeedTable1688586959641 implements MigrationInterface {
    name = "addFeedTable1688586959641"

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query("CREATE TABLE `feed` (`id` int NOT NULL, `idTipoProduto` int NOT NULL, `idDrop` int NOT NULL, `dropIcon` varchar(255) NOT NULL, `idMarca` int NULL, `tituloTipoProduto` varchar(255) NULL, `moeda` varchar(255) NOT NULL, `preco` varchar(255) NOT NULL, `nome` varchar(255) NOT NULL, `linkfoto` varchar(255) NOT NULL, `fotoPrincipal` varchar(255) NOT NULL, `TamanhoProdutoSelecao` text NOT NULL, `nomeMarca` varchar(255) NOT NULL, `urlMarca` varchar(255) NOT NULL, `totalFavoritas` int NOT NULL, `dataCriacao` datetime NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
      await queryRunner.query("ALTER TABLE `address` CHANGE `deleted_at` `deleted_at` datetime(6) NULL");
      await queryRunner.query("ALTER TABLE `address` CHANGE `additional_address_data` `additional_address_data` varchar(255) NULL");
      await queryRunner.query("ALTER TABLE `client` DROP FOREIGN KEY `FK_636f7d7df571a8731f1b6bc5778`");
      await queryRunner.query("ALTER TABLE `client` CHANGE `deleted_at` `deleted_at` datetime(6) NULL");
      await queryRunner.query("ALTER TABLE `client` CHANGE `id_address` `id_address` varchar(36) NULL");
      await queryRunner.query("ALTER TABLE `user` CHANGE `deleted_at` `deleted_at` datetime(6) NULL");
      await queryRunner.query("ALTER TABLE `calendar` CHANGE `nomeMarca` `nomeMarca` varchar(255) NULL");
      await queryRunner.query("ALTER TABLE `calendar` CHANGE `logoMarca` `logoMarca` varchar(255) NULL");
      await queryRunner.query("ALTER TABLE `favorites` CHANGE `idTipoProduto` `idTipoProduto` int NULL");
      await queryRunner.query("ALTER TABLE `favorites` CHANGE `idDrop` `idDrop` int NULL");
      await queryRunner.query("ALTER TABLE `favorites` CHANGE `idMarca` `idMarca` int NULL");
      await queryRunner.query("ALTER TABLE `favorites` CHANGE `tituloTipoProduto` `tituloTipoProduto` int NULL");
      await queryRunner.query("ALTER TABLE `client` ADD CONSTRAINT `FK_636f7d7df571a8731f1b6bc5778` FOREIGN KEY (`id_address`) REFERENCES `address`(`uuid`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query("ALTER TABLE `client` DROP FOREIGN KEY `FK_636f7d7df571a8731f1b6bc5778`");
      await queryRunner.query("ALTER TABLE `favorites` CHANGE `tituloTipoProduto` `tituloTipoProduto` int NULL DEFAULT 'NULL'");
      await queryRunner.query("ALTER TABLE `favorites` CHANGE `idMarca` `idMarca` int NULL DEFAULT 'NULL'");
      await queryRunner.query("ALTER TABLE `favorites` CHANGE `idDrop` `idDrop` int NULL DEFAULT 'NULL'");
      await queryRunner.query("ALTER TABLE `favorites` CHANGE `idTipoProduto` `idTipoProduto` int NULL DEFAULT 'NULL'");
      await queryRunner.query("ALTER TABLE `calendar` CHANGE `logoMarca` `logoMarca` varchar(255) NULL DEFAULT 'NULL'");
      await queryRunner.query("ALTER TABLE `calendar` CHANGE `nomeMarca` `nomeMarca` varchar(255) NULL DEFAULT 'NULL'");
      await queryRunner.query("ALTER TABLE `user` CHANGE `deleted_at` `deleted_at` datetime(6) NULL DEFAULT 'NULL'");
      await queryRunner.query("ALTER TABLE `client` CHANGE `id_address` `id_address` varchar(36) NULL DEFAULT 'NULL'");
      await queryRunner.query("ALTER TABLE `client` CHANGE `deleted_at` `deleted_at` datetime(6) NULL DEFAULT 'NULL'");
      await queryRunner.query("ALTER TABLE `client` ADD CONSTRAINT `FK_636f7d7df571a8731f1b6bc5778` FOREIGN KEY (`id_address`) REFERENCES `address`(`uuid`) ON DELETE NO ACTION ON UPDATE NO ACTION");
      await queryRunner.query("ALTER TABLE `address` CHANGE `additional_address_data` `additional_address_data` varchar(255) NULL DEFAULT 'NULL'");
      await queryRunner.query("ALTER TABLE `address` CHANGE `deleted_at` `deleted_at` datetime(6) NULL DEFAULT 'NULL'");
      await queryRunner.query("DROP TABLE `feed`");
    }
}
