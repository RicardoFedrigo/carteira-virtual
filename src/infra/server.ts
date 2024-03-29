import express from "express";
import http from "http";

export default class Server {
  private app = express();
  private port: string | number;

  public use(module: any): void {
    this.app.use(module);
  }

  public listen(): http.Server {
    return this.app.listen(this.port, () =>
      console.log(`> Listening on port ${this.port}`)
    );
  }

  public setPort(port: string | number): void {
    this.port = port;
  }
}
