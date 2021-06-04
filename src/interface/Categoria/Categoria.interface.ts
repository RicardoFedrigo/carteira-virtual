import { Categoria } from "../../entity/Categoria.entity";

export default interface ICarteira {
  create(usuarioId: number, categoria: string): Promise<Categoria>;
}
