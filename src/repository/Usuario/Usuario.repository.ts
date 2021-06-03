import { Usuario } from "../../entity/Usuario.entity";
import IUsuario from "../../interface/Usuario/Usuario.interface";

export default class UsuarioRepository implements IUsuario {
  get(id?: String, cpf?: String): Promise<Usuario> {
    throw new Error("Method not implemented.");
  }
  delete(id: String): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  login(cpf: String, senha: String): Promise<boolean | String> {
    throw new Error("Method not implemented.");
  }
}
