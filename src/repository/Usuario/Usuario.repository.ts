import { getRepository, Repository } from "typeorm";
import { Usuario } from "../../entity/Usuario.entity";
import IUsuario from "../../interface/Usuario/Usuario.interface";

export default class UsuarioRepository implements IUsuario {
  private usuarioRepository: Repository<Usuario>;

  constructor() {
    this.usuarioRepository = getRepository(Usuario);
  }

  public async criarUsuario(usuario: Usuario): Promise<Usuario> {
    return this.usuarioRepository.save(usuario);
  }
  public async get(id?: number, cpf?: string): Promise<Usuario> {
    if (!id && !cpf) throw new Error("É necessario um cpf");
    return await this.usuarioRepository.findOneOrFail({ where: { cpf, id } });
  }
  public async delete(id: number): Promise<boolean> {
    const resp = await this.usuarioRepository.delete({ id });
    if (resp) return true;
    return false;
  }
  login(cpf: string, senha: string): Promise<boolean | string> {
    throw new Error("Method not implemented.");
  }
}
