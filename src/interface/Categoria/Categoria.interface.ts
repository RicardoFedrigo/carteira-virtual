import { Categoria }  from "../../entity/Categoria.entity";

export default interface ICarteira {
  create(categoria:Categoria): Promise<Categoria>;
}
