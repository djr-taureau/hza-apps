import { Loan, mockLoan1, mockLoan2 } from '@hza/shared/loans/models';
import * as fromLoans from './loans.reducer';
import * as LoansActions from './loans.actions';
import * as loansQuery from '.';

describe('LoansReducer', () => {
	const loan1 = mockLoan1;
	const loan2 = mockLoan2;

	const loansInitialState: fromLoans.LoansState = {
		ids: [ loan1.loanNumber, loan2.loanNumber ],
		entities: {
			[loan1.loanNumber]: loan1,
			[loan2.loanNumber]: loan2
		},
		selectedLoanId: null,
		isLoading: false,
		loaded: true,
		loanQuery: null,
		loanDetail: null
	};

	// describe('undefined action', () => {
	// 	it('should return the default state', () => {
	// 		const result = fromLoans.loansReducer(undefined, {} as any);

	// 		expect(result).toMatchSnapshot();
	// 	});
	// });

	describe('LOANS_LOAD_SUCCESS', () => {
		type LoansActions = typeof LoansActions.loadLoansSuccess;
		function noExistingLoans(action: LoansActions, loansInitialState: any, loans: Loan[]) {
			const createAction = action({ loans });

			const result = fromLoans.loansReducer(loansInitialState, createAction);

			expect(result).toMatchSnapshot();
		}

		it('should add all loans in the payload when none exist', () => {
			noExistingLoans(LoansActions.loadLoansSuccess, loansInitialState, [ loan1, loan2 ]);
		});
	});

	describe('LOAD_LOANS', () => {
		const expectedResult = {
			ids: [],
			entities: {},
			selectedLoanId: null,
			isLoading: true,
			loaded: false,
			loanQuery: null,
			loanDetail: null
		};
	});

	describe('SELECT', () => {
		it('should set the selected loan number on the state', () => {
			const action = LoansActions.selectLoan({ loanNumber: loan1.loanNumber });

			const result = fromLoans.loansReducer(loansInitialState, action);

			expect(result).toMatchSnapshot();
		});
	});

	describe('Selectors', () => {
		describe('selectId', () => {
			it('should return the selected id', () => {
				const result = fromLoans.getSelectedLoanId({
					...loansInitialState,
					selectedLoanId: loan1.loanNumber
				});

				expect(result).toMatchSnapshot();
			});
		});
	});
});
