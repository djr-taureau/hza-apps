import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { filter, first, take, tap } from 'rxjs/operators';
import { LoansFacade, loansQuery } from '@hza/shared/loans/data-access/state';
import * as fromLoans from '@hza/shared/loans/data-access/state';

@Injectable()
export class LoanGuard implements CanActivate {
	constructor(
    private loansFacade: LoansFacade,
    private store: Store<fromLoans.State>
  ) {}

	canActivate(): Observable<boolean> {
		// ** Check the store to make sure the loaded value is set to true
		// return this.store.pipe(
		// 	select(loansQuery.selectCurrentLoan),
		// 	tap((loan) => loan),
		// 	filter((loan) => !!loan),
		// 	first()
		// );
        return of(true);
	}

	private getLoan() {
		// ** Demonstrating two ways to check. We need docs and loan info
		//  ** Check for Docs here via facade
		return this.loansFacade.selectedLoan$.pipe(tap((data) => data), filter((data) => !!data), take(1));
	}


}
