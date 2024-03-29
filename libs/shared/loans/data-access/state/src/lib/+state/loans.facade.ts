import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { State, loansQuery } from '.';
import * as LoanActions from './loans.actions';
import { Observable } from 'rxjs';

import { LoanQuery, defaultQuery } from '@hza/shared/loans/models';
// ** The use of facades is good with managing state
// ** because it avoids having to inject your store into every container that needs to interact
// **
@Injectable()
export class LoansFacade {
	loans$ = this.store.select(loansQuery.selectAllLoans);
	loansLoaded$ = this.store.select(loansQuery.loadedLoans);
	loanQuery$ = this.store.select(loansQuery.selectLoanQuery);
	loanTotal$ = this.store.select(loansQuery.selectLoanTotal);
	selectedLoan$ = this.store.select(loansQuery.selectCurrentLoan);
	loanDetail$ = this.store.select(loansQuery.selectLoanDetail);

	// ** The Store gets injected one time for each facade

	constructor(private store: Store<State>) {}

	loadLoans() {
		this.store.dispatch(LoanActions.loadLoans());
	}

	selectLoan(loanNumber: string) {
		this.store.dispatch(LoanActions.selectLoan({ loanNumber }));
	}
	initQuery() {
		this.store.dispatch(LoanActions.queryLoans({ query: defaultQuery }));
	}
	queryLoans(query: LoanQuery) {
		this.clearLoans();
		this.store.dispatch(LoanActions.queryLoans({ query }));
	}

	getLoanDetail(loanNumber: string) {
		this.store.dispatch(LoanActions.loadLoanDetail({ loanNumber }));
	}

	clearLoans() {
		this.store.dispatch(LoanActions.clearLoans());
		this.store.dispatch(LoanActions.clearQuery());
	}
}
