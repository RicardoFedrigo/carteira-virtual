import { Carteira } from "../../entity/Carteira.entity";
import { Usuario } from "../../entity/Usuario.entity";

export default interface ICarteira {
  get(id: number): Promise<Carteira | null>;
  getSaldo(id: number): Promise<number>;
  save(carteira:Carteira) : Promise<Carteira>;
  criaCarteira(): Promise<Carteira>;
}
