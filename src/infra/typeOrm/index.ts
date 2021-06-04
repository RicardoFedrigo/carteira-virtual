import {
  createConnection,
  Connection,
  getConnectionOptions,
  getConnection,
} from "typeorm";

export default class ConnectionPostgres {
  async create(): Promise<Connection> {
    const connectionOptions = await getConnectionOptions();
    const connection = await createConnection({
      ...connectionOptions,
      name: "default",
    });
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