import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { catchError, map, toArray, tap, pluck } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiService, ApiEndpointService, ConfigService } from '@hza/core';
import { Document } from '../models/document.model';
import { LoansFacade } from '@hza/shared/loans/data-access/state';
import * as _ from 'lodash';
import { CodeTable } from '../models/code-table.model';
import { pluck as rPluck } from 'ramda';
@Injectable()
export class DocumentsService {
	docsUrl: string;
	docTypesUrl: string;

	constructor(
		private apiService: ApiService,
		private apiEndpoint: ApiEndpointService,
		private configService: ConfigService,
		private loansFacade: LoansFacade
	) {
		const baseUrl = configService.getDocsApiEndpoint();
		this.docsUrl = `${baseUrl}/documents`;
		this.docTypesUrl = `${baseUrl}/types`;
		this.loansFacade.selectedLoan$.subscribe((loan) => {
			this.docsUrl = this.docsUrl + `?LoanNumber=${loan.loanNumber}`;
		});
	}

	getDocuments(): Observable<Document[]> {
		// const url = this.apiEndpoint.getEndpoint(ApiEndpointService.ENDPOINT.DOCUMENTS);
		return this.apiService.get<Document[]>(this.docsUrl);
	}

	getDocumentTypes(): Observable<CodeTable[]> {
		return this.apiService.get<CodeTable[]>(this.docTypesUrl);
	}
}
