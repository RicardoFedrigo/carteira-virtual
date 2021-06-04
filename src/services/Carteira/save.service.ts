import { injectable, inject } from "tsyringe";
import { Carteira } from "../../entity/Carteira.entity";

import ICarteira from "../../interface/Carteira/Carteira.interface";

@injectable()
export default class operacaoCarteira {
  constructor(
    @inject("CarteiraRepository")
    private carteiraRepository: ICarteira
  ) {}
  public async save(carteira: Carteira): Promise<Carteira> {
    return this.carteiraRepository.save(carteira);
  }
}
