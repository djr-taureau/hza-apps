import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UiComponentsLayoutsModule } from '@hza/ui-components/layouts';
import { UiComponentsButtonsModule } from '@hza/ui-components/buttons';
import { UiComponentsFormsModule } from '@hza/ui-components/forms';
import { UiComponentsOverlayModule } from '@hza/ui-components/overlay';
import { SharedLoansDataAccessStateModule } from '@hza/shared/loans/data-access/state';
import { LoansContainer } from './containers/loans.container';
import { LoansResolver } from '@hza/shared/loans/data-access/data';

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild([
			{
				path: 'loans-list',
				component: LoansContainer,
				// outlet: 'modal',
				resolve: {
					loans: LoansResolver
				}
			}
		]),
		UiComponentsLayoutsModule,
		UiComponentsButtonsModule,
		UiComponentsFormsModule,
		UiComponentsOverlayModule,
    SharedLoansDataAccessStateModule
	]
})
export class SharedLoansSearchModule {}
