import { Cats } from "src/cats/entities/cats.entity";
import {MigrationInterface, QueryRunner} from "typeorm";

export class CatsRefactor1646030067892 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(
            `ALTER TABLE "cats" RENAME COLUMN "name" TO "title"`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(
            `ALTER TABLE "cats" RENAME COLUMN "title" TO "name"`,
        )
    }

}

