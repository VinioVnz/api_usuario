import express from "express";
import 'reflect-metadata';
import { AppDataSource } from "./database/data-source";
import usuariosRoute from './routes/usuario.routes'

require('dotenv').config();

AppDataSource.initialize()
    .then(() => {
        const app = express()
        app.use(express.json())

        app.use('/usuario', usuariosRoute)

        app.listen(process.env.API_PORT, () => {
            console.log('Servidor rodando na porta: ', process.env.API_PORT);
        })
    })
    .catch((error) => {
        console.error('Banco de dados não conectado. ',error)
    })
