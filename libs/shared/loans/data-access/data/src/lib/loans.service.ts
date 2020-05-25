import { ApiService, ApiEndpointService, ConfigService } from '@hza/core';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Loan, LoanQuery, LoanDetailDoc } from '@hza/shared/loans/models';

// MOCK_LOANS: `/loans?title_like=server&source=1`,

@Injectable()
export class LoansService {
	loansUrl: string;
	loanDetailUrl: string;
	constructor(
		private apiService: ApiService,
		private httpClient: HttpClient,
		// private apiEndpoint: ApiEndpointService,
		private configService: ConfigService
	) {
		const baseUrl = configService.getCommonApiEndpoint();
		// const endpoint = apiEndpoint.getEndpoint(baseUrl, ApiEndpointService.ENDPOINT.LOANS)
		this.loansUrl = `${baseUrl}/loans`;
		this.loanDetailUrl = `${baseUrl}/loanDetail`;
	}

	getLoans(): Observable<Loan[]> {
		return this.httpClient.get<Loan[]>(this.loansUrl);
	}

	public queryLoans(request: LoanQuery): Observable<Loan[]> {
		const searchTypeCity = `propertyCity_like`;
		const sourceID = 1;
		const searchValue = request.loanSearch;
		const queryUrl = `${this.loansUrl}?sourceID=${sourceID}&${searchTypeCity}=${searchValue}`
		return this.apiService.get<Loan[]>(queryUrl);
	}
	
	public getLoanDetails(loanNumber: string): Observable<LoanDetailDoc> {
		const loanDetailUrl = `${this.loanDetailUrl}?LoanNumber=${loanNumber}`
		return this.apiService.get<LoanDetailDoc>(loanDetailUrl);
	}
}
