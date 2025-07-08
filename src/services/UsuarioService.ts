import { AppDataSource } from "../database/data-source";
import { Usuario } from "../entities/Usuario";

const repo = AppDataSource.getRepository(Usuario)

export const UsuarioService = {
    async criar (data:Partial<Usuario>): Promise<Usuario>{
        const usuario = repo.create(data)
        let result = await repo.save(usuario)
        
        console.log(result)
        return usuario
    },

    async listar(): Promise<Usuario[]> {
        return await repo.find()
    },

    async buscarPorId(id: number): Promise<Usuario | null> {
        return await repo.findOneBy({ id })
    },

    async atualizar(id: number, data: Partial<Usuario>): Promise<Usuario | null>{
        const usuario = await repo.findOneBy({id})
        if(!usuario) return null

        repo.merge(usuario, data)
        return await repo.save(usuario)
    },

    async deletar(id: number): Promise<Usuario | null>{
        const usuario = await repo.findOneBy({ id })
        if(!usuario) return null

        await repo.remove(usuario)
        return usuario
    }
}