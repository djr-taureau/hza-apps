import { generateMockLoan, Loan } from '../../../../../feature-loan-search/src/lib/models/loan.model';
import * as fromLoans from './loans.reducer';
import * as LoansActions from './loans.actions';
import * as loansQuery from '.';

describe('LoansReducer', () => {
  const loan1 = generateMockLoan();
  const loan2 = { ...loan1, id: 12 };
  const loan3 = { ...loan1, id: 14 };
  const loansInitialState: fromLoans.LoansState = {
    ids: [loan1.id, loan2.id],
    entities: {
      [loan1.id]: loan1,
      [loan2.id]: loan2,
    },
    selectedLoanId: null,
    isLoading: false,
    loaded: false,
  };

  describe('undefined action', () => {
    it('should return the default state', () => {
      const result = fromLoans.loansReducer(undefined, {} as any);

      expect(result).toMatchSnapshot();
    });
  });

  describe('LOANS_LOAD_SUCCESS', () => {
    type LoansActions = typeof LoansActions.loadLoansSuccess;
    function noExistingLoans(action: LoansActions, loansInitialState: any, loans: Loan[]) {
      const createAction = action({ loans });

      const result = fromLoans.loansReducer(loansInitialState, createAction);

      expect(result).toMatchSnapshot();
    }

    it('should add all loans in the payload when none exist', () => {
      noExistingLoans(LoansActions.loadLoansSuccess, loansInitialState, [loan1, loan2]);
    });
  });

  describe('LOAD', () => {
    const expectedResult = {
      ids: [loan1.id],
      entities: {
        [loan1.id]: loan1,
      },
      selectedLoanId: null,
    };
  });

  describe('SELECT', () => {
    it('should set the selected loan number on the state', () => {
      const action = LoansActions.selectLoan({ id: loan1.id });

      const result = fromLoans.loansReducer(loansInitialState, action);

      expect(result).toMatchSnapshot();
    });
  });

  describe('Selectors', () => {
    describe('selectId', () => {
      it('should return the selected id', () => {
        const result = fromLoans.getSelectedLoanId({
          ...loansInitialState,
          selectedLoanId: loan1.id,
        });

        expect(result).toMatchSnapshot();
      });
    });
  });
});
