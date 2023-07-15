import ClientController from "@controllers/Client";
import Client from "@models/Client";
import ClientRepository from "@repositories/Client";
import ClientRouter from "@routes/Client";
import ClientService from "@services/Client";
import { getRepository } from "typeorm";

const clientRepository = new ClientRepository(getRepository(Client));
const clientService = new ClientService(clientRepository);
const clientController = new ClientController(clientService);
const clientRouter = new ClientRouter(clientController);

export default clientRouter.getRouter();
