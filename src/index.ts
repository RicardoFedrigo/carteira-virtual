//Modules
import "reflect-metadata";
import dotenv from "dotenv";
import helmet from "helmet";
import bodyParser from "body-parser";
import cors from "cors";
import moment from "moment";

//Project
import Server from "./infra/server";
import typeOrm from "./infra/typeOrm";
import MasterRouter from "./routes";

import "./container";


try {
  
  moment.locale("pt-br");
  //Connection with db
  new typeOrm().create();

  dotenv.config({
    path: ".env",
  });

  const corsConfig = cors({
    allowedHeaders: ["Origin", "Content-Type", "Accept", "X-Access-Token"],
    credentials: true,
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
    origin: [
      "http://localhost:8080",
      "https://localhost:8080",
      "http://localhost",
    ],
    preflightContinue: false,
  });

  const server = new Server();

  server.setPort(process.env.PORT || 3000);

  server.use(corsConfig);
  server.use(bodyParser.json());
  server.use(helmet());
  server.use(new MasterRouter().router);
  server.listen();
} catch (error) {
  console.log(error);
}
