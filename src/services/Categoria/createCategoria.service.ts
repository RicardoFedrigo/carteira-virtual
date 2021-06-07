import { injectable, inject } from "tsyringe";
import  Categoria  from "../../entity/Categoria.entity";
import  Usuario  from "../../entity/Usuario.entity";

import ICategoria from "../../interface/Categoria/Categoria.interface";
@injectable()
export default class saveOrUpdate {
  constructor(
    @inject("CategoriaRepository")
    private categoriaRepository: ICategoria
  ) {}
  public async createCategoria(
    usuario: Usuario,
    categoria: string,
    id?: number
  ): Promise<Categoria> {
    const newCategoria = new Categoria();
    newCategoria.id = id;
    newCategoria.categoria = categoria;
    newCategoria.usuario = usuario;
    return await this.categoriaRepository.create(newCategoria);
  }
}
