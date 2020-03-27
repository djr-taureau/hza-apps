import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core/';

@Component({
	selector: 'fay-data-table',
	templateUrl: './data-table.component.html'
})
export class DataTableComponent implements OnInit {
	form = new FormGroup({});
	model: any;
	options: FormlyFormOptions = {
		formState: {
			disabled: true
		}
	};

	@Input() public fields: FormlyFieldConfig[];
	@Input() public data: any[];

	constructor() {}

	ngOnInit() {
		this.fetch((data) => (this.model = data));
	}
	submit() {
		alert(JSON.stringify(this.model));
	}

	fetch(cb) {
		cb({ cars: this.data });
	}
}
