import { Response, Request } from "express";
import { container } from "tsyringe";

import { getAllbyCarteira, getByPeriodo } from "../services/Transacao/";

import {
  getCarteira,
  depositarCarteira,
  saqueCarteira,
} from "../services/Carteira";

import jsonToCsv from "../Utils/jsonToCsv";
import errorHandler from "../err/ErrorHandler";

import { depositoTransacao, saqueTransacao } from "../services/Transacao";
import { createCategoria } from "../services/Categoria";
import { isNull } from "util";

export default class CarteiraController {
  public async saldo(req: Request, res: Response): Promise<Response> {
    try {
      const id = req.params.id;
      const carteira = await container.resolve(getCarteira).getCarteira(+id);
      if (!carteira)
        throw new errorHandler(404, "A carteira procurado não existe");

      return res.status(200).send(carteira);
    } catch (error) {
      console.log(error);
      let err = error;
      if (!error.status) {
        err = new errorHandler(404, err.me);
      }
      return res.status(error.status).send(error);
    }
  }

  public async exporta(req: Request, res: Response): Promise<Response> {
    try {
      const carteiraId = req.params.carteiraId;
      const carteira = await container
        .resolve(getCarteira)
        .getCarteira(+carteiraId);

      if (!carteira)
        throw new errorHandler(404, "A carteira procurado não existe");

      const transacoes = await container
        .resolve(getAllbyCarteira)
        .getAllbyCarteira(carteira);
      let csv = transacoes.length
        ? jsonToCsv(JSON.stringify(transacoes), ",")
        : "Não existe movimentação";

      return res
        .status(200)
        .contentType("text/csv")
        .attachment("transacoes.csv")
        .send(csv);
    } catch (error) {
      console.log(error);
      let err = error;
      if (!error.status) {
        err = new errorHandler(404, err.message);
      }
      return res.status(error.status).send(error);
    }
  }

  public async getByperiodo(req: Request, res: Response): Promise<Response> {
    try {
      const { carteiraId, inicio, fim } = req.params;
      const carteira = await container
        .resolve(getCarteira)
        .getCarteira(+carteiraId);

      if (!carteira)
        throw new errorHandler(404, "A carteira procurado não existe");

      const tranHist = await container
        .resolve(getByPeriodo)
        .getByPeriodo(carteira, new Date(inicio), new Date(fim));

      return res.status(200).send(tranHist);
    } catch (error) {
      console.log(error);
      let err = error;
      if (!error.status) {
        err = new errorHandler(404, err.message);
      }
      return res.status(error.status).send(error);
    }
  }

  public async exportaByPeriodo(
    req: Request,
    res: Response
  ): Promise<Response> {
    try {
      const { carteiraId, inicio, fim } = req.params;

      const carteira = await container
        .resolve(getCarteira)
        .getCarteira(+carteiraId);

      if (!carteira)
        throw new errorHandler(404, "A carteira procurado não existe");

      const tranHist = await container
        .resolve(getByPeriodo)
        .getByPeriodo(carteira, new Date(inicio), new Date(fim));

      let csv = tranHist.length
        ? jsonToCsv(JSON.stringify(tranHist), ",")
        : "Não existe movimentação";
      return res
        .status(200)
        .attachment("transacoes.csv")
        .contentType("text/csv")
        .send(csv);
    } catch (error) {
      console.log(error);
      let err = error;
      if (!error.status) {
        err = new errorHandler(404, err.message);
      }
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
        cat = categorias.map((categoria: any) =>
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
      console.log(error);
      let err = error;
      if (!error.status) {
        err = new errorHandler(404, err.message);
      }
      return res.status(error.status).send(error);
    }
  }
  public async saque(req: Request, res: Response): Promise<Response> {
    try {
      const { id, valor, observacao, categorias } = req.body;
      let cat;
      if (valor < 0) throw new Error("Valor invalido");

      if (categorias) {
        cat = categorias.map((categoria: any) =>
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
      console.log(error);
      let err = error;
      if (!error.status) {
        err = new errorHandler(404, err.message);
      }
      return res.status(error.status).send(error);
    }
  }
}
