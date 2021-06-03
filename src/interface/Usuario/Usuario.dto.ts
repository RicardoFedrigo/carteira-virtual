import Carteira from "../Carteira/Carteira.dto";

export default interface UsuarioDTO {
  id?: string;
  cpf: string;
  senha?: string;
  carteira: Carteira;
}
