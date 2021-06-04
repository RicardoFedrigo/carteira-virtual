import { Router } from "express";
import UsuarioController from "../controller/Usuario.controller";

const usuario = new UsuarioController();
const router = Router();

router.post("/criar-usuario", usuario.criarUsuario);

export default router;
