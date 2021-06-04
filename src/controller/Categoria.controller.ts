import { Response, Request } from "express";
import { container } from "tsyringe";
import { createCategoria } from "../services/Categoria";
import { getUsuario } from "../services/Usuario";

export default class UsuarioController {
  public async createOrUpdate(req: Request, res: Response): Promise<Response> {
    try {
      let { usuarioId, id, categoria } = req.body;
      const usuario = await container.resolve(getUsuario).getUsuario(usuarioId);
      const newCategoria = await container
        .resolve(createCategoria)
        .criaCarteira(usuario, categoria, id);
      return res.status(200).send(newCategoria);
    } catch (error) {
      console.log(error);
      return res.status(404).send(error);
    }
  }
}
