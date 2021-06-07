import { injectable, inject } from "tsyringe";
import { Usuario } from "../../entity/Usuario.entity";
import IUsuario from "../../interface/Usuario/Usuario.interface";

@injectable()
export default class deposito {
  constructor(
    @inject("UsuarioRepository")
    private usuarioRepository: IUsuario
  ) {}
  public async getById(usuarioId: number): Promise<Usuario> {
    return await this.usuarioRepository.getById(usuarioId);
  }
}
