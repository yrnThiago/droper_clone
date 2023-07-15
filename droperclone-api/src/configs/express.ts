import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { createConnection } from "typeorm";

const API = "/api/v1";
const PUBLIC = `${API}/public`;
const PRIVATE = `${API}/private`;

export default (app: express.Express): express.Express => {
  createConnection().then(() => {
    // enable logger middleware for all routes
    app.use(require("@middlewares/Logger").default);

    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cors({ credentials: true, origin: process.env.CLIENT_URL }));
    app.use(cookieParser());

    // public routes
    app.use(PUBLIC, require("@configs/routes/Health").default);
    app.use(PUBLIC, require("@configs/routes/Auth").default);
    app.use(PUBLIC, require("@configs/routes/Calendar").default);
    app.use(PUBLIC, require("@configs/routes/Feed").default);
    app.use(PUBLIC, require("@configs/routes/Favorites").default);
    app.use(PUBLIC, require("@configs/routes/Search").default);

    // enable auth middleware for private routes
    app.use(PRIVATE, require("@middlewares/Auth").default);

    // private routes
    app.use(PRIVATE, require("@configs/routes/User").default);
    app.use(PRIVATE, require("@configs/routes/Client").default);

    // enable error handler middleware for all routes
    app.use(require("@middlewares/Errors").default);

    // enable not found handler middleware for all routes
    app.use(require("@middlewares/NotFound").default);
  });

  return app;
};
