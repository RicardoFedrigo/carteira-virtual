import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Carteira } from "./Carteira.entity";

//Enum
import { tipoTransacao } from "../enum/TipoTransacao.enum";
import { Categoria } from "./Categoria.entity";

@Entity("Transacao")
export class Transacao {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  saldo_historico!: number;

  @Column()
  quantia!: number;

  @Column()
  observacao?: string;

  @Column("int")
  tipoTransacao: tipoTransacao;

  @Column({ type: "timestamptz" })
  dia_hora: Date;

  @ManyToMany(() => Categoria, (categoria) => categoria.id)
  @JoinTable()
  categoria?: Carteira[];

  @ManyToOne(() => Carteira, (carteira) => carteira.id)
  carteira!: Carteira;
}
