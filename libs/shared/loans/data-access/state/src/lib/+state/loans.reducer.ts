import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import * as LoanActions from './loans.actions';
import { Loan, LoanQuery, LoanDetailDoc } from '@hza/shared/loans/models';

export const loansFeatureKey = 'loans';

export interface LoansState extends EntityState<Loan> {
	selectedLoanId: string | null;
	isLoading: boolean;
	loaded: boolean;
	loanQuery: LoanQuery;
	loanDetail: LoanDetailDoc;
}

export interface LoansPartialState {
	readonly [loansFeatureKey]: LoansState;
}

export const adapter: EntityAdapter<Loan> = createEntityAdapter<Loan>({
	selectId: (loan: Loan) => loan.loanNumber,
	sortComparer: false
});

export const loansInitialState: LoansState = adapter.getInitialState({
	ids: [],
	selectedLoanId: null,
	isLoading: false,
	loaded: false,
	loanQuery: null,
	loanDetail: null
});

export const reducer = createReducer(
	loansInitialState,
	//  ** when this action is dispatched isLoading set to true
	on(LoanActions.loadLoans, (state) => ({
		...state,
		isLoading: true
	})),
	on(LoanActions.loadLoansSuccess, (state, { loans }) => adapter.addMany(loans, state)),
	on(LoanActions.loadLoansSuccess, (state) => ({
		...state,
		isLoading: false,
		loaded: true
	})),
	on(LoanActions.clearLoans, (state) => adapter.removeAll(state)),
	on(LoanActions.loadLoan, (state, { loan }) => adapter.addOne(loan, state)),
	on(LoanActions.selectLoan, (state, { loanNumber }) => ({
		...state,
		selectedLoanId: loanNumber
	})),
	on(LoanActions.queryLoansSuccess, (state, { query }) => ({
		...state,
		loanQuery: query
	})),
	on(LoanActions.loadLoanDetailDocSuccess, (state, { loanDetail }) => ({
		...state,
		loanDetail: loanDetail
	})),
	on(LoanActions.clearQuery, (state) => ({
		...state,
		loanQuery: null
	}))
);

export function loansReducer(state: LoansState | undefined, action: Action): LoansState {
	return reducer(state, action);
}

// ** selectors are slices of your state that can be rolled up with other reducers
// **

export const getSelectedLoanId = (state: LoansState) => state.selectedLoanId;
export const getLoanQuery = (state: LoansState) => state.loanQuery;
export const getLoanDetail = (state: LoansState) => state.loanDetail;
export const isLoading = (state: LoansState) => state.isLoading;
export const loaded = (state: LoansState) => state.loaded;

// get the selectors
const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

export const selectLoanIds = selectIds;

export const selectLoanEntities = selectEntities;

export const selectAllLoans = selectAll;

export const selectLoanTotal = selectTotal;
