import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { loansQuery, State } from '../+state';
import { catchError, filter, switchMap, take, tap, first } from 'rxjs/operators';
import { LoansFacade } from '../+state/loans.facade';

@Injectable()
export class LoansGuard implements CanActivate {
	constructor(private loansFacade: LoansFacade, private store: Store<State>) {}

	canActivate(): Observable<boolean> {
		this.prefetch();
		// ** Check the store to make sure the loaded value is set to true
		return this.store.pipe(
			select(loansQuery.loadedLoans),
			tap((loaded) => loaded),
			filter((loaded) => loaded),
			first()
		);
	}

	private prefetch() {
		// ** facades interact with the store. These two methods dispatch the actions for loading
		this.loansFacade.loadLoans();
	}
}
