import { injectable, inject } from "tsyringe";
import  { Carteira }  from "../../entity/Carteira.entity";

import ICarteira from "../../interface/Carteira/Carteira.interface";
@injectable()
export default class deposito {
  constructor(
    @inject("CarteiraRepository")
    private carteiraRepository: ICarteira
  ) {}

  public async criaCarteira(): Promise<Carteira> {
    return await this.carteiraRepository.criaCarteira();
  }
}
