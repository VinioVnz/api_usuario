"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioController = void 0;
const UsuarioService_1 = require("../services/UsuarioService");
exports.UsuarioController = {
    async listar(req, res) {
        try {
            const usuarios = await UsuarioService_1.UsuarioService.listar();
            res.json(usuarios);
        }
        catch {
            res.status(500).json({ erro: 'Erro ao criar o recurso' });
        }
    },
    criar: async (req, res) => {
        try {
            const usuario = await UsuarioService_1.UsuarioService.criar(req.body);
            res.status(201).json(usuario);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ erro: 'Erro ao criar o recurso' });
        }
    },
    async buscar(req, res) {
        const id = Number(req.params.id);
        const usuario = await UsuarioService_1.UsuarioService.buscarPorId(id);
        if (!usuario)
            res.status(404).json({ erro: 'Usuario não encontrado' });
        res.status(200).json(usuario);
    },
    async atualizar(req, res) {
        const id = Number(req.params.id);
        const atualizado = await UsuarioService_1.UsuarioService.atualizar(id, req.body);
        if (!atualizado)
            res.status(404).json({ erro: 'Usuário não encontrado' });
        res.status(200).json(atualizado);
    },
    async deletar(req, res) {
        const id = Number(req.params.id);
        const removido = await UsuarioService_1.UsuarioService.deletar(id);
        if (!removido)
            res.status(404).json({ erro: 'Usuário não encontrado' });
        res.status(200).json({ status: "Usuário removido com sucesso", usuario: removido });
    },
};
