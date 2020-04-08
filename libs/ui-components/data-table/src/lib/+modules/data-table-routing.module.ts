import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TableListComponent } from '../components/table-list.component';


@NgModule({
	imports: [
		RouterModule.forChild([
			{
				path: 'tables',
				component: TableListComponent,
			}
		])
	],
	exports: [
		RouterModule
	]
})
export class DataTableRoutingModule {}
