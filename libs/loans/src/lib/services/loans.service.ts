import { ApiService, ApiEndpointService } from '@hza/core';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Loan } from '../models/loan.model';

@Injectable()
export class LoansService {
	constructor(private apiService: ApiService, private apiEndpoint: ApiEndpointService) {}

	getLoans(): Observable<Loan[]> {
		const url = this.apiEndpoint.getEndpoint(ApiEndpointService.ENDPOINT.LOANS);
		return this.apiService.get<Loan[]>('/loans');
	}
}
