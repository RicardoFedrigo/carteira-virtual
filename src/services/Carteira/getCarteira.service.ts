import { injectable, inject } from "tsyringe";
import  { Carteira }  from "../../entity/Carteira.entity";

import ICarteira from "../../interface/Carteira/Carteira.interface";

@injectable()
export default class deposito {
  constructor(
    @inject("CarteiraRepository")
    private carteiraRepository: ICarteira
  ) {}

  public async getCarteira(id: number): Promise<Carteira | undefined> {
    return await this.carteiraRepository.get(id);
  }
}
