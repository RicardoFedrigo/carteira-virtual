import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { Usuario } from "./Usuario.entity";
import { Transacao } from "./Transacao.entity";

@Entity("Carteira")
export class Carteira {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  saldo: string;

  @OneToOne(() => Usuario, (usuario) => usuario.id)
  @JoinColumn()
  usuario: Usuario;

  @OneToMany(() => Transacao, (transacao) => transacao.id)
  transacao: Transacao;
}
