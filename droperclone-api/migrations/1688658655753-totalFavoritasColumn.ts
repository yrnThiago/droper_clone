import { MigrationInterface, QueryRunner } from "typeorm";

export class totalFavoritasColumn1688658655753 implements MigrationInterface {
    name = "totalFavoritasColumn1688658655753"

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query("ALTER TABLE `favorites` CHANGE `totalFavoritadas` `totalFavoritas` int NOT NULL");
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
      await queryRunner.query("ALTER TABLE `feed` CHANGE `idMarca` `idMarca` int NULL");
      await queryRunner.query("ALTER TABLE `feed` CHANGE `tituloTipoProduto` `tituloTipoProduto` varchar(255) NULL");
      await queryRunner.query("ALTER TABLE `client` ADD CONSTRAINT `FK_636f7d7df571a8731f1b6bc5778` FOREIGN KEY (`id_address`) REFERENCES `address`(`uuid`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query("ALTER TABLE `client` DROP FOREIGN KEY `FK_636f7d7df571a8731f1b6bc5778`");
      await queryRunner.query("ALTER TABLE `feed` CHANGE `tituloTipoProduto` `tituloTipoProduto` varchar(255) NULL DEFAULT 'NULL'");
      await queryRunner.query("ALTER TABLE `feed` CHANGE `idMarca` `idMarca` int NULL DEFAULT 'NULL'");
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
      await queryRunner.query("ALTER TABLE `favorites` CHANGE `totalFavoritas` `totalFavoritadas` int NOT NULL");
    }
}
