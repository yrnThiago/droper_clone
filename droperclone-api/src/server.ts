import http from "http";
import express from "express";
import LoggerWinston from "@models/LoggerWinston";
import middlewares from "@configs/express";

class Server {
  server: http.Server;

  constructor(app: express.Express) {
    this.server = http.createServer(middlewares(app));
  }

  listen(port: string | number) {
    const logger = new LoggerWinston();
    this.server.listen(port, () => logger.info(`listening on port ${port}`));
  }
}

export default Server;
