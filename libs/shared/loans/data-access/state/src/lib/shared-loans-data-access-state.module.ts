import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedLoansDataAccessDataModule } from '@hza/shared/loans/data-access/data';
import { LoanEffects } from './+state/loans.effects';
import { LoansFacade } from './+state/loans.facade'
import * as fromLoans from './+state/loans.reducer';



@NgModule({
  imports: [SharedLoansDataAccessDataModule, StoreModule.forFeature(fromLoans.loansFeatureKey, fromLoans.loansReducer), EffectsModule.forFeature([LoanEffects])],
  providers: [LoanEffects, LoansFacade],
})

export class SharedLoansDataAccessStateModule {}
