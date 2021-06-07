import { injectable, inject } from "tsyringe";
import  { Carteira }  from "../../entity/Carteira.entity";

import ICarteira from "../../interface/Carteira/Carteira.interface";
@injectable()
export default class depositoCarteira {
  constructor(
    @inject("CarteiraRepository")
    private carteiraRepository: ICarteira
  ) {}

  public async depositoCarteira(carteira: Carteira, valor: number): Promise<Carteira> {
    carteira.saldo += valor;
    return this.carteiraRepository.save(carteira);
  }
}
