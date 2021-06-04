import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Transacao } from "./Transacao.entity";

@Entity("Carteira")
export class Carteira {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  saldo: number;

  @OneToMany(() => Transacao, (transacao) => transacao.id)
  transacao?: Transacao[];
}
