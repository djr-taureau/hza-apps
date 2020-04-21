// import { TestBed } from '@angular/core/testing';
// import { Actions } from '@ngrx/effects';
// import { createAction, props } from '@ngrx/store';
// import { Update } from '@ngrx/entity';
// import { provideMockActions } from '@ngrx/effects/testing';
// import { cold, getTestScheduler, hot } from 'jasmine-marbles';
// import { Observable } from 'rxjs';
// import * as LoanActions from './loans.actions';
// import { LoanEffects } from './loans.effects';
// import { Loan } from '@hza/shared/loans/models';
// import { LoansService } from '@hza/shared/loans/data-access/data';

// const loan1 = {
// 	id: 12,
// 	LoanNumber: '0000123456',
// 	SourceID: 1,
// 	Name: 'Mary Smith',
// 	Phone: '2142434444',
// 	City: 'Dallas'
// } as Loan;
// const loan2 = {
// 	id: 14,
// 	LoanNumber: '0000454111',
// 	SourceID: 1,
// 	Name: 'Mary Jones',
// 	Phone: '2122434444',
// 	City: 'New York'
// } as Loan;

// describe('LoanEffects', () => {
// 	let effects: LoanEffects;
// 	let loansService: any;
// 	let actions$: Observable<any>;

// 	beforeEach(() => {
// 		TestBed.configureTestingModule({
// 			providers: [
// 				LoanEffects,
// 				{
// 					provide: LoansService,
// 					useValue: { loadLoans: jest.fn() }
// 				},
// 				provideMockActions(() => actions$)
// 			]
// 		});

// 		effects = TestBed.inject(LoanEffects);
// 		loansService = TestBed.inject(LoansService);
// 		actions$ = TestBed.inject(Actions);
// 	});

// 	describe('loadLoans$', () => {
// 		it('should return a loans.LoadSuccess, with the loans, on success', () => {
// 			const action = LoanActions.loadLoans();
// 			const completion = LoanActions.loadLoansSuccess({
// 				loans: [loan1, loan2]
// 			});

// 			actions$ = hot('-a', { a: action });
// 			const response = cold('-a|', { a: [loan1, loan2] });
// 			const expected = cold('--c', { c: completion });
// 			loansService.getLoans = jest.fn(() => response);

// 			expect(effects.loadLoans$).toBeObservable(expected);
// 		});
// 	});
// });
