import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormConfigBuilder, formFields } from '../../config-builders';

@Component({
	selector: 'hza-ui-form',
	templateUrl: './form.component.html',
	styleUrls: [
		'./form.component.css'
	]
})
export class FormComponent implements OnInit, OnChanges {
	title = 'Reusable Form Component';
	form = new FormGroup({});

	@Input() public fields: FormlyFieldConfig[];

	@Input() public data: any;

	@Input() public model: any;

	constructor() {}

	ngOnInit() {
		// console.log(formFields(this.data));
	}

	ngOnChanges() {
		// form fields
	}
	onSubmit() {
		console.log(this.model);
	}
}
