import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ** MODULES FOR THIS FEATURE LIB
import { LoansCoreModule, LoansRoutingModule, LoansServicesModule, LoansStateModule, LoansUiModule } from './+modules';
import { LoansContainer } from './containers/loans.container';
import { LoanSearchComponent } from './components/loan-search/loan-search.component';

@NgModule({
	imports: [
		CommonModule,
		LoansCoreModule,
		LoansRoutingModule,
		LoansServicesModule,
		LoansStateModule,
		LoansUiModule
	],
	declarations: [LoansContainer, LoanSearchComponent]
})
export class LoansModule {}
