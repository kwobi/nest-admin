import {MigrationInterface, QueryRunner} from "typeorm";

export class SchemaSync1646032608432 implements MigrationInterface {
    name = 'SchemaSync1646032608432'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cats" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "cats" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cats" ADD "description" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cats" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "cats" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "cats" ADD "title" character varying NOT NULL`);
    }

}
