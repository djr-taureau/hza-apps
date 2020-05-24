import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { LoanEffects } from './+state/loans.effects';
import { LoansFacade } from './+state/loans.facade';
import * as fromLoans from './+state/loans.reducer';

@NgModule({
	imports: [
		StoreModule.forFeature(fromLoans.loansFeatureKey, fromLoans.loansReducer, {initialState: fromLoans.loansInitialState}),
		EffectsModule.forFeature([LoanEffects])
	],
	providers: [LoanEffects, LoansFacade]
})
export class SharedLoansDataAccessStateModule {}
