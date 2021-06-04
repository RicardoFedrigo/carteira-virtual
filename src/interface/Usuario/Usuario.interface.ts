import { Usuario } from "../../entity/Usuario.entity";
import { DeepPartial } from "typeorm";

export default interface IUsuario {
  get(id?: number, cpf?: string): Promise<Usuario | null>;
  delete(id: number): Promise<boolean>;
  login(cpf: string, senha: string): Promise<string | boolean>;
  criarUsuario(usuario:Usuario): Promise<Usuario>
}
