import Carteira from "../Carteira/Carteira.dto";

export default interface TransacaoDTO {
  id: string;
  saldo: string;
  tipoTransacao: Number;
  dia_hora: Date;
  carteira: Carteira;
}
