import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import environments from "./envs";
import routerApi from "./routes";

dotenv.config();

const App: Express = express();

App.use(express.json());

routerApi(App);

App.get("/", (req, res) => {
  res.send("Express + TypeScript Server");
});

App.listen(environments.port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${environments.port}`);
});
