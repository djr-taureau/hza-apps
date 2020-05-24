import { loansQuery } from './index';
import { mockLoan1, Loan, mockLoan2, mockLoanQuery, mockLoanDetailDoc } from '@hza/shared/loans/models';

describe('Loans Selectors', () => {
	let storeState;
	const loan1 = mockLoan1 as Loan;
	const loan2 = mockLoan2 as Loan;

	beforeEach(() => {
		storeState = {
			loans: {
				ids: [ loan1.loanNumber, loan2.loanNumber ],
				entities: {
					[loan1.loanNumber]: loan1,
					[loan2.loanNumber]: loan2
				},
				selectedLoanId: '0000015864',
				isLoading: false,
				loaded: true,
				loanQuery: mockLoanQuery,
				loanDetail: mockLoanDetailDoc
			}
		};
	});

	describe('Loan Selectors', () => {
		it('SelectAllLoans', () => {
			const results = loansQuery.selectAllLoans(storeState);
			const entities = [ loan1, loan2 ];

			expect(results.length).toBe(2);
			expect(entities).toBe(entities);
		});

		it('getSelectedLoanId() should return the selected Entity', () => {
			const result = loansQuery.selectCurrentLoanId(storeState);
			const selectedId = result;
			expect(selectedId).toEqual('0000015864');
		});

		it("getLoaded() should return the current 'loaded' status", () => {
			const result = loansQuery.loadedLoans(storeState);

			expect(result).toBe(true);
		});

		it('getSelectedLoanDetail() should return the current Loan Detail', () => {
			const result = loansQuery.selectLoanDetail(storeState);
			const selectedLoanDetail = result;
			expect(result).toBe(mockLoanDetailDoc);
		});
		it('getSelectedLoanQuery() should return the current Loan Query', () => {
			const result = loansQuery.selectLoanQuery(storeState);
			const selectedLoanQuery = result;
			expect(result).toBe(mockLoanQuery);
		});
	});
});
