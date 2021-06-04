import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { Carteira } from "./Carteira.entity";
import { Categoria } from "./Categoria.entity";

@Entity("Usuario")
export class Usuario {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    unique: true,
    nullable: true,
  })
  cpf!: string;

  @Column()
  senha!: string;

  @OneToMany(() => Categoria, (categoria) => categoria.id)
  categoria?: Categoria[];

  @OneToOne(() => Carteira, { onDelete: "CASCADE" })
  @JoinColumn()
  carteira!: Carteira;
}
