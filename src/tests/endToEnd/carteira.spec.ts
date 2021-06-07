import { agent as request } from "supertest";

import ConnectionPostgres from "../../infra/typeOrm/index";

import App from "../../index";

const db = new ConnectionPostgres();
db.create();

it("Pega saldo carteira", async () => {
  const res = await request(App)
    .get("/carteira/saldo/1")
    .then((response) => {
      console.log(response.body);
    })
    .catch(function (error) {
      console.log(error);
    });
});
