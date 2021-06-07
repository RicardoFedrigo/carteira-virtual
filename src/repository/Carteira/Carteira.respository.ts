import { getRepository, Repository } from "typeorm";
import  Carteira  from "../../entity/Carteira.entity";
import ICateira from "../../interface/Carteira/Carteira.interface";

export default class CarteiraRepository implements ICateira {
  private carteiraRepository: Repository<Carteira>;

  constructor() {
    this.carteiraRepository = getRepository(Carteira);
  }
  save(carteira: Carteira): Promise<Carteira> {
    return this.carteiraRepository.save(carteira);
  }
  public async criaCarteira(): Promise<Carteira> {
    return await this.carteiraRepository.save({ saldo: 0 });
  }

  public async getSaldo(id: number): Promise<number> {
    const { saldo } = await this.carteiraRepository.findOneOrFail({
      where: { id },
    });
    return saldo;
  }
  public async get(id: number): Promise<Carteira> {
    return await this.carteiraRepository.findOneOrFail({ where: { id } });
  }
  public async delete(id: number): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
