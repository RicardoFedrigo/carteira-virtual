import { container } from "tsyringe";

//Usuario
import UsuarioRepository from "../repository/Usuario/Usuario.repository";
import IUsuario from "../interface/Usuario/Usuario.interface";

container.registerSingleton<IUsuario>(
    "UsuarioRepository", 
    UsuarioRepository
);

//Transacao
import TransacaoRepository from "../repository/Transacao/Transacao.repository";
import ITransacao from "../interface/Transacao/Transacao.interface";

container.registerSingleton<ITransacao>(
  "TransacaoRepository",
  TransacaoRepository
);

//Carteira
import CarteiraRepository from "../repository/Carteira/Carteira.respository";
import ICarteira from "../interface/Carteira/Carteira.interface";

container.registerSingleton<ICarteira>(
  "CarteiraRepository",
  CarteiraRepository
);
