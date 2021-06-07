import {
  createConnection,
  Connection,
  getConnectionOptions,
  getConnection,
} from "typeorm";

import { Carteira } from "../../entity/Carteira.entity";
import { Categoria } from "../../entity/Categoria.entity";
import { Transacao } from "../../entity/Transacao.entity";
import { Usuario } from "../../entity/Usuario.entity";

export default class ConnectionPostgres {
  async create(): Promise<Connection> {
    let connectionOptions = await getConnectionOptions();
    const connection = await createConnection(connectionOptions);
    return connection;
  }

  async close(): Promise<void> {
    await getConnection().close();
  }

  public clear(): void {
    const connection = getConnection();
    const entities = connection.entityMetadatas;

    entities.map(async (entity) => {
      const repository = connection.getRepository(entity.name);
      await repository.query(
        `select setval(${entity.tableName}_id_seq,0, false);`
      );
      await repository.query(`DELETE FROM ${entity.tableName}`);
    });
  }
}
