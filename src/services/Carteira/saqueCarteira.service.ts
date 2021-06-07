import { injectable, inject } from "tsyringe";
import  { Carteira }  from "../../entity/Carteira.entity";

import ICarteira from "../../interface/Carteira/Carteira.interface";
@injectable()
export default class saqueCarteira {
  constructor(
    @inject("CarteiraRepository")
    private carteiraRepository: ICarteira
  ) {}

  public async saqueCarteira(
    carteira: Carteira,
    valor: number
  ): Promise<Carteira> {
    carteira.saldo -= valor;
    if (carteira.saldo < 0) {
      throw new Error("Saldo insuficiente");
    }
    return this.carteiraRepository.save(carteira);
  }
}
