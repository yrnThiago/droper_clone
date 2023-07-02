/* eslint-disable no-unused-vars */

interface ILogger {
  info(message: string, data?: object): void;
  error(message: string, error: Error, data?: object): void;
  warn(message: string, data?: object): void;
};

export default ILogger;
