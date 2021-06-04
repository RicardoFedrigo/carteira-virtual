import { Router } from "express";
import CarteiraController from "../controller/Carteira.controller";

const router = Router();
const carteira = new CarteiraController();

router.post("/deposita", carteira.deposito);
router.post("/saque", carteira.saque);
router.get("/saldo/:id", carteira.saldo);

export default router;
