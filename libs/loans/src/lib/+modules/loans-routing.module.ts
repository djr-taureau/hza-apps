import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoansContainer } from '../containers/loans.container';
import { LoansResolver } from '../services';

@NgModule({
	imports: [
		RouterModule.forChild([
			{
				path: 'more',
				component: LoansContainer,
				resolve: {
					loans: LoansResolver
				}
			}
		])
	],
	exports: [
		RouterModule
	]
})
export class LoansRoutingModule {}
