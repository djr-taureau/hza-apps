import 'reflect-metadata';
import { ConnectionOptions, createConnection } from 'typeorm';
import { ActivityLog, Address, Document, Note, Notification, Settings, SystemPermission, SystemRole, SystemTool, SystemUser, Templates } from '../domain-entities/entities';

const connectionConfig: ConnectionOptions = {
	type: 'mssql',
	host: 'localhost',
	username: 'SA',
	password: 'Password123!',
	database: 'hza',
	synchronize: true,
	logging: true,
	entities: [
		Document,
		Notification,
		Settings,
		Address,
		ActivityLog,
		SystemTool,
		SystemRole,
		SystemPermission,
		SystemRole,
		SystemUser,
		Note,
		Templates,
		Settings,
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
