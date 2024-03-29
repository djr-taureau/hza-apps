import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { Action } from '@ngrx/store/src/models';
import { NxModule } from '@nrwl/angular';
import { StoreModule } from '@ngrx/store';
import { hot } from '@nrwl/angular/testing';
import { DataPersistence, navigation, optimisticUpdate } from '@nrwl/angular';
import { LoansPartialState } from './loans.reducer';
import { TestBed, async } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import * as LoanActions from './loans.actions';
import { LoansService } from '@hza/shared/loans/data-access/data';



@Injectable()
export class LoanEffects {
	// ** the use of switchMap is important here because as soon as it completed task it turns the
	// ** the observable off and waits for the next request or action to be dispatched
	loadLoans$ = createEffect(() =>
		this.actions$.pipe(
			ofType(LoanActions.loadLoans),
			switchMap(() =>
				this.loanService
					.getLoans()
					.pipe(
						map((loans) => LoanActions.loadLoansSuccess({ loans })),
						catchError((error) => of(LoanActions.loadLoansFail(error)))
					)
			)
		)
	);
	query$ = createEffect(() =>
		this.actions$.pipe(
			ofType(LoanActions.queryLoans),
			map((action) => action.query),
			map((query) => LoanActions.queryLoansSuccess({ query }))
		)
	);
	

	queryLoans$ = createEffect(() =>
		this.actions$.pipe(
			ofType(LoanActions.queryLoans),
			switchMap(({ query }) =>
				this.loanService
					.queryLoans(query)
					.pipe(
						map((loans) => LoanActions.loadLoansSuccess({ loans })),
						catchError((error) => of(LoanActions.loadLoansFail(error)))
					)
			)
		)
	);
		loadLoanDetail$ = createEffect(() =>
		this.actions$.pipe(
			ofType(LoanActions.loadLoanDetail),
			switchMap(({ loanNumber }) =>
				this.loanService
					.getLoanDetails(loanNumber)
					.pipe(
						map((loanDetail) => LoanActions.loadLoanDetailDocSuccess({ loanDetail }))
					)
			)
		)
	);

	constructor(private actions$: Actions, private loanService: LoansService) {}
}
