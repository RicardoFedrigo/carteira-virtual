import { injectable, inject } from "tsyringe";
import moment from "moment";

import { Transacao } from "../../entity/Transacao.entity";
import { Carteira } from "../../entity/Carteira.entity";
import ITransacao from "../../interface/Transacao/Transacao.interface";

import { tipoTransacao } from "../../enum/TipoTransacao.enum";

@injectable()
export default class deposito {
  constructor(
    @inject("TransacaoRepository")
    private transacaoRepository: ITransacao
  ) {}
  public async saqueTransacao(
    carteira: Carteira,
    valor: number,
    observacao: string = ""
  ): Promise<Transacao> {
    const transacao = new Transacao();
    transacao.carteira = carteira;
    transacao.dia_hora = moment().toDate();
    transacao.observacao = observacao;
    transacao.saldo_historico = carteira.saldo;
    transacao.tipoTransacao = tipoTransacao.Saida;
    transacao.quantia = valor;

    return await this.transacaoRepository.novaTransacao(transacao);
  }
}
