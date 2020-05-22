import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { EffectsMetadata, getEffectsMetadata } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action, Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { cold, hot } from 'jasmine-marbles';
import { Observable, of, throwError } from 'rxjs';
import { LoansService } from '@hza/shared/loans/data-access/data';
import * as LoanActions from './loans.actions';
import { LoanEffects } from './loans.effects';
import * as fromLoans from '@hza/shared/loans/data-access/state';
import { LoansPartialState, loansInitialState } from './loans.reducer';

describe('Loan', () => {
	let actions: Observable<Action>;
	let effects: LoanEffects;
	let service: LoansService;
	let store: MockStore<LoansPartialState>;
	let metadata: EffectsMetadata<LoanEffects>;

	beforeEach(() => {
		const initialState = {
			[fromLoans.loansFeatureKey]: loansInitialState
		};

		TestBed.configureTestingModule({
			providers: [
				LoanEffects,
				LoansService,
				provideMockActions(() => actions),
				provideMockStore({ initialState })
			]
		});

		effects = TestBed.inject(LoanEffects);
		metadata = getEffectsMetadata(effects);
		service = TestBed.inject(LoansService);
		store = TestBed.inject(Store) as MockStore<LoansPartialState>;
	});
	// 2.
	describe('dispatching switchmap effect', () => {
		it('should get the items and emit when the service call is successful', () => {
			// set up the initial action that triggers the effect
			const action = LoanActions.loadLoans();

			// set up our dummy list of things to return
			// (we could create real things here if necessary)
			const loans = [];

			// spy on the service call and return our dummy list
			// this makes sure we're not testing the service, just the effect
			jest.spyOn(service, 'getLoans').mockReturnValue(of(loans));

			// set up our action list
			actions = hot('a', { a: action });

			// check that the output of the effect is what we expect it to be
			expect(effects.loadLoans$).toBeObservable(cold('a', { a: LoanActions.loadLoansSuccess({ loans }) }));
		});

		it('should emit an error action when the service call is unsuccessful', () => {
			// set up the initial action that triggers the effect
			const action = LoanActions.loadLoans();

			const error = 'There was an error';

			// spy on the service call and return an error this time
			spyOn(service, 'getLoans').and.returnValue(throwError(error));

			// set up our action list
			actions = hot('a', { a: action });

			// check that the output of the effect is what we expect it to be
			expect(effects.loadLoans$).toBeObservable(cold('a', { a: LoanActions.loadLoansFail({ error }) }));
		});
	});
});
