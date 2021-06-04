import { Router } from "express";
import categoriaController from "../controller/Categoria.controller";

const router = Router();
const categoria = new categoriaController();

router.post("/", categoria.createOrUpdate);

export default router;
