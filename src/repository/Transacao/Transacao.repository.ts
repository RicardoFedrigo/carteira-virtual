import { getRepository, Repository  } from "typeorm";
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
  get(id: number): Promise<Transacao> {
    throw new Error("Method not implemented.");
  }
}
