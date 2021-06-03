import Usuario from "../Usuario/Usuario.dto";
import Transacao from "../Transacao/Transacao.dto";

export default interface CarteiraDTO {
  id: string;
  saldo: string;
  usuario: Usuario;
  transacao: Array<Transacao>;
}
