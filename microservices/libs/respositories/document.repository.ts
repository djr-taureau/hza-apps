import { AbstractRepository, DeepPartial, EntityRepository } from 'typeorm';
import { Document } from '../domain-entities';
import { getPagingOptions, QueryOptions } from './common';

@EntityRepository(Document)
export class DocumentRepository extends AbstractRepository<Document> {
	async get(guid: string) {
		return await this.repository.findOne(guid);
	}

	async query(options?: QueryOptions) {
		const pagingOptions = getPagingOptions(options);
		return await this.repository.findAndCount(pagingOptions);
	}

	async insert(document: DeepPartial<Document>) {
		return await this.repository.save(document);
	}

	async update(guid: string, document: DeepPartial<Document>) {
		return await this.repository.update(guid, document);
	}
}