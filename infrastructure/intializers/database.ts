import 'reflect-metadata';
import { Connection, createConnection, getConnectionOptions } from 'typeorm';
import { Document } from '../../microservices/libs/domain-entities';

export const initializeDatabase = async (optionOverrides: Record<string, any> = {}): Promise<Connection> => {
	const connectionOptions = await getConnectionOptions();
	const options: any = {
		...connectionOptions,
		type: 'mssql',
		host: 'localhost',
		username: 'sa',
		password: 'Password123!',
		database: 'hza',
		synchronize: false,
		logging: false,
		url: 'mssql://sa:Password123!@localhost:1433/hza',
		entities: [ Document ],
		migrations: [ __dirname + '/migrations/*.ts' ],
		...optionOverrides
	};

	const connection = await createConnection(options);

	return connection;
};

export default initializeDatabase;
