import winston from "winston";
import crypto from "crypto";
import ILogger from "@interfaces/Logger";

export default class LoggerWinston implements ILogger {
  private logger: winston.Logger;
  private correlationId: string;

  constructor() {
    this.correlationId = crypto.randomUUID();
    this.logger = winston.createLogger({
      level: process.env.LOG_LEVEL || "info",
      format: winston.format.combine(
        winston.format.errors({ stack: true }),
        winston.format.timestamp(),
        winston.format.json()
      ),
      defaultMeta: {
        correlationId: this.correlationId
      },
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: ".log" })
      ]
    });
  }

  info(message: string, data?: object) {
    this.log("info", message, data);
  }

  error(message: string, error: Error, data?: object) {
    this.log("error", message, { ...data, stack: error.stack });
  }

  warn(message: string, data?: object) {
    this.log("warn", message, data);
  }

  private log(level: string, message: string, data?: object) {
    this.logger.log(level, message, { caller: this.getCaller(), ...data });
  }

  private getCaller(): string {
    const stackTrace = new Error().stack;
    const stackArray = stackTrace.split("\n");

    let callerIndex = 0;
    let stackLine = "";
    while (callerIndex < stackArray.length) {
      stackLine = stackArray[++callerIndex].trim();
      if (!stackLine.includes(__filename)) {
        break;
      }
    }

    const filePath = stackLine.replace(process.cwd(), "").replace(")", "").replace(/\\/g, "/");
    const caller = filePath.slice(filePath.indexOf("/") + 1);

    return caller;
  }
}
