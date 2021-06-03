import { Carteira } from "../../entity/Carteira.entity";
// import CarteiraDTO from "../../interface/Carteira.dto";
import ICateira from "../../interface/Carteira/Carteira.interface";

export default class CarteiraRepository implements ICateira {
    get(id: String): Promise<Carteira> {
        throw new Error("Method not implemented.");
    }
    getSaldo(id: String): Promise<Number> {
        throw new Error("Method not implemented.");
    }
    delete(id: String): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    operacao(valor: Number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}