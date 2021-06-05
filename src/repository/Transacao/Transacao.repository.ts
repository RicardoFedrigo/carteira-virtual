import { getRepository, Repository } from "typeorm";
import { Carteira } from "../../entity/Carteira.entity";
import { Transacao } from "../../entity/Transacao.entity";
import ITransacao from "../../interface/Transacao/Transacao.interface";

export default class TransacaoRepository implements ITransacao {
  private transacaoRepository: Repository<Transacao>;

  constructor() {
    this.transacaoRepository = getRepository(Transacao);
  }
  novaTransacao(transacao: Transacao): Promise<Transacao> {
    return this.transacaoRepository.save(transacao);
  }
  getAllbyCarteira(carteira: Carteira): Promise<Transacao[]> {
    return this.transacaoRepository.find({
      select: [
        "saldo_historico",
        "quantia",
        "observacao",
        "tipoTransacao",
        "dia_hora",
      ],
      where: { carteira: carteira },
    });
  }
}
