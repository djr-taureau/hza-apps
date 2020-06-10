import Chance from 'chance';

import { DocumentFactory } from '../factories';

const chance = new Chance();

export const seed = async (): Promise<any> => {
	const documents = [];

	const doc1 = {
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
		ScanStatus: chance.integer()
	};

	const doc2 = {
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
		ScanStatus: chance.integer()
	};

	const doc3 = {
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
		ScanStatus: chance.integer()
	};

	const doc4 = {
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
		ScanStatus: chance.integer()
	};

	documents.push(doc1, doc2, doc3, doc4);

	try {
		console.log('Seeding dummy doc data...');
		const documentsPromises = documents.map((document) => DocumentFactory.create(document));

		console.log(documentsPromises);

		const documentResults = await Promise.all(documentsPromises);
		console.log('Done seeding docs.');

		return documentResults;
	} catch (e) {
		console.error('ERROR - Documents: ', e);
	}
};
