import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoansContainer } from '../feature-loan-search/src/lib/containers/loans.container';
import { LoansResolver } from '../services';
import { LoanSearchComponent } from '../feature-loan-search/src/lib/components/loan-search/loan-search.component';

@NgModule({
	imports: [
		RouterModule.forChild([
			{
				path: 'loans',
				component: LoansContainer,
				// outlet: 'modal',
				resolve: {
					loans: LoansResolver
				}
			}
		])
	],
	exports: [RouterModule]
})
export class LoansRoutingModule {}
