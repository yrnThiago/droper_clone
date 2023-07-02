/* eslint-disable no-unused-vars */
import { Request } from "express";
import IContext from "@interfaces/Context";

interface IRequestWithContext extends Request {
  context: IContext
};

export default IRequestWithContext;
