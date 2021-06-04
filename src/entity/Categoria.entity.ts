import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Usuario } from "./Usuario.entity";

@Entity("Categoria")
export class Categoria {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  categoria: string;

  @ManyToOne(() => Usuario, (usuario) => usuario.id)
  usuario: Usuario;
}
