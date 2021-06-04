import { Response } from "express";

export default class ErrorHandler extends Error {
  private _message: string;
  private _code: number;

  constructor(code: number, message: string) {
    super();
    this._message = message;
    this._code = code;
  }
  get code() {
    return this._code;
  }

  get message() {
    return this._message;
  }
  async genericError(res: Response) {
    if (this._code === 500) {
      return res.status(this._code).send({
        status: "Application Error",
      });
    }
    return res.status(this._code).json({
      message: this._message,
    });
  }
}
