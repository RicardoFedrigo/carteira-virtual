import { Router } from "express";

export class MasterRouter {
  private routes: Router = Router();

  constructor() {
    this.configure();
  }

  get router() {
    return this.routes;
  }

  private configure() {}
}
