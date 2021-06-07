import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import  Transacao  from "./Transacao.entity";

@Entity("Carteira")
export default class Carteira {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  saldo: number;

  @OneToMany(() => Transacao, (transacao) => transacao.id)
  transacao?: Transacao[];
}
