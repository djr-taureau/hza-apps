import {MigrationInterface, QueryRunner} from "typeorm";

export class testRun1591742057604 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<any> {
		await queryRunner.query(
			`CREATE TABLE "system-permissions" ("guid" uniqueidentifier NOT NULL CONSTRAINT "DF_939f96f61fced45232d1203aeca" DEFAULT NEWSEQUENTIALID(), "createdOn" datetime2 NOT NULL CONSTRAINT "DF_584d8665ff1ed393b0ce782f90a" DEFAULT getdate(), "modifiedOn" datetime2 NOT NULL CONSTRAINT "DF_f184b9a47fb63d374506e823af5" DEFAULT getdate(), "name" nvarchar(255) NOT NULL, "description" text NOT NULL, "scope" int NOT NULL, CONSTRAINT "UQ_208e99e7a812d315881a33fb970" UNIQUE ("name"), CONSTRAINT "PK_939f96f61fced45232d1203aeca" PRIMARY KEY ("guid"))`
		);
		await queryRunner.query(`CREATE INDEX "IDX_797abf10a90a3306603fbf46bc" ON "system-permissions"("scope") `);
		await queryRunner.query(
			`CREATE TABLE "roles" ("guid" uniqueidentifier NOT NULL CONSTRAINT "DF_1383579bcd1ada110e9dd76bedf" DEFAULT NEWSEQUENTIALID(), "createdOn" datetime2 NOT NULL CONSTRAINT "DF_42902dcf7f071491ce1d6eaf040" DEFAULT getdate(), "modifiedOn" datetime2 NOT NULL CONSTRAINT "DF_e99982e9133bd9606dce01e283e" DEFAULT getdate(), "displayName" nvarchar(255) NOT NULL, "name" nvarchar(255) NOT NULL, "description" nvarchar(255) NOT NULL, "scope" int NOT NULL, CONSTRAINT "PK_1383579bcd1ada110e9dd76bedf" PRIMARY KEY ("guid"))`
		);
		await queryRunner.query(
			`CREATE TABLE "profile-attributes" ("guid" uniqueidentifier NOT NULL CONSTRAINT "DF_b6cefc657e5f49326a9130c5453" DEFAULT NEWSEQUENTIALID(), "createdOn" datetime2 NOT NULL CONSTRAINT "DF_ecce0d0bce73246ee7ee7e73b97" DEFAULT getdate(), "modifiedOn" datetime2 NOT NULL CONSTRAINT "DF_9cbbb2abd0bf4d569978d9d60a7" DEFAULT getdate(), "name" nvarchar(255) NOT NULL, "value" nvarchar(255) NOT NULL, "valueType" int NOT NULL, "profileGuid" uniqueidentifier, CONSTRAINT "PK_6887e2a124f9a04e10abbe769b1" PRIMARY KEY ("guid", "name"))`
		);
		await queryRunner.query(
			`CREATE TABLE "profiles" ("guid" uniqueidentifier NOT NULL CONSTRAINT "DF_b930e426f55682b5dc18e16f74d" DEFAULT NEWSEQUENTIALID(), "createdOn" datetime2 NOT NULL CONSTRAINT "DF_373108f195a7163e8d6e2ac8398" DEFAULT getdate(), "modifiedOn" datetime2 NOT NULL CONSTRAINT "DF_d4993b93f7283f403414994e3ca" DEFAULT getdate(), "firstName" nvarchar(255), "middleName" nvarchar(255), "lastName" nvarchar(255), "legalName" nvarchar(255), "commonName" nvarchar(255), "gender" int, "dateOfBirth" datetime2, "profileType" int NOT NULL, CONSTRAINT "PK_b930e426f55682b5dc18e16f74d" PRIMARY KEY ("guid"))`
		);
		await queryRunner.query(
			`CREATE TABLE "system-users" ("guid" uniqueidentifier NOT NULL CONSTRAINT "DF_583cedd331202d5b82953aad0ea" DEFAULT NEWSEQUENTIALID(), "createdOn" datetime2 NOT NULL CONSTRAINT "DF_55960c1cc435443a28879b765fb" DEFAULT getdate(), "modifiedOn" datetime2 NOT NULL CONSTRAINT "DF_b94f5236064a3dd23cbe0903d2f" DEFAULT getdate(), "displayName" nvarchar(255) NOT NULL, "providerId" nvarchar(255), "profileGuid" uniqueidentifier, CONSTRAINT "PK_583cedd331202d5b82953aad0ea" PRIMARY KEY ("guid"))`
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX "REL_26ef62bab7edede12c4898a3ee" ON "system-users"("profileGuid") WHERE "profileGuid" IS NOT NULL`
		);
		await queryRunner.query(
			`CREATE TABLE "system-countries" ("createdOn" datetime2 NOT NULL CONSTRAINT "DF_0cf9022b1e7a13147f68a096012" DEFAULT getdate(), "modifiedOn" datetime2 NOT NULL CONSTRAINT "DF_0191325d72481cec046b9e6344e" DEFAULT getdate(), "code" char(2) NOT NULL, "alpha3Code" char(3) NOT NULL, "numericCode" int NOT NULL, "name" nvarchar(255) NOT NULL, CONSTRAINT "UQ_d828a82c9781ddd9ee92f589a78" UNIQUE ("alpha3Code"), CONSTRAINT "UQ_b484cfba270e11b38b75567fc24" UNIQUE ("numericCode"), CONSTRAINT "PK_83b2f1ef216913e09ae1935137a" PRIMARY KEY ("code"))`
		);
		await queryRunner.query(
			`CREATE TABLE "system-tools" ("guid" uniqueidentifier NOT NULL CONSTRAINT "DF_22813d2a6f7dab84dc3fdc9859c" DEFAULT NEWSEQUENTIALID(), "createdOn" datetime2 NOT NULL CONSTRAINT "DF_d528a45c3bfe4dc76b001458417" DEFAULT getdate(), "modifiedOn" datetime2 NOT NULL CONSTRAINT "DF_0b2fdb82869337a5b9a44036471" DEFAULT getdate(), "displayName" nvarchar(255) NOT NULL, "description" nvarchar(MAX), "internalName" nvarchar(255) NOT NULL, CONSTRAINT "PK_22813d2a6f7dab84dc3fdc9859c" PRIMARY KEY ("guid"))`
		);
		await queryRunner.query(
			`CREATE TABLE "activity-logs" ("guid" uniqueidentifier NOT NULL CONSTRAINT "DF_87276c22c7f6973f9d6cb65fa33" DEFAULT NEWSEQUENTIALID(), "message" nvarchar(255) NOT NULL, "occurrence" datetime2 NOT NULL, CONSTRAINT "PK_87276c22c7f6973f9d6cb65fa33" PRIMARY KEY ("guid"))`
		);
		await queryRunner.query(
			`CREATE TABLE "notifications" ("guid" uniqueidentifier NOT NULL CONSTRAINT "DF_fb4a7d3e7a0d89d2a6e0eb664d7" DEFAULT NEWSEQUENTIALID(), "createdOn" datetime2 NOT NULL CONSTRAINT "DF_fb00b3fc321cf26e5c575ac720b" DEFAULT getdate(), "modifiedOn" datetime2 NOT NULL CONSTRAINT "DF_8f5ced025d1598ba0d9a9d5f6a2" DEFAULT getdate(), "message" varchar(255) NOT NULL, "dismissed" bit NOT NULL, "notification_type" varchar(255) NOT NULL, CONSTRAINT "PK_fb4a7d3e7a0d89d2a6e0eb664d7" PRIMARY KEY ("guid"))`
		);
		await queryRunner.query(
			`CREATE TABLE "templates" ("guid" uniqueidentifier NOT NULL CONSTRAINT "DF_edf76ee5be92965e347abd36bb2" DEFAULT NEWSEQUENTIALID(), "name" nvarchar(255) NOT NULL, "displayName" nvarchar(255) NOT NULL, "path" nvarchar(255) NOT NULL, "system" bit NOT NULL, "template" nvarchar(255) NOT NULL, CONSTRAINT "PK_edf76ee5be92965e347abd36bb2" PRIMARY KEY ("guid"))`
		);
		await queryRunner.query(
			`CREATE TABLE "settings" ("guid" uniqueidentifier NOT NULL CONSTRAINT "DF_2b2f39138654b1cf88ad8a8b47f" DEFAULT NEWSEQUENTIALID(), "createdOn" datetime2 NOT NULL CONSTRAINT "DF_b8e138ec19715d15693f5263113" DEFAULT getdate(), "modifiedOn" datetime2 NOT NULL CONSTRAINT "DF_6bcee3dc8e78c3e2f63dc54f105" DEFAULT getdate(), "entityGuid" nvarchar(255) NOT NULL, "name" nvarchar(255) NOT NULL, "value" nvarchar(255) NOT NULL, "valueType" int NOT NULL, "statusFlag" int NOT NULL, CONSTRAINT "PK_2b2f39138654b1cf88ad8a8b47f" PRIMARY KEY ("guid"))`
		);
		await queryRunner.query(`CREATE INDEX "IDX_c20243a99b2cab4e721b1435e7" ON "settings"("entityGuid") `);
		await queryRunner.query(`CREATE INDEX "IDX_ca7857276d2a30f4dcfa0e42cd" ON "settings"("name") `);
		await queryRunner.query(
			`CREATE TABLE "address" ("guid" uniqueidentifier NOT NULL CONSTRAINT "DF_309cc435d5ae4c9eae5f40dac9c" DEFAULT NEWSEQUENTIALID(), "createdOn" datetime2 NOT NULL CONSTRAINT "DF_075abe80c96c5d6ce111b32c2b6" DEFAULT getdate(), "modifiedOn" datetime2 NOT NULL CONSTRAINT "DF_d1b5b99d9bd90aa4388fe4ad5d4" DEFAULT getdate(), "street1" nvarchar(255), "street2" nvarchar(255), "street3" nvarchar(255), "city" nvarchar(255), "stateProvence" nvarchar(255), "postalCode" nvarchar(255), "country" nvarchar(255), "target" uniqueidentifier NOT NULL, CONSTRAINT "PK_309cc435d5ae4c9eae5f40dac9c" PRIMARY KEY ("guid"))`
		);
		await queryRunner.query(`CREATE INDEX "IDX_a724de3585869bca2d8ee03297" ON "address"("target") `);
		await queryRunner.query(
			`CREATE TABLE "contact-information" ("guid" uniqueidentifier NOT NULL CONSTRAINT "DF_30ab6f2dfe49cec83105ee823f1" DEFAULT NEWSEQUENTIALID(), "createdOn" datetime2 NOT NULL CONSTRAINT "DF_e370df6f0aa320750d603bf8634" DEFAULT getdate(), "modifiedOn" datetime2 NOT NULL CONSTRAINT "DF_8a5f572b6c6223161524f210df3" DEFAULT getdate(), "isTypePrimary" bit NOT NULL, "name" nvarchar(255) NOT NULL, "value" nvarchar(255) NOT NULL, "valueType" int NOT NULL, "target" uniqueidentifier NOT NULL, CONSTRAINT "PK_066a1587dd95f4ba16b27062981" PRIMARY KEY ("guid", "name"))`
		);
		await queryRunner.query(`CREATE INDEX "IDX_6d0a6567e7447c5a05bcacacc2" ON "contact-information"("target") `);
		await queryRunner.query(
			`CREATE TABLE "role-permissions" ("rolesGuid" uniqueidentifier NOT NULL, "systemPermissionsGuid" uniqueidentifier NOT NULL, CONSTRAINT "PK_c705e49d288a83a336ad66bf1d5" PRIMARY KEY ("rolesGuid", "systemPermissionsGuid"))`
		);
		await queryRunner.query(
			`CREATE TABLE "system-user-roles" ("systemUsersGuid" uniqueidentifier NOT NULL, "rolesGuid" uniqueidentifier NOT NULL, CONSTRAINT "PK_d8d74105be0369f3f58a94f6fe5" PRIMARY KEY ("systemUsersGuid", "rolesGuid"))`
		);
		await queryRunner.query(
			`ALTER TABLE "profile-attributes" ADD CONSTRAINT "FK_5c7e459b2d2e490326641bc2ec8" FOREIGN KEY ("profileGuid") REFERENCES "profiles"("guid")`
		);
		await queryRunner.query(
			`ALTER TABLE "system-users" ADD CONSTRAINT "FK_26ef62bab7edede12c4898a3eee" FOREIGN KEY ("profileGuid") REFERENCES "profiles"("guid")`
		);
		await queryRunner.query(
			`ALTER TABLE "role-permissions" ADD CONSTRAINT "FK_ebbab46a2db2cb07c08c7e65abd" FOREIGN KEY ("rolesGuid") REFERENCES "roles"("guid") ON DELETE CASCADE`
		);
		await queryRunner.query(
			`ALTER TABLE "role-permissions" ADD CONSTRAINT "FK_ed669180304fa6913d8e835073a" FOREIGN KEY ("systemPermissionsGuid") REFERENCES "system-permissions"("guid") ON DELETE CASCADE`
		);
		await queryRunner.query(
			`ALTER TABLE "system-user-roles" ADD CONSTRAINT "FK_514deca020cd8f2ea9398535a18" FOREIGN KEY ("systemUsersGuid") REFERENCES "system-users"("guid") ON DELETE CASCADE`
		);
		await queryRunner.query(
			`ALTER TABLE "system-user-roles" ADD CONSTRAINT "FK_385d2fae11fdcd9876ffbfd2e34" FOREIGN KEY ("rolesGuid") REFERENCES "roles"("guid") ON DELETE CASCADE`
		);
	}

	public async down(queryRunner: QueryRunner): Promise<any> {
		await queryRunner.query(`ALTER TABLE "system-user-roles" DROP CONSTRAINT "FK_385d2fae11fdcd9876ffbfd2e34"`);
		await queryRunner.query(`ALTER TABLE "system-user-roles" DROP CONSTRAINT "FK_514deca020cd8f2ea9398535a18"`);
		await queryRunner.query(`ALTER TABLE "role-permissions" DROP CONSTRAINT "FK_ed669180304fa6913d8e835073a"`);
		await queryRunner.query(`ALTER TABLE "role-permissions" DROP CONSTRAINT "FK_ebbab46a2db2cb07c08c7e65abd"`);

		await queryRunner.query(`ALTER TABLE "system-users" DROP CONSTRAINT "FK_26ef62bab7edede12c4898a3eee"`);
		await queryRunner.query(`ALTER TABLE "profile-attributes" DROP CONSTRAINT "FK_5c7e459b2d2e490326641bc2ec8"`);

		await queryRunner.query(`DROP TABLE "system-user-roles"`);
		await queryRunner.query(`DROP TABLE "role-permissions"`);
		await queryRunner.query(`DROP INDEX "IDX_6d0a6567e7447c5a05bcacacc2" ON "contact-information"`);
		await queryRunner.query(`DROP TABLE "contact-information"`);
		await queryRunner.query(`DROP INDEX "IDX_a724de3585869bca2d8ee03297" ON "address"`);
		await queryRunner.query(`DROP TABLE "address"`);
		await queryRunner.query(`DROP INDEX "IDX_ca7857276d2a30f4dcfa0e42cd" ON "settings"`);
		await queryRunner.query(`DROP INDEX "IDX_c20243a99b2cab4e721b1435e7" ON "settings"`);
		await queryRunner.query(`DROP TABLE "settings"`);
		await queryRunner.query(`DROP TABLE "templates"`);
		await queryRunner.query(`DROP TABLE "notifications"`);
		await queryRunner.query(`DROP TABLE "activity-logs"`);

		await queryRunner.query(`DROP TABLE "system-tools"`);
		await queryRunner.query(`DROP TABLE "system-countries"`);

		await queryRunner.query(`DROP INDEX "REL_26ef62bab7edede12c4898a3ee" ON "system-users"`);
		await queryRunner.query(`DROP TABLE "system-users"`);
		await queryRunner.query(`DROP TABLE "profiles"`);
		await queryRunner.query(`DROP TABLE "profile-attributes"`);
		await queryRunner.query(`DROP TABLE "roles"`);
		await queryRunner.query(`DROP INDEX "IDX_797abf10a90a3306603fbf46bc" ON "system-permissions"`);
		await queryRunner.query(`DROP TABLE "system-permissions"`);
	}
}
