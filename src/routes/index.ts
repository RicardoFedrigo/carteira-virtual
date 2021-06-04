import { Router } from "express";
import Carteira from "./Carteira.route";
import Usuario from "./Usuario.route";
import Categoria from "./Categoria.route";

export default class MasterRouter {
  private routes: Router = Router();

  private usuario: Router = Usuario;
  private carteira: Router = Carteira;
  private categoria: Router = Categoria;

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
    this.routeUse("/usuario", this.usuario);
    this.routeUse("/carteira", this.carteira);
    this.routeUse("/categoria", this.categoria);
  }
}
