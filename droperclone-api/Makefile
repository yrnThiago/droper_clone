# paths
MIGRATIONS_DIR=migrations
MODELS_DIR=src/models
DEPLOYMENTS_LOCAL_DIR=deployments/local


# commands
CMD_DOCKER_COMPOSE_BUILD=docker-compose -f ${DEPLOYMENTS_LOCAL_DIR}/docker-compose.yaml up -d --build --remove-orphans
CMD_MIGRATIONS=npx ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js


# docker
docker/api/up:
	${CMD_DOCKER_COMPOSE_BUILD} api

docker/database/up:
	${CMD_DOCKER_COMPOSE_BUILD} database


# migrations
migrations/new:
	${CMD_MIGRATIONS} migration:create -n $(name) -d ${MIGRATIONS_DIR}

migrations/generate:
	${CMD_MIGRATIONS} migration:generate -n $(name) -d ${MIGRATIONS_DIR}

migrations/run:
	${CMD_MIGRATIONS} migration:run -- -d ${MIGRATIONS_DIR}

migrations/revert:
	${CMD_MIGRATIONS} migration:revert -- -d ${MIGRATIONS_DIR}
