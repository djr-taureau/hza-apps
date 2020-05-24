import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { Observable, of, throwError } from 'rxjs';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot, cold } from '@nrwl/angular/testing';

import { LoanEffects } from './loans.effects';
import * as LoanActions from './loans.actions';

import { loansQuery } from './index';
import { LoansService } from '@hza/shared/loans/data-access/data';
import { mockLoanQuery, mockLoan1, Loan, mockLoan2 } from '@hza/shared/loans/models';

describe('LoanEffects', () => {
	let actions: Observable<any>;
	let effects: LoanEffects;
	let loanService: LoansService;
	
	const loan1 = mockLoan1 as Loan;
	const loan2 = mockLoan2 as Loan;
	const loans = [loan1, loan2]

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				HttpClientTestingModule,
				NxModule.forRoot(),
				StoreModule.forRoot({}),
				EffectsModule.forRoot([])
			],
			providers: [
				LoanEffects,
				{ provide: LoansService, useValue: { queryLoans: () => of(loans) } },
				DataPersistence,
				provideMockActions(() => actions),
				provideMockStore({
					selectors: [
						{
							selector: loansQuery.selectLoanQuery,
							value: mockLoanQuery
						}
					]
				})
			]
		});

		effects = TestBed.inject(LoanEffects);
		loanService = TestBed.inject(LoansService);
	});

	describe('queryLoans$', () => {
		it('should return loans', () => {
			actions = hot('-a-|', { a: LoanActions.queryLoans });
			const expected = cold('-a-|', {
				a: LoanActions.loadLoansSuccess({ loans })
			});
			expect(effects.queryLoans$).toBeObservable(expected);
		});
	});
});
