/* eslint-disable no-unused-vars */
import User from "@models/User";
import ILogger from "@interfaces/Logger";

interface IContext {
  logger: ILogger;
  user: User;
};

export default IContext;
