import { TestBed } from '@angular/core/testing';
import { Actions } from '@ngrx/effects';
import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold, getTestScheduler, hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';
import * as LoanActions from './loans.actions';
import { LoanEffects } from './loans.effects';
import { Loan } from './../models/loan.model';
import { LoansFacade } from './loans.facade';

const loan1 = { id: 12 } as Loan;
const loan2 = { id: 14 } as Loan;

describe('LoanEffects', () => {
  let effects: LoanEffects;
  let loansFacade: any;
  let actions$: Observable<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoanEffects,
        {
          provide: LoansFacade,
          useValue: { loadLoans: jest.fn() },
        },
        provideMockActions(() => actions$),
      ],
    });

    effects = TestBed.inject(LoanEffects);
    loansFacade = TestBed.inject(LoansFacade);
    actions$ = TestBed.inject(Actions);
  });

  describe('loadLoans$', () => {
    it('should return a loans.LoadSuccess, with the loans, on success', () => {
      const action = LoanActions.loadLoans();
      const completion = LoanActions.loadLoansSuccess({
        loans: [loan1, loan2],
      });

      actions$ = hot('-a', { a: action });
      const response = cold('-a|', { a: [loan1, loan2] });
      const expected = cold('--c', { c: completion });
      loansFacade.loadLoans = jest.fn(() => response);

      expect(effects.loadLoans$).toBeObservable(expected);
    });
  });
});
