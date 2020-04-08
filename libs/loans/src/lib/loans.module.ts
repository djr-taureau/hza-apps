import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// ** MODULES FOR THIS FEATURE LIB
import { LoansCoreModule, LoansRoutingModule, LoansServicesModule, LoansStateModule, LoansUiModule } from './+modules';

import { LoansContainer } from './containers/loans.container';
import { LoanSearchComponent } from './components/loan-search/loan-search.component';
import { LoansListComponent } from './components/loans-list/loans-list.component';
import { ShellComponent } from './components/shell/shell.component';


@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		LoansCoreModule,
		LoansRoutingModule,
		LoansServicesModule,
		LoansStateModule,
		LoansUiModule
	],
	declarations: [ShellComponent, LoansContainer, LoanSearchComponent, LoansListComponent],
	exports: [RouterModule]
})
export class LoansModule {}
