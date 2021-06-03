import "reflect-metadata";
import express from "express";
import dotenv from "dotenv";
import bodyHelmet from "body-parser";
import helmet from "helmet";
import cors from "cors";

dotenv.config();

import { createConnection } from "typeorm";

try {
  const app = express();

  const corsConfig = new cors({
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

  app.use(corsConfig);
  app.use(helmet());

  app.listen(process.env.PORT, () => {
    return console.log(`Esta escutando na porta ${process.env.PORT}`);
  });
} catch (error) {
  console.log(error);
}
