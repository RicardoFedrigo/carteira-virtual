import { Response, Request } from "express";
import { container } from "tsyringe";
import { criarUsuario } from "../services/Usuario";
import { criaCarteira } from "../services/Carteira"

export default class UsuarioController {
  public async criarUsuario(req: Request, res: Response): Promise<Response> {
    try {
      let { usuario } = req.body;
      usuario.carteira = await container.resolve(criaCarteira).criaCarteira();
      const newUsuario = await container.resolve(criarUsuario).criarUsuario(usuario);
      return res.status(200).send(newUsuario);
    } catch (error) {
      console.log(error);
      return res.status(404).send(error);
    }
  }
}
