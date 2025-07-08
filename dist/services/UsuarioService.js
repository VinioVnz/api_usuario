"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioService = void 0;
const data_source_1 = require("../database/data-source");
const Usuario_1 = require("../entities/Usuario");
const repo = data_source_1.AppDataSource.getRepository(Usuario_1.Usuario);
exports.UsuarioService = {
    async criar(data) {
        const usuario = repo.create(data);
        let result = await repo.save(usuario);
        console.log(result);
        return usuario;
    },
    async listar() {
        return await repo.find();
    },
    async buscarPorId(id) {
        return await repo.findOneBy({ id });
    },
    async atualizar(id, data) {
        const usuario = await repo.findOneBy({ id });
        if (!usuario)
            return null;
        repo.merge(usuario, data);
        return await repo.save(usuario);
    },
    async deletar(id) {
        const usuario = await repo.findOneBy({ id });
        if (!usuario)
            return null;
        await repo.remove(usuario);
        return usuario;
    }
};
