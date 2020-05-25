import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { SharedUtilsModule } from '@hza/shared/utils';
import { SharedLoansUiModule } from '@hza/shared/loans/ui';
import { SharedLoansDataAccessDataModule } from '@hza/shared/loans/data-access/data';
import { SharedLoansDataAccessStateModule } from '@hza/shared/loans/data-access/state';
import { LoansContainer } from './containers/loans.container';
import { LoanSearchComponent } from './components/loan-search';
import { LoansListComponent } from './components/loans-list/loans-list.component';
import { LoanSearchFormComponent } from './components/loan-search-form/loan-search-form.component';

const COMPONENTS = [
	LoanSearchComponent,
	LoanSearchFormComponent,
	LoansContainer,
	LoansListComponent
];

@NgModule({
	imports: [
		CommonModule,
		AgGridModule.withComponents([]),
		SharedUtilsModule,
		SharedLoansUiModule,
		SharedLoansDataAccessDataModule, 
		SharedLoansDataAccessStateModule,
		RouterModule.forChild([
			{
				path: '',
				component: LoansContainer
			}
		])
	],
	declarations: COMPONENTS,
	entryComponents: [LoanSearchFormComponent],
	exports: COMPONENTS,
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedLoansSearchModule {}
