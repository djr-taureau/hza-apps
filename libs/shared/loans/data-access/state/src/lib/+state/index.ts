import { createSelector, createFeatureSelector, combineReducers, Action, ActionReducerMap } from '@ngrx/store';
import * as fromLoans from './loans.reducer';

// ** This is an example of rolling up your reducers for a feature
// ** With this you will then include this in your feature module
export const loansFeatureKey = 'loans';

export interface State {
	loans: fromLoans.LoansState;
}

export const reducers: ActionReducerMap<State> = {
  loans: fromLoans.loansReducer,
};
/**
 * The createFeatureSelector function selects a piece of state from the root of the state object.
 * This is used for selecting feature states that are loaded eagerly or lazily.
 */
export const selectLoansState = createFeatureSelector<fromLoans.LoansState>(loansFeatureKey);

// ** SELECTORS FOR Loans

export const selectLoanIds = createSelector(
  selectLoansState,
  fromLoans.selectLoanIds
);
export const selectLoanEntities = createSelector(
  selectLoansState,
  fromLoans.selectLoanEntities
);
export const selectAllLoans = createSelector(
  selectLoansState,
  fromLoans.selectAllLoans
);
export const selectLoanTotal = createSelector(
  selectLoansState,
  fromLoans.selectLoanTotal
);
export const selectCurrentLoanId = createSelector(
  selectLoansState,
  fromLoans.getSelectedLoanId
);
export const selectLoanQuery = createSelector(
  selectLoansState,
  fromLoans.getLoanQuery
);


export const isLoadingLoans = createSelector(
  selectLoansState,
  fromLoans.isLoading
);

export const loadedLoans = createSelector(
  selectLoansState,
  fromLoans.loaded
);

export const selectLoanDetail = createSelector(
  selectLoansState,
  fromLoans.getLoanDetail
);
 
export const selectCurrentLoan = createSelector(
  selectLoanEntities,
  selectCurrentLoanId,
  (loanEntities, loanId) => loanEntities[loanId]
);



export const loansQuery = {
	selectLoanIds,
	selectLoanEntities,
	selectAllLoans,
	selectLoanTotal,
	isLoadingLoans,
	loadedLoans,
	selectCurrentLoan,
  selectLoanQuery,
  selectLoanDetail
};
