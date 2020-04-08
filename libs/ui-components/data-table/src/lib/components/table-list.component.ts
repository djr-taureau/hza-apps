import { Component, ViewEncapsulation } from '@angular/core';
import { LocationStrategy, HashLocationStrategy, Location } from '@angular/common';
// import packageInfo from 'projects/swimlane/ngx-datatable/package.json';

@Component({
	selector: 'fay-table-list',
	templateUrl: './table-list.component.html',
	styleUrls: ['./table-list.component.scss'],
	encapsulation: ViewEncapsulation.Emulated,
	providers: [
		Location,
		{
			provide: LocationStrategy,
			useClass: HashLocationStrategy
		}
	]
})
export class TableListComponent {
	state: any;

	constructor(location: Location) {
		this.state = location.path(true);
	}
}
