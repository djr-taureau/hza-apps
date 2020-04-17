import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import * as LoanActions from './loans.actions';
import { Loan } from '../../../../../feature-loan-search/src/lib/models/loan.model';

export const loansFeatureKey = 'loans';

export interface LoansState extends EntityState<Loan> {
  selectedLoanId: number | null;
  isLoading: boolean;
  loaded: boolean;
}

export const adapter: EntityAdapter<Loan> = createEntityAdapter<Loan>({
  selectId: (loan: Loan) => loan.id,
  sortComparer: false,
});

export const loansInitialState: LoansState = adapter.getInitialState({
  ids: [],
  selectedLoanId: null,
  isLoading: false,
  loaded: false,
});

export const reducer = createReducer(
  loansInitialState,
  //  ** when this action is dispatched isLoading set to true
  on(LoanActions.loadLoans, state => ({
    ...state,
    isLoading: true,
  })),
  on(LoanActions.loadLoansSuccess, (state, { loans }) => adapter.addMany(loans, state)),
  // ** When the ClientApprovalRequests have loaded successfully, isLoaded toggled off again
  // ** loaded set to TRUE
  on(LoanActions.loadLoansSuccess, state => ({
    ...state,
    isLoading: false,
    loaded: true,
  })),
  // ** Select an individual ClientApprovalRequest for docment detail
  on(LoanActions.loadLoan, (state, { loan }) => adapter.addOne(loan, state)),
  on(LoanActions.selectLoan, (state, { id }) => ({
    ...state,
    selectedLoanId: id,
  })),
);

export function loansReducer(state: LoansState | undefined, action: Action): LoansState {
  return reducer(state, action);
}

// ** selectors are slices of your state that can be rolled up with other reducers
// **

export const getSelectedLoanId = (state: LoansState) => state.selectedLoanId;
export const isLoading = (state: LoansState) => state.isLoading;
export const loaded = (state: LoansState) => state.loaded;

// get the selectors
const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

export const selectLoanIds = selectIds;

export const selectLoanEntities = selectEntities;

export const selectAllLoans = selectAll;

export const selectLoanTotal = selectTotal;
