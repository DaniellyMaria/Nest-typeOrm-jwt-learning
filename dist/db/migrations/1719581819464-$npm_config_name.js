"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$npmConfigName1719581819464 = void 0;
class $npmConfigName1719581819464 {
    async up(queryRunner) {
        await queryRunner.query(`
            CREATE TABLE "user" (
                id uuid NOT NULL default uuid_generate_v4(),
                username varchar(256) NOT NULL,
                password_hash varchar(256) NOT NULL,
                CONSTRAINT user_pk_id PRIMARY KEY (id),
                CONSTRAINT user_un_username UNIQUE (username)
            )
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE IF EXISTS user;`);
    }
}
exports.$npmConfigName1719581819464 = $npmConfigName1719581819464;
//# sourceMappingURL=1719581819464-$npm_config_name.js.map