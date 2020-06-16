import { Injectable } from '@angular/core';
import { LoansFacade } from '@hza/shared/loans/data-access/state';
import { ApiEndpointService, ApiService, ConfigService } from '@hza/shared/services';
import { Observable } from 'rxjs';
import { CodeTable } from '../models/code-table.model';
import { Document } from '../models/document.model';
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
	
	getEndpoint() {
		return this.configService.getDocsApiEndpoint();
	}
}
