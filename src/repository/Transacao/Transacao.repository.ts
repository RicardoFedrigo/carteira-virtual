import { Transacao } from "../../entity/Transacao.entity";
import TransacaoDto from "../../interface/Transacao/Transacao.dto";
import ITransacao from "../../interface/Transacao/Transacao.interface";

export default class TransacaoRepository implements ITransacao {
  get(id: String): Promise<Transacao> {
    throw new Error("Method not implemented.");
  }
  delete(id: String): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  historico(id: String): Promise<Transacao[]> {
    throw new Error("Method not implemented.");
  }
}
