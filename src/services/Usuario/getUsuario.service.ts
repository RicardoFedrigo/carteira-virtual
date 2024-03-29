import { injectable, inject } from "tsyringe";
import { Usuario } from "../../entity/Usuario.entity";
import IUsuario from "../../interface/Usuario/Usuario.interface";

@injectable()
export default class deposito {
  constructor(
    @inject("UsuarioRepository")
    private usuarioRepository: IUsuario
  ) {}
  public async getUsuario(usuarioId: number): Promise<Usuario | Usuario[]> {
    return await this.usuarioRepository.get(usuarioId);
  }
}
