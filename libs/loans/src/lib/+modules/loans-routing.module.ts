import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoansContainer } from '../containers/loans.container';
import { LoansResolver } from '../services';
import { LoanSearchComponent } from '../components/loan-search/loan-search.component';

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
