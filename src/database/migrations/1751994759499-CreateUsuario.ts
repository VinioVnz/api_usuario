import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsuario1751994759499 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
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
            })

        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('usuarios')
    }

}
