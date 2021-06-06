import { injectable, inject } from "tsyringe";
import { Carteira } from "../../entity/Carteira.entity";

import { Transacao } from "../../entity/Transacao.entity";
import ITransacao from "../../interface/Transacao/Transacao.interface";

import jsonToCsv from "../../Utils/jsonToCsv";

@injectable()
export default class deposito {
  constructor(
    @inject("TransacaoRepository")
    private transacaoRepository: ITransacao
  ) {}
  public async getByPeriodo(
    carteira: Carteira,
    inicio: Date,
    fim: Date
  ): Promise<Transacao[]> {
    return await this.transacaoRepository.getByPeriodo(carteira, inicio, fim);
  }
}
