import { Router } from "express";
import CarteiraController from "../controller/Carteira.controller";

const router = Router();
const carteira = new CarteiraController();

router.post("/deposita", carteira.deposito);
router.post("/saque", carteira.saque);
router.get("/saldo/:id", carteira.saldo);
router.get("/movimentacao/exporta/:carteiraId",carteira.exporta);
router.get("/movimentacao/periodo/:carteiraId/:inicio/:fim",carteira.getByperiodo);
router.get("/movimentacao/exporta/periodo/:carteiraId/:inicio/:fim",carteira.exportaByPeriodo);

export default router;
