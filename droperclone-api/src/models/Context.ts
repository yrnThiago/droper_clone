import IContext from "@interfaces/Context";
import ILogger from "@interfaces/Logger";
import User from "@models/User";

class Context implements IContext {
  logger: ILogger;
  user: User;

  constructor(logger?: ILogger, user?: User) {
    this.logger = logger;
    this.user = user;
  }
}

export default Context;
