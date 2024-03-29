import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Loan, LoanQuery, defaultQuery, LoanDetailDoc } from '@hza/shared/loans/models';

export const loadLoans = createAction('[loans] LOAD_LOANS');
export const clearLoans = createAction('[loans] CLEAR_LOANS');
export const clearQuery = createAction('[loans] CLEAR_QUERY');


export const performLoanAction = createAction(
  '[Loan Actions] Perform Loan Action'
);
export const queryLoans = createAction('[loans] Query LOANS', props<{ query: LoanQuery }>());
export const queryLoansSuccess = createAction('[loans] Query LOANS Success', props<{ query: LoanQuery }>());

export const queryLoansFail = createAction('[loans] Query LOANS Fail', props<{ error: string }>());
export const loadLoansSuccess = createAction('[loans] LOAD_LOANS_SUCCESS', props<{ loans: Loan[] }>());
export const loadLoansFail = createAction('[loans] LOAD_LOANS_FAIL', props<{ error: string }>());
export const loadLoan = createAction('[loans] Load LOAN', props<{ loan: Loan }>());

export const loadLoanDetail = createAction('[loans] LOAD LOAN DETAIL', props<{ loanNumber: string }>());
export const loadLoanDetailDocSuccess = createAction('[loans] Load LOAN DETAIL DOC SUCCESS', props<{ loanDetail: LoanDetailDoc }>());
export const loadLoanDetailDocFail = createAction('[loans] Load LOAN DETAIL DOC SUCCESS', props<{ error: string }>());
export const selectLoan = createAction('[loans] Select LOAN', props<{ loanNumber: string }>());

