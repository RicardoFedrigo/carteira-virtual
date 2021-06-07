import Usuario  from "../../entity/Usuario.entity";

export default interface IUsuario {
  get(id?: number, cpf?: string): Promise<Usuario>;
  getById(id?: number): Promise<Usuario>
  delete(id: number): Promise<boolean>;
  login(cpf: string, senha: string): Promise<string | boolean>;
  criarUsuario(usuario:Usuario): Promise<Usuario>
}
