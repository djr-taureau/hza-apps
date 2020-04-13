import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { catchError, map } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiService, ApiEndpointService } from '@hza/core';
import { Document } from '../models/document.model';

@Injectable()
export class DocumentsService {
	constructor(private apiService: ApiService, private apiEndpoint: ApiEndpointService) {}

	getDocuments(): Observable<Document[]> {
		// const url = this.apiEndpoint.getEndpoint(ApiEndpointService.ENDPOINT.DOCUMENTS);
		return this.apiService.get<Document[]>('/documents');
	}
}
