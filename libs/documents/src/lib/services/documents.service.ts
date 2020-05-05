import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { catchError, map } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiService, ApiEndpointService, ConfigService } from '@hza/core';
import { Document } from '../models/document.model';
import { LoansFacade } from '@hza/shared/loans/data-access/state';

@Injectable()
export class DocumentsService {
	docsUrl: string;
	constructor(
		private apiService: ApiService,
		private apiEndpoint: ApiEndpointService,
		private configService: ConfigService,
		private loansFacade: LoansFacade
	) {
		const baseUrl = configService.getDocsApiEndpoint();
		this.docsUrl = `${baseUrl}/documents`
		this.loansFacade.selectedLoan$.subscribe(loan => {
			this.docsUrl = this.docsUrl+`?LoanNumber=${loan.loanNumber}`
		})
	}

	getDocuments(): Observable<Document[]> {
		// const url = this.apiEndpoint.getEndpoint(ApiEndpointService.ENDPOINT.DOCUMENTS);
		return this.apiService.get<Document[]>(this.docsUrl);
	}
}
