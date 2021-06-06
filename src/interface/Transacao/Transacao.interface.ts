import { Carteira } from "../../entity/Carteira.entity";
import { Transacao } from "../../entity/Transacao.entity";

export default interface ITransacao {
  novaTransacao(transacao: Transacao): Promise<Transacao>;
  getAllbyCarteira(carteira: Carteira): Promise<Transacao[]>
  getByPeriodo(carteira: Carteira, inicio: Date, fim: Date): Promise<Transacao[]>
}
