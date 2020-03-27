import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Loan } from '../models/loan.model';

export const loadLoans = createAction('[loans] LOAD_LOANS');
export const loadLoan = createAction('[loans] Load LOAN', props<{ loan: Loan }>());
export const selectLoan = createAction('[loans] Select LOAN', props<{ id: number }>());
export const loadLoansSuccess = createAction('[loans] LOAD_LOANS_SUCCESS', props<{ loans: Loan[] }>());
export const loadLoansFail = createAction('[loans] LOAD_LOANS_FAIL', props<{ error: Error }>());
