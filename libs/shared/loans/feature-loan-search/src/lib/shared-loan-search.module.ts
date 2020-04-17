import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// ** MODULES FOR THIS FEATURE LIB
import { SharedLoansDataAccessDataModule, SharedLoansStateModule, SharedLoansUiModule } from './+modules';
import { SharedLoansDataAccessStateModule } from '../../../data-access';

import { LoansContainer } from './containers/loans.container';
import { LoanSearchComponent } from './components/loan-search/loan-search.component';
import { LoansListComponent } from './components/loans-list/loans-list.component';



@NgModule({
	imports: [
		CommonModule,
		RouterModule,

		SharedLoansDataAccessDataModule,
		SharedLoansDataAccessStateModule,
		SharedLoansUiModule
	],
	declarations: [LoansContainer, LoanSearchComponent, LoansListComponent],
	exports: [RouterModule]
})
export class SharedLoanSearchModule {}
