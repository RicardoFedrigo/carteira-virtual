import Usuario from "./Usuario.dto";

export default interface IUsuario {
  get(id?: String, cpf?: String): Promise<Usuario | null>;
  delete(id: String): Promise<boolean>;
  login(cpf: String, senha: String): Promise<String | boolean>;
}
