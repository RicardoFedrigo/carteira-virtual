import { getRepository, Repository } from "typeorm";
import { Usuario } from "../../entity/Usuario.entity";
import IUsuario from "../../interface/Usuario/Usuario.interface";

export default class UsuarioRepository implements IUsuario {
  private usuarioRepository: Repository<Usuario>;

  constructor() {
    this.usuarioRepository = getRepository(Usuario);
  }
  public async getById(id: number): Promise<Usuario> {
    return await this.usuarioRepository.findOne({ where: { id } });
  }

  public async criarUsuario(usuario: Usuario): Promise<Usuario> {
    return await this.usuarioRepository.save(usuario);
  }
  public async get(id?: number, cpf?: string): Promise<Usuario> {
    return await this.usuarioRepository.findOne({ where: { cpf, id } });
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
