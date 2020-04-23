import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Loan, LoanQuery } from '@hza/shared/loans/models';

export const loadLoans = createAction('[loans] LOAD_LOANS');

export const queryLoans = createAction('[loans] Query LOANS', props<{ query: LoanQuery }>());
export const loadLoan = createAction('[loans] Load LOAN', props<{ loan: Loan }>());
export const selectLoan = createAction('[loans] Select LOAN', props<{ loanNumber: number }>());
export const loadLoansSuccess = createAction('[loans] LOAD_LOANS_SUCCESS', props<{ loans: Loan[] }>());
export const loadLoansFail = createAction('[loans] LOAD_LOANS_FAIL', props<{ error: Error }>());
