import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { State, loansQuery } from '../+state';
import * as LoanActions from './loans.actions';
import { Observable } from 'rxjs';

// ** The use of facades is good with managing state
// ** because it avoids having to inject your store into every container that needs to interact
// **
@Injectable()
export class LoansFacade {
  loans$ = this.store.select(loansQuery.selectAllLoans);
  loansLoaded$ = this.store.select(loansQuery.loadedLoans);

  loanTotal$ = this.store.select(loansQuery.selectLoanTotal);
  selectedLoan$ = this.store.select(loansQuery.selectCurrentLoan);

  // ** The Store gets injected one time for each facade

  constructor(private store: Store<State>) {}

  loadLoans() {
    this.store.dispatch(LoanActions.loadLoans());
  }

  selectLoan(id: number) {
    this.store.dispatch(LoanActions.selectLoan({ id }));
  }
}
