import HealthController from "@controllers/Health";
import HealthRouter from "@routes/Health";
import HealthService from "@services/Health";

const healthService = new HealthService();
const healthController = new HealthController(healthService);
const healthRouter = new HealthRouter(healthController);

export default healthRouter.getRouter();
