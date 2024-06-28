"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$npmConfigName1719581759649 = void 0;
class $npmConfigName1719581759649 {
    async up(queryRunner) {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`);
        await queryRunner.query(`
            CREATE TABLE task (
                id uuid NOT NULL DEFAULT uuid_generate_v4(),
                title varchar(256) NOT NULL,
                description varchar(512) NULL,
                status varchar(50) NOT NULL DEFAULT 'TO_DO',
                expiration_date timestamptz NOT NULL,
                CONSTRAINT task_pk PRIMARY KEY (id)
            )
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE IF EXISTS task;`);
    }
}
exports.$npmConfigName1719581759649 = $npmConfigName1719581759649;
//# sourceMappingURL=1719581759649-$npm_config_name.js.map