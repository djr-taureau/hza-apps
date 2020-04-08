import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as LoanActions from './loans.actions';
import { LoansService } from '../services/loans.service';
import { LoansFacade } from './loans.facade';

@Injectable()
export class LoanEffects {
  // ** the use of switchMap is important here because as soon as it completed task it turns the
  // ** the observable off and waits for the next request or action to be dispatched
  loadLoans$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoanActions.loadLoans),
      switchMap(() =>
        this.loanService.getLoans().pipe(
          map(loans => LoanActions.loadLoansSuccess({ loans })),
          catchError(error => of(LoanActions.loadLoansFail(error))),
        ),
      ),
    ),
  );

  constructor(private actions$: Actions, private loanService: LoansService, private facade: LoansFacade) {}
}
