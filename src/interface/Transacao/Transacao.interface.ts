import { Transacao } from "../../entity/Transacao.entity";

export default interface ITransacao {
  get(id: number): Promise<Transacao | null>;
  novaTransacao(transacao: Transacao): Promise<Transacao>;
}
