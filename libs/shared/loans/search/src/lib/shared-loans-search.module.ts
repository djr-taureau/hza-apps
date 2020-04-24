import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { SharedUtilsModule } from '@hza/shared/utils';
import { SharedLoansUiModule } from '@hza/shared/loans/ui';
import { SharedLoansDataAccessStateModule } from '@hza/shared/loans/data-access/state';
import { LoansContainer } from './containers/loans.container';
import { LoansResolver } from '@hza/shared/loans/data-access/data';
import { LoanSearchComponent } from './components/loan-search';
import { TestComponent } from './components/test/test.component';
import { LoansTableComponent } from './components/loans-table/loans-table.component';
import { LoansListComponent } from './components/loans-list/loans-list.component';

@NgModule({
	imports: [
		CommonModule,
		AgGridModule.withComponents([]),
		SharedUtilsModule,
		SharedLoansUiModule,
		SharedLoansDataAccessStateModule,
		RouterModule.forChild([
			{
				path: '',
				component: LoansContainer,
				// resolve: {
				// 	loans: LoansResolver
				// }
			}
		]),
	],
	declarations: [LoanSearchComponent, LoansContainer, TestComponent, LoansTableComponent, LoansListComponent],
	entryComponents: [LoanSearchComponent],
	exports: [LoanSearchComponent, LoansContainer, TestComponent, LoansTableComponent, LoansListComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedLoansSearchModule {}
