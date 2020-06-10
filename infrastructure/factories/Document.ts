import Chance from 'chance';
import { getRepository } from 'typeorm';
import { Document } from '../../microservices/libs/domain-entities';
const chance = new Chance();

export const DocumentFactory = {
	build: (attrs: Partial<Document> = {}) => {
		const docAttrs: Partial<Document> = {
			ID: chance.number(),
			DocumentID: chance.guid(),
			relatedEntityGuid: chance.guid(),
			entityContext: 1,
			SourceID: 1,
			DocFileName: chance.name(),
			DocType: chance.string(),
			CreatedDate: chance.date(),
			CreatedBy: chance.string(),
			Extension: chance.string(),
			MeridianImport: chance.boolean(),
			ScanStatus: chance.integer(),
			...attrs
		};

		return getRepository(Document).create(docAttrs);
	},

	create: async (attrs: Partial<Document> = {}) => {
		const document = DocumentFactory.build(attrs);
		const createdDocument = await getRepository(Document).save(document);

		return createdDocument;
	},

	deleteAll: async () => await getRepository(Document).query('TRUNCATE "Document" CASCADE')
};
