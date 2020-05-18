import { ApiService, ApiEndpointService, ConfigService } from '@hza/core';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Loan, LoanQuery, LoanDetailDoc } from '@hza/shared/loans/models';

// MOCK_LOANS: `/loans?title_like=server&source=1`,

@Injectable()
export class LoansService {
	loansUrl: string;
	loanDetailUrl: string;
	constructor(
		private apiService: ApiService,
		private apiEndpoint: ApiEndpointService,
		private configService: ConfigService
	) {
		const baseUrl = configService.getCommonApiEndpoint();
		this.loansUrl = `${baseUrl}/loans`;
		this.loanDetailUrl = `${baseUrl}/loanDetail`;
	}

	getLoans(): Observable<Loan[]> {
		return this.apiService.get<Loan[]>(this.loansUrl);
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
		console.log('EARL', loanDetailUrl);
		return this.apiService.get<LoanDetailDoc>(loanDetailUrl);
	}
}
