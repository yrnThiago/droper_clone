import IContext from "@interfaces/Context";
import { IHealthService } from "@interfaces/Health";

class HealthService implements IHealthService {
  ping(ctx: IContext): object {
    const logger = ctx.logger;

    logger.info("pong");
    return { message: "pong" };
  }
}

export default HealthService;
