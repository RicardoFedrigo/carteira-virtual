import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Carteira } from "./Carteira.entity";

@Entity("Usuario")
export class Usuario {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  cpf: string;

  @Column()
  senha: string;

  @OneToOne(() => Carteira, { onDelete: "CASCADE" })
  @JoinColumn()
  carteira: Carteira;

}
