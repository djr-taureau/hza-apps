import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { catchError, map } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiService, ApiEndpointService, ConfigService } from '@hza/core';
import { Document } from '../models/document.model';

@Injectable()
export class DocumentsService {
	docsUrl: string;
	constructor(private apiService: ApiService, private apiEndpoint: ApiEndpointService, private configService: ConfigService) {
		const baseUrl = configService.getDocsApiUri();
		this.docsUrl = `${baseUrl}/documents`;
	}

	getDocuments(): Observable<Document[]> {
		// const url = this.apiEndpoint.getEndpoint(ApiEndpointService.ENDPOINT.DOCUMENTS);
		return this.apiService.get<Document[]>(this.docsUrl);
	}
}
