import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedUtilsModule } from '@hza/shared/utils';
import { SharedLoansUiModule } from '@hza/shared/loans/ui';

import { SharedLoansDataAccessStateModule } from '@hza/shared/loans/data-access/state';
import { LoansContainer } from './containers/loans.container';
import { LoansResolver } from '@hza/shared/loans/data-access/data';
import { LoanSearchBoxComponent } from './components/loan-search-box/loan-search-box.component';
import { LoanSearchComponent } from './components/loan-search';



@NgModule({
	imports: [
		CommonModule,
		SharedUtilsModule,
		SharedLoansUiModule,
		SharedLoansDataAccessStateModule,
		RouterModule.forChild([
			// { path: 'loan-search', component: LoanSearchComponent},
			{
				path: 'loans-list',
				component: LoansContainer,
				// outlet: 'modal',
				resolve: {
					loans: LoansResolver
				}
			}
		]),
	],
	declarations: [LoanSearchBoxComponent, LoanSearchComponent, LoansContainer],
	exports: [LoanSearchBoxComponent, LoansContainer],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedLoansSearchModule {}
