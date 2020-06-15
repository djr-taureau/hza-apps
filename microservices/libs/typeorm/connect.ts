import 'reflect-metadata';
import { ConnectionOptions, createConnection } from 'typeorm';
import { ActivityLog, Address, Document, Note, Notification, Settings, SystemPermission, SystemRole, SystemTool, SystemUser} from '../domain-entities/entities';

const connectionConfig: ConnectionOptions = {
	type: 'mssql',
	host: 'hzasqlserver-756364790.database.windows.net',
	username: 'azureuser',
	password: 'Azure123!',
	database: 'hza',
	synchronize: true,
	logging: true,
	entities: [
		Document
	],
	options: {
		encrypt: true
	},
	cli: {
		entitiesDir: 'libs/microservices/libs/domain-entities/entities',
		migrationsDir: 'infrastructure/migrations'
	}
};

createConnection(connectionConfig);
