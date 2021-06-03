import Carteira from "../Carteira/Carteira.dto";
import Transacao from "../Transacao/Transacao.dto";

export default interface ITransacao {
  get(id: String): Promise<Carteira | null>;
  delete(id: String): Promise<boolean>;
}
