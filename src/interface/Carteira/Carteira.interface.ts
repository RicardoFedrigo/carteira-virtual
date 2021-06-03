import { Carteira } from "../../entity/Carteira.entity";

export default interface ICarteira {
    get(id: String):Promise<Carteira|null>;
    delete(id:String):Promise<boolean>;
}