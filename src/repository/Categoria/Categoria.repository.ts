import { getRepository, Repository } from "typeorm";
import  Categoria  from "../../entity/Categoria.entity";
import ICategoria from "../../interface/Categoria/Categoria.interface";

export default class CategoriaRepository implements ICategoria {
  private categoriaRepository: Repository<Categoria>;

  constructor() {
    this.categoriaRepository = getRepository(Categoria);
  }
  public async create(categoria: Categoria): Promise<Categoria> {
    return await this.categoriaRepository.save(categoria);
  }
}
