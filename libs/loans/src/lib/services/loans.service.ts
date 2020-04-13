import { ApiService, ApiEndpointService, ConfigService } from '@hza/core';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Loan } from '../models/loan.model';

@Injectable()
export class LoansService {
	loansUrl: string;
	constructor(private apiService: ApiService, private apiEndpoint: ApiEndpointService, private configService: ConfigService) {
		const baseUrl = configService.getCommonApiEndpoint();
		this.loansUrl = `${baseUrl}/loans`;
	}

	getLoans(): Observable<Loan[]> {
		return this.apiService.get<Loan[]>(this.loansUrl);
	}
}
