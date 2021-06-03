import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Carteira } from "./Carteira.entity";

//Enum
import { tipoTransacao } from "../enum/TipoTransacao.enum";

@Entity("Transacao")
export class Transacao {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  saldo: string;

  @Column("int")
  tipoTransacao: tipoTransacao;

  @Column({ type: "timestamptz" })
  dia_hora: Date;

  @ManyToOne(() => Carteira, (carteira) => carteira.id)
  carteira: Carteira;
}
