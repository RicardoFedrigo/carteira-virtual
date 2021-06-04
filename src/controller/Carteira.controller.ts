import { Response, Request } from "express";
import { container } from "tsyringe";

import {
  getCarteira,
  depositarCarteira,
  saqueCarteira,
} from "../services/Carteira";

import { depositoTransacao, saqueTransacao } from "../services/Transacao";

export default class CarteiraController {
  public async saldo(req: Request, res: Response): Promise<Response> {
    try {
      const id = req.params.id;
      const carteira = await container.resolve(getCarteira).getCarteira(+id);
      return res.status(200).send(carteira);
    } catch (error) {
      return res.status(error.status).send(error);
    }
  }
  public async deposito(req: Request, res: Response): Promise<Response> {
    try {
      const { id, valor, observacao } = req.body;
      if (valor < 0) throw new Error("Valor invalido");

      let carteira = await container.resolve(getCarteira).getCarteira(id);
      if (!carteira) return res.status(404).send("Carteira inexistente");

      const resp = await container
        .resolve(depositoTransacao)
        .depositoTransacao(carteira, valor, observacao);
      if (!resp) throw new Error("Transacao mal sucedida");

      carteira = await container
        .resolve(depositarCarteira)
        .depositoCarteira(carteira, valor);

      return res.status(200).send(resp);
    } catch (error) {
      return res.status(error.status).send(error);
    }
  }
  public async saque(req: Request, res: Response): Promise<Response> {
    try {
      const { id, valor, observacao } = req.body;
      if (valor < 0) throw new Error("Valor invalido");

      let carteira = await container.resolve(getCarteira).getCarteira(id);
      if (!carteira) return res.status(404).send("Carteira inexistente");

      const resp = await container
        .resolve(saqueTransacao)
        .saqueTransacao(carteira, valor, observacao);
      if (!resp) throw new Error("Transacao mal sucedida");

      carteira = await container
        .resolve(saqueCarteira)
        .saqueCarteira(carteira, valor);

      return res.status(200).send(resp);
    } catch (error) {
      return res.status(error.status).send(error);
    }
  }
}