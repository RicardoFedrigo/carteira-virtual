import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import  Usuario  from "./Usuario.entity";

@Entity({name:"Categoria",})
export default class Categoria {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  categoria: string;

  @ManyToOne(() => Usuario, (usuario) => usuario.id)
  usuario: Usuario;
}
