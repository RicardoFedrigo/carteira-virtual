import { Response, Request } from "express";
import { container } from "tsyringe";

import { getAllbyCarteira, getByPeriodo } from "../services/Transacao/";

import {
  getCarteira,
  depositarCarteira,
  saqueCarteira,
} from "../services/Carteira";

import jsonToCsv from "../Utils/jsonToCsv";

import { depositoTransacao, saqueTransacao } from "../services/Transacao";
import { createCategoria } from "../services/Categoria";

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

  public async exporta(req: Request, res: Response): Promise<Response> {
    try {
      const carteiraId = req.params.carteiraId;
      const carteira = await container
        .resolve(getCarteira)
        .getCarteira(+carteiraId);
      const transacoes = await container
        .resolve(getAllbyCarteira)
        .getAllbyCarteira(carteira);

      return res
        .status(200)
        .contentType("text/csv")
        .attachment("transacoes.csv")
        .send(jsonToCsv(JSON.stringify(transacoes), ","));
    } catch (error) {
      console.log(error);
      return res.status(error.status).send(error);
    }
  }

  public async getByperiodo(req: Request, res: Response): Promise<Response> {
    try {
      const carteiraId = req.params.carteiraId;
      const inicio = req.params.inicio;
      const fim = req.params.fim;

      const carteira = await container
        .resolve(getCarteira)
        .getCarteira(+carteiraId);

      const tranHist = await container
        .resolve(getByPeriodo)
        .getByPeriodo(carteira, new Date(inicio), new Date(fim));

      return res.status(200).send(tranHist);
    } catch (error) {
      console.log(error);
      return res.status(error.status).send(error);
    }
  }

  public async exportaByPeriodo(
    req: Request,
    res: Response
  ): Promise<Response> {
    try {
      const carteiraId = req.params.carteiraId;
      const inicio = req.params.inicio;
      const fim = req.params.fim;

      const carteira = await container
        .resolve(getCarteira)
        .getCarteira(+carteiraId);

      const tranHist = await container
        .resolve(getByPeriodo)
        .getByPeriodo(carteira, new Date(inicio), new Date(fim));
      return res
        .status(200)
        .attachment("transacoes.csv")
        .contentType("text/csv")
        .send(jsonToCsv(JSON.stringify(tranHist), ","));
    } catch (error) {
      console.log(error);
      return res.status(error.status).send(error);
    }
  }
  public async deposito(req: Request, res: Response): Promise<Response> {
    try {
      const { id, valor, observacao, categorias } = req.body;
      let cat;

      if (valor < 0) throw new Error("Valor invalido");

      let carteira = await container.resolve(getCarteira).getCarteira(id);
      if (!carteira) return res.status(404).send("Carteira inexistente");

      if (categorias) {
        cat = categorias.map((categoria) =>
          container
            .resolve(createCategoria)
            .createCategoria(
              categoria.usuario,
              categoria.categoria,
              categoria.id
            )
        );
      }

      const resp = await container
        .resolve(depositoTransacao)
        .depositoTransacao(carteira, valor, observacao, cat);
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
      const { id, valor, observacao, categorias } = req.body;
      let cat;
      if (valor < 0) throw new Error("Valor invalido");

      if (categorias) {
        cat = categorias.map((categoria) =>
          container
            .resolve(createCategoria)
            .createCategoria(
              categoria.usuario,
              categoria.categoria,
              categoria.id
            )
        );
      }

      let carteira = await container.resolve(getCarteira).getCarteira(id);
      if (!carteira) return res.status(404).send("Carteira inexistente");

      const resp = await container
        .resolve(saqueTransacao)
        .saqueTransacao(carteira, valor, observacao, categorias);
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
