import { injectable, inject } from "tsyringe";
import dayjs from "dayjs";

import { Transacao } from "../../entity/Transacao.entity";
import { Carteira } from "../../entity/Carteira.entity";
import ITransacao from "../../interface/Transacao/Transacao.interface";

import { tipoTransacao } from "../../enum/TipoTransacao.enum";
import { Categoria } from "../../entity/Categoria.entity";

@injectable()
export default class deposito {
  constructor(
    @inject("TransacaoRepository")
    private transacaoRepository: ITransacao
  ) {}
  public async depositoTransacao(
    carteira: Carteira,
    valor: number,
    observacao: string = "",
    categorias?: Categoria[]
  ): Promise<Transacao> {
    const transacao = new Transacao();
    transacao.carteira = carteira;
    transacao.dia_hora = dayjs().toDate();
    transacao.observacao = observacao;
    transacao.categoria = categorias;
    transacao.saldo_historico = carteira.saldo;
    transacao.tipoTransacao = tipoTransacao.Entrada;
    transacao.quantia = valor;

    return await this.transacaoRepository.novaTransacao(transacao);
  }
}
