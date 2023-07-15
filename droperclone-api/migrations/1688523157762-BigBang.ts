import { MigrationInterface, QueryRunner } from "typeorm";

export class BigBang1688523157762 implements MigrationInterface {
    name = "BigBang1688523157762"

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query("CREATE TABLE `address` (`uuid` varchar(36) NOT NULL, `created_at` timestamp NOT NULL, `updated_at` timestamp NOT NULL, `deleted_at` datetime(6) NULL, `street` varchar(255) NOT NULL, `number` varchar(255) NOT NULL, `additional_address_data` varchar(255) NULL, `district` varchar(255) NOT NULL, `city` varchar(255) NOT NULL, `state` varchar(255) NOT NULL, `country` varchar(255) NOT NULL, `zip_code` varchar(255) NOT NULL, PRIMARY KEY (`uuid`)) ENGINE=InnoDB");
      await queryRunner.query("CREATE TABLE `client` (`uuid` varchar(36) NOT NULL, `created_at` timestamp NOT NULL, `updated_at` timestamp NOT NULL, `deleted_at` datetime(6) NULL, `nome` varchar(255) NOT NULL, `fotoperfil` varchar(255) NOT NULL, `idsocial` varchar(255) NOT NULL, `cpf` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `nomeLegal` varchar(255) NOT NULL, `verifiedPhone` tinyint NOT NULL, `verifiedDocument` tinyint NOT NULL, `telefoneCod` varchar(255) NOT NULL, `cellphone_number` varchar(255) NOT NULL, `temEndereco` tinyint NOT NULL, `birth_date` date NOT NULL, `id_address` varchar(36) NULL, PRIMARY KEY (`uuid`)) ENGINE=InnoDB");
      await queryRunner.query("CREATE TABLE `user` (`uuid` varchar(36) NOT NULL, `created_at` timestamp NOT NULL, `updated_at` timestamp NOT NULL, `deleted_at` datetime(6) NULL, `email` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, PRIMARY KEY (`uuid`)) ENGINE=InnoDB");
      await queryRunner.query("CREATE TABLE `calendar` (`id` int NOT NULL, `nomeMarca` varchar(255) NULL, `logoMarca` varchar(255) NULL, `titulo` varchar(255) NOT NULL, `icone` varchar(255) NOT NULL, `url` varchar(255) NOT NULL, `query` varchar(255) NOT NULL, `precoRetail` varchar(255) NOT NULL, `precofRetail` int NOT NULL, `forceCompraPro` tinyint NOT NULL, `dataLancamentoMes` varchar(255) NOT NULL, `dataLancamentoDia` int NOT NULL, `dataLancamentoAno` int NOT NULL, `dataLancamentoAnoAbrev` varchar(255) NOT NULL, `isTenis` tinyint NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
      await queryRunner.query("CREATE TABLE `favorites` (`id` int NOT NULL, `idTipoProduto` int NULL, `idDrop` int NULL, `idMarca` int NULL, `tituloTipoProduto` int NULL, `moeda` varchar(255) NOT NULL, `preco` varchar(255) NOT NULL, `nome` varchar(255) NOT NULL, `linkfoto` varchar(255) NOT NULL, `fotoPrincipal` varchar(255) NOT NULL, `TamanhoProdutoSelecao` text NOT NULL, `nomeMarca` varchar(255) NOT NULL, `urlMarca` varchar(255) NOT NULL, `totalFavoritadas` int NOT NULL, `dataCriacao` datetime NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
      await queryRunner.query("ALTER TABLE `client` ADD CONSTRAINT `FK_636f7d7df571a8731f1b6bc5778` FOREIGN KEY (`id_address`) REFERENCES `address`(`uuid`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query("ALTER TABLE `client` DROP FOREIGN KEY `FK_636f7d7df571a8731f1b6bc5778`");
      await queryRunner.query("DROP TABLE `favorites`");
      await queryRunner.query("DROP TABLE `calendar`");
      await queryRunner.query("DROP TABLE `user`");
      await queryRunner.query("DROP TABLE `client`");
      await queryRunner.query("DROP TABLE `address`");
    }
}
