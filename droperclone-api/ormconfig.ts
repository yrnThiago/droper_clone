import { ConnectionOptions } from "typeorm";

const ormconfig: ConnectionOptions = {
  type: "mysql",
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT ? parseInt(process.env.DATABASE_PORT) : 3306,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: false,
  logging: false,
  entities: [
    "src/models/*.{ts,js}"
  ],
  migrations: [
    "migrations/*.{ts,js}"
  ],
  subscribers: [
    "src/models/subscribers/*.{ts,js}"
  ],
  migrationsTableName: "migration",
  cli: {
    entitiesDir: "src/models",
    migrationsDir: "migrations"
  }
};

export default ormconfig;
