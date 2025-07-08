"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUsuario1751994759499 = void 0;
const typeorm_1 = require("typeorm");
class CreateUsuario1751994759499 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "usuarios",
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'nome',
                    type: 'varchar',
                    length: '100'
                },
                {
                    name: 'email',
                    type: 'varchar',
                    length: '100'
                },
                {
                    name: 'password',
                    type: 'varchar',
                    length: '100'
                }
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('usuarios');
    }
}
exports.CreateUsuario1751994759499 = CreateUsuario1751994759499;
