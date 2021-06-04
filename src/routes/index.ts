import { Router } from "express";
import Carteira from "./Carteira.route";
import Usuario from "./Usuario.route";

export default class MasterRouter {
  private routes: Router = Router();

  private carteira: Router = Carteira;
  private usuario: Router = Usuario;

  constructor() {
    this.configure();
  }
  get router() {
    return this.routes;
  }
  private routeUse(routeName: string, routeController: Router) {
    this.routes.use(routeName, routeController);
  }
  private configure() {
    this.routeUse("/carteira", this.carteira);
    this.routeUse("/usuario", this.usuario);
  }
}
