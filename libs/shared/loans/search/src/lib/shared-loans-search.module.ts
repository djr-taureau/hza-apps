import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedUtilsModule } from '@hza/shared/utils';
import { SharedLoansUiModule } from '@hza/shared/loans/ui';

import { SharedLoansDataAccessStateModule } from '@hza/shared/loans/data-access/state';
import { LoansContainer } from './containers/loans.container';
import { LoansResolver } from '@hza/shared/loans/data-access/data';
import { LoanSearchComponent } from './components/loan-search';
import { TestComponent } from './components/test/test.component';



@NgModule({
	imports: [
		CommonModule,
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
	declarations: [LoanSearchComponent, LoansContainer, TestComponent],
	entryComponents: [LoanSearchComponent],
	exports: [LoanSearchComponent, LoansContainer, TestComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedLoansSearchModule {}
