import productsRouter from "./products.router";
import usersRouter from "./users.router";
import express, { Express, Router } from "express";

function routerApi(App: Express) {
  const router: Router = express.Router();
  App.use("/api/v1", router);
  router.use("/products", productsRouter);
  router.use("/users", usersRouter);
}

export default routerApi;
