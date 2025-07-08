import { Router } from "express";
import { UsuarioController } from "../controllers/UsuarioController";

const routes = Router()

routes.get('/', UsuarioController.listar)
routes.get('/:id', UsuarioController.buscar)
routes.post('/', UsuarioController.criar)
routes.put('/:id', UsuarioController.atualizar)
routes.delete('/:id', UsuarioController.deletar)

export default routes