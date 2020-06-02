import { getCustomRepository } from 'typeorm';
import { DocumentRepository } from '../respositories';

export class DocumentService {
	private repo = getCustomRepository(DocumentRepository);


    async getDocuments(params) {
        return await this.repo.query(params);
    }

    async getDocument(params) {
        return await this.repo.get(params);
    }

    async updateDocument(params) {
        return await this.repo.update(params.guid, params.document)
    }

    async createDocument(item) {
        return await this.repo.insert(item);
    }

}